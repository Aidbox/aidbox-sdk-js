(ns python-generator.index
  (:require
   [python-generator.extractor :as extractors]
   [python-generator.helpers :as helpers]
   [cheshire.core]
   [clojure.string :as str])
  (:gen-class))

(defn save-to [directory, filename]
  (fn [text] (helpers/write-to-file directory, filename, text)))

(defn push-to-end [string1, string2] (str string2, string1))

(defn ignore [data]
  (clojure.string/join (map (fn [item] (str "\t" item " = Any\n")), data)))

(defn typechecking-ignore-runtime [string]
  (fn [inner_string] (str inner_string string "\n")))

(defn combine-file [definition, data]
  (->  (str (helpers/add-element-import (filter boolean (:imports-element data))))
       (str (helpers/add-backbone-element-import (filter boolean (:imports-backbone-element data))))
       #_(push-to-end (str "if TYPE_CHECKING:\n\t\"import typings\"\n"))
       (push-to-end (str "from typing import TYPE_CHECKING, Optional, Any\n\n"))
       #_(push-to-end (str "from __future__ import annotations\n"))
       #_(str "else:\n\t\"import typings\"\n")
       #_((typechecking-ignore-runtime (ignore (filter boolean (:imports data)))))
       ((if (= (helpers/get-resource-name (:base definition)) "DomainResource") (fn [string] (str string "from resource.index import DomainResource\n\n")) str))
       ((if (= (helpers/get-resource-name (:base definition)) "Resource") (fn [string] (str string "from base.resource import Resource\n\n")) str))
       ((if (= (helpers/get-resource-name (:base definition)) "BackboneElement") (fn [string] (str string "from element.index import BackboneElement\nfrom base.index import Element\n\n")) str))
       ((if (= (helpers/get-resource-name (:base definition)) "Element") (fn [string] (str string "from base.index import Element\n\n")) str))
       (str "\nclass " (helpers/get-resource-name (:type definition)) "Origin" (helpers/get-parent (:base definition)) ":\n")
       (str (clojure.string/join "\n" (:elements data)) "\n\n")))

(defn compile-single-class [directory]
  (fn [definition]
    (->> (helpers/elements-to-vector definition)
         (helpers/get-typings-and-imports (or (:required definition) []))
         (combine-file definition)
         (push-to-end (str "class " (helpers/get-resource-name (:type definition)) "(" (helpers/get-resource-name (:type definition)) "Origin)" ": pass\n"))
         ((save-to directory (str/lower-case (helpers/get-resource-name (:type definition))))))))

(defn compile-bases []
  (->> (helpers/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/fhir-schema/hl7.fhir.r4.core#4.0.1/package.ndjson.gz")
       (extractors/filter-base)
       (map (compile-single-class "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir/base"))))

(defn compile-elements []
  (->> (helpers/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/fhir-schema/hl7.fhir.r4.core#4.0.1/package.ndjson.gz")
       (extractors/filter-element)
       (map (compile-single-class "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir/element"))))

(defn compile-backbone-elements []
  (->> (helpers/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/fhir-schema/hl7.fhir.r4.core#4.0.1/package.ndjson.gz")
       (extractors/filter-backbone-element)
       (map (compile-single-class "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir/backbone"))))

(defn compile-resources []
  (->> (helpers/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/fhir-schema/hl7.fhir.r4.core#4.0.1/package.ndjson.gz")
       (extractors/filter-resource)
       (map (compile-single-class "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir/resource"))))

(defn compile-domains []
  (->> (helpers/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/fhir-schema/hl7.fhir.r4.core#4.0.1/package.ndjson.gz")
       (extractors/filter-domain-resource)
       (helpers/side-effect-map (compile-single-class "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir/domain"))))

(compile-bases)
(compile-elements)
(compile-backbone-elements)
(compile-resources)
(compile-domains)

