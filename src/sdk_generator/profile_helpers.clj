(ns sdk-generator.profile-helpers
  (:require
   [cheshire.core :as json]
   [clojure.java.io :as io]
   [clojure.string :as str]
   [sdk-generator.extractor]))

;; TODO: do not hardcode
(def elements #{"HumanName" "Signature" "Range" "Coding" "Attachment" "BackboneElement" "Address" "Money" "Period" "Expression" "TriggerDefinition" "Contributor" "Identifier" "Extension" "Quantity" "RelatedArtifact" "Ratio" "UsageContext" "ContactPoint" "Narrative" "Meta" "SampledData" "Annotation" "Reference" "CodeableConcept" "ContactDetail" "ParameterDefinition" "DataRequirement"})
(def backbone-elements #{"Population" "Timing" "MarketingStatus" "SubstanceAmount" "ProductShelfLife" "ProdCharacteristic" "Dosage" "ElementDefinition"})
(def primitives-string #{"dateTime" "xhtml" "Distance" "time" "date" "string" "uuid" "oid" "id" "Dosage" "Duration" "instant" "Count" "decimal" "code" "base64Binary" "unsignedInt" "url" "markdown" "uri" "positiveInt"  "canonical" "Age" "Timing"})

(defn uppercase-first-letter [string]
  (str (str/upper-case (first string)) (subs string 1)))

(defn escape-keyword [word]
  (if (.contains #{"class", "from", "assert", "global", "for", "import"} word) (str word "_") word))

(defn string-interpolation [left, right, string]
  (str left, string, right))

(defn wrap-vector [string]
  (string-interpolation "list[", "]", string))

(defn wrap-optional [string]
  (string-interpolation "Optional[", "]", string))

(defn wrap-literal [string]
  (string-interpolation "Literal[", "]", string))

(defn url->resource-type [reference]
  (last (str/split (str reference) #"/")))

(defn get-type [name type]
  (cond
    (= type "Expression") "Base.ResourceExpression"
    (= type "Reference") "Base.ResourceReference"
    (= type "BackboneElement") (str "" (uppercase-first-letter name))
    (= type "boolean") "bool"
    (= type "integer") "int"
    (= type "")        "string"
    (.contains primitives-string type) "string"
    :else (if type (str "Base." type) "string")))

(defn derive-basic-type [name element]
  (get-type name (url->resource-type (:type element))))

(defn append-default-none [string] (str string " = None"))
(defn append-default-vector [string] (str string " = []"))

(defn transform-element [name element required]
  (->> (derive-basic-type name element)
       #_((if (:array element) wrap-vector str))
       #_((if (and (not required) (not (:array element))) wrap-optional str))
       #_((if (and (not required) (not (:array element))) append-default-none str))
       #_((if (and (not required) (:array element)) append-default-vector str))))

(defn elements-to-vector [schema]
  (->> (seq (:elements schema))
       #_(filter (fn [[_, v]] (not (contains? v :choices))))))

(defn get-parent [base-reference]
  (->> (url->resource-type base-reference)
       (string-interpolation "(" ")")))

(defn collect-types [parent-name required [k v]]
  (if (contains? v :choices)
    {:name    (escape-keyword (name k))
     :choices (:choices v)}
    {:name     (escape-keyword (name k))
     :base     parent-name
     :array    (boolean (:array v))
     :required (.contains required (name k))
     :value    (transform-element
                (str (url->resource-type parent-name) "_" (uppercase-first-letter (name k))) v (.contains required (name k)))}))

(defn resolve-backbone-elements [[k, v]]
  (if (= (url->resource-type (:type v)) "BackboneElement") (vector k, v) (vector)))

(defn get-typings-and-imports [parent-name required data]
  (reduce (fn [acc item]
            {:elements (conj (:elements acc) (collect-types parent-name required item))
             :backbone-elements (conj (:backbone-elements acc) (resolve-backbone-elements item))
             :name parent-name})
          {:elements [] :backbone-elements []}
          data))

(defn parse-ndjson-gz [path]
  (with-open [rdr (-> path
                      (io/input-stream)
                      (java.util.zip.GZIPInputStream.)
                      (io/reader))]
    (for [line (line-seq rdr)]
      (json/parse-string line keyword))))

(defn write-to-file [directory filename text]
  (let [filepath (io/file directory filename)]
    (io/make-parents filepath)
    (spit filepath text)))

(defn get-directory-files [filepath]
  (file-seq (io/file filepath)))
