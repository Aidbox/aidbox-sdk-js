(ns python-generator.second-try.main
  (:require
   [python-generator.profile-helpers :as help]
   [cheshire.core]
   [clojure.string :as str]
   [clojure.set :as set]
   [dotenv :as dotenv]))

(def constraint-count (atom 0))

(defn compile-backbone [parent_name property_name definition]
  (let [name (str parent_name "_" (help/uppercase-first-letter (name property_name)))
        data (help/get-typings-and-imports name (or (:required definition) []) (help/elements-to-vector definition))
        backbone-elements (filter (fn [item] (> (count item) 0)) (:backbone-elements data))]
    (conj data (hash-map :backbone-elements (if (= (count backbone-elements) 0) [] (map (fn [[k, v]] (compile-backbone name k v)) backbone-elements))))))

(defn clear-backbone-elements [name data]
  (->> (filter (fn [item] (> (count item) 0)) (:backbone-elements data))
       (map (fn [[k, v]] (compile-backbone name k v)))
       (hash-map :backbone-elements)
       (conj data)))

(defn attach-parent-data [parent a context child]
  (if (nil? parent) child (conj child (hash-map :elements (concat (get-in context [:classes parent a :elements]) (:elements child))))))

(defn concat-elements-circulary [schemas parent-name elements]
  (if (not (nil? parent-name))
    (->> (concat elements (get-in schemas [parent-name :elements] []))
         (concat-elements-circulary schemas (get-in schemas [parent-name :base])))
    elements))

(defn concat-backbones-circulary [schemas parent-name backbones]
  (if (not (nil? parent-name))
    (->> (concat backbones (get-in schemas [parent-name :backbone-elements] []))
         (concat-backbones-circulary schemas (get-in schemas [parent-name :base])))
    backbones))

(defn mix-parents-elements-circular [schemas definition]
  (if (not (nil? (get definition :base nil)))
    (->> (concat-elements-circulary schemas (get definition :base) [])
         (concat (:elements definition))
         (hash-map :elements)
         (conj definition))
    definition))

(defn mix-parents-backbones-circular [schemas definition]
  (if (not (nil? (get definition :base nil)))
    (->> (concat-backbones-circulary schemas (get definition :base) [])
         (concat (:backbone-elements definition))
         (hash-map :backbone-elements)
         (conj definition))
    definition))

(defn safe-conj [a b] (conj a (or b {})))

(defn compile-elements [schemas]
  (map (fn [schema]
         (->> (help/elements-to-vector schema)
              (help/get-typings-and-imports (:type schema) (or (:required schema) []))
              (clear-backbone-elements (help/get-resource-name (:url schema)))
              (safe-conj (hash-map :base (get schema :base) :url (get schema :url))))) schemas))

(defn combine-elements [schemas]
  (map (fn [[_, schema]]
         (->> schema
              (mix-parents-elements-circular schemas)
              (mix-parents-backbones-circular schemas))) schemas))

(defn apply-excluded [excluded schema]
  (filter (fn [field-schema]
            (not (some #(= % (:name field-schema)) excluded))) schema))

(defn apply-required [required schema]
  (map (fn [field-schema]
         (if (some #(= % (:name field-schema)) required)
           (conj field-schema (hash-map :required true)) field-schema)) schema))

(defn apply-choises [choises schema]
  (->> (map (fn [[key, item]] (set/difference (set (:choices (first (filter #(= (:name %) (name key)) schema)))) (set (:choices item)))) choises)
       (reduce set/union #{})
       ((fn [choises-to-exclude]
          (filter #(not (contains? choises-to-exclude (:name %))) schema)))))

(defn pattern-codeable-concept [name schema]
  (->> (str "\tcoding: List[" (str/join ", " (map #(str "Coding" (str/join (str/split (:code %) #"-"))) (get-in schema [:pattern :coding] []))) "] = [" (str/join ", " (map #(str "Coding" (str/join (str/split (:code %) #"-")) "()") (get-in schema [:pattern :coding] []))) "]\n")
       (str "class " (str/join (map help/uppercase-first-letter (str/split name #"-"))) "(CodeableConcept):\n")
       (str (when-let [coding (:coding (:pattern schema))]
              (str/join (map (fn [code] (->> (str (when (contains? code :code)  (str "\tcode: Literal[\"" (:code code) "\"] = \"" (:code code) "\"\n")))
                                             (str (when (contains? code :system) (str "\tsystem: Literal[\"" (:system code) "\"] = \"" (:system code) "\"\n")))
                                             (str (when (contains? code :display) (str "\tdisplay: Literal[\"" (:display code) "\"] = \"" (:display code) "\"\n")))
                                             (str "\nclass Coding" (str/join (str/split (:code code) #"-")) "(Coding):\n"))) coding))) "\n")))

(defn create-single-pattern [constraint-name, [key, schema], elements]
  (case (help/get-resource-name (some #(when (= (name key) (:name %)) (:value %)) elements))
    "CodeableConcept" (pattern-codeable-concept (str (help/uppercase-first-letter (help/get-resource-name constraint-name)) (help/uppercase-first-letter (subs (str key) 1))) schema) ""))

(defn apply-patterns [constraint-name patterns schema]
  (->> (map (fn [item]
              (if-let [pattern (some #(when (= (name (first %)) (:name item)) (last %)) patterns)]
                (case (:value item)
                  "str" (assoc item :value (:pattern pattern) :literal true)
                  "CodeableConcept" (conj item (hash-map :value (str (str/join (map help/uppercase-first-letter (str/split (help/get-resource-name constraint-name) #"-"))) (str/join (map help/uppercase-first-letter (str/split (:name item) #"-")))) :codeable-concept-pattern true))
                  "Quantity" item item) item)) (:elements schema))
       (hash-map :elements)
       (conj schema (hash-map :patterns (concat (get schema :patterns []) (map (fn [item] (create-single-pattern constraint-name item (:elements schema))) patterns))))))

(defn add-meta [constraint-name elements]
  (->> (filter #(not (= (:name %) "meta")) elements)
       (concat [{:name "meta" :required true :value (str "Meta = Meta(profile=[\"" constraint-name "\"])")}])))

(defn apply-single-constraint [constraint parent-schema]
  (println (:url constraint) (reset! constraint-count (+ 1 (deref constraint-count))))
  (->> (:elements parent-schema)
       (apply-required (:required constraint))
       (apply-excluded (:excluded constraint))
       (apply-choises (filter #(contains? (last %) :choices) (:elements constraint)))
       (add-meta (:url constraint))
       (hash-map :elements)
       (conj parent-schema)
       (apply-patterns (:url constraint) (filter #(contains? (last %) :pattern) (:elements constraint)))))

(defn apply-constraints [constraint-schemas result base-schemas]
  (if (not (= (count constraint-schemas) (count result)))
    (apply-constraints
     constraint-schemas
     (reduce (fn [acc constraint-schema]
               (if (and (contains? result (:base constraint-schema)) (not (contains? result (:url constraint-schema))))
                 (conj acc (hash-map (:url constraint-schema) (apply-single-constraint constraint-schema (get result (:base constraint-schema)))))

                 (if (and (contains? base-schemas (:base constraint-schema)) (not (contains? result (:url constraint-schema))))
                   (conj acc (hash-map (:url constraint-schema) (apply-single-constraint constraint-schema (get base-schemas (:base constraint-schema))))) acc))) result constraint-schemas) base-schemas) result))

(defn get-class-name [profile-name]
  (str/join "" (map help/uppercase-first-letter (clojure.string/split (help/get-resource-name profile-name) #"-"))))

(defn combine-single-class [name elements t]
  (->> (map (fn [item]
              (when (not (contains? item :choices))
                (->> (:value item)
                     ((if (:array item) (fn [s] (str "List[" s "]")) str))
                     ((if (:literal item) (fn [s] (str "Literal[\"" s "\"] = " "\"" s "\"")) str))
                     ((if (and (not (:required item)) (not (:literal item))) (fn [s] (str "Optional[" s "]")) str))
                     ((if (and (not (:required item)) (not (:literal item))) (fn [s] (str s " = None")) str))
                     ((if (and (:required item) (:codeable-concept-pattern item)) (fn [s] (str s " = " (:value item) "()")) str))
                    ;;  ((if (and (not (:required item)) (:array item)) help/append-default-vector str))
                     (str "\t" (:name item) ": ")
                     (str "\n")))) elements)
       (str/join "")
       (str "\n\nclass " (get-class-name name) "(" (case t "backbone" "BackboneElement" "BaseModel") "):")))

(defn save-to-file [[name, definition]]
  (->> (str (combine-single-class name (:elements definition) "default"))
       (str (str/join (map (fn [definition] (combine-single-class (:name definition) (:elements definition) "backbone")) (:backbone-elements definition))))
       (str (str/join (:patterns definition)))
       (str "from base import *\n")
       (str "from typing import Optional, List, Literal\n")
       (str "from pydantic import BaseModel\n")
       (help/write-to-file (dotenv/env :python-output-path) (str/join "_" (str/split (help/get-resource-name name) #"-")))))

(defn doallmap [elements] (doall (map save-to-file elements)))

(defn flat-backbones [backbone-elements accumulator]
  (reduce (fn [acc, item] (concat (flat-backbones (:backbone-elements item) acc)
                                  [(dissoc item :backbone-elements)]))
          accumulator
          backbone-elements))

(defn main []
  (let [packages
        (->> (dotenv/env :source-path)
             (help/get-directory-files)
             (filter #(and (str/includes? (.getName %) "hl7.fhir")
                           (not (.isDirectory %)))))

        schemas
        (->> packages
             (filter #(str/includes? (.getName %) "fhir.r4.core"))
             (first)
             (help/parse-ndjson-gz))

        base-schemas
        (->> schemas
             (filter #(or (= (:url %) "http://hl7.org/fhir/StructureDefinition/BackboneElement")
                          (= (:url %) "http://hl7.org/fhir/StructureDefinition/Resource")
                          (= (:derivation %) "specialization"))))

        constraint-schemas
        (->> schemas
             (filter #(= (:derivation %) "constraint"))
             (filter #(and (not (= (:type %) "Extension"))
                           (not (= (:url %) "http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris")))))

        extra-constraint-schemas
        (->> packages
             (filter #(not (str/includes? (.getName %) "fhir.r4.core")))
             (map help/parse-ndjson-gz)
             (map (fn [constraint]
                     (filter #(and (not (= (:type %) "Extension"))
                                   (= (:derivation %) "constraint"))
                             constraint))))]
    (->> base-schemas
         (compile-elements)
         (filter #(not (nil? (:url %))))
         (map (fn [item] (hash-map (:url item) item)))
         (into {})
         (combine-elements)
         (filter #(not (nil? (:url %))))
         (map (fn [schema] (conj schema (hash-map :backbone-elements (flat-backbones (:backbone-elements schema) [])))))
         (map (fn [item] (hash-map (:url item) item)))
         (into {})
         (apply-constraints (concat constraint-schemas (flatten extra-constraint-schemas)) {})
         (doallmap))))

(main)

