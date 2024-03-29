(ns build
  (:require
   [clojure.java.io]
   [clojure.tools.build.api :as b]))

(def class-dir (.getPath (clojure.java.io/file (str "target" (java.io.File/separator) "classes"))))
(def basis (b/create-basis {:project "deps.edn"}))
(def uber-file (.getPath (clojure.java.io/file (str "target" (java.io.File/separator) "zen.jar"))))

(defn clean [_]
  (b/delete {:path "target"}))

(defn uber [_]
  (clean nil)
  (b/copy-dir {:src-dirs ["src" "zrc" "resources"]
               :target-dir class-dir})
  (b/compile-clj {:basis basis
                  :src-dirs ["src"]
                  :class-dir class-dir})
  (b/uber {:class-dir class-dir
           :uber-file uber-file
           :basis basis
           :main 'generator.cli}))

