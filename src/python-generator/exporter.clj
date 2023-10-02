(ns python-generator.exporter
  (:require
   [python-generator.extractor :as extractors]
   [python-generator.helpers :as helpers]
   [cheshire.core]
   [clojure.java.io :as io]
   [clojure.string :as str]
   [edamame.core :as e])
  (:gen-class))

(defn base-index []
  (->> (helpers/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/fhir-schema/hl7.fhir.r4.core#4.0.1/package.ndjson.gz")
       (extractors/filter-base)
       (map (fn [definition] (str "from base." (clojure.string/lower-case (helpers/get-resource-name (:type definition))) " import " (helpers/get-resource-name (:type definition)) "\n")))
       (clojure.string/join)
       (helpers/write-to-file "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir/base", "index")))

(defn element-index []
  (->> (helpers/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/fhir-schema/hl7.fhir.r4.core#4.0.1/package.ndjson.gz")
       (extractors/filter-element)
       (map (fn [definition] (str "from element." (clojure.string/lower-case (helpers/get-resource-name (:type definition))) " import " (helpers/get-resource-name (:type definition)) "\n")))
       (clojure.string/join)
       (helpers/write-to-file "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir/element", "index")))

(defn resource-index []
  (->> (helpers/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/fhir-schema/hl7.fhir.r4.core#4.0.1/package.ndjson.gz")
       (extractors/filter-resource)
       (map (fn [definition] (str "from resource." (clojure.string/lower-case (helpers/get-resource-name (:type definition))) " import " (helpers/get-resource-name (:type definition)) "\n")))
       (clojure.string/join)
       (helpers/write-to-file "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir/resource", "index")))

(defn backbone-index []
  (->> (helpers/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/fhir-schema/hl7.fhir.r4.core#4.0.1/package.ndjson.gz")
       (extractors/filter-backbone-element)
       (map (fn [definition] (str "from backbone." (clojure.string/lower-case (helpers/get-resource-name (:type definition))) " import " (helpers/get-resource-name (:type definition)) "\n")))
       (clojure.string/join)
       (helpers/write-to-file "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir/backbone", "index")))

(defn domain-index []
  (->> (helpers/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/fhir-schema/hl7.fhir.r4.core#4.0.1/package.ndjson.gz")
       (extractors/filter-domain-resource)
       (map (fn [definition] (str "from domain." (clojure.string/lower-case (helpers/get-resource-name (:type definition))) " import " (helpers/get-resource-name (:type definition)) "\n")))
       (clojure.string/join)
       (helpers/write-to-file "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir/domain", "index")))

(base-index)
(element-index)
(resource-index)
(backbone-index)
(domain-index)