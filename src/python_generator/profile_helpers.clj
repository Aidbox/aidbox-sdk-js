(ns python-generator.profile-helpers
  (:require
    [cheshire.core]
    [clojure.java.io :as io]
    [clojure.string :as str]
    [python-generator.extractor]))


(def primitives-string #{"dateTime" "xhtml" "time" "date" "string" "uuid" "oid" "id" "instant" "code" "base64Binary" "url" "markdown" "uri" "canonical"})


(defn uppercase-first-letter
  [string]
  (str (str/upper-case (first string)) (subs string 1)))


(defn escape-keyword
  [word]
  (if (.contains #{"class", "from", "assert", "global", "for", "import"} word) (str word "_") word))


(defn string-interpolation
  [left, right, string]
  (str left, string, right))


(defn get-resource-name
  [reference]
  (last (str/split (str reference) #"/")))


(defn get-type
  [name type]
  (cond
    (= type "BackboneElement") (str "" (uppercase-first-letter name))
    (= type "Element") (str "" (uppercase-first-letter name))
    (= type "boolean") "bool"
    (= type "integer") "int"
    (= type "decimal") "float"
    (= type "positiveInt") "PositiveInt"
    (= type "unsignedInt") "NonNegativeInt"
    (= type "")        "str"
    (primitives-string type) "str"
    :else (or type "str")))


(defn derive-basic-type
  [name element]
  (get-type name (get-resource-name (:type element))))


(defn transform-element
  [name element]
  (derive-basic-type name element))


(defn elements-to-vector
  [definition]
  (seq (:elements definition)))


(defn get-parent
  [base-reference]
  (->> (get-resource-name base-reference)
       (string-interpolation "(" ")")))


(defn collect-types
  [parent_name, required, [k, v]]
  (if (contains? v :choices)
    (hash-map :name (escape-keyword (name k)) :choices (:choices v) :type (:type v))
    (hash-map :name (escape-keyword (name k))
              :type (:type v)
              :base parent_name
              :array (boolean (:array v))
              :required (.contains required (name k))
              :value (transform-element (str (get-resource-name parent_name) "_" (uppercase-first-letter (name k))) v))))


(defn resolve-backbone-elements
  [[k, v]]
  (if (or (= (get-resource-name (:type v)) "BackboneElement")
          (= (get-resource-name (:type v)) "Element")) (vector k v (get-resource-name (:type v))) (vector)))


(defn get-typings-and-imports
  [parent_name, required, data]
  (reduce (fn [acc, item]
            (hash-map :elements (conj #_(hash-map :name parent_name) (:elements acc) (collect-types parent_name required item))
                      :backbone-elements (conj (:backbone-elements acc) (resolve-backbone-elements item))
                      :name parent_name))
          (hash-map :elements [] :backbone-elements []) data))


(defn parse-ndjson-gz
  [path]
  (with-open [rdr (-> path
                      (io/input-stream)
                      (java.util.zip.GZIPInputStream.)
                      (io/reader))]
    (->> rdr
         line-seq
         (mapv (fn [json-row]
                 (cheshire.core/parse-string json-row keyword))))))


(defn create-on-missing
  [dir]
  (io/make-parents dir))


(defn write-to-file
  [directory, filename, text]
  (create-on-missing (str directory "/" filename))
  (with-open [writer (io/writer (io/file directory (str filename ".py")))] (.write writer text)))


(defn get-directory-files
  [filepath]
  (let [directory (io/file filepath)
        files (file-seq directory)]
    files))
