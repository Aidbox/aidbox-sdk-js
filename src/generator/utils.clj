(ns generator.utils
  (:require [clojure.string :as str]))

(defn capitalize-first [s]
  (if (empty? s)
    ""
    (str (str/upper-case (subs s 0 1)) (subs s 1))))

(defn handle-int-values [v]
  (if (re-matches #"^\d+" (first (str/split v #""))) (str "Num" v) v))

(defn wrap-inccorect-syms [v]
  (if (some #(re-matches #"[^a-zA-Z0-9]" %) (str/split v #"")) (format "\"%s\"" v) v))

(defn prettify-name [n]
  (let [prettified-n (handle-int-values n)
        result (if (str/includes? prettified-n "-")
                 (->> (str/split prettified-n #"-")
                      (mapv handle-int-values)
                      (mapv capitalize-first)
                      (str/join "")) (capitalize-first prettified-n))]
    (wrap-inccorect-syms result)))

(defn prettify-key [k]
  (if (str/includes? k "-")
    (->> (str/split k #"-")
         (map-indexed (fn [idx item]
                        (if (= 0 idx) item
                            (capitalize-first item))))
         (str/join "")) k))

(defn get-reference-union-type [refs]
  (if (= (count refs) 0) "" (str "<" (str/join " | " (map #(str "'" % "'") refs)) ">")))


