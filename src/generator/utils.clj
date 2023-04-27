(ns generator.utils
  (:require [clojure.string :as str]))

;; TODO: refactor function: implicit name and does not work with any version
(defn set-to-string [vtx value]
  (reduce
   (fn [acc item]
     (cond
       (set? item) (set-to-string vtx item)
       (keyword? item)
       (conj acc
             (str/replace (name item) (str (:version vtx) ".") ""))
       (= item 'zen.fhir/Resource) (conj acc (namespace item))
       :else
       (conj acc
             (second (str/split (namespace item) #"\.")))))
   [] value))

(defn get-desc [{desc :zen/desc}]
  (when desc
    (str "/* " desc " */\n")))

(defn get-not-required-filed-sign [{require :require path :path}]
  (when-not (contains? (get
                        require
                        (if (= (count (pop  (pop path))) 0)
                          "root"
                          (str/join "." (pop (pop path))))) (last path)) "?"))

(defn generate-map-keys-in-array [vtx data]
  {(if (empty? (:path vtx))
     "root"
     (str/join "." (:path vtx))) (:keys data)})

(defn generate-exclusive-keys [{path :path} {exclusive-keys :exclusive-keys}]
  {(str/join "." path) exclusive-keys})

(defn generate-require [vtx data]
  {(if (empty? (:path vtx)) "root" (str/join "." (:path vtx))) (:require data)})

(defn generate-enum [data]
  (str  (str/join " | " (map (fn [item] (str "'" (:value item) "'")) data))))

(defn get-key [{path :path}]
  (let [k (name (last path))]
    (if (str/includes? k "-") (str "'" k "'") k)))

(defn generate-values [vtx]
  (str (get-key vtx)
       (get-not-required-filed-sign vtx)
       ":"))

(defn update-require-and-keys-in-array [vtx data]
  (let [new-vtx (update vtx :keys-in-array conj (generate-map-keys-in-array vtx data))]
    (update new-vtx :require conj (generate-require vtx data))))

(defn exclusive-keys-child? [vtx]
  (and (> (count (:exclusive-keys vtx)) 0) (> (count (:path vtx)) 1)
       (or (contains? (:exclusive-keys vtx) (str/join "." (pop (pop (:path vtx)))))
           (contains? (:exclusive-keys vtx) (str/join "." (pop (:path vtx)))))))

(defn keys-in-array-child? [vtx]
  (and (> (count (:keys-in-array vtx)) 0) (> (count (:path vtx)) 1)
       (contains? (:keys-in-array vtx) (str/join "." (:path vtx)))))

(defn find-duplicates [seq]
  (let [duplicates (for [[id freq] (frequencies seq)
                         :when (> freq 1)]
                     id)]
    (reduce (fn [acc item] (assoc acc item item)) {} duplicates)))

(defn prettify-name [n]
  (if (str/includes? n "-")
    (->> (str/split n #"-")
         (map-indexed (fn [index item]
                        (if (and (= index 0) (re-matches #"\d+" (first (str/split item #""))))
                          "" (str/capitalize item))))
         (str/join "")) n))

(defn find-profiles-dublicate [seq]
  (reduce (fn [acc profile-name]
            (let [k (some (fn [item]
                            (when (and (re-matches (re-pattern (str "^[n,zN,Z]{2}" profile-name "$")) item) (not= profile-name item)) item)) seq)]
              (if k (assoc acc k profile-name) acc)))
          {} seq))

(defn get-keyvalue-resources [resource-names]
  (mapv (fn [n]
          (format "%s: %s;" n n))
        (distinct resource-names)))

(defn get-structure-name [value]
  (str/trim (second (str/split (namespace value) #"\."))))
