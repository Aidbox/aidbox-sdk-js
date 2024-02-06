(ns dotenv
  (:require
    [clojure.java.io :as io]
    [clojure.string :as str]))


(defn remap-key
  [env-key]
  (-> env-key
      str/lower-case
      (str/replace #"_" "-")
      keyword))


(defn- unquote-doublequoted-string
  [string]
  (-> string
      (str/replace #"^\"|\"$" "")
      (str/replace #"\\\"" "\"")))


(defn- unquote-singlequoted-string
  [string]
  (-> string
      (str/replace #"^'|'$" "")
      (str/replace #"\\'" "'")))


(defn- unquote-string
  [string]
  (cond (str/starts-with? string "\"") (unquote-doublequoted-string string)
        (str/starts-with? string "'")  (unquote-singlequoted-string string)
        :else string))


(defn- to-pairs
  [rawstring]
  (->> rawstring
       (str/split-lines)
       (map str/trim)
       (remove #(or (empty? %) (str/starts-with? % "#")))
       (map #(str/replace % #"\"\s*#.*" ""))
       (map #(str/split % #"="))
       (map #(let [[h & t] %]
               [(str/replace h #"export *" "")
                (str/join "=" t)]))
       (map #(vec (->> % (map str/trim)
                       (map unquote-string))))
       (mapv (fn [[k v]] [(remap-key k) v]))))


(defn- load-env-file
  [filename]
  (if (.exists (io/as-file filename))
    (->> filename
         slurp
         to-pairs
         (into {}))
    {}))


(def extended-env
  (into {} [(load-env-file ".env")]))


(defn env
  ([] extended-env)
  ([k] (k extended-env)))
