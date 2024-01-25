(ns python-generator.second-try.main
  (:require
   [python-generator.profile-helpers :as help]
   [cheshire.core]
   [clojure.string :as str]
   [clojure.set :as set]))

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
  (->> (vec schemas)
       #_(filter #(not (= (:derivation (last %)) "constraint")))
       (map (fn [[name definition]]
              (->> (help/elements-to-vector definition)
                   (help/get-typings-and-imports (:type definition) (or (:required definition) []))
                   (test1 (help/get-resource-name name))
                   (safe-conj (hash-map :base (get definition :base)))
                   (hash-map name))))
       (into {})))

(defn combine-elements [schemas]
  (->> (vec schemas)
       #_(filter #(= "hl7.fhir.r4.core#4.0.1/Observation" (first %)))
       (map (fn [[name definition]]
              (->> definition
                   (mix-parents-elements-circular (dissoc schemas nil))
                   (mix-parents-backbones-circular (dissoc schemas nil))
                   (hash-map name))))
       (into {})))

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
  (print)
  (->> (str "\tcoding: list[" (str/join ", " (map #(str "Coding" (str/join (str/split (:code %) #"-"))) (get-in schema [:pattern :coding] []))) "] = [" (str/join ", " (map #(str "Coding" (str/join (str/split (:code %) #"-")) "()") (get-in schema [:pattern :coding] []))) "]\n")
       (str "class " name "(CodeableConcept):\n")
       (str (when-let [coding (:coding (:pattern schema))]
              (str/join (map (fn [code] (->> (str (when (contains? code :code)  (str "\tcode: Literal[\"" (:code code) "\"] = \"" (:code code) "\"\n")))
                                             (str (when (contains? code :system) (str "\tsystem: Literal[\"" (:system code) "\"] = \"" (:system code) "\"\n")))
                                             (str (when (contains? code :display) (str "\tdisplay: Literal[\"" (:display code) "\"] = \"" (:display code) "\"\n")))
                                             (str "\nclass Coding" (str/join (str/split (:code code) #"-")) "(Coding):\n"))) coding))) "\n")))

(defn create-single-pattern [constraint-name, [name, schema]]
  (case (help/get-resource-name (:type schema))
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
  (->> (:elements parent-schema)
       (apply-required (:required constraint))
       (apply-excluded (:excluded constraint))
       (apply-choises (filter #(contains? (last %) :choices) (:elements constraint)))
       (hash-map :elements)
       (conj parent-schema)
       (apply-patterns (:fqn constraint) (filter #(contains? (last %) :pattern) (:elements constraint)))))

(defn apply-constraints [constraint-schemas result base-schemas]
  (if (reduce (fn [acc, [schema-name]]
                (when (not (get result schema-name)) (reduced true))) false constraint-schemas)
    (apply-constraints constraint-schemas
                       (reduce (fn [acc [schema-name definition]]
                                 (if (contains? result (:base definition))
                                   (conj acc (hash-map schema-name (apply-single-constraint definition (get result (:base definition)))))
                                   (if (contains? base-schemas (:base definition))
                                     (conj acc (hash-map schema-name (apply-single-constraint definition (get base-schemas (:base definition)))))
                                     acc))) result constraint-schemas) base-schemas) result))

(defn transform-structure [data] (into {} (map #(hash-map (:fqn %) %) data)))

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
       (str "\n\nclass " (help/uppercase-first-letter (help/get-resource-name name)) "(BaseModel):")))

(defn save-to-file [[name, definition]]
  (->> (str (combine-single-class name (:elements definition)))
       (str (str/join (map (fn [definition] (combine-single-class (:name definition) (:elements definition))) (:backbone-elements definition))))
       (str (str/join (:patterns definition)))
       (str "from ..base import *\n")
       (str "from typing import Optional\n")
       (str "from pydantic import BaseModel\n")
       (help/write-to-file "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir/constraint" (help/get-resource-name name))))

(defn doallmap [elements] (doall (map save-to-file elements)))

(defn main []
  (let [schemas (transform-structure (help/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-python-tooklit/fhir-schema-2/1.0.0_hl7.fhir.r4.core#4.0.1_package.ndjson.gz"))
        base-schemas (->> schemas (filter #(= (:derivation (last %)) "specialization")))
        constraint-schemas (->> schemas
                                (filter #(= (:derivation (last %)) "constraint"))
                                (filter #(or (= (first %) "hl7.fhir.r4.core#4.0.1/vitalsigns") (= (first %) "hl7.fhir.r4.core#4.0.1/triglyceride"))))]
    (->> base-schemas
         #_(compile-elements)
         #_(combine-elements)
         #_(apply-constraints constraint-schemas {})
         #_(map save-to-file))))

(main)