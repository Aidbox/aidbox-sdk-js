(ns sdk-generator.search-parameters
  (:require [clojure.string :as str]
            [selmer.parser :as tpl]))

(defn words [s]
  (str/split s #"(?=[\p{Lu}\p{Lt}])|[-_\s]"))

(defn ->pascal-case [s]
  (str/join (map str/capitalize (words s))))

;; ---

(defn resource? [x]
  (= (:kind x) "resource"))

(defn search-parameter? [x]
  (= (:resourceType x) "SearchParameter"))

(defn search-parameter-from-extension? [search-parameter]
  (str/includes? (:id search-parameter) "-extensions-"))

;; ---

(defn search-parameters-for [schemas resource-name]
  (->> schemas
       (filter search-parameter?)
       (remove search-parameter-from-extension?)
       (filter #(contains? (set (:base %)) resource-name))))

(defn fields-for [schemas resource]
  (->> (search-parameters-for schemas resource)
       (map :code)
       (map ->pascal-case)
       (sort)))

(defn search-parameters-structures
  [schemas]
  (->> schemas
       (filter resource?)
       (map #(hash-map
              :resource-type (:type %)
              :fields (fields-for schemas (:type %))))))

(defn search-parameters-classes [schemas]
  (for [{:keys [resource-type fields]} (search-parameters-structures schemas)]
    {:resource-type resource-type
     :class-file-content
     (tpl/render-file
      "sdk_generator/templates/search-parameters-class.txt"
      {:class-name resource-type
       :properties fields})}))
