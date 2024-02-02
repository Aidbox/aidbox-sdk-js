(ns python-generator.second-try.main
  (:require
   [python-generator.profile-helpers :as help]
   [cheshire.core]
   [clojure.string :as str]
   [clojure.set :as set]))

(def constraint-count (atom 0))

(defn compile-backbone [parent_name property_name definition]
  (let [name (str parent_name "_" (help/uppercase-first-letter (name property_name)))
        data (help/get-typings-and-imports name (or (:required definition) []) (help/elements-to-vector definition))
        backbone-elements (filter (fn [item] (> (count item) 0)) (:backbone-elements data))]
    (conj data (hash-map :backbone-elements (if (= (count backbone-elements) 0) [] (map (fn [[k, v]] (compile-backbone name k v)) backbone-elements))))))

(defn test1 [name data]
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
              (test1 (help/get-resource-name (:url schema)))
              (safe-conj (hash-map :base (get schema :base) :url (get schema :url))))) schemas))

(defn combine-elements [schemas]
  (map (fn [[name, schema]]
         (->> schema
              (mix-parents-elements-circular schemas)
              #_(mix-parents-backbones-circular schemas))) schemas))

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
  (->> (str "\tcoding: list[" (str/join ", " (map #(str "Coding" (str/join (str/split (:code %) #"-"))) (get-in schema [:pattern :coding] []))) "] = [" (str/join ", " (map #(str "Coding" (str/join (str/split (:code %) #"-")) "()") (get-in schema [:pattern :coding] []))) "]\n")
       (str "class " name "(CodeableConcept):\n")
       (str (when-let [coding (:coding (:pattern schema))]
              (str/join (map (fn [code] (->> (str (when (contains? code :code)  (str "\tcode: Literal[\"" (:code code) "\"] = \"" (:code code) "\"\n")))
                                             (str (when (contains? code :system) (str "\tsystem: Literal[\"" (:system code) "\"] = \"" (:system code) "\"\n")))
                                             (str (when (contains? code :display) (str "\tdisplay: Literal[\"" (:display code) "\"] = \"" (:display code) "\"\n")))
                                             (str "\nclass Coding" (str/join (str/split (:code code) #"-")) "(Coding):\n"))) coding))) "\n")))

(defn create-single-pattern [constraint-name, [name, schema]]
  (println constraint-name name schema)
  ""
  #_(case (help/get-resource-name (:type schema))
      "CodeableConcept" (pattern-codeable-concept (str (help/uppercase-first-letter (help/get-resource-name constraint-name)) (help/uppercase-first-letter (subs (str name) 1))) schema)
      "default" ""))

(defn apply-patterns [constraint-name patterns schema]
  (->> (map (fn [item]
              (if (some #(= (name (first %)) (:name item)) patterns)
                (case (:value item)
                  "CodeableConcept" (conj item (hash-map :value (str (help/uppercase-first-letter (help/get-resource-name constraint-name)) (help/uppercase-first-letter (:name item)) " = " (str (help/uppercase-first-letter (help/get-resource-name constraint-name)) (help/uppercase-first-letter (:name item))) "()")))
                  "Quantity" item
                  "default" item) item)) (:elements schema))
       (hash-map :elements)
       (conj schema)
       (conj (hash-map :patterns (map (fn [item] (create-single-pattern constraint-name item)) patterns)))))


(defn apply-single-constraint [constraint parent-schema]
  (println (:url constraint) (reset! constraint-count (+ 1 (deref constraint-count))))
  (->> (:elements parent-schema)
       (apply-required (:required constraint))
       (apply-excluded (:excluded constraint))
       (apply-choises (filter #(contains? (last %) :choices) (:elements constraint)))
       (hash-map :elements)
       (conj parent-schema)
       #_(apply-patterns (:url constraint) (filter #(contains? (last %) :pattern) (:elements constraint)))))

#_(reduce (fn [_, constraint-schema]
            (when (not (get result (:url constraint-schema))) (reduced true))) false constraint-schemas)

(defn apply-constraints [constraint-schemas result base-schemas]
  (println "run" (count result))
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

(defn combine-single-class [name elements]
  (->> (map (fn [item]
              (when (not (contains? item :choices))
                (->> (:value item)
                     ((if (:array item) help/wrap-vector str))
                     ((if (and (not (:required item)) (not (:array item))) help/wrap-optional str))
                     ((if (and (not (:required item)) (not (:array item))) help/append-default-none str))
                     ((if (and (not (:required item)) (:array item)) help/append-default-vector str))
                     (str "\t" (:name item) ": ")
                     (str "\n")))) elements)
       (str/join "")
       (str "\n\nclass " (get-class-name name) "(BaseModel):")))

(defn save-to-file [[name, definition]]
  (->> (str (combine-single-class name (:elements definition)))
       (str (str/join (map (fn [definition] (combine-single-class (:name definition) (:elements definition))) (:backbone-elements definition))))
       (str (str/join (:patterns definition)))
       (str "from ..base import *\n")
       (str "from typing import Optional, Literal\n")
       (str "from pydantic import BaseModel\n")
       (help/write-to-file "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir/constraint" (help/get-resource-name name))))

(defn doallmap [elements] (doall (map save-to-file elements)))

(defn main []
  (let [schemas (help/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-python-tooklit/fhir-schema-2/1.0.0_hl7.fhir.r4.core#4.0.1_package.ndjson.gz")
        base-schemas (->> schemas (filter #(or (= (:url %) "http://hl7.org/fhir/StructureDefinition/headcircum") (= (:derivation %) "specialization"))))
        constraint-schemas (->> schemas
                                (filter #(= (:derivation %) "constraint"))
                                (filter #(not (= (:url %) "http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris"))))
        us-core (->> (help/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-python-tooklit/fhir-schema-2/1.0.0_hl7.fhir.us.core#4.0.0_package.ndjson.gz")
                     (filter #(= (:derivation %) "constraint")))
        mcode (->> (help/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-python-tooklit/fhir-schema-2/1.0.0_hl7.fhir.us.mcode#2.1.0_package.ndjson.gz")
                   (filter #(= (:derivation %) "constraint")))
        codex (->> (help/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-python-tooklit/fhir-schema-2/1.0.0_hl7.fhir.us.codex-radiation-therapy#1.0.0_package.ndjson.gz")
                   (filter #(= (:derivation %) "constraint")))]

    (->> base-schemas
         (compile-elements)
         (filter #(not (nil? (:url %))))
         (map (fn [item] (hash-map (:url item) item)))
         (into {})
         (combine-elements)
         (filter #(not (nil? (:url %))))
         (map (fn [item] (hash-map (:url item) item)))
         (into {})
         (apply-constraints (concat us-core constraint-schemas mcode codex) {})
         (doallmap))))

(main)
;; 479 -> 521