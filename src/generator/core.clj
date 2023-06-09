(ns generator.core
  (:require
   [clojure.java.io :as io]
   [clojure.java.shell :as shell]
   [clojure.string :as str]
   [edamame.core :as e]
   [generator.reader :as r]
   [generator.writer :as w]
   [taoensso.nippy :as nippy]
   [zen.core]
   [zen.package]
   [zen.utils]))


(defn deep-merge-with
  "Recursively merges maps. Applies function f when we have duplicate keys."
  [f & maps]
  (letfn [(m [& xs]
            (if (some #(and (map? %) (not (record? %))) xs)
              (try (apply merge-with m xs)
                   (catch Exception e
                     (println xs)
                     (throw e)))
              (apply f xs)))]
    (reduce m {} maps)))


(defn find-and-read-entrypoint [ztx zen-path]
  (println "[types] Try to find entrypoint")
  (loop [files (file-seq (io/file (str  zen-path "/zrc")))]
    (if (seq files)
      (let [file (first files)
            other (rest files)]
        (if (and (.isFile file) (str/ends-with? (str  file) ".edn"))
          (let [data (e/parse-string (slurp file))
                system (->> (vals data)
                            (keep :zen/tags)
                            (keep #(when (contains? % 'aidbox/system)
                                     true)))
                name-ns (or (get data 'ns) (:ns data))]
            (if (seq system)
              (do
                (println "[types] Package [" name-ns "]" (name (zen.core/read-ns ztx (symbol name-ns))))
                (mapv (fn [package]
                        (println "[types] Package [" package "]" (name (zen.core/read-ns ztx (symbol package)))))
                      (:import data)))
              (recur other)))
          (recur other)))
      (println "[types] Cannot find entry file. Please check that you have file with symbol contained aidbox/system tag"))))

(defn gen-task-types [ztx path]
  (println "[types] Generate Task types")
  (io/make-parents (io/file (str  path "/task/index.ts")))
  (with-open [r (io/writer (io/file path "task" "index.ts"))]
    (.write r "/** GENERATED BY zen-cli\nDON'T MODIFY MANUALLY */\n\n")
    (let [definitions (zen.core/get-tag ztx 'awf.task/definition)
          result (reduce
                  (fn [acc item]
                    (let [schema (r/read-source-schema ztx item
                                                       {:return  true
                                                        :package "task"
                                                        :init    true})]
                      (w/generate-types :typescript
                                        (:result schema)
                                        {:target-path path})
                      (-> acc
                          (update :imports conj (format "import { %s } from './%s'", (:name schema) (:name schema)))
                          (update :resourceMap conj (str  "  " (:name schema) ": " (:name schema) ";"))
                          (update :nameMap conj (str  "  " (:name schema) ": '" (str  item) "'")))))
                  {:resourceMap []
                   :nameMap     []
                   :imports     []}
                  definitions)]
      (.write r (str/join "\n" (:imports result)))
      (.write r "\n\n")
      (.write r "export type TaskDefinitionsMap = {\n")
      (.write r (str/join "\n" (:resourceMap result)))
      (.write r (str/join "\n}\n"))
      (.write r "export const TaskDefinitionsNameMap: Record<keyof TaskDefinitionsMap, string> = {\n")
      (.write r (str/join ",\n" (:nameMap result)))
      (.write r (str/join "\n}\n")))))

(defn gen-workflow-types [ztx path]
  (println "[types] Generate Workflow types")
  (io/make-parents (io/file (str  path "/workflow/index.ts")))
  (with-open [r (io/writer (io/file path "workflow" "index.ts"))]
    (.write r "/** GENERATED BY zen-cli\nDON'T MODIFY MANUALLY */\n\n")
    (let [definitions (zen.core/get-tag ztx 'awf.workflow/definition)
          result (reduce
                  (fn [acc item]
                    (let [schema (r/read-source-schema
                                  ztx item
                                  {:return  true
                                   :package "workflow"
                                   :init    true})]
                      (w/generate-types
                       :typescript
                       (:result schema)
                       {:target-path path})
                      (-> acc
                          (update :imports conj (format "import { %s } from './%s'", (:name schema) (:name schema)))
                          (update :resourceMap conj (str  "  " (:name schema) ": " (:name schema) ";"))
                          (update :nameMap conj (str  "  " (:name schema) ": '" (str  item) "'")))))
                  {:resourceMap []
                   :nameMap     []
                   :imports     []}
                  definitions)]
      (.write r (str/join "\n" (:imports result)))
      (.write r "\n\n")
      (.write r "export type WorkflowDefinitionsMap = {\n")
      (.write r (str/join "\n" (:resourceMap result)))
      (.write r (str/join "\n}\n"))
      (.write r "export const WorkflowDefinitionsNameMap: Record<keyof WorkflowDefinitionsMap, string> = {\n")
      (.write r (str/join ",\n" (:nameMap result)))
      (.write r (str/join "\n}\n")))))

(defn gen-main-file [path]
  (println "[types] Generate main file")
  (with-open [r (io/writer (io/file path "index.ts"))]
    (.write r "/** GENERATED BY zen-cli\nDON'T MODIFY MANUALLY */\n\n")
    (let [dirs (file-seq (io/file path))]
      (doseq [dir dirs]
        (when (and (.isDirectory dir) (not= "types" (.getName dir)))
          (when (re-matches #"^hl7-fhir-r.+-core$" (.getName dir))
            (.write r (format "import { ResourceType } from './%s'\n" (.getName dir))))
          (.write r (format "export * from './%s'\n" (.getName dir))))))
    (.write r "export interface SubsSubscription {\nid?:string;\nresourceType: 'SubsSubscription';\nstatus: 'active' | 'off';trigger: Partial<Record<ResourceType, { event: Array<'all' | 'create' | 'update' | 'delete'>; filter?: unknown }>>; channel: {\ntype: 'rest-hook';\nendpoint: string;\npayload?: { content: string; contentType: string; context: unknown };headers?: Record<string, string>;\ntimeout?: number;\n};\n}")))

(defn read-ftr [ztx base-path]
  (doseq [dir (.listFiles (io/file base-path "zen-packages"))]
    (when (.isDirectory dir)
      (let [target-file (io/file dir "index.nippy")]
        (when (.exists target-file)
          (println (format "[types] Read ftr index for [%s] package" (.getName dir)))
          (swap! ztx update :zen.fhir/ftr-index
                 (fn [cur]
                   (deep-merge-with
                    (fn [a b]
                      (cond (and (set? a) (set? b))
                            (into a b)
                            :else
                            b))
                    cur (nippy/thaw-from-file target-file)))))))))

(defn gen-package-types
  [ztx path]
  (r/reset-schema)
  (let [structures (->> (zen.core/get-tag ztx 'zen.fhir/structures)
                        (map #(zen.core/get-symbol ztx %))
                        (map :schemas)
                        (map vals)
                        flatten)

        schemas (->> (zen.core/get-tag ztx 'zen.fhir/base-schemas)
                     (map #(zen.core/get-symbol ztx %))
                     (map :schemas)
                     (map vals)
                     flatten
                     (map vals)
                     flatten)]
    (println "[types] Generate structures" (count structures))
    (doseq [sym structures]
      (zen.core/read-ns ztx (symbol (namespace sym)))
      (r/read-source-schema ztx (namespace sym)))
    (println "[types] Generate base schemas" (count schemas))
    (doseq [sym schemas]
      (zen.core/read-ns ztx (sym (namespace sym)))
      (r/read-source-schema ztx sym))
    (doseq [package (keys @r/schema)]
      (io/make-parents (io/file path package "index.ts"))
      (with-open [r (io/writer (io/file path package "index.ts"))]
        (.write r "/** GENERATED BY zen-cli\nDON'T MODIFY MANUALLY */\n\n")
        (mapv #(when-not (contains? #{"string" "boolean"} %) (.write r (format "export * from './%s'\n" %)))
              (keys (get @r/schema package)))
        (mapv #(when-not (contains? #{"string" "boolean"} %) (.write r (format "import { %s } from './%s'\n" % %)))
              (keys (get @r/schema package)))
        (.write r "\n\n")
        (.write r "export type ResourceTypeMap = {\n")
        (mapv #(when-not (contains? #{"string" "boolean"} %) (.write r (format "  %s: %s;\n" % %)))
              (keys (get @r/schema package)))
        (.write r "}\n")
        (.write r "export type ResourceType = keyof ResourceTypeMap;\n")))
    (w/generate-types :typescript @r/schema {:target-path path})))

(defn search-params-generator [ztx searches]
  (reduce
   (fn [acc search]
     (zen.core/read-ns ztx (symbol (namespace search)))
     (let [package (first (str/split (str search) #"\."))
           schema (zen.core/get-symbol ztx search)
           search-type (:fhir/type schema)
           search-name (:name schema)
           resource-name (first (keys (:expr schema)))]
       (update-in acc [package resource-name]
                  assoc
                  search-name
                  (cond (= search-type "reference")
                        "`${ResourceType}/${string}`"
                        (= search-type "token")
                        "string"
                        (or (= search-type "special") (= search-type "quantity"))
                        "string"
                        :else search-type))))
   {}
   searches))


(defn gen-searches [ztx path]
  (println "[types] Generate search params")
  (let [definitions (->> (zen.core/get-tag ztx 'zen.fhir/searches)
                         (map #(zen.core/get-symbol ztx %))
                         (map :searches)
                         (map vals)
                         (map #(flatten (map vals %)))
                         flatten)
        searches (search-params-generator ztx definitions)]
    (doseq [package (keys searches)]
      (with-open [r (io/writer (io/file path package "index.ts") :append true)]
        (.write r "export interface SearchParams extends Record<ResourceType, unknown> {\n")
        (reduce-kv (fn [acc k v]
                     (.write r (format "'%s': {\n" (name k)))
                     (mapv (fn [[kk vv]]
                             (.write r (format "'%s': %s;\n" kk vv))) v)
                     (.write r (format "}\n"))
                     acc) nil (get searches package))
        (.write r "}\n")))))

(defn gen-types [ztx zen-path output-folder]
  (when (find-and-read-entrypoint ztx zen-path)
    (read-ftr ztx zen-path)
    (gen-task-types ztx (str  zen-path \/ output-folder))
    (gen-workflow-types ztx (str  zen-path \/ output-folder))
    (gen-package-types ztx (str  zen-path \/ output-folder))
    (gen-searches ztx (str  zen-path \/ output-folder))
    (gen-main-file (str  zen-path \/ output-folder))
    true))


(defn copy-from-resources [input output]
  (with-open [in (io/input-stream input)]
    (io/copy in output)))

(defn sdk [path]
  (let [ztx (zen.core/new-context {:package-paths [path]})]
    (io/make-parents (str path "/package/types/index.ts"))
    (when (gen-types ztx path "package/types")
      (copy-from-resources (io/resource "index.ts") (io/file path  "package" "index.ts"))
      (copy-from-resources (io/resource "tsconfig.json") (io/file path  "package" "tsconfig.json"))
      (copy-from-resources (io/resource "package.json") (io/file path  "package" "package.json"))
       (shell/sh "bash" "-c" (str "npx prettier --write " (.getPath (io/file path "package"))))
       (shell/sh "bash" "-c" (str "cd " (.getPath (io/file path "package")) " && npm i"))
       (shell/sh "bash" "-c" (str "cd " (.getPath (io/file path "package")) " && npm run build"))
      (copy-from-resources (io/resource "package.json") (io/file path  "package" "lib" "package.json"))
      (println "[sdk] Archive generation")
       (shell/sh "bash" "-c" (str " tar -czvf " (.getPath (io/file path)) "/../aidbox-javascript-sdk-v1.0.0.tgz -C " (.getPath (io/file path "package" "lib")) " ."
                                           " && rm -rf package"))
      (println "[types] Generating done"))))


(comment
  (require ['zen.cli])
  (System/setProperty "user.dir" "/Users/alexanderstreltsov/work/hs/aidbox-sdk-js/zen-project")
  (-> (zen.cli/get-pwd)
      sdk))

