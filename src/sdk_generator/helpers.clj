(ns sdk-generator.helpers
  (:require
   [cheshire.core :as json]
   [clojure.java.io :as io]
   [clojure.string :as str]
   [python-generator.extractor]
   [taoensso.nippy :as nippy]))


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

(defn get-resource-name [reference]
  (last (str/split (str reference) #"/")))

(defn get-type [name type]
  (cond
    (= type "BackboneElement") (str "" (uppercase-first-letter name))
    (= type "boolean") "bool"
    (= type "integer") "int"
    (= type "")        "string"
    (.contains primitives-string type) "string"
    :else (or type "string")))

(defn derive-basic-type [name element]
  (get-type name (get-resource-name (:type element))))

(defn append-default-none [string] (str string " = None"))
(defn append-default-vector [string] (str string " = []"))

(defn transform-element [name element required]
  (->> (derive-basic-type name element)
       #_((if (:array element) wrap-vector str))
       #_((if (and (not required) (not (:array element))) wrap-optional str))
       #_((if (and (not required) (not (:array element))) append-default-none str))
       #_((if (and (not required) (:array element)) append-default-vector str))))

(defn elements-to-vector [definition]
  (->> (seq (:elements definition))
       (filter (fn [[_, v]] (not (contains? v :choices))))))

(defn get-parent [base-reference]
  (->> (get-resource-name base-reference)
       (string-interpolation "(" ")")))

(defn collect-types [parent_name, required, [k, v]]
  (str "\t" (escape-keyword (name k)) ": " (transform-element (str parent_name "_" (uppercase-first-letter (name k))) v (.contains required (name k)))))

(defn resolve-backbone-elements [[k, v]]
  (if (= (get-resource-name (:type v)) "BackboneElement") (vector k, v) (vector)))

(defn get-typings-and-imports [parent_name, required, data]
  (reduce (fn [acc, item]
            (hash-map :elements (conj (:elements acc) (collect-types parent_name required item))
                      :backbone-elements (conj (:backbone-elements acc) (resolve-backbone-elements item))))
          (hash-map :elements [] :backbone-elements []) data))

(defn parse-ndjson-gz [path]
  (with-open [rdr (-> path
                      (io/input-stream)
                      (java.util.zip.GZIPInputStream.)
                      (io/reader))]
    (->> rdr
         line-seq
         (mapv (fn [json-row]
                 (json/parse-string json-row keyword))))))

(defn parse-nippy [path]
  (->> (io/file path)
       (nippy/thaw-from-file)))

(defn side-effect-map [method, list] (doall (map method list)))

(defn create-on-missing [dir]
  (when-not (.exists (io/file dir)) (.mkdir (io/file dir))))

(defn write-to-file [directory, filename, text]
  (create-on-missing directory)
  (with-open [writer (io/writer (io/file directory (str filename ".cs")))] (.write writer text)))

;; (get-resource-name filename)

(defn delete-directory!
  "Recursively delete a directory."
  [^java.io.File file]
  (when (.exists file)
    (when (.isDirectory file)
      (run! delete-directory! (.listFiles file)))
    (io/delete-file file)))
