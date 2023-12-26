(ns python-generator.profile-parser
  (:require
   [python-generator.profile-extractor :as ext]
   [python-generator.profile-helpers :as help]
   [python-generator.profile-resources :as gen]
   [cheshire.core]
   [clojure.string :as str]))

;; (str parent_name "_" (help/uppercase-first-letter (name property_name)))

(defn compile-backbone [parent_name property_name definition]
  (let [name "NaMe"
        data (help/get-typings-and-imports name (or (:required definition) []) (help/elements-to-vector definition))
        backbone-elements (filter (fn [item] (> (count item) 0)) (:backbone-elements data))]
    (conj data (hash-map :backbone-elements (if (= (count backbone-elements) 0) [] (map (fn [[k, v]] (compile-backbone name k v)) backbone-elements))))))

(defn test [name data]
  (->> (filter (fn [item] (> (count item) 0)) (:backbone-elements data))
       (map (fn [[k, v]] (compile-backbone name k v)))
       (hash-map :backbone-elements)
       (conj data)))



;; (helpers/get-resource-name (:type definition))

(defn attach-parent-data [parent a context child]
  (if (nil? parent) child (conj child (hash-map :elements (concat (get-in context [:classes parent a :elements]) (:elements child))))))

(defn compile-elements [property parent context]
  (->> (map (fn [[name definition]]
              (->> (help/elements-to-vector definition)
                   (help/get-typings-and-imports (:type definition) (or (:required definition) []))
                   (test "ktulh-ftagn")
                   (attach-parent-data parent (:base definition) context)
                   (conj (hash-map :name name :source (:base definition)))
                   (hash-map name))) (property (:accumulator context)))
       #_(apply merge)))


(defn group-by [ig]
  (->> (ext/filter-base ig)
       (ext/filter-element)
       (ext/filter-resource)
       (ext/filter-backbone-element)
       (ext/filter-domain-resource)
       (ext/filter-constraint)))

(defn c-base [context]
  (->> context
       (compile-elements :base nil)
       (hash-map :base)
       (hash-map :classes)
       (conj context)))

(defn c-resource [context]
  (->> context
       (compile-elements :resource :base)
       (hash-map :resource)
       (conj (:classes context))
       (hash-map :classes)
       (conj context)))

(defn c-domain-resource [context]
  (->> context
       (compile-elements :domain-resource :resource)
       (hash-map :domain-resource)
       (conj (:classes context))
       (hash-map :classes)
       (conj context)))

(defn c-constraint [context]
  (->> context
       (compile-elements :constraint :domain-resource)
       (hash-map :constraint)
       (conj (:classes context))
       (hash-map :classes)
       (conj context)))

(defn compile [context]
  (->> context
       (c-base)
       (c-resource)
       (c-domain-resource)
       (c-constraint)))

(defn compile-profiles []
  (->> (hash-map :structures (help/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/fhir-schema/hl7.fhir.r4.core#4.0.1/package.ndjson.gz"))
       (group-by)
       (compile)
       (:classes)
       (:domain-resource)))

(compile-profiles)








;; (filter (fn [item] (:elements item)) [{:elements {:a {:type 1} :b {:type 2} :c {:type 2}}}])

#_(->> (helpers/parse-ndjson-gz "/Users/gena.razmakhnin/Documents/aidbox-python-tooklit/fhir-schema/hl7.fhir.r4.core#4.0.1_package.ndjson.gz")
       (filter #(= "constraint" (:derivation %)))
       (filter (fn [item] ()))
       (filter (fn [item]
                 (some
                  (fn [[_ value]] (and (= "hl7.fhir.r4.core#4.0.1/CodeableConcept" (:type value)) (contains? value :binding)))
                  (:elements item)))))

;; (map (fn [[key value]] key) {"hello" 3 "hello2" 3})
;; (type (hash-map "hello" 3 "hello2" 3))
;; ((hash-map "hello" 1 "hello2" 2) "hello2")

#_(->> (helpers/parse-nippy "/Users/gena.razmakhnin/Documents/aidbox-python-tooklit/fhir-schema/hl7.fhir.r4.core#4.0.1_terminology-index.nippy")
       #_(:valuesets)
       (:codesystems)
       #_(map (fn [[key value]] value))
       #_(filter (fn [[key value]] (= key "http://terminology.hl7.org/CodeSystem/v2-0334")))
       ((fn [map] (map "http://loinc.org"))))

;; (map (fn [item] (print item)))
;; (keyword "http://hl7.org/fhir/supplydelivery-status")
;; (keyword "http://hl7.org/fhir/ValueSet/ldlcholesterol-codes")


;; :fhirVersions ["4.0.1"]
;; :name "hl7.fhir.r4.core"
;; :type "fhir.core"
;; :version "4.0.1"
;; :dependencies []

;; :fhirVersions ["4.0.1"]
;; :name "hl7.fhir.us.core"
;; :type "IG"
;; :version "5.0.1"
;; :dependencies [":hl7.fhir.r4.core#4.0.1" ":hl7.terminology.r4#3.1.0" ":hl7.fhir.uv.bulkdata#2.0.0" ":hl7.fhir.uv.smart-app-launch#2.0.0" ":us.nlm.vsac#0.7.0" ":hl7.fhir.uv.sdc#3.0.0"]

;; :fhirVersions ["4.0.1"]
;; :name "hl7.fhir.us.mcode"
;; :type "IG"
;; :version "3.0.0"
;; :dependencies [":hl7.fhir.r4.core#4.0.1" ":hl7.terminology.r4#5.3.0" ":hl7.fhir.us.core#5.0.1" ":hl7.fhir.uv.genomics-reporting#2.0.0" ":hl7.fhir.uv.extensions#1.0.0"]

