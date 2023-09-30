(ns python-generator.core
  (:require
   [cheshire.core]
   [clojure.java.io :as io]
   [clojure.string :as str]
   [edamame.core :as e]))

(def dir "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir/element")
(def dirResource "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir/resource")

(def primitives-string #{"dateTime" "xhtml" "Distance" "time" "date" "string" "uuid" "oid" "id" "Dosage" "Duration" "instant" "Count" "decimal" "code" "base64Binary" "unsignedInt" "url" "markdown" "uri" "positiveInt"  "canonical" "Age" "Timing"})
(def elements #{"HumanName" "Signature" "Range" "Coding" "Attachment" "BackboneElement" "Address" "Money" "Period" "Expression" "TriggerDefinition" "Contributor" "Identifier" "Extension" "Quantity" "RelatedArtifact" "Ratio" "UsageContext" "ContactPoint" "Narrative" "Meta" "SampledData" "Annotation" "Reference" "CodeableConcept" "ContactDetail" "ParameterDefinition" "DataRequirement"})

(defn escape-keyword [word]
  (if (.contains #{"class", "global", "for", "import"} word) (str word "_") word))

(defn load-structure-list [path]
  (with-open [rdr (-> path
                      (io/input-stream)
                      (java.util.zip.GZIPInputStream.)
                      (io/reader))]
    (->> rdr
         line-seq
         (mapv (fn [json-row]
                 (cheshire.core/parse-string json-row keyword))))))

(defn string-interpolation [left, right, string]
  (str left, string, right))

(defn create-on-missing [dir]
  (when-not (.exists (io/file (str dir)))
    (.mkfile (io/file (str dir)))))

(defn get-resource-name [reference]
  (last (str/split (str reference) #"/")))

(defn open-for-write [text, directory, filename]
  (create-on-missing directory)
  (with-open [writer (io/writer (io/file directory (str (get-resource-name filename) ".py")))] (.write writer text)))


(defn get-parent [base-reference]
  (->> (get-resource-name base-reference)
       (string-interpolation "(" ")")))

(defn wrap-vector [string]
  (string-interpolation "list[", "]", string))

(defn wrap-optional [string]
  (string-interpolation "Optional[", "]", string))

(defn get-type [type]
  (cond
    (= type "boolean") "bool"
    (= type "integer") "int"
    (.contains primitives-string type) "str"
    :else type))

(defn derive-basic-type [type]
  (-> (get-resource-name type)
      (get-type)))

(defn append-default-none [string] (str string " = None"))
(defn append-default-vector [string] (str string " = []"))

(defn transform-element [element required]
  (->> (derive-basic-type (:type element))
       ((if (:array element) wrap-vector str))
       ((if (and (not required) (not (:array element))) wrap-optional str))
       ((if (and (not required) (not (:array element))) append-default-none str))
       ((if (and (not required) (:array element)) append-default-vector str))))

(defn map-to-vector [definition]
  (->> (seq (:elements definition))
       (filter (fn [[_, v]] (not (contains? v :choices))))))

(defn trans [required, [k, v]]
  (str "\t" (escape-keyword (name k)) ": " (transform-element v (.contains required (name k)))))

(defn impr [[_, v]]
  (let [type (derive-basic-type (:type v))]
    (if (.contains elements type) type nil)))


(defn transform-elements-to-types [elements, required]
  (reduce (fn [acc, item]
            (hash-map :elements (conj (:elements acc) (trans required item))
                      :imports (conj (:imports acc) (impr item)))) (hash-map :elements [] :imports []) elements))

(filter boolean [nil, nil, "3"])

(defn ttt [elements]
  (clojure.string/join (map (fn [item] (str "from element import " item "\n")), elements)))

(defn create-class [elements, definition]
  (println (str "class " (get-resource-name (:type definition))))
  (->  (filter boolean (:imports elements))
       (ttt)
       (str "\n")
       (str "from fhir_basic import Element\n\n")
       (str "from typing import Optional, Any\n\n\n")
       (str "class " (get-resource-name (:type definition)) "Origin" (get-parent (:base definition)) ":\n")
       (str (clojure.string/join "\n" (:elements elements)) "\n\n")))


;; (fn [[k, v]] (str "\t" (escape-keyword (name k)) ": " (transform-element v (.contains (or (:required definition) []) (name k)))))
;; (map (fn [[k, v]] (str "\t" (escape-keyword (name k)) ": " (transform-element v (.contains (or (:required definition) []) (name k))))))
;; (str (clojure.string/join "\n" (prepare-data definition)) "\n\n")

(defn combine-class-by-definition [definition]
  (-> (map-to-vector definition)
      (transform-elements-to-types (or (:required definition) []))
      (create-class definition)
      (str "class " (get-resource-name (:type definition)) "(" (get-resource-name (:type definition)) "Origin)" ": pass\n")
      (open-for-write dir (clojure.string/lower-case (:type definition)))))

(defn combine-class-by-definition2 [definition]
  (-> (map-to-vector definition)
      (transform-elements-to-types (or (:required definition) []))
      (create-class definition)
      (str "class " (get-resource-name (:type definition)) "(" (get-resource-name (:type definition)) "Origin)" ": pass\n")
      (open-for-write dirResource (clojure.string/lower-case (:type definition)))))

#_(defn filter-domain-resources [path]
    (->> path
         (parse-ndjson-gz)
         (filter #(= "specialization" (:derivation %)))
         (filter #(str/includes? (or (:base %) "") "Element"))
         (filter #(contains? % :elements))
         #_(filter #(.contains ["CodeableConcept", "Period"] (get-resource-name (:type %)))) ;; Patient
         (map test-fun)
         (clojure.string/join "\n\n")
         (str "\textension: list[Any] = []\n\n")
         (str "\tid: Optional[str] = None\n")
         (str "class Element(BaseModel):\n")
         (str "from pydantic import BaseModel\n")
         (str "from typing import Optional, Any\n")
         (open-for-write dir "S/types")))

#_(defn filter-resources [path]
    (->> path
         (parse-ndjson-gz)
         (filter #(= "specialization" (:derivation %)))
         (filter #(str/includes? (or (:base %) "") "DomainResource"))
      ;;  (filter #(str/includes? (or (:type %) "") "Appointment"))
         (filter #(contains? % :elements))
         (map test-fun)
         (clojure.string/join "\n\n")
         (str "from typing import Optional, Any\n")
         (open-for-write dir "resources")))

#_(defn get-primitive-structure-definitions [structures]
    (->> structures
         (filter #(not (and (contains? % :from) (contains? % :to))))
         (filter #(not (contains? % :derivation)))
         (filter #(not (contains? % :base)))
         (filter #(not (contains? % :elements)))))



(defn get-resource-structure-definition [structures]
  (->> structures
       (filter #(str/includes? (or (:base %) "") "/Resource"))
       (filter #(= "specialization" (:derivation %)))))

(defn get-domain-structure-definition [structures]
  (->> structures
       (filter #(str/includes? (or (:base %) "") "/DomainResource"))
       (filter #(= "specialization" (:derivation %)))))

;; here can be values without elements that inherits from element
(defn get-element-structure-definition [structures]
  (->> structures
       (filter #(str/includes? (or (:base %) "") "Element"))
       (filter #(not (str/includes? (or (:base %) "") "BackboneElement")))
       (filter #(not (str/includes? (or (:base %) "") "ElementDefinition")))
       (filter #(contains? % :elements))))

#_(defn get-specialization [structures]
    (->> structures
         (filter #(= "specialization" (:derivation %)))))

#_(defn get-constraint [structures]
    (->> structures
         (filter #(= "constraint" (:derivation %)))))

#_(defn get-misc [structures]
    (->> structures
         (filter #(not (and (contains? % :from) (contains? % :to))))
         (filter #(not (= "constraint" (:derivation %))))
         (filter #(not (= "specialization" (:derivation %))))))


(defn construct-basic [structures]
  (->> structures
       (filter #(not (contains? % :derivation)))
       (filter #(not (contains? % :base)))
       (filter #(contains? % :elements))
       structures))

#_(defn test [path]
    (->> (load-structure-list path)
         (construct-basic)
         (map test-fun)
         (clojure.string/join "\n\n")
         (str "from typing import Optional, Any\n\n\n")
         (open-for-write dir "fhir_basic")))

(defn construct-elements [structures]
  (->> structures
       (filter #(str/includes? (or (:base %) "") "Element"))
       (filter #(not (str/includes? (or (:base %) "") "BackboneElement")))
       (filter #(not (str/includes? (or (:base %) "") "ElementDefinition")))
       (filter #(contains? % :elements))))


;; (defn effect-save-element-names [elements]
;;   (->> (map (fn [item]  (get-resource-name (:type item))) elements)
;;        (update-elements))
;;   elements)

(defn step1 [path]
  (->> (load-structure-list path)
       (construct-elements)
       (count)
       #_(effect-save-element-names)
       #_(map combine-class-by-definition)
       #_(extract-keys)
       #_(map test-fun)
       #_(clojure.string/join "\n\n")
       #_(str "from fhir_basic import Element\n\n\n")
       #_(str "from typing import Optional, Any\n")
       #_(open-for-write dir "fhir_element")))



#_(defn test2 [path]
    (->> path
         (parse-ndjson-gz)
         (get-resource-structure-definition)
         (map test-fun)
         (clojure.string/join "\n\n")
         (str "from fhir_basic import Resource\n\n\n")
         (str "from typing import Optional, Any\n")
         (open-for-write dir "fhir_resource")))

(defn doallmap [elements]
  (doall (map combine-class-by-definition2 elements)))

(defn test3 [path]
  (->> (load-structure-list path)
       (get-domain-structure-definition)
       (doallmap)
       #_(clojure.string/join "\n\n")
       #_(str "from fhir_resource import DomainResource\n\n\n")
       #_(str "from typing import Optional, Any\n")
       #_(open-for-write dir "domain_resource")))

;;  (total) ;; 1968
;;  (get-trash) ;; 1310 - ignore
;;  (get-specialization) ;; 208
;;  (get-constraint) ;; 441 - ignore
;;  (get-base-structure-definitions) ;; 2 Resource Element
;;  (misc) ;; 9

;; basic 


;; (defn elements-index []
;;   (-> (map (fn [element] (str "from element." (clojure.string/lower-case element) " import " element "\n")) elements)
;;       (clojure.string/join)
;;       (open-for-write "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/test_dir" "element")))

;; (elements-index)
;; (test "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/fhir-schema/hl7.fhir.r4.core#4.0.1/package.ndjson.gz")
;; (step1 "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/fhir-schema/hl7.fhir.r4.core#4.0.1/package.ndjson.gz")
(test3 "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/fhir-schema/hl7.fhir.r4.core#4.0.1/package.ndjson.gz")

;; (test2 "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/fhir-schema/hl7.fhir.r4.core#4.0.1/package.ndjson.gz")
;; (test3 "/Users/gena.razmakhnin/Documents/aidbox-sdk-js/fhir-schema/hl7.fhir.r4.core#4.0.1/package.ndjson.gz")

