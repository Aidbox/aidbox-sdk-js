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
  {:onekey-type "export type OneKey<T extends Record<string, unknown>> = { [K in keyof T]-?:\n
                          ({ [P in K]: T[K] } & { [P in Exclude<keyof T, K>]?: never }) extends infer O ? { [P in keyof O]: O[P] } : never\n
                       }[keyof T];\n"
   :require-at-least-one-type "export type RequireAtLeastOne<T> = { [K in keyof T]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>>; }[keyof T];\n"
   :reference-type "export type Reference<T extends ResourceType> = {\nid: string;\nresourceType: T;\ndisplay?: string;\n};\n"
   :reference-type-fhir "export type Reference<T extends ResourceType> = {\nreference: string;\ndisplay?: string;\n};\n"
   :resourcetype-type "export type ResourceType = keyof ResourceTypeMap;\n"
   :modify-type "export type Modify<T, R> = Omit<T, keyof R> & R;"
   :subs-subscription "export interface SubsSubscription extends DomainResource<'SubsSubscription'> {\nstatus: 'active' | 'off';
                       trigger: Partial<Record<ResourceType, { event: Array<'all' | 'create' | 'update' | 'delete'>; filter?: unknown }>>;
                       channel: {\ntype: 'rest-hook';\nendpoint: string;\npayload?: { content: string; contentType: string; context: unknown };
                       headers?: Record<string, string>;\ntimeout?: number;\n};\n}"})

(defn get-resourcetype-type [map-name] (str "type ResourceType = keyof " map-name ";\n"))

(defn get-resource-map-name [version] (str (gut/prettify-name version) "ResourceTypeMap"))

(def non-parsable-premitives
  {:string "string"
   :number "number"
   :boolean "boolean"})

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
        interface-name (:interface-name vtx)
        extand (cond
                 (and (some #(= interface-name %) (:duplicates vtx))
                      (= (:version vtx) "custom"))
                 (format " extends Modify<%s['%s']," (get-resource-map-name (:fhir-version vtx)) interface-name)
                 (= interface-name "DomainResource")
                 ""
                 (not extended-resource)
                 ""
                 (or (= (first confirms) 'zenbox/Resource) (= extended-resource "Resource"))
                 (format " extends Resource<'%s'>" interface-name)
                 (not= extended-resource "zen.fhir")
                 (if (= extended-resource "DomainResource")
                   (format " extends %s<'%s'>" extended-resource interface-name)
                   (format " extends %s " extended-resource))

                 :else " ")]

    (str "export interface " interface-name extand)))

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
     (if-let [s (or (when (:zen.fhir/type data) (generate-name vtx data))
                    (when (:exclusive-keys data) (get-exclusive-keys-type ztx vtx data))
                    (when (gut/exclusive-keys-child? vtx) "")
                    (when (gut/keys-in-array-child? vtx) "")
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
         (gut/exclusive-keys-child? new-vtx) new-vtx
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
       (gut/exclusive-keys-child? vtx) vtx
       (= (last (:path vtx)) :keys) (update vtx :ts conj " }")
       (= (last (:schema vtx)) :every) (update vtx :ts conj ">")
       (= (last (:schema vtx)) :values) (update vtx :ts conj ";")))))

(defn read-versions [ztx zen-path]
  (println "Reading zen packages...")
  (with-open [zen-project (io/reader (str zen-path "/zrc/system.edn"))]
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

(defn generate-types-for-version [ztx zen-path version result-folder-path fhir-version duplicates]
  (let [schema (:schemas (zen.core/get-symbol ztx (symbol (str version "/base-schemas"))))
        resource-names  (keys schema)
        key-value-resources (gut/get-keyvalue-resources (distinct (into resource-names duplicates)))
        structures (:schemas (zen.core/get-symbol ztx (symbol (str version "/structures"))))
        path-to-ftr-index (str zen-path "/zen-packages/" version "/index.nippy")
        result-file-path (str result-folder-path "/" version ".d.ts")
        import-for-custom (format "import { %s, Resource, CodeableConcept } from \"./%s.ts\";"
                                  (get-resource-map-name fhir-version) fhir-version)
        import "import { Reference, RequireAtLeastOne, OneKey, Modify } from \"./aidbox-types.ts\";\n"
        resource-map-name (get-resource-map-name version)
        resourcetype-type (get-resourcetype-type resource-map-name)
        resource-type-map-interface (str "export interface " resource-map-name " {\n")
        resource-type-map (str/join "\n" (conj (into [resource-type-map-interface] key-value-resources) "}"))
        defaults [(when (= version "custom") import-for-custom) import resourcetype-type resource-type-map]]
    (println "Building FTR index...")
    (when (.exists (io/file path-to-ftr-index)) (get-ftr-index ztx path-to-ftr-index))

    (spit result-file-path (str/join "" defaults))

    (println (str version " resource generation..."))
    (mapv (fn [[k _v]]
            (zen.core/read-ns ztx (symbol (str version "." k)))
            (zen.core/get-symbol ztx (symbol (str version "." k "/schema")))
            (let [closing-modify-type (when (and (= version "custom") (some #(= k %) duplicates)) "> {}")
                  schemas-result (when (not (re-find #"-" k))
                                   (zen.schema/apply-schema ztx
                                                            {:ts []
                                                             :require {}
                                                             :interface-name k
                                                             :is-type false
                                                             :version version
                                                             :duplicates duplicates
                                                             :fhir-version fhir-version
                                                             :keys-in-array {}
                                                             :exclusive-keys {}}
                                                            (zen.core/get-symbol ztx 'zen/schema)
                                                            (zen.core/get-symbol ztx (symbol (str version "." k "/schema")))
                                                            {:interpreters [::ts]}))]
              (spit result-file-path
                    (str/join "" (conj (:ts schemas-result) closing-modify-type "\n")) :append true))) schema)

    (mapv (fn [[_k v]]
            (let [n (gut/get-structure-name v)
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

(defn filter-structures [ztx structures]
  (filter (fn [[_k v]]
            (zen.core/read-ns ztx (symbol (namespace v)))
            (let [n (gut/get-structure-name v)
                  schema (zen.core/get-symbol ztx (symbol v))]
              (and (or (:type schema) (:confirms schema) (:keys schema))
                   (not (re-find #"-" n)) (not= n "boolean") (not= n "string") (not= n "Reference")))) structures))

(defn get-structure-names [ztx structures]
  (flatten (mapv (fn [n]
                   (let [schema (:schemas (zen.core/get-symbol ztx (symbol n)))]
                     (mapv (fn [[_k v]] (gut/get-structure-name v)) schema))) structures)))

(defn generate-imports-for-index-file [versions fhir-version]
  (mapv (fn [version]
          (let [resource-map-name (get-resource-map-name version)
                domain-resource-import (if (= version fhir-version) ", DomainResource" "")]
            (format "import { %s%s } from \"./%s.ts\";\n"
                    resource-map-name domain-resource-import version)))
        versions))

(defn get-index-resource-type-map [versions, fhir-version]
  (let [filtred-versions (filter #(not= fhir-version %) versions)
        fhir-version-resource-map (get-resource-map-name fhir-version)
        resource-map-names (if (= (count filtred-versions) 0) "{}"
                               (str/join ", " (map #(get-resource-map-name %) filtred-versions)))]
    (format "export interface ResourceTypeMap 
             extends Modify<%s, %s> { SubsSubscription: SubsSubscription }" fhir-version-resource-map resource-map-names)))

(defn generate-types-exports [ztx duplicates versions fhir-version]
  (let [resources-per-version
        (reduce (fn [acc version]
                  (let [resource-names
                        (keys (:schemas (zen.core/get-symbol ztx (symbol (str version "/base-schemas")))))
                        structures (:schemas (zen.core/get-symbol ztx (symbol (str version "/structures"))))
                        filtered-structures (filter-structures ztx structures)
                        structures-names (map (fn [[_k v]] (gut/get-structure-name v)) filtered-structures)
                        filtred-resource-names (if (= version "custom") resource-names
                                                   (filter (fn [n] (not (some #(= n %) duplicates))) (into resource-names structures-names)))]
                    (assoc acc version filtred-resource-names)))
                {}  versions)]

    (mapv (fn [[version names]]
            (let [search-params (if (= version fhir-version) "SearchParams, " "")]
              (format "export { %s %s } from \"./%s.ts\";" search-params (str/join ", " names) version)))
          resources-per-version)))

(defn generate-index-file [api-type result-folder-path versions fhir-version types-exports]
  (let [resourcetype-type (:resourcetype-type prepared-interfaces)
        reference-type (if (= api-type "fhir")
                         (:reference-type-fhir prepared-interfaces)
                         (:reference-type prepared-interfaces))
        onekey-type (:onekey-type prepared-interfaces)
        require-at-least-one-type (:require-at-least-one-type prepared-interfaces)
        subs-subscription (:subs-subscription prepared-interfaces)
        modify-type (:modify-type prepared-interfaces)
        imports (into (generate-imports-for-index-file versions fhir-version) types-exports)
        resource-type-map (get-index-resource-type-map versions fhir-version)
        defaults (into imports
                       [onekey-type require-at-least-one-type resource-type-map resourcetype-type reference-type modify-type subs-subscription])
        result-file-path (str result-folder-path "/aidbox-types.d.ts")]

    (spit result-file-path (str/join "" defaults) :append true)))

(defn generate-types [zen-path api-type result-folder-path]
  (let [ztx  (zen.core/new-context {:package-paths [zen-path]})
        _ (read-versions ztx zen-path)
        schemas (zen.core/get-tag ztx 'zen.fhir/base-schemas)
        structures (zen.core/get-tag ztx 'zen.fhir/structures)
        versions (map #(namespace %) schemas)
        fhir-version (some #(re-matches #"^hl7-fhir-r.+-core$" %) versions)
        resource-names (flatten (map #(keys (:schemas (zen.core/get-symbol ztx (symbol %)))) schemas))
        structure-names (get-structure-names ztx structures)
        duplicates (gut/find-dunlicates (into resource-names structure-names))
        types-exports (generate-types-exports ztx duplicates versions fhir-version)
        searches (get-searches ztx (zen.core/get-tag ztx 'zen.fhir/searches))
        search-params-start-interface "export interface SearchParams extends Record<ResourceType, unknown> {\n"
        search-params-end-interface "\n}"
        search-params-content (get-search-params ztx searches)
        search-params-result (conj (into [search-params-start-interface]  search-params-content) search-params-end-interface)]

    (generate-index-file api-type result-folder-path versions fhir-version types-exports)

    (println "Type generation...")
    (mapv (fn [version]
            (println version fhir-version)
            (generate-types-for-version ztx zen-path version result-folder-path fhir-version duplicates))
          versions)

    (println "Search params generation...")

    (spit (str result-folder-path "/" fhir-version ".d.ts") (str/join "" search-params-result) :append true)))

(defn get-sdk [zen-path api-type]
  (io/make-parents (str zen-path "/package/index.js"))
  (with-open [zen-project (io/reader (str zen-path "/zen-package.edn"))]
    (first (:deps (edn/read (java.io.PushbackReader. zen-project)))))
  (with-open [in (io/input-stream (clojure.java.io/resource "index.js"))]
    (io/copy in (clojure.java.io/file (str zen-path "/package/index.js"))))
  (with-open [in (io/input-stream (clojure.java.io/resource "index.d.ts"))]
    (io/copy in (clojure.java.io/file (str zen-path "/package/index.d.ts"))))
  (with-open [in (io/input-stream (clojure.java.io/resource "package.json"))]
    (io/copy in (clojure.java.io/file (str zen-path "/package/package.json"))))

  (generate-types zen-path api-type "./package")
  (println "Archive generation")
  (shell/sh "bash" "-c" (str " tar -czvf ../aidbox-javascript-sdk-v1.0.0.tgz -C package ."
                             " && rm -rf package"))
  (println "Done")

  (System/exit 0))

(defn get-types [zen-path api-type]
  (io/make-parents (str zen-path "/types/aidbox-types.d.ts"))
  (generate-types zen-path api-type "./types")

  (println "Done"))

(comment
  (get-types "/Users/ross/Desktop/HS/aidbox-sdk-js/zen-project" "aidbox"))

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
       :zen.fhir/type "User",
       :keys {:criteria {:require #{:source},
                         :keys {:query {:type zen/string}},
                         :type zen/map}},
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
                       :duplicates ["User"]
                       :fhir-version "hl7-fhir-r4-core"
                       :keys-in-array {}}
                      (zen.core/get-symbol ztx 'zen/schema)
                      (zen.core/get-symbol ztx 'my-sturcts/User)
                      {:interpreters [::ts]}))

  (println (:ts r))
  (str/join "" (::ts r)))
