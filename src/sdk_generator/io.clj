(ns sdk-generator.io
  (:require [clojure.java.io :as io]))

(defn write-to-file [directory filename text]
  (let [filepath (io/file directory filename)]
    (io/make-parents filepath)
    (spit filepath text)))

(defn create-gzip-reader [path]
  (-> path
      (io/input-stream)
      (java.util.zip.GZIPInputStream.)
      (io/reader)))

(defn get-directory-files [path]
  (->> path
       io/file
       file-seq
       (remove #(.isDirectory %))))
