(ns python-generator.profile-extractor
  (:require [cheshire.core] [clojure.string :as str]))


(defn filter-base [reduce-keys]
  (->> (reduce-keys :structures)
       (filter #(not (and (contains? % :from) (contains? % :to))))
       (filter #(not (contains? % :derivation)))
       (filter #(not (contains? % :base)))
       (filter #(contains? % :elements))
       (map (fn [item] [(item :fqn) item]))
       (into {})
       (assoc {} :base)
       (hash-map :structures (reduce-keys :structures) :accumulator)))

(defn filter-element [reduce-keys]
  (->> (reduce-keys :structures)
       (filter #(str/includes? (or (:base %) "") "Element"))
       (filter #(not (str/includes? (or (:base %) "") "BackboneElement")))
       (filter #(not (str/includes? (or (:base %) "") "ElementDefinition")))
       (filter #(contains? % :elements))
       (map (fn [item] [(item :fqn) item]))
       (into {})
       (assoc (reduce-keys :accumulator) :element)
       (hash-map :structures (reduce-keys :structures) :accumulator)))

(defn filter-backbone-element [reduce-keys]
  (->> (reduce-keys :structures)
       (filter #(str/includes? (or (:base %) "") "/BackboneElement"))
       (filter #(= "specialization" (:derivation %)))
       (map (fn [item] [(item :fqn) item]))
       (into {})
       (assoc (reduce-keys :accumulator) :backbone-element)
       (hash-map :structures (reduce-keys :structures) :accumulator)))

(defn filter-domain-resource [reduce-keys]
  (->> (reduce-keys :structures)
       (filter #(str/includes? (or (:base %) "") "/DomainResource"))
       (filter #(= "specialization" (:derivation %)))
       (map (fn [item] [(item :fqn) item]))
       (into {})
       (assoc (reduce-keys :accumulator) :domain-resource)
       (hash-map :structures (reduce-keys :structures) :accumulator)))

(defn filter-resource [reduce-keys]
  (->> (reduce-keys :structures)
       (filter #(str/includes? (or (:base %) "") "/Resource"))
       (filter #(= "specialization" (:derivation %)))
       (map (fn [item] [(item :fqn) item]))
       (into {})
       (assoc (reduce-keys :accumulator) :resource)
       (hash-map :structures (reduce-keys :structures) :accumulator)))

(defn filter-constraint [reduce-keys]
  (->> (reduce-keys :structures)
       (filter #(= "constraint" (:derivation %)))
       (filter #(not (= "hl7.fhir.r4.core#4.0.1/Extension" (:base %))))
       (map (fn [item] [(item :fqn) item]))
       (into {})
       (assoc (reduce-keys :accumulator) :constraint)
       (hash-map :structures (reduce-keys :structures) :accumulator)))


