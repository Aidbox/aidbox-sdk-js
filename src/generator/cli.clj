(ns generator.cli
  (:gen-class)
  (:require [zen.cli]
            [clojure.pprint]
            [zen.core]
            [zen.store]
            [clojure.string :as str]
            [generator.types-generation :as types-gen]))

(defn get-value [arg v]
  (cond
    (and (= arg "profiles") (= v "true")) true
    (and (= arg "profiles") (= v "false")) false
    (= arg "profiles") false
    (and (= arg "api-type") (= v "aidbox")) "aidbox"
    (= arg "api-type") "fhir"
    :else nil))

(defn parse-args [args]
  (let [result (reduce (fn [acc arg]
                         (let [[k v] (str/split (str arg) #"=")]
                           (assoc acc (keyword k) (get-value k v)))) {} args)]
    (if (contains? result :api-type) result (assoc result :api-type "fhir"))))

(defn get-sdk [args]
  (types-gen/get-sdk (zen.cli/get-pwd) (parse-args args)))

(defn get-types [args]
  (types-gen/get-types (zen.cli/get-pwd) (parse-args args)))

(defmethod zen.cli/command 'sdk-cli/get-sdk [_ args _]
  (get-sdk args))

(defmethod zen.cli/command 'sdk-cli/get-types [_ args _]
  (get-types args))

(defn -main [& args]
  (let [ztx (zen.core/new-context)
        _ (zen.core/read-ns ztx 'sdk-cli)]
    (zen.cli/cli ztx 'sdk-cli/config args)
    (System/exit 0)))
