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

(defn generate-values [vtx]
  (str (name (last (:path vtx)))
       (get-not-required-filed-sign vtx)
       ":"))

(defn update-require-and-keys-in-array [vtx data]
  (let [new-vtx (update vtx :keys-in-array conj (generate-map-keys-in-array vtx data))]
    (update new-vtx :require conj (generate-require vtx data))))
