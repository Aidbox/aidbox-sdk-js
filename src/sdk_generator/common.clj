(ns sdk-generator.common
  (:require
   [sdk-generator.profile-helpers :as profile-helpers]
   [sdk-generator.helpers :as helpers]
   [clojure.string :as str]))

(defn safe-conj [a b] (conj a (or b {})))

(defn vector-to-map [v]
  (->> (map (fn [item] (hash-map (:url item) item)) v)
       (into {})))

(defn omit-empty-urls [coll]
  (remove #(nil? (:url %)) coll))

(defn compile-backbone [parent-name property-name definition]
  (let [name (str parent-name "_" (str/capitalize (name property-name)))
        data (profile-helpers/get-typings-and-imports
              name
              (or (:required definition) [])
              (profile-helpers/elements-to-vector definition))
        backbone-elements (filter (fn [item] (> (count item) 0)) (:backbone-elements data))]
    (conj data (hash-map :backbone-elements (if (= (count backbone-elements) 0) [] (map (fn [[k, v]] (compile-backbone name k v)) backbone-elements))))))

(defn clear-backbone-elements [name data]
  (->> (filter (fn [item] (> (count item) 0)) (:backbone-elements data))
       (map (fn [[k, v]] (compile-backbone name k v)))
       (hash-map :backbone-elements)
       (conj data)))

(defn compile-elements [schemas]
  (map (fn [schema]
         (->> (profile-helpers/elements-to-vector schema)
              (profile-helpers/get-typings-and-imports (:type schema) (or (:required schema) []))
              (clear-backbone-elements (profile-helpers/get-resource-name (:url schema)))
              (safe-conj (hash-map :base (get schema :base) :url (get schema :url))))) schemas))
