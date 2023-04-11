(ns generator.types-generation
  (:require [zen.schema :as sut]
            [zen.core]
            [zen.package]
            [zen.utils]
            [generator.utils :as gut]
            [clojure.java.io :as io]
            [clojure.string :as str]
            [clojure.set :as set]
            [clojure.java.shell :as shell]
            [clojure.edn :as edn]
            [taoensso.nippy :as nippy]
            [clojure.pprint :as pp]))

(def premitives-map
  {:integer "number"
   :string "string"
   :number "number"
   :boolean "boolean"
   :datetime "dateTime"
   :any "any"})

(def prepared-interfaces
  {:onekey-type "type OneKey<T extends Record<string, unknown>> = { [K in keyof T]-?:\n
                          ({ [P in K]: T[K] } & { [P in Exclude<keyof T, K>]?: never }) extends infer O ? { [P in keyof O]: O[P] } : never\n
                       }[keyof T];\n"
   :require-at-least-one-type "type RequireAtLeastOne<T> = { [K in keyof T]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>>; }[keyof T];\n"
   :reference-type "export type Reference<T extends ResourceType> = {\nid: string;\nresourceType: T;\ndisplay?: string;\n};\n"
   :reference-type-fhir "export type Reference<T extends ResourceType> = {\nreference: string;\ndisplay?: string;\n};\n"
   :resourcetype-type "}\n\nexport type ResourceType = keyof ResourceTypeMap;\n"
   :subs-subscription "export interface SubsSubscription extends DomainResource<'SubsSubscription'> {\nstatus: 'active' | 'off';
                       trigger: Partial<Record<ResourceType, { event: Array<'all' | 'create' | 'update' | 'delete'>; filter?: unknown }>>;
                       channel: {\ntype: 'rest-hook';\nendpoint: string;\npayload?: { content: string; contentType: string; context: unknown };
                       headers?: Record<string, string>;\ntimeout?: number;\n};\n}"})

(def non-parsable-premitives
  {:string "string"
   :number "number"
   :boolean "boolean"})

(defn exclusive-keys-child? [vtx]
  (and (> (count (:exclusive-keys vtx)) 0) (> (count (:path vtx)) 1)
       (or (contains? (:exclusive-keys vtx) (str/join "." (pop (pop (:path vtx)))))
           (contains? (:exclusive-keys vtx) (str/join "." (pop (:path vtx)))))))

(defn keys-in-array-child? [vtx]
  (and (> (count (:keys-in-array vtx)) 0) (> (count (:path vtx)) 1)
       (contains? (:keys-in-array vtx) (str/join "." (:path vtx)))))

(defn get-reference-union-type [vtx references]
  (str "Reference<"
       (if (empty? references) "ResourceType"
           (str/join " | " (map (fn [item]
                                  (cond
                                    (= (name item) "schema") (str "'" (first (gut/set-to-string vtx #{item})) "'")
                                    :else (str "'" (name item) "'"))) references)))
       ">"))

(defn generate-type-value
  [data vtx]
  (if (:confirms data)
    (if
     (get-in data [:zen.fhir/reference :refers])
      (get-reference-union-type vtx (gut/set-to-string vtx (get-in data [:zen.fhir/reference :refers])))
      (str/join " | " (gut/set-to-string vtx (:confirms data))))
    (if
     ((keyword (name (:type data))) premitives-map)
      ((keyword (name (:type data))) premitives-map)
      (name (:type data)))))

(defn generate-type [vtx data]
  (when (and (empty? (:ts vtx))
             (not ((keyword (:interface-name vtx)) non-parsable-premitives)))
    (str "type " (:interface-name vtx)  " = " (generate-type-value data vtx))))

(defn get-confirms-type [vtx confirms]
  (cond
    (= (:interface-name vtx) "Resource") nil
    (= (first (gut/set-to-string vtx confirms)) "DomainResource")
    "DomainResource"
    (= (first confirms) 'zen.fhir/Resource) "Resource"
    :else (first (gut/set-to-string vtx confirms))))

(defn generate-interface [vtx {confirms :confirms}]
  (let [extended-resource (get-confirms-type vtx confirms)
        extand (cond
                 (= (:interface-name vtx) "DomainResource")
                 ""
                 (not extended-resource)
                 ""
                 (or (= (first confirms) 'zenbox/Resource) (= extended-resource "Resource"))
                 (format " extends Resource<'%s'>" (:interface-name vtx))
                 (not= extended-resource "zen.fhir")
                 (if (= extended-resource "DomainResource")
                   (format " extends %s<'%s'>" extended-resource (:interface-name vtx))
                   (format " extends %s " extended-resource))

                 :else " ")]

    (str "export interface " (:interface-name vtx) extand)))

(defn generate-name
  [vtx data]
  (str (gut/get-desc data)
       (if (:is-type vtx)
         (generate-type vtx data)
         (generate-interface vtx data))))

(defn get-valueset-values [ztx value-set]
  (let [{uri :uri} (zen.core/get-symbol ztx value-set)
        ftr-index (get-in @ztx [:zen.fhir/ftr-index "init"])
        result (->>  (get-in ftr-index [:valuesets uri])
                     (filter #(not= "http://snomed.info/sct" %))
                     (map (fn [item]
                            (->> (get-in ftr-index [:codesystems item])
                                 (filter (fn [[_ value]] (contains? (:valueset value) uri)))
                                 keys)))
                     flatten
                     (remove nil?)
                     seq)]
    result))

(defn generate-valueset-type [ztx vtx schema]
  (let [confirms (first (gut/set-to-string vtx (:confirms schema)))
        valueset-values (get-valueset-values ztx (get-in schema [:zen.fhir/value-set :symbol]))]
    (cond
      (= confirms "CodeableConcept") "CodeableConcept"
      (or (> (count valueset-values) 20) (= (count valueset-values) 0)) "string"
      :else (str/join " | " (map #(format "'%s'" %) valueset-values)))))
(contains? #{'zen.fhir/Reference} 'zen.fhir/Reference)
(defn generate-confirms [vtx schema]
  (str
   (cond
     (contains? (:confirms schema) 'zen.fhir/Reference)
     (get-reference-union-type vtx (:refers (:zen.fhir/reference schema)))
     (= (first (gut/set-to-string vtx (:confirms schema))) "BackboneElement") ""
     :else (str (first (gut/set-to-string vtx (:confirms schema)))))))

(defn get-exclusive-keys-values [ztx vtx exclusive-keys ks]
  (str/join "\n" (map (fn [k]
                        (let [value (if (:zen.fhir/value-set (k ks)) (generate-valueset-type ztx vtx (k ks)) (generate-confirms vtx (k ks)))]
                          (format "%s?: %s;" (name k) value))) exclusive-keys)))

(defn get-exclusive-keys-type [ztx vtx schema]
  (let [ks (:keys schema)
        exclusive-keys (first (:exclusive-keys schema))
        non-exclusive-keys (set/difference (set (keys ks)) exclusive-keys)
        non-exclusive-keys-type (if (= (count non-exclusive-keys) 0) ""
                                    (format "{ %s } & "
                                            (get-exclusive-keys-values ztx vtx non-exclusive-keys ks)))
        exclusive-keys-type (get-exclusive-keys-values ztx vtx exclusive-keys ks)]

    (format "RequireAtLeastOne<%sOneKey<{ %s }>>" non-exclusive-keys-type exclusive-keys-type)))

(zen.schema/register-compile-key-interpreter!
 [:keys ::ts]
 (fn [_ ztx ks]
   (fn [vtx data opts]
    ;;  (println "COMPILE")
    ;;  (pp/pprint (:ts vtx))
    ;;  (pp/pprint data)
     (if-let [s (or (when (:zen.fhir/type data) (generate-name vtx data))
                    (when (:exclusive-keys data) (get-exclusive-keys-type ztx vtx data))
                    (when (exclusive-keys-child? vtx) "")
                    (when (keys-in-array-child? vtx) "")
                    (when (:enum data) "")
                    (when (and (= (:validation-type data) :open) (not (:keys data))) "any")
                    (when (:confirms data)
                      (if (:zen.fhir/value-set data) (generate-valueset-type ztx vtx data) (generate-confirms vtx data)))
                    (when-let [tp (and
                                   (= (:type vtx) 'zen/symbol)
                                   (not (= (last (:path vtx)) :every))
                                   (not (:enum data))
                                   (or (= (:type data) 'zen/string)
                                       (= (:type data) 'zen/number)
                                       (= (:type data) 'zen/boolean)
                                       (= (:type data) 'zen/datetime)
                                       (= (:type data) 'zen/integer)
                                       (= (:type data) 'zen/any))
                                   (:type data))]
                      ((keyword (name tp)) premitives-map))
                    (when (and (= (last (:path vtx)) :every) (= (last (:schema vtx)) 'zen/string))
                      "string "))]
       (update vtx :ts conj s)
       vtx))))

(zen.schema/register-schema-pre-process-hook!
 ::ts
 (fn [ztx schema]
   (fn [vtx data opts]
     (let [new-vtx (cond
                     (and (not (:keys data)) (empty? (:path vtx)))
                     (assoc vtx :is-type true)
                     (or (and (:confirms data) (:keys data)) (:require data))
                     (gut/update-require-and-keys-in-array vtx data)
                     (:exclusive-keys data)
                     (update vtx :exclusive-keys conj (gut/generate-exclusive-keys vtx data))
                     :else vtx)]

       (cond
         (= (last (:path new-vtx)) :zen.fhir/type) new-vtx
         (exclusive-keys-child? new-vtx) new-vtx
         (= (last (:schema new-vtx)) :enum)
         (update new-vtx :ts conj (gut/generate-enum data))
         (= (last (:schema new-vtx)) :values)
         (update new-vtx :ts conj (gut/get-desc data) (gut/generate-values new-vtx))
         (and (= (last (:path new-vtx)) :keys) (= (:interface-name vtx) "Resource"))
         (update new-vtx :ts conj "<T extends string = ResourceType> { \n resourceType: T;")
         (and (= (last (:path new-vtx)) :keys) (= (:interface-name vtx) "DomainResource"))
         (update new-vtx :ts conj "<T extends string = 'DomainResource'> extends Resource<T> {\n")
         (= (last (:path new-vtx)) :keys) (update new-vtx :ts conj "{ ")
         (= (last (:schema new-vtx)) :every) (update new-vtx :ts conj "Array<")
         :else new-vtx)))))

(zen.schema/register-schema-post-process-hook!
 ::ts
 (fn [ztx schema]
   (fn [vtx data opts]
     (cond
       (exclusive-keys-child? vtx) vtx
       (= (last (:path vtx)) :keys) (update vtx :ts conj " }")
       (= (last (:schema vtx)) :every) (update vtx :ts conj ">")
       (= (last (:schema vtx)) :values) (update vtx :ts conj ";")))))

(defn read-versions [ztx path]
  (println "Reading zen packages...")
  (with-open [zen-project (io/reader (str path "/zrc/system.edn"))]
    (mapv (fn [package]
            (println "Reading " package)
            (zen.core/read-ns ztx (symbol package))) (:import (edn/read (java.io.PushbackReader. zen-project))))))

(defn get-ftr-index
  [ztx path]
  (let [in (clojure.java.io/input-stream path)
        out (java.io.ByteArrayOutputStream.)
        _ (clojure.java.io/copy in out)
        ftr-index (->> (.toByteArray out)
                       (nippy/thaw))]

    (swap! ztx assoc :zen.fhir/ftr-index ftr-index)))

(defn generate-types-for-version [path version result-file-path]
  (let [ztx  (zen.core/new-context {:package-paths [path]})
        _ (read-versions ztx path)
        schema (:schemas (zen.core/get-symbol ztx (symbol (str version "/base-schemas"))))
        structures (:schemas (zen.core/get-symbol ztx (symbol (str version "/structures"))))
        path-to-ftr-index (str path "/zen-packages/" version "/index.nippy")]

    (zen.core/read-ns ztx 'hl7-fhir-r4-core.value-set.clinical-findings)
    (println "Building FTR index...")

    (when (.exists (io/file path-to-ftr-index)) (get-ftr-index ztx path-to-ftr-index))

    (println (str version " resource generation..."))
    (mapv (fn [[k _v]]
            (zen.core/read-ns ztx (symbol (str version "." k)))
            (zen.core/get-symbol ztx (symbol (str version "." k "/schema")))
            (let [schemas-result (when (not (re-find #"-" k))
                                   (zen.schema/apply-schema ztx
                                                            {:ts []
                                                             :require {}
                                                             :interface-name k
                                                             :is-type false
                                                             :version version
                                                             :keys-in-array {}
                                                             :exclusive-keys {}}
                                                            (zen.core/get-symbol ztx 'zen/schema)
                                                            (zen.core/get-symbol ztx (symbol (str version "." k "/schema")))
                                                            {:interpreters [::ts]}))]
              (spit result-file-path (str/join "" (conj (:ts schemas-result) "\n")) :append true))) schema)

    (mapv (fn [[_k v]]
            (let [n (str/trim (str/replace (namespace v) (str version ".") ""))
                  schema (zen.core/get-symbol ztx (symbol v))
                  structures-result (when (and (or (:type schema) (:confirms schema) (:keys schema)) (not (re-find #"-" n)) (not= n "Reference"))
                                      (zen.schema/apply-schema ztx
                                                               {:ts []
                                                                :require {}
                                                                :exclusive-keys {}
                                                                :interface-name n
                                                                :version version
                                                                :keys-in-array {}}
                                                               (zen.core/get-symbol ztx 'zen/schema)
                                                               (zen.core/get-symbol ztx (symbol v))
                                                               {:interpreters [::ts]}))]

              (spit result-file-path (str/join "" (conj (:ts structures-result) "\n")) :append true))) structures)
    :ok))

(defn get-searches [ztx versions]
  (println "Generating search parameters...")
  (reduce (fn [acc version]
            (zen.core/read-ns ztx (symbol version))
            (concat acc (:searches (zen.core/get-symbol ztx (symbol version))))) [] versions))

(defn get-schemas [ztx, versions]
  (println "Getting schemas...")
  (reduce
   (fn [acc version]
     (zen.core/read-ns ztx (symbol version))
     (concat acc (keys (:schemas (zen.core/get-symbol ztx (symbol version)))))) [] versions))

(defn get-resources [schema]
  (mapv (fn [n]
          (format "%s: %s;" n n))
        (distinct (conj schema "SubsSubscription"))))

(defn search-params-generator [ztx, searches]
  (reduce
   (fn [acc [_ v]]
     (reduce
      (fn [second-acc item]
        (zen.core/read-ns ztx (symbol (namespace (last item))))
        (let [sym (last item)
              schema (zen.core/get-symbol ztx (symbol sym))
              schema-keys (keys (:expr schema))
              type (:fhir/type schema)
              attribute-name (:name schema)]

          (reduce
           (fn [third-acc item]
             (let [is-token (= type "token")
                   token-type (when is-token (some #(:type %) (:data-types ((keyword item) (:expr schema)))))
                   token-parsed-type (when token-type ((keyword token-type) non-parsable-premitives))]
               (update-in third-acc [item] assoc
                          (keyword attribute-name)
                          (cond (= type "reference")
                                "`${ResourceType}/${string}`"
                                is-token
                                (if token-type
                                  (if token-parsed-type token-parsed-type "string")
                                  "string")
                                (or (= type "special") (= type "quantity"))
                                "string"
                                :else type))))
           second-acc
           schema-keys)))
      acc v))
   {} searches))

(defn get-search-params [ztx, searches]
  (mapv (fn [[k v]]
          (str (name k) ": {\n"
               (str/join "" (mapv (fn [[k1 v1]] (str "'" (name k1) "'" ": " v1 ";")) v)) "\n};\n"))
        (search-params-generator ztx searches)))

(defn generate-types [path api-type result-file-path]
  (let [ztx  (zen.core/new-context {:package-paths [path]})
        _ (read-versions ztx path)
        searches (get-searches ztx (zen.core/get-tag ztx 'zen.fhir/searches))
        schema  (get-schemas ztx (zen.core/get-tag ztx 'zen.fhir/base-schemas))
        resource-type-map-interface "export interface ResourceTypeMap {\n"
        resourcetype-type (:resourcetype-type prepared-interfaces)
        reference-type (if (= api-type "fhir")
                         (:reference-type-fhir prepared-interfaces)
                         (:reference-type prepared-interfaces))
        onekey-type (:onekey-type prepared-interfaces)
        require-at-least-one-type (:require-at-least-one-type prepared-interfaces)
        subs-subscription (:subs-subscription prepared-interfaces)
        key-value-resources (get-resources schema)
        resource-map-result (conj (into [reference-type onekey-type require-at-least-one-type resource-type-map-interface] key-value-resources) resourcetype-type subs-subscription)
        search-params-start-interface "export interface SearchParams extends Record<ResourceType, unknown> {\n"
        search-params-end-interface "\n}"
        search-params-content (get-search-params ztx searches)
        search-params-result (conj (into [search-params-start-interface]  search-params-content) search-params-end-interface)]
    (println "schema" schema)
    (spit result-file-path (str/join ""  resource-map-result) :append true)

    (println "Type generation...")
    (mapv (fn [tag]
            (generate-types-for-version path (namespace tag) result-file-path)) (zen.core/get-tag ztx 'zen.fhir/base-schemas))

    (spit result-file-path (str/join "" search-params-result) :append true)))

(defn get-sdk [path api-type]
  (io/make-parents (str path "/package/index.js"))
  (with-open [zen-project (io/reader (str path "/zen-package.edn"))]
    (first (:deps (edn/read (java.io.PushbackReader. zen-project)))))
  (with-open [in (io/input-stream (clojure.java.io/resource "index.js"))]
    (io/copy in (clojure.java.io/file (str path "/package/index.js"))))
  (with-open [in (io/input-stream (clojure.java.io/resource "index.d.ts"))]
    (io/copy in (clojure.java.io/file (str path "/package/index.d.ts"))))
  (with-open [in (io/input-stream (clojure.java.io/resource "package.json"))]
    (io/copy in (clojure.java.io/file (str path "/package/package.json"))))

  (generate-types path api-type "./package/aidbox-types.d.ts")
  (println "Archive generation")
  (shell/sh "bash" "-c" (str " tar -czvf ../aidbox-javascript-sdk-v1.0.0.tgz -C package ."
                             " && rm -rf package"))
  (println "Done")

  (System/exit 0))

(defn get-types [path api-type]
  (generate-types path api-type "../aidbox-types.d.ts")
  (println "Done"))

(comment
  (def ztx (zen.core/new-context {}))

  (def my-structs-ns
    '{:ns my-sturcts

      defaults
      {:zen/tags #{zen/property zen/schema}
       :type zen/boolean}

      User
      {:zen/tags #{aidbox.repository.v1/repository zen/schema zen.fhir/base-schema},
       :confirms #{zen.fhir/Resource},
       :extra-parameter-sources :all,
       :zen.fhir/version "0.5.11",
       :zen.fhir/type "Task",
       :keys {:to {:type zen/vector,
                   :every {:type zen/string}}},
       :type zen/map}})

  (zen.core/load-ns ztx my-structs-ns)

  (def r
    (sut/apply-schema ztx
                      {:ts []
                       :require {}
                       :exclusive-keys {}
                       :is-type false
                       :interface-name "User"
                       :version "custom"
                       :keys-in-array {}}
                      (zen.core/get-symbol ztx 'zen/schema)
                      (zen.core/get-symbol ztx 'my-sturcts/User)
                      {:interpreters [::ts]}))

  (println (:ts r))
  (str/join "" (::ts r)))

#_(comment
  ;; CLASSPATH
  ;; :paths (path to zrc/)
  ;; :package-paths (path to a project. project = dir with zrc/ and zen-package.edn)

    (zen.package/zen-init-deps! "/Users/pavel/Desktop/zen/test/test_project")

    (def ztx
      (zen.core/new-context
       {:package-paths ["/Users/ross/Desktop/HS/aidbox-sdk-js/zen-project"]}))

    (zen.core/read-ns ztx 'hl7-fhir-r4-core)
    (zen.core/read-ns ztx 'custom)
    (zen.core/get-symbol ztx 'hl7-fhir-r4-core/ig)
    (zen.core/read-ns ztx 'hl7-fhir-r4-core.Patient)
    (zen.core/get-symbol ztx 'hl7-fhir-r4-core.Patient/schema)
    (zen.core/read-ns ztx 'hl7-fhir-r4-core.value-set.clinical-findings)
    (zen.core/get-symbol ztx 'hl7-fhir-r4-core.value-set.clinical-findings/value-set)
    (get-ftr-index ztx "/Users/ross/Desktop/HS/zen/test_project/zen-packages/hl7-fhir-r4-core/index.nippy")
    (zen.core/get-symbol ztx 'hl7-fhir-r4-core.value-set.clinical-findings/value-set)
    (get-valueset-values ztx 'hl7-fhir-r4-core.value-set.clinical-findings/value-set)

    (get-in @ztx [:zen.fhir/ftr-index "init"])

    (defn generate-types []
      (let [result-file-path "./result.ts"
            _ (read-versions ztx "/Users/ross/Desktop/HS/aidbox-sdk-js/zen-project")
            schema (:schemas (zen.core/get-symbol ztx 'hl7-fhir-r4-core/base-schemas))
            structures (:schemas (zen.core/get-symbol ztx 'hl7-fhir-r4-core/structures))
            searches (:searches (zen.core/get-symbol ztx 'hl7-fhir-r4-core/searches))
            custom-resources ('aidbox.repository.v1/repository (:tags @ztx))
            custom-resources-names (map (fn [resource] (name resource)) custom-resources)
            reference-type (:reference-type prepared-interfaces)
            onekey-type (:onekey-type prepared-interfaces)
            require-at-least-one-type (:require-at-least-one-type prepared-interfaces)
            subs-subscription (:subs-subscription prepared-interfaces)
            resource-type-map-interface "export interface ResourceTypeMap {\n"
            resourcetype-type "}\n\nexport type ResourceType = keyof ResourceTypeMap;\n"
            key-value-resources (mapv (fn [n]
                                        (format "%s: %s;" n n))
                                      (conj (concat (map (fn [[k _v]] k) schema) custom-resources-names) "SubsSubscription"))
            search-params-start-interface "export interface SearchParams extends Record<ResourceType, unknown> {\n"
            search-params-end-interface "\n}"
            search-params-content (mapv (fn [[k v]]
                                          (println k v)
                                          (str (name k) ": {\n"
                                               (str/join "" (mapv (fn [[k1 v1]] (str "'" (name k1) "'" ": " v1 ";")) v)) "\n};\n"))
                                        (reduce (fn [acc [_ v]]
                                                  (reduce (fn [third-acc item]
                                                            (zen.core/read-ns ztx (symbol (namespace (last item))))
                                                            (let [sym (last item)
                                                                  schema (zen.core/get-symbol ztx (symbol sym))
                                                                  schema-keys (keys (:expr schema))
                                                                  type (:fhir/type schema)
                                                                  attribute-name (:name schema)]

                                                              (reduce (fn [second-acc item]
                                                                        (update-in second-acc [item] assoc (keyword attribute-name) (cond (= type "reference")
                                                                                                                                          "`${ResourceType}/${string}`"
                                                                                                                                          (= type "token")
                                                                                                                                          (if (some #(:type %) (:data-types ((keyword item) (:expr schema))))
                                                                                                                                            (some #(:type %) (:data-types ((keyword item) (:expr schema))))
                                                                                                                                            "string")
                                                                                                                                          (or (= type "special") (= type "quantity"))
                                                                                                                                          "string"
                                                                                                                                          :else type)))
                                                                      third-acc
                                                                      schema-keys))) acc v))
                                                {} searches))
            resource-map-result (conj (into [reference-type onekey-type require-at-least-one-type resource-type-map-interface] key-value-resources) resourcetype-type subs-subscription)
            search-params-result (conj (into [search-params-start-interface]  search-params-content) search-params-end-interface)]
        (clojure.pprint/pprint (:tags @ztx))
        (println "end")
        (spit result-file-path (str/join ""  resource-map-result) :append true)
        (zen.core/read-ns ztx 'hl7-fhir-r4-core.value-set.clinical-findings)
        (mapv (fn [[k _v]]
                (println k)
                (zen.core/read-ns ztx (symbol (str "hl7-fhir-r4-core." k)))
                (zen.core/get-symbol ztx (symbol (str "hl7-fhir-r4-core." k "/schema")))
                (let [schemas-result (when (not (re-find #"-" k))
                                       (zen.schema/apply-schema ztx
                                                                {:ts []
                                                                 :require {}
                                                                 :interface-name k
                                                                 :version "hl7-fhir-r4-core"
                                                                 :is-type false
                                                                 :keys-in-array {}
                                                                 :exclusive-keys {}}
                                                                (zen.core/get-symbol ztx 'zen/schema)
                                                                (zen.core/get-symbol ztx (symbol (str "hl7-fhir-r4-core." k "/schema")))
                                                                {:interpreters [::ts]}))]
                  (spit result-file-path (str/join "" (conj (:ts schemas-result) "\n")) :append true))) schema)

        (mapv (fn [resource]
              ;; (println "resource" resource)
                (let [n (name resource)
                      schemas-result
                      (zen.schema/apply-schema ztx
                                               {:ts []
                                                :require {}
                                                :interface-name n
                                                :is-type false
                                                :keys-in-array {}
                                                :exclusive-keys {}}
                                               (zen.core/get-symbol ztx 'zen/schema)
                                               (zen.core/get-symbol ztx (symbol resource))
                                               {:interpreters [::ts]})]
                  (spit result-file-path (str/join "" (conj (:ts schemas-result) "\n")) :append true))) custom-resources)

        (mapv (fn [[_k v]]
                (let [n (str/trim (str/replace (namespace v) #"hl7-fhir-r4-core." ""))
                      schema (zen.core/get-symbol ztx (symbol v))
                      structures-result (when (and (or (:type schema) (:confirms schema) (:keys schema)) (not (re-find #"-" n)) (not= n "Reference"))
                                          (zen.schema/apply-schema ztx
                                                                   {:ts []
                                                                    :require {}
                                                                    :exclusive-keys {}
                                                                    :interface-name n
                                                                    :version "hl7-fhir-r4-core"
                                                                    :keys-in-array {}}
                                                                   (zen.core/get-symbol ztx 'zen/schema)
                                                                   (zen.core/get-symbol ztx (symbol v))
                                                                   {:interpreters [::ts]}))]

                  (spit result-file-path (str/join "" (conj (:ts structures-result) "\n")) :append true))) structures)
        (spit result-file-path (str/join "" search-params-result) :append true)
        :ok))
    (generate-types))

