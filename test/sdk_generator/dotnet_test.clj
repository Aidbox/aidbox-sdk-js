(ns sdk-generator.dotnet-test
  (:require
   [clojure.data :as data]
   [clojure.java.io :as io]
   [clojure.pprint :as p]
   [clojure.string :as str]
   [clojure.test :as t]
   [sdk-generator.dotnet :as dotnet]
   [sdk-generator.search-parameters :as sut]))

(defn custom-path
  [ns-kw]
  (str "test/snapshots/" (namespace ns-kw) "." (name ns-kw) ".cs"))

(defn match-snapshot
  ([k v] (match-snapshot {} k v))
  ([{:keys [make-path pprint?]} k v]
   (let [file-name (make-path k)
         file (io/file file-name)]
     (if (.exists file)
       (let [snapshot (slurp file)]
         (t/is (= snapshot v) (str "Using snapshot at " file-name ")))
       (do
         (io/make-parents file-name)
         (spit file-name (if pprint? (with-out-str (p/pprint v)) v)))))))

(t/deftest simple-test
  (def generated
    (sut/search-parameters-classes (dotnet/fetch-all-schemas)))

  (doseq [{:keys [resource-type class-file-content]} generated]
    (match-snapshot
     {:make-path custom-path :pprint? false}
     (keyword "sdk-generator.dotnet" resource-type)
     class-file-content)))
