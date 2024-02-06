(ns python-generator.base
  (:require
   [python-generator.extractor :as extractors]
   [python-generator.helpers :as helpers]
   [cheshire.core]
   [clojure.string :as str])
  (:gen-class))

(defn save-to [directory, filename]
  (fn [text] (helpers/write-to-file directory, filename, text)))

(defn push-to-end [string1, string2] (str string2, string1))

(defn combine-base-file [definition, data]
  (-> (str "\nclass " (helpers/get-resource-name (:type definition)) "(BaseModel)" ":\n")
      (str (clojure.string/join "\n" (:elements data)) "\n")))

(defn combine-file [definition, data]
  (->  #_(str (helpers/add-element-import (filter boolean (:imports-element data))))
   #_(str (helpers/add-backbone-element-import (filter boolean (:imports-backbone-element data))))
   #_(push-to-end (str "if TYPE_CHECKING:\n\t\"import typings\"\n"))
   #_(str "else:\n\t\"import typings\"\n")
   #_((typechecking-ignore-runtime (ignore (filter boolean (:imports data)))))
   #_((if (= (helpers/get-resource-name (:base definition)) "DomainResource") (fn [string] (str string "from resource.index import DomainResource\n\n")) str))
   #_((if (= (helpers/get-resource-name (:base definition)) "Resource") (fn [string] (str string "from base.resource import Resource\n\n")) str))
   #_((if (= (helpers/get-resource-name (:base definition)) "BackboneElement") (fn [string] (str string "from element.index import BackboneElement\nfrom base.index import Element\n\n")) str))
   #_((if (= (helpers/get-resource-name (:base definition)) "Element") (fn [string] (str string "from base.index import Element\n\n")) str))
   (str "\nclass " (helpers/get-resource-name (:type definition)) (helpers/get-parent (:base definition)) ":\n")
       (str (clojure.string/join "\n" (:elements data)) "\n")))

(defn compile-single-class []
  (fn [definition]
    (->> (helpers/elements-to-vector definition)
         (helpers/get-typings-and-imports "" (or (:required definition) []))
         (combine-file definition))))

(defn compile-single-base-class []
  (fn [definition]
    (->> (helpers/elements-to-vector definition)
         (helpers/get-typings-and-imports "" (or (:required definition) []))
         (combine-base-file definition))))

(defn compile-bases []
  (->> (helpers/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/fhir-schema/hl7.fhir.r4.core#4.0.1/package.ndjson.gz")
       (extractors/filter-base)
       (map (compile-single-base-class))
       (str/join)))

(defn compile-elements []
  (->> (helpers/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/fhir-schema/hl7.fhir.r4.core#4.0.1/package.ndjson.gz")
       (extractors/filter-element)
       (map (compile-single-class))
       (str/join)))

(defn compile-backbone-elements []
  (->> (helpers/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/fhir-schema/hl7.fhir.r4.core#4.0.1/package.ndjson.gz")
       (extractors/filter-backbone-element)
       (map (compile-single-class))
       (str/join)))

(defn compile-resources []
  (->> (helpers/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/fhir-schema/hl7.fhir.r4.core#4.0.1/package.ndjson.gz")
       (extractors/filter-resource)
       (map (compile-single-class))
       (str/join)))


(defn root-compiler []
  (->> (str (compile-resources))
       (str (compile-backbone-elements))
       (str (compile-elements))
       (str (compile-bases))
       (str "from pydantic import BaseModel\n\n")
       (str "from typing import Optional\n")
       (str "from __future__ import annotations\n")
       ((save-to "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir/base" "__init__"))))

(root-compiler)

