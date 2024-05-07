(ns sdk-generator.common
  (:require
   [sdk-generator.profile-helpers :as profile-helpers]
   [sdk-generator.helpers :as helpers]
   [clojure.string :as str]))

(defn safe-conj [a b] (conj a (or b {})))

(defn vector-to-map [v]
  (->> (map (fn [item] (hash-map (:url item) item)) v)
       (into {})))

(defn remove-empty-urls [coll]
  (remove #(nil? (:url %)) coll))

(defn compile-backbone [parent-name property-name schema]
  (let [name (str parent-name "_" (str/capitalize (name property-name)))
        data (profile-helpers/get-typings-and-imports
              name
              (or (:required schema) [])
              (seq (:elements schema)))
        backbone-elements (remove empty? (:backbone-elements data))]
    (conj data
          {:backbone-elements
           (if (empty? backbone-elements)
             []
             (map (fn [[k, v]] (compile-backbone name k v)) backbone-elements))})))

(defn clear-backbone-elements [resource-type schema]
  (->> (:backbone-elements schema)
       (remove empty?)
       (map (fn [[k v]] (compile-backbone resource-type k v)))
       (hash-map :backbone-elements)
       (conj schema)))

(defn compile-elements [schemas]
  (for [schema schemas]
    (->> (profile-helpers/get-typings-and-imports
          (:type schema)
          (or (:required schema) [])
          (seq (:elements schema)))
         (clear-backbone-elements
          (profile-helpers/url->resource-type (:url schema)))
         (safe-conj
          (hash-map :base (get schema :base) :url (get schema :url))))))
