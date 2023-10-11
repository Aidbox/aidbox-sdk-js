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
  (helpers/write-to-file "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir/base", "__init__", "")
  (->> (helpers/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/fhir-schema/hl7.fhir.r4.core#4.0.1/package.ndjson.gz")
       (extractors/filter-base)
       (map (fn [definition] (str "from base." (clojure.string/lower-case (helpers/get-resource-name (:type definition))) " import " (helpers/get-resource-name (:type definition)) "\n")))
       (clojure.string/join)
       (helpers/write-to-file "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir/base", "index")))

(defn element-index []
  (helpers/write-to-file "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir/element", "__init__", "")
  (->> (helpers/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/fhir-schema/hl7.fhir.r4.core#4.0.1/package.ndjson.gz")
       (extractors/filter-element)
       (map (fn [definition] (str "from element." (clojure.string/lower-case (helpers/get-resource-name (:type definition))) " import " (helpers/get-resource-name (:type definition)) "\n")))
       (clojure.string/join)
       (helpers/write-to-file "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir/element", "index")))

(defn resource-index []
  (helpers/write-to-file "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir/resource", "__init__", "")
  (->> (helpers/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/fhir-schema/hl7.fhir.r4.core#4.0.1/package.ndjson.gz")
       (extractors/filter-resource)
       (map (fn [definition] (str "from resource." (clojure.string/lower-case (helpers/get-resource-name (:type definition))) " import " (helpers/get-resource-name (:type definition)) "\n")))
       (clojure.string/join)
       (helpers/write-to-file "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir/resource", "index")))

(defn backbone-index []
  (helpers/write-to-file "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir/backbone", "__init__", "")
  (->> (helpers/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/fhir-schema/hl7.fhir.r4.core#4.0.1/package.ndjson.gz")
       (extractors/filter-backbone-element)
       (map (fn [definition] (str "from backbone." (clojure.string/lower-case (helpers/get-resource-name (:type definition))) " import " (helpers/get-resource-name (:type definition)) "\n")))
       (clojure.string/join)
       (helpers/write-to-file "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir/backbone", "index")))

(defn domain-index []
  (let [data (extractors/filter-domain-resource (helpers/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/fhir-schema/hl7.fhir.r4.core#4.0.1/package.ndjson.gz"))
        imports (str/join (map (fn [definition] (str "from ." (clojure.string/lower-case (helpers/get-resource-name (:type definition))) " import " (helpers/get-resource-name (:type definition)) "\n")) data))
        all (str "__all__=[" (str/join "," (map (fn [definition] (str "\n\"" (helpers/get-resource-name (:type definition)) "\"")) data)) "\n]\n\n")]
    (helpers/write-to-file "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir/resources", "__init__", (str all imports))))

;; (base-index)
;; (element-index)
;; (resource-index)
;; (backbone-index)
(domain-index)
