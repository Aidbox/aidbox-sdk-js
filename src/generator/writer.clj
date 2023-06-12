(ns generator.writer
  (:require
   [clojure.java.io :as io]
   [clojure.set]
   [clojure.string :as str]
   [generator.utils :refer [prettify-name prettify-key get-reference-union-type]]
   [zen.core])
  (:refer-clojure :exclude [min max type]))

(defn chain
  [schema init fns]
  (loop [result init
         [func & other] fns]
    (if (nil? func)
      result
      (recur (func schema result) other))))

(defn print-description
  [{:keys [description regex min max]} result]
  (when description
    (.write result
            (str "/** " description
                 (when regex
                   (format "\n* @pattern %s\n" regex))
                 (when min
                   (format "\n* @minimum %s\n" min))
                 (when max
                   (format "\n* @maximum %s\n" max))
                 " */\n")))
  result)

(defmulti write-by-type (fn [schema _resource _type _result] (:kind schema)))

(defmethod write-by-type :default
  [_schema _resource _type result]
  result)

(defmethod write-by-type "SimpleExtend"
  [schema resource type result]
  (chain
   schema result
   [print-description
    (fn [schema res]
      (if (= :resource type)
        (.write res (format "export type %s = %s;\n" resource (get-in schema [:extends :name])))
        (.write res (str "  " (prettify-key (name resource)) (if (:required schema) ": " "?: ")  (get-in schema [:extends :name]) ";\n")))
      res)]))

(defmethod write-by-type "SimpleType"
  [schema resource type result]
  (chain
   schema result
   [print-description
    (fn [schema res]
      (if (= :resource type)
        (.write res (format "export type %s = %s;\n" resource (:type schema)))
        (.write res (str " " (prettify-key (name resource)) (if (:required schema) ": " "?: ")  (:type schema) ";\n")))
      res)]))

(defmethod write-by-type "Map"
  [schema resource _type result]
  (if-not (:polymorphic schema)
    (chain
     schema result
     [print-description
      (fn [schema res]
        (.write res (str "export interface " (if (= "Reference" resource) (str "Reference<T = string>") resource)
                         (when-let [extends (get-in schema [:extends :name])]
                           (str " extends " extends))
                         " {\n"))
        (doseq [[k v] (:properties schema)]
          (write-by-type v k :property res))
        (.write res "}\n")
        res)])
    result))

(defmethod write-by-type "Enum"
  [schema resource _type result]
  (chain
   schema result
   [print-description
    (fn [schema res]
      (let [enum-key-values (reduce (fn [acc v]
                                      (let [k (prettify-name v)]
                                        (cond (not (get acc k)) (assoc acc k v)
                                              (= k (get acc k)) (assoc acc (str/lower-case k) v)
                                              :else (assoc acc (str/lower-case k) (get acc k) k v))))
                                    {} (:values schema))]
        (.write res (format "export enum %s {\n" resource))
        (doseq [[k v] enum-key-values]
          (.write res (format "  %s = \"%s\",\n" k v)))
        (.write res "}\n")
        res))]))

(defmethod write-by-type "Reference"
  [schema resource type result]
  (chain
   schema result
   [print-description
    (fn [schema res]
      (if (= :resource type)
        (.write res (format "export type %s = Reference%s;\n" resource (get-reference-union-type (:reference schema))))
        (.write res (str " " (prettify-key (name resource)) (if (:required schema) ": " "?: ")  "Reference" (get-reference-union-type (:reference schema)) ";\n")))
      res)]))

(defmethod write-by-type "Array"
  [schema resource _type result]
  (chain
   schema result
   [print-description
    (fn [schema res]
      (.write res
              (format "  %s%s Array<%s>;\n"
                      (name resource)
                      (if (:required schema) ": " "?: ")
                      (cond
                        (:reference schema)
                        (str "Reference" (get-reference-union-type (:reference schema)) "")
                        (get-in schema [:extends :name])
                        (get-in schema [:extends :name]))))
      res)]))

(defn add-newline
  [r]
  (.write r "\n"))

(defmulti generate-types (fn [target _input _config]  target))

(defmethod generate-types :typescript
  [_target input {:keys [target-path] :as _config}]
  (let [dir (io/file target-path)]
    (when-not (.exists dir)
      (.mkdir dir))
    (doseq [[k v] input]
      (let [dir-path (io/file target-path k)]
        (when-not (.exists dir-path)
          (.mkdir dir-path))
        (doseq [[resource schema] v]
          (when-not (contains? #{"string" "boolean"} resource)
            (with-open [r (io/writer (io/file target-path k (str resource ".ts")))]
              (.write r "/** GENERATED BY zen-cli \nDON'T MODIFY MANUALLY */\n")
              (doseq [[package imports] (:imports schema)]
                (doseq [imp imports]
                  (when-not (contains? #{"string" "boolean"} imp)
                    (.write r (let [prefix (if (= package (:package schema)) "." (str "../" package))]
                                (format "import { %s } from \"%s/%s\";\n" imp prefix imp))))))
              (add-newline r)
              (write-by-type (:base schema) resource :resource r)
              (add-newline r)
              (doseq [[res v] (:schemas schema)]
                (write-by-type v res :resource r)
                (add-newline r)))))))))

(comment
  (generate-types :typescript @compiled-schema {:target-path "gen"}))