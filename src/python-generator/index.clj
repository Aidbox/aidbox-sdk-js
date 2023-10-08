(ns python-generator.index
  (:require
   [cheshire.core]
   [clojure.string :as str]
   [python-generator.extractor :as extractors]
   [python-generator.helpers :as helpers])
  (:gen-class))

(defn save-to [directory, filename]
  (fn [text] (helpers/write-to-file directory, filename, text)))

(defn compile-single-backbone [definition, data]
  (->> #_(str "class " (helpers/get-resource-name (:type definition)) (helpers/get-parent (:base definition)) ":\n")
   (str (clojure.string/join "\n" (:elements data)) "\n\n")))

(defn compile-backbone [definition]
  (->> (helpers/elements-to-vector definition)
       (helpers/get-typings-and-imports (or (:required definition) []))
       (compile-single-backbone definition)))

(defn test [data]
  (->> (filter (fn [item] (> (count item) 0)) (:backbone-elements data))
       (map (fn [[k, v]]
              (->> (str (compile-backbone v))
                   (str "class " (helpers/uppercase-first-letter (name k)) "(BackboneElement):\n"))))
       (str/join)))

(defn combine-file [definition, data]
  (->> (str (clojure.string/join "\n" (:elements data)) "\n\n")
       (str "class " (helpers/get-resource-name (:type definition)) (helpers/get-parent (:base definition)) ":\n")
       (str (test data))
       (str "from base import *\n\n")
       (str "from typing import Optional\n")))

(defn compile-single-class [directory]
  (fn [definition]
    (->> (helpers/elements-to-vector definition)
         (helpers/get-typings-and-imports (or (:required definition) []))
         (combine-file definition)
         (str/join)
         ((save-to directory (str/lower-case (helpers/get-resource-name (:type definition))))))))

(defn compile-domains []
  (->> (helpers/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/fhir-schema/hl7.fhir.r4.core#4.0.1/package.ndjson.gz")
       (extractors/filter-domain-resource)
       (helpers/side-effect-map (compile-single-class "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir/resources"))))

(compile-domains)

