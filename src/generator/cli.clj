(ns generator.cli
  (:require
   [clojure.pprint]
   [generator.core]
   [zen.cli]
   [zen.core])
  (:gen-class))

(defmethod zen.cli/command 'sdk-cli/sdk [_ _ _]
  (-> (zen.cli/get-pwd)
      generator.core/sdk)
  (System/exit 0))

(defn -main [& args]
  (let [ztx (zen.core/new-context)
        _ (zen.core/read-ns ztx 'sdk-cli)]
    (zen.cli/cli ztx 'sdk-cli/config args)))