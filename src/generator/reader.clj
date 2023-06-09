(ns generator.reader
  (:require
   [clojure.string :as str]
   [generator.utils :refer [capitalize-first]]
   [zen.core]))

(declare ^:private read-schema)
(defonce ^:private target-schema (atom {}))
(defonce ^:private resolved-names (atom {}))
(defonce ^:private visited (atom {}))
(defonce ^:private excluded-imports (atom #{}))

(defn- strip-nils
  [m]
  (reduce (fn [acc [k v]]
            (if (nil? v) acc
                (assoc acc k v))) {} m))

(defn- add-package-name [package-name resource]
  (swap! target-schema assoc-in [package-name resource :package] package-name))

(defn- update-visited [k v]
  (swap! visited assoc k v))

(defn- update-imports [imports-path {confirms :name package-name :package} & [rm]]
  (when package-name
    (let [current (get-in @target-schema (conj imports-path package-name))]
      (if rm
        (do
          (swap! target-schema assoc-in
                 (conj imports-path package-name)
                 (set (filter (fn [item] (not= item confirms)) current)))
          (swap! excluded-imports conj confirms))
        (swap! target-schema assoc-in
               (conj imports-path package-name)
               (if (nil? current)
                 #{confirms} (conj current confirms))))
      :ok)))


(defn- get-package-name [sym]
  (when sym (first (str/split (str sym) #"\."))))

(defn- find-package-name [els]
  (first (filter #(str/starts-with? (str %) "hl7") els)))

(defn- get-resource-name [ztx schema]
  (let [parent (namespace (:zen/name schema))
        sym-name (name (:zen/name schema))
        sub-name (str (->> (str/split
                            (last (str/split parent #"\.")) #"-")
                           (map #(str (str/capitalize (first %)) (subs % 1)))
                           (str/join "")) "" (->> (str/split sym-name #"-")
                                                  (filter #(not= "schema" %))
                                                  (map #(str (str/capitalize (first %)) (subs % 1)))
                                                  (str/join "")))
        main-name (if-let [base (:zen.fhir/type schema)]
                    base
                    (let [other (->> (get @ztx :symbols)
                                     (filter (fn [[sym _]] (= (namespace sym) parent)))
                                     (map (fn [[_ sch]] (:zen.fhir/type sch)))
                                     (remove nil?)
                                     first)]
                      (if other
                        other
                        nil)))]
    {:main main-name
     :sub  (when-not (= (some-> main-name str/lower-case) (some-> sub-name str/lower-case))
             sub-name)}))


(defn- resolve-confirms-name [ztx confirms config]
  (let [result (->>
                confirms
                (filter #(not (contains? #{'zen.fhir/Reference 'zen.fhir/Resource} %)))
                (map
                 (fn [item]
                   (if-let [exist (get @resolved-names item)]
                     exist
                     (let [schema (zen.core/get-symbol ztx item)
                           package (get-package-name item)
                           {main-name :main sub-name :sub} (get-resource-name ztx schema)]
                       (update-visited item false)
                       (swap! resolved-names assoc item
                              {:name    (or sub-name main-name)
                               :package package})
                       {:name    (or sub-name main-name)
                        :package package}))))
                seq)]
    (cond
      (= 2 (count result))
      (let [q (first (filter #(= "Quantity" (:name %)) result))
            s (first (filter #(= "SimpleQuantity" (:name %)) result))]
        (if (and s q)
          s
          (println :WTFINSIDE config result)))
      (> (count result) 1)
      (println :WTF config result)
      (:name (first result))
      (first result)
      :else
      nil)))

(defn- resolve-reference [_ztx confirms]
  (->> confirms
       (filter #(not (contains? #{'zen.fhir/Reference 'zen.fhir/Resource} %)))
       (map (fn [item] (last (str/split (namespace item) #"\."))))
       (filter #(not= "Reference" %))))

(defn not-empty-values? [schema]
  (if (:every schema)
    (or (:type (:every schema)) (:confirms (:every schema)) (:zen.fhir/value-set (:every schema)))
    (or (:type schema) (:confirms schema) (:zen.fhir/value-set schema))))

(defn required-filed? [required k {:keys [confirms parent]}]
  (cond (contains? required k) true
        (not parent) false
        :else (let [parent-node (get-in @target-schema (flatten [(:package confirms) parent
                                                                 (if (= parent (:name confirms)) [:base] [:schemas (:name confirms)]) :properties k]))]
                (true? (:required parent-node)))))

(defn read-from-parent [required-keys {:keys [parent package-name confirms]}]
  (let [parent-schema (get-in @target-schema (flatten [package-name parent
                                                       (if (= parent (:name confirms)) [:base] [:schemas (:name confirms)]) :properties]))]

    (->> (select-keys parent-schema required-keys)
         (reduce-kv (fn [acc k v]
                      (assoc acc k (assoc v :required true))) {}))))

(comment
  (spit "sch.json" (cheshire.core/generate-string (get-schema ztx-root))))


(defn- read-map-keys [ztx map-keys required config]
  (reduce-kv
   (fn [acc k v]
     (if (:fhir/extensionUri v)
       (do
         (println k (:resource config))
         acc)
       (if (not-empty-values? v)
         (let [schema (read-schema ztx v (assoc config :property k))]
           (cond
             (vector? schema)
             (reduce (fn [ac [property target]]
                       (assoc ac (keyword property) (strip-nils (merge target
                                                                       (when (required-filed? required k config)
                                                                         {:required true}))))) acc schema)

             (not-empty schema)
             (assoc acc k (strip-nils (merge schema (when (required-filed? required k config)
                                                      {:required true}))))

             (required-filed? required k config)
             (let [parent-value (get (read-from-parent #{k} config) k)]
               (if (not-empty parent-value)
                 (assoc acc k (strip-nils (merge parent-value (when (required-filed? required k config)
                                                                {:required true})))) acc))
             :else acc))
         acc)))
   {} map-keys))

(defn prettify-polymorphic-name [parent-key property]
  (if (str/starts-with? property "_")
    (str "_" (if parent-key (str (name parent-key) (capitalize-first (subs property 1))) (subs property 1)))
    (str (if parent-key (str (name parent-key) (capitalize-first property)) property))))

(defn parse-polymorphic [ztx parent-key schema imports-path]
  (reduce (fn [acc [k v]]
            (let [n (prettify-polymorphic-name parent-key (name k))
                  base {:kind        "SimpleExtend"
                        :extends     (resolve-confirms-name ztx (:confirms v) {})
                        :description (:zen/desc v)}
                  ast-schema (cond
                               (get v :zen.fhir/reference)
                               (do
                                 (update-imports imports-path {:name "Reference" :package (get-package-name (find-package-name (get-in v [:zen.fhir/reference :refers])))})
                                 (assoc (dissoc base :extends) :reference (resolve-reference ztx (get-in v [:zen.fhir/reference :refers]))
                                        :kind "Reference"))
                               :else base)]
              (conj acc [n ast-schema]))) [] (:keys schema)))

(defn parse-sub-type [ztx schema {:keys [resource parent property package-name] :as names}]

  (let [resource-name (str resource (capitalize-first (name property)))
        sub-type-value (read-schema ztx schema (dissoc names :property))]
    (when (not-empty sub-type-value)
      (when-not (get-in @target-schema [package-name (or parent resource) :schemas resource-name])
        (swap! target-schema assoc-in [package-name (or parent resource) :schemas resource-name]
               (strip-nils sub-type-value)))
      resource-name)))

(defn get-valueset-values [ztx value-set]
  (let [{uri :uri} (zen.core/get-symbol ztx value-set)
        ftr-index (get-in @ztx [:zen.fhir/ftr-index :result "init"])
        result (->> (get-in ftr-index [:valuesets uri])
                    (filter #(not= "http://snomed.info/sct" %))
                    (map (fn [item]
                           (->> (get-in ftr-index [:codesystems item])
                                (filter (fn [[_ value]] (contains? (:valueset value) uri)))
                                keys)))
                    flatten
                    (remove nil?)
                    seq)]
    result))

(defn parse-value-set [ztx schema {:keys [resource property parent package-name] :as config}]
  (let [enum-name (str resource (when property (capitalize-first (name property))))
        sym (get-in schema [:zen.fhir/value-set :symbol])
        result (get-valueset-values ztx sym)]
    (cond
      result (do (swap! target-schema assoc-in (if property [package-name (or parent resource) :schemas enum-name]
                                                   [package-name (or parent resource) :base])
                        (strip-nils {:kind        "Enum"
                                     :description (:zen/desc schema)
                                     :values      result})) {:kind :enum
                                                             :name enum-name})
      (:confirms schema) (:name (resolve-confirms-name ztx (:confirms schema) config))
      :else "string")))

(defmulti parse-by-type (fn [_ztx schema _config] (:type schema)))

(defmethod parse-by-type :default
  [_ztx schema _config]
  (println :unknown schema))

(defmethod parse-by-type 'zen/string
  [_ztx schema {confirms :confirms :as _config}]
  (when (:enum schema)
    (println :enum-here schema))
  (strip-nils
   (cond->
    {:kind        "SimpleType"
     :description (:zen/desc schema)
     :regex       (:regex schema)}
     (and (:name confirms) (not= (:name confirms) "string"))
     (assoc :extends confirms :kind "SimpleExtend")
     :else
     (assoc :type "string"))))

(defmethod parse-by-type 'zen/number
  [_ztx schema {confirms :confirms :as _config}]
  (strip-nils
   (cond-> {:kind        "SimpleType"
            :description (:zen/desc schema)
            :min         (:min schema)
            :max         (:max schema)}
     (:name confirms)
     (assoc :extends confirms :kind "SimpleExtend")
     :else
     (assoc :type "number"))))

(defmethod parse-by-type 'zen/integer
  [_ztx schema {confirms :confirms :as _config}]
  (strip-nils
   (cond-> {:kind        "SimpleType"
            :description (:zen/desc schema)
            :min         (:min schema)
            :max         (:max schema)}
     (:name confirms)
     (assoc :extends confirms :kind "SimpleExtend")
     :else
     (assoc :type "number"))))

(defmethod parse-by-type 'zen/boolean
  [_ztx schema {confirms :confirms :as _config}]
  (strip-nils
   (cond-> {:kind        "SimpleType"
            :description (:zen/desc schema)}
     (:name confirms)
     (assoc :extends confirms :kind "SimpleExtend")
     :else
     (assoc :type "boolean"))))

(defmethod parse-by-type 'zen/map
  [ztx schema {:keys [confirms property imports-path package-name] :as config}]
  (if (:fhir/polymorphic schema)
    (if property (vec (concat [[property {:kind        "Map"
                                          :properties  (read-map-keys ztx (:keys schema) (:require schema) config)
                                          :polymorphic true
                                          :exclusive   (:exclusive-keys schema)}]]
                              (parse-polymorphic ztx property schema imports-path)))
        {:kind        "Map"
         :properties  (reduce (fn [ac [prop target]]
                                (update-imports imports-path (get target :extends))
                                (assoc ac (keyword prop)
                                       (strip-nils
                                        (merge target
                                               (when (contains? (:require schema) prop)
                                                 {:required true}))))) {}
                              (parse-polymorphic ztx property schema imports-path))
         :description (:zen/desc schema)})
    (strip-nils
     (if property
       (let [reference-name (parse-sub-type ztx schema config)]
         (when reference-name {:kind        "SimpleExtend"
                               :extends     {:name    reference-name
                                             :package package-name}
                               :description (:zen/desc schema)}))
       (let [properties (read-map-keys ztx (:keys schema) (:require schema) config)]
         (if (and (empty? properties)
                  (not (get schema :require)))
           nil
           {:kind        "Map"
            :extends     confirms
            :description (:zen/desc schema)
            :properties  (if (empty? properties) (read-from-parent (:require schema) config) properties)}))))))

(defmethod parse-by-type 'zen/vector
  [ztx schema {:keys [imports-path package-name parent property] :as config}]
  (let [confirms (get-in schema [:every :confirms])
        vector-confirms (resolve-confirms-name ztx confirms config)
        sub? (= 'zen/map (get-in schema [:every :type]))
        result {:kind        "Array"
                :description (:zen/desc (:every schema))
                :minItems    (:minItems schema)
                :maxItems    (:maxItems schema)}]

    (cond
      (and (get-in schema [:slicing :slices]) (not (get-in schema [:every :confirms]))) nil
      sub? (let [reference-name (parse-sub-type ztx (:every schema) config)]
             (assoc result :extends {:name    reference-name
                                     :package package-name}))
      (get-in schema [:every :type])
      (merge (read-schema ztx (:every schema) (assoc config :property property)) result)
      (:name vector-confirms)
      (do
        (if (and (contains? (set (map (fn [item] (if (keyword? item) (name item) item)) imports-path)) parent)
                 (str/includes? (:name vector-confirms) parent))
          (update-imports imports-path vector-confirms true)
          (update-imports imports-path vector-confirms))
        (assoc result :extends vector-confirms))
      (get-in schema [:every :zen.fhir/reference])
      (do
        (update-imports imports-path {:name "Reference" :package (get-package-name (find-package-name confirms))})
        (assoc result :reference (resolve-reference ztx (get-in schema [:every :zen.fhir/reference :refers]))))
      :else (do
              (update-imports imports-path vector-confirms)
              result))))

(defmethod parse-by-type nil
  [ztx schema {:keys [imports-path confirms package-name] :as config}]
  (let [reference (:zen.fhir/reference schema)]
    (cond
      reference
      (do
        (update-imports imports-path {:name "Reference" :package
                                      (or (get-package-name (find-package-name (get reference :refers))) package-name)})
        {:kind        "Reference"
         :reference   (resolve-reference ztx (:refers reference))
         :description (:zen/desc schema)})
      (and (:zen.fhir/value-set schema) (= :required (get-in schema [:zen.fhir/value-set :strength])) #_(not (contains? #{"CodeableConcept" "Quantity"} confirms)))
      (let [vs (parse-value-set ztx schema config)]
        (when (and (not= "string" vs) (not (:name vs)))
          (update-imports imports-path {:name vs :package package-name}))
        {:kind        "SimpleExtend"
         :extends     {:name    (or (:name vs) vs)
                       :package package-name}
         :description (:zen/desc schema)})
      :else
      {:kind        "SimpleExtend"
       :extends     confirms
       :description (:zen/desc schema)})))



(defn- read-schema [ztx schema {:keys [imports-path resource package-name parent] :as config}]
  (let [confirms (when (and (:confirms schema)
                            (not= :required (get-in schema [:zen.fhir/value-set :strength])))
                   (resolve-confirms-name ztx (:confirms schema) config))]
    (when (and (contains? (set (map (fn [item] (if (keyword? item) (name item) item)) imports-path)) parent)
               (str/includes? resource parent))
      (update-imports imports-path {:name    resource
                                    :package package-name} true))
    (when confirms
      (update-imports imports-path confirms))
    (parse-by-type ztx schema (assoc config :confirms confirms))))


(defn read-source-schema [ztx sym & [opts]]
  (when (:init opts)
    (reset! target-schema {}))
  (when-let [schema (zen.core/get-symbol ztx sym)]
    (let [package-name (or (:package opts) (get-package-name sym))
          wrong-main-names #{"code" "CodeableConcept" "Quantity"}
          {main-name :main sub-name :sub} (get-resource-name ztx schema)
          base-path [package-name (cond
                                    (and sub-name main-name
                                         (not (contains? wrong-main-names main-name)))
                                    main-name
                                    sub-name
                                    sub-name
                                    main-name
                                    main-name)]
          target-path (flatten (conj base-path (cond
                                                 (and sub-name main-name
                                                      (not (contains? wrong-main-names main-name)))
                                                 [:schemas sub-name]
                                                 sub-name
                                                 [:base]
                                                 main-name
                                                 [:base])))

          parsed (read-schema ztx schema
                              {:base-path    base-path
                               :imports-path (conj base-path :imports)
                               :resource     (or sub-name main-name)
                               :parent       (when (and sub-name (not (contains? wrong-main-names main-name))) main-name)
                               :package-name package-name})]
      (update-visited sym true)
      (add-package-name package-name (if (and sub-name (contains? #{"Quantity" "canonical"} main-name))
                                       sub-name
                                       (or main-name sub-name)))
      (swap! target-schema assoc-in
             target-path parsed)
      (->> (filter (fn [[_ v]] (false? v)) @visited)
           keys
           (mapv #(read-source-schema ztx %)))
      (when (:return opts)
        {:name (or sub-name main-name)
         :result @target-schema}))))


(def schema target-schema)
(defn reset-schema []
  (reset! target-schema {})
  (reset! visited {})
  (reset! resolved-names {}))

