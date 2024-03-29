(ns python-generator.second-try.index
  (:require
   [cheshire.core]
   [clojure.string :as str]
   [python-generator.extractor :as extractors]
   [python-generator.second-try.helpers :as helpers])
  (:gen-class))

(defn save-to [directory, filename]
  (fn [text] (helpers/write-to-file directory, filename, text)))

(defn filter-backbone-elements [data]
  (filter (fn [item] (> (count item) 0)) (:backbone-elements data)))

(defn compile-backbone [parent_name property_name definition]
  (let [name (str parent_name "_" (helpers/uppercase-first-letter (name property_name)))
        data (helpers/get-typings-and-imports name (or (:required definition) []) (helpers/elements-to-vector definition))
        backbone-elements (filter-backbone-elements data)]
    (->> (str (clojure.string/join "\n" (:elements data)) "\n\n")
         (str "class " name "(BackboneElement):\n")
         (str (if (= (count backbone-elements) 0) (str) (str/join (map (fn [[k, v]] (str (compile-backbone name k v))) backbone-elements)))))))

(defn test [name data]
  (->> (filter (fn [item] (> (count item) 0)) (:backbone-elements data))
       (map (fn [[k, v]] (str (compile-backbone name k v))))
       (str/join)))

(defn combine-file [definition, data]
  (->> (str (clojure.string/join "\n" (:elements data)) "\n\n")
       ((fn [s] (str "class " (helpers/get-resource-name (:type definition)) (helpers/get-parent (:base definition)) "{\n" s "}")))
       (str (test (helpers/get-resource-name (:type definition)) data))
       (str "from ..base import *\n\n")
       (str "from typing import Optional\n")))

(defn compile-single-class [directory]
  (fn [definition]
    (->> (helpers/elements-to-vector definition)
         (helpers/get-typings-and-imports (helpers/get-resource-name (:type definition)) (or (:required definition) []))
         (combine-file definition)
         (str/join)
         ((save-to directory (str/lower-case (helpers/get-resource-name (:type definition))))))))

(defn compile-domains []
  (->> (helpers/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir/1.0.0_hl7.fhir.r4.core#4.0.1_package.ndjson.gz")
       (extractors/filter-domain-resource)
       (helpers/side-effect-map (compile-single-class "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir/resources"))))

(compile-domains)

