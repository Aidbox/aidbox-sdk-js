(ns python-generator.profile-resources
  (:require
   [cheshire.core]
   [clojure.string :as str]
   [python-generator.extractor :as extractors]
   [python-generator.profile-helpers :as help]))

(defn filter-backbone-elements [data]
  (filter (fn [item] (> (count item) 0)) (:backbone-elements data)))

(defn compile-backbone [parent_name property_name definition]
  (let [name (str parent_name "_" (help/uppercase-first-letter (name property_name)))
        data (help/get-typings-and-imports name (or (:required definition) []) (help/elements-to-vector definition))
        backbone-elements (filter-backbone-elements data)]
    (->> (str (clojure.string/join "\n" (:elements data)) "\n\n")
         (str "class " name "(BackboneElement):\n")
         (str (if (= (count backbone-elements) 0) (str) (str/join (map (fn [[k, v]] (str (compile-backbone name k v))) backbone-elements)))))))

(defn test [name data]
  (->> (filter (fn [item] (> (count item) 0)) (:backbone-elements data))
       (map (fn [[k, v]] (str (compile-backbone name k v))))
       (str/join)))

(defn combine-file [definition, data]
  (->> (str (clojure.string/join "\n" (:elements data)) "\n\n")
       (str "class " (help/get-resource-name (:type definition)) (help/get-parent (:base definition)) ":\n")
       #_(str (test (help/get-resource-name (:type definition)) data))
       #_(str "from ..base import *\n\n")
       #_(str "from typing import Optional\n")))

(defn compile-single-class [directory]
  (fn [[_ definition]]
    (->> (help/elements-to-vector definition)
         (help/get-typings-and-imports (help/get-resource-name (:type definition)) (or (:required definition) []))
         #_(combine-file definition)
         #_(str/join))))

