(ns python-generator.extractor
  (:require [cheshire.core] [clojure.string :as str]))

(defn filter-base [structures]
  (->> structures
       (filter #(not (and (contains? % :from) (contains? % :to))))
       (filter #(not (contains? % :derivation)))
       (filter #(not (contains? % :base)))
       (filter #(contains? % :elements))))

(defn filter-element [structures]
  (->> structures
       (filter #(str/includes? (or (:base %) "") "Element"))
       (filter #(not (str/includes? (or (:base %) "") "BackboneElement")))
       (filter #(not (str/includes? (or (:base %) "") "ElementDefinition")))
       (filter #(contains? % :elements))))

(defn filter-resource [structures]
  (->> structures
       (filter #(str/includes? (or (:base %) "") "/Resource"))
       (filter #(= "specialization" (:derivation %)))))

(defn filter-domain-resource [structures]
  (->> structures
       (filter #(str/includes? (or (:base %) "") "/DomainResource"))
       (filter #(= "specialization" (:derivation %)))))

(defn filter-backbone-element [structure-definitions]
  (->> structure-definitions
       (filter #(str/includes? (or (:base %) "") "/BackboneElement"))
       (filter #(= "specialization" (:derivation %)))))


