(ns generator.cli
  (:gen-class)
  (:require [zen.cli]
            [clojure.pprint]
            [zen.core]
            [zen.store]
            [clojure.string]
            [generator.types-generation :as types-gen]))

(defn get-sdk [args]
  (types-gen/get-sdk (zen.cli/get-pwd) (last (clojure.string/split (str (first args)) #"="))))

(defn get-ts-types [args]
  (types-gen/get-ts-types (zen.cli/get-pwd) (last (clojure.string/split (str (first args)) #"="))))

(defmethod zen.cli/command 'sdk-cli/get-sdk [_ args _]
  (get-sdk args))

(defmethod zen.cli/command 'sdk-cli/get-types [_ args _]
  (get-ts-types args))

(defn -main [& args]
  (let [ztx (zen.core/new-context)
        _ (zen.core/read-ns ztx 'sdk-cli)]
      (zen.cli/cli ztx 'sdk-cli/config args)
      (System/exit 0)))
