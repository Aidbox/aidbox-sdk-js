(ns python-generator.helpers
  (:require
   [python-generator.extractor]
   [cheshire.core]
   [clojure.java.io :as io]
   [clojure.string :as str]))


;; TODO: do not hardcode
(def elements #{"HumanName" "Signature" "Range" "Coding" "Attachment" "BackboneElement" "Address" "Money" "Period" "Expression" "TriggerDefinition" "Contributor" "Identifier" "Extension" "Quantity" "RelatedArtifact" "Ratio" "UsageContext" "ContactPoint" "Narrative" "Meta" "SampledData" "Annotation" "Reference" "CodeableConcept" "ContactDetail" "ParameterDefinition" "DataRequirement"})
(def backbone-elements #{"Population" "Timing" "MarketingStatus" "SubstanceAmount" "ProductShelfLife" "ProdCharacteristic" "Dosage" "ElementDefinition"})
(def primitives-string #{"dateTime" "xhtml" "Distance" "time" "date" "string" "uuid" "oid" "id" "Dosage" "Duration" "instant" "Count" "decimal" "code" "base64Binary" "unsignedInt" "url" "markdown" "uri" "positiveInt"  "canonical" "Age" "Timing"})

(defn escape-keyword [word]
  (if (.contains #{"class", "global", "for", "import"} word) (str word "_") word))

(defn string-interpolation [left, right, string]
  (str left, string, right))

(defn wrap-vector [string]
  (string-interpolation "list[", "]", string))

(defn wrap-optional [string]
  (string-interpolation "Optional[", "]", string))

(defn get-resource-name [reference]
  (last (str/split (str reference) #"/")))

(defn get-type [type]
  (cond
    (= type "boolean") "bool"
    (= type "integer") "int"
    (= type "")        "str"
    (.contains primitives-string type) "str"
    :else (or type "str")))

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

(defn elements-to-vector [definition]
  (->> (seq (:elements definition))
       (filter (fn [[_, v]] (not (contains? v :choices))))))

(defn transform-element-to-type [definition]
  (fn [[k, v]] (str "\t" (escape-keyword (name k)) ": " (transform-element v (.contains (or (:required definition) []) (name k))))))

(defn get-parent [base-reference]
  (->> (get-resource-name base-reference)
       (string-interpolation "(" ")")))

(defn collect-types [required, [k, v]]
  (str "\t" (escape-keyword (name k)) ": " (transform-element v (.contains required (name k)))))

(defn collect-imports [[_, v]]
  (let [type (derive-basic-type (:type v))]
    (if (.contains elements type) type nil)))

(defn collect-backbone-imports [[_, v]]
  (let [type (derive-basic-type (:type v))]
    (if (.contains backbone-elements type) type nil)))

(defn add-element-import [data]
  (clojure.string/join (map (fn [item] (str "from element.index import " item "\n")), data)))

(defn add-backbone-element-import [data]
  (clojure.string/join (map (fn [item] (str "from backbone.index import " item "\n")), data)))

(defn get-typings-and-imports [required, data]
  (reduce (fn [acc, item]
            (hash-map :elements (conj (:elements acc) (collect-types required item))
                      :imports-element (conj (:imports-element acc) (collect-imports item))
                      :imports-backbone-element (conj (:imports-backbone-element acc) (collect-backbone-imports item))))
          (hash-map :elements [] :imports-element [] :imports-backbone-element []) data))

(defn parse-ndjson-gz [path]
  (with-open [rdr (-> path
                      (io/input-stream)
                      (java.util.zip.GZIPInputStream.)
                      (io/reader))]
    (->> rdr
         line-seq
         (mapv (fn [json-row]
                 (cheshire.core/parse-string json-row keyword))))))

(defn side-effect-map [method, list] (doall (map method list)))

(defn create-on-missing [dir]
  (when-not (.exists (io/file dir)) (.mkdir (io/file dir))))

(defn write-to-file [directory, filename, text]
  (create-on-missing directory)
  (with-open [writer (io/writer (io/file directory (str filename ".py")))] (.write writer text)))

;; (get-resource-name filename)