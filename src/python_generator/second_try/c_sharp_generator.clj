(ns python-generator.second-try.c-sharp-generator
  (:require
   [cheshire.core]
   [clojure.java.io :as io]
   [clojure.set :as set]
   [clojure.string :as str]
   [dotenv :as dotenv]
   [python-generator.profile-helpers :as help]))

(defn dotnet-sdk-generated-files-dir []
  (io/file (dotenv/env :output-path) "dotnet"))

(def constraint-count (atom 0))

(defn compile-backbone [parent_name property_name definition]
  (let [name (str parent_name "_" (help/uppercase-first-letter (name property_name)))
        data (help/get-typings-and-imports name (or (:required definition) []) (help/elements-to-vector definition))
        backbone-elements (filter (fn [item] (> (count item) 0)) (:backbone-elements data))]
    (conj data (hash-map :backbone-elements (if (= (count backbone-elements) 0) [] (map (fn [[k, v]] (compile-backbone name k v)) backbone-elements))))))

(defn clear-backbone-elements [name data]
  (->> (filter (fn [item] (> (count item) 0)) (:backbone-elements data))
       (map (fn [[k, v]] (compile-backbone name k v)))
       (hash-map :backbone-elements)
       (conj data)))

(defn concat-elements-circulary [schemas parent-name elements]
  (if (not (nil? parent-name))
    (->> (concat elements (get-in schemas [parent-name :elements] []))
         (concat-elements-circulary schemas (get-in schemas [parent-name :base])))
    elements))

(defn concat-backbones-circulary [schemas parent-name backbones]
  (if (not (nil? parent-name))
    (->> (concat backbones (get-in schemas [parent-name :backbone-elements] []))
         (concat-backbones-circulary schemas (get-in schemas [parent-name :base])))
    backbones))

(defn mix-parents-elements-circular [schemas definition]
  (if (not (nil? (get definition :base nil)))
    (->> (concat-elements-circulary schemas (get definition :base) [])
         (concat (:elements definition))
         (hash-map :elements)
         (conj definition))
    definition))

(defn mix-parents-backbones-circular [schemas definition]
  (if (not (nil? (get definition :base nil)))
    (->> (concat-backbones-circulary schemas (get definition :base) [])
         (concat (:backbone-elements definition))
         (hash-map :backbone-elements)
         (conj definition))
    definition))

(defn safe-conj [a b] (conj a (or b {})))

(defn compile-elements [schemas]
  (map (fn [schema]
         (->> (help/elements-to-vector schema)
              (help/get-typings-and-imports (:type schema) (or (:required schema) []))
              (clear-backbone-elements (help/get-resource-name (:url schema)))
              (safe-conj (hash-map :base (get schema :base) :url (get schema :url))))) schemas))

(defn combine-elements [schemas]
  (map (fn [[_, schema]]
         (->> schema
              (mix-parents-elements-circular schemas)
              (mix-parents-backbones-circular schemas))) schemas))

(defn apply-excluded [excluded schema]
  (filter (fn [field-schema]
            (not (some #(= % (:name field-schema)) excluded))) schema))

(defn apply-required [required schema]
  (map (fn [field-schema]
         (if (some #(= % (:name field-schema)) required)
           (conj field-schema (hash-map :required true)) field-schema)) schema))

(defn apply-choises [choises schema]
  (->> (map (fn [[key, item]] (set/difference (set (:choices (first (filter #(= (:name %) (name key)) schema)))) (set (:choices item)))) choises)
       (reduce set/union #{})
       ((fn [choises-to-exclude]
          (filter #(not (contains? choises-to-exclude (:name %))) schema)))))

(defn pattern-codeable-concept [name schema]
  (->> (str "}")
       (str "\tpublic new " (str/join ", " (map #(str "Coding" (str/join (str/split (:code %) #"-"))) (get-in schema [:pattern :coding] []))) "[] Coding { get; } = [new()];\n") #_(str/join ", " (map #(str "Coding" (str/join (str/split (:code %) #"-")) "()") (get-in schema [:pattern :coding] [])))
       (str "\nclass " (str/join (map help/uppercase-first-letter (str/split name #"-"))) " : CodeableConcept\n{\n")
       (str (when-let [coding (:coding (:pattern schema))]
              (str/join (map (fn [code] (->> (str "}")
                                             (str (when (contains? code :code)  (str "\tpublic new string Code { get; } = \"" (:code code) "\";\n")))
                                             (str (when (contains? code :system) (str "\tpublic new string System { get; } = \"" (:system code) "\";\n")))
                                             (str (when (contains? code :display) (str "\tpublic new string Display { get; } = \"" (:display code) "\";\n")))
                                             (str "\n\nclass Coding" (str/join (str/split (:code code) #"-")) " : Coding\n{\n"))) coding))) "\n")))

(defn create-single-pattern [constraint-name, [key, schema], elements]
  (case (help/get-resource-name (some #(when (= (name key) (:name %)) (:value %)) elements))
    "CodeableConcept" (pattern-codeable-concept (str (help/uppercase-first-letter (help/get-resource-name constraint-name)) (help/uppercase-first-letter (subs (str key) 1))) schema) ""))

(defn apply-patterns [constraint-name patterns schema]
  (->> (map (fn [item]
              (if-let [pattern (some #(when (= (name (first %)) (:name item)) (last %)) patterns)]
                (case (:value item)
                  "str" (assoc item :value (:pattern pattern) :literal true)
                  "CodeableConcept" (conj item (hash-map :value (str (str/join (map help/uppercase-first-letter (str/split (help/get-resource-name constraint-name) #"-"))) (str/join (map help/uppercase-first-letter (str/split (:name item) #"-")))) :codeable-concept-pattern true))
                  "Quantity" item item) item)) (:elements schema))
       (hash-map :elements)
       (conj schema (hash-map :patterns (concat (get schema :patterns []) (map (fn [item] (create-single-pattern constraint-name item (:elements schema))) patterns))))))

(defn add-meta [constraint-name elements]
  (->> (filter #(not (= (:name %) "meta")) elements)
       (concat [{:name "meta" :required true :value (str "Meta") :meta (str " = new() { Profile = [\"" constraint-name "\"] };")}])))

(defn apply-single-constraint [constraint parent-schema]
  (println (:url constraint) (reset! constraint-count (+ 1 (deref constraint-count))))
  (->> (:elements parent-schema)
       (apply-required (:required constraint))
       (apply-excluded (:excluded constraint))
       (apply-choises (filter #(contains? (last %) :choices) (:elements constraint)))
       (add-meta (:url constraint))
       (hash-map :elements)
       (conj parent-schema)
       (apply-patterns (:url constraint) (filter #(contains? (last %) :pattern) (:elements constraint)))))

(defn apply-constraints [constraint-schemas result base-schemas]
  (if (not (= (count constraint-schemas) (count result)))
    (apply-constraints
     constraint-schemas
     (reduce (fn [acc constraint-schema]
               (if (and (contains? result (:base constraint-schema)) (not (contains? result (:url constraint-schema))))
                 (conj acc (hash-map (:url constraint-schema) (apply-single-constraint constraint-schema (get result (:base constraint-schema)))))

                 (if (and (contains? base-schemas (:base constraint-schema)) (not (contains? result (:url constraint-schema))))
                   (conj acc (hash-map (:url constraint-schema) (apply-single-constraint constraint-schema (get base-schemas (:base constraint-schema))))) acc))) result constraint-schemas) base-schemas) result))

(defn get-class-name [profile-name]
  (let [n (str/join "" (map help/uppercase-first-letter (clojure.string/split (help/get-resource-name profile-name) #"-")))]
    (cond
      (= n "Expression") "ResourceExpression"
      (= n "Reference") "ResourceReference" :else n)))

(defn combine-single-class [name elements parent inner-classes]
  (->> (map (fn [item]
              (when (not (contains? item :choices))
                (->> (str "\n\tpublic ")
                     ((if (and (not (:meta item)) (:required item)) (fn [s] (str s "required ")) str))
                     ((fn [s] (str s (:value item))))
                     ((if (:array item) (fn [s] (str s "[]")) str))
                     #_((if (:literal item) (fn [s] (str "Literal[\"" s "\"] = " "\"" s "\"")) str))
                     ((if (and (not (:required item)) (not (:literal item))) (fn [s] (str s "?")) str))
                     #_((if (and (not (:required item)) (not (:literal item))) (fn [s] (str s " = None")) str))
                     ((fn [s] (str s " " (help/uppercase-first-letter (:name item)))))
                     ((fn [s] (str s " { get; " (if (or (:meta item) (:codeable-concept-pattern item)) "}" "set; }"))))
                     ((if (and (:required item) (:codeable-concept-pattern item)) (fn [s] (str s " = new()")) str))
                     ((if (:meta item) (fn [s] (str s (:meta item))) str))
                    ;;  ((if (and (not (:required item)) (:array item)) help/append-default-vector str)) 
                     #_#_(str "\t" (:name item) ": ")
                       (str "\n")))) elements)
       (str/join "")
       ((fn [s] (str "\n\npublic class " (get-class-name name) (if (= parent "") "" (str " : " (help/uppercase-first-letter parent))) "\n{" s inner-classes "\n}"))))) ;; "(" (case t "backbone" "BackboneElement" "BaseModel") "):"

(defn save-to-file [[name, definition]]
  (->> (str (combine-single-class name (:elements definition) "" (str (str/join (map (fn [definition] (combine-single-class (:name definition) (:elements definition) "BackboneElement" "")) (:backbone-elements definition))))))
       (str (str/join (:patterns definition)))
       (str "namespace Aidbox.FHIR.Constraint;")
       (str "using Aidbox.FHIR.Base;\n\n")
       (help/write-to-file (str (dotnet-sdk-generated-files-dir) "/constraint") (str (str/join "_" (str/split (help/get-resource-name name) #"-")) ".cs")))
  (hash-map :type (str "Aidbox.FHIR.Constraint." (get-class-name name))
            :name (:name definition)))

(defn doallmap [elements] (doall (map save-to-file elements)))

(defn vector-to-map [v] (->> (map (fn [item] (hash-map (:url item) item)) v)
                             (into {})))

(defn save-to-single-file [elements]
  #_(println (map println elements))
  #_(map (fn [[name, definition]] (merge definition (hash-map :elements (filter #(= name (:base %)) (:elements definition))))) elements)
  (->> (filter #(not (= "http://hl7.org/fhir/StructureDefinition/DomainResource" (get (last %) :base ""))) elements)
       (map (fn [[name, definition]]
              (->> (str (combine-single-class name (filter #(= (help/get-resource-name name) (:base %)) (:elements definition)) (help/get-resource-name (:base definition)) ""))
                   (str (str/join (map (fn [definition] (combine-single-class (:name definition) (:elements definition) "" "")) (:backbone-elements definition))))
                   (str (str/join (:patterns definition))))))
       #_(doall)
       (str/join "")
       (str "namespace Aidbox.FHIR.Base;")
       (help/write-to-file (str (dotnet-sdk-generated-files-dir) "/") "base.cs")))

(defn save-domain-resources [elements]
  #_(println (map println elements))
  #_(map (fn [[name, definition]] (merge definition (hash-map :elements (filter #(= name (:base %)) (:elements definition))))) elements)
  (->> (filter #(= "http://hl7.org/fhir/StructureDefinition/DomainResource" (get (last %) :base "")) elements)
       (map (fn [[name, definition]]
              (->> (str (combine-single-class name (filter #(= (help/get-resource-name name) (:base %)) (:elements definition)) (help/get-resource-name (:base definition)) ""))
                   (str (str/join (map (fn [definition] (combine-single-class (:name definition) (:elements definition) "BackboneElement" "")) (:backbone-elements definition))))
                   (str (str/join (:patterns definition)))
                   (str "namespace Aidbox.FHIR.Resource;")
                   (str "using Aidbox.FHIR.Base;\n\n")
                   (help/write-to-file (str (dotnet-sdk-generated-files-dir) "/resource") (str (help/get-resource-name name) ".cs")))
              (hash-map :type (str "Aidbox.FHIR.Resource." (help/get-resource-name name))
                        :name (:name definition))))
       (doall)
       #_(str/join "")))

(defn flat-backbones [backbone-elements accumulator]
  (reduce (fn [acc, item] (concat (flat-backbones (:backbone-elements item) acc)
                                  [(dissoc item :backbone-elements)]))
          accumulator
          backbone-elements))

(defn save-resources-map [names]
  (->> (map (fn [item] (str "\t\t{ typeof(" (:type item) "), \"" (:name item) "\" },\n")) names)
       (str/join "")
       ((fn [s] (str "\tpublic static readonly Dictionary<Type, string> ResourceMap = new() {\n" s "\t};")))
       (str "\tpublic static readonly JsonSerializerOptions JsonSerializerOptions = new()\n\t{\n\t\tDefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,\n\t\tPropertyNamingPolicy = JsonNamingPolicy.CamelCase,\n\t\tConverters = { new JsonStringEnumConverter(new LowercaseNamingPolicy()) },\n\t\tWriteIndented = true\n\t};\n\n")
       ((fn [s] (str "public class Config \n{\n" s "\n}")))
       (str "public class LowercaseNamingPolicy : JsonNamingPolicy\n{\n\tpublic override string ConvertName(string name) => name.ToLower();\n}\n\n")
       (str "public interface IResource { string Id { get; set; } }\n\n")
       (str "using System.Text.Json;\nusing System.Text.Json.Serialization;\nnamespace Utils;\n\n")
       (help/write-to-file (str (dotnet-sdk-generated-files-dir) "/") (str "ResourceMap.cs"))))

(defn main []
  (let [packages
        (->> (dotenv/env :source-path)
             (help/get-directory-files)
             (filter #(and (str/includes? (.getName %) "hl7.fhir")
                           (not (.isDirectory %)))))

        schemas
        (->> packages
             (filter #(str/includes? (.getName %) "fhir.r4.core"))
             (first)
             (help/parse-ndjson-gz))

        base-schemas
        (->> schemas
             (filter #(or (= (:url %) "http://hl7.org/fhir/StructureDefinition/BackboneElement")
                          (= (:url %) "http://hl7.org/fhir/StructureDefinition/Resource")
                          (= (:url %) "http://hl7.org/fhir/StructureDefinition/Element")
                          (= (:derivation %) "specialization"))))

        constraint-schemas
        (->> schemas
             (filter #(= (:derivation %) "constraint"))
             (filter #(and (not (= (:type %) "Extension"))
                           (not (= (:url %) "http://fhir-registry.smarthealthit.org/StructureDefinition/oauth-uris")))))

        extra-constraint-schemas
        (->> packages
             (filter #(not (str/includes? (.getName %) "fhir.r4.core")))
             (map help/parse-ndjson-gz)
             (map (fn [constraint]
                    (filter #(and (not (= (:type %) "Extension"))
                                  (= (:derivation %) "constraint"))
                            constraint))))]
    (->> base-schemas
         (compile-elements)
         (filter #(not (nil? (:url %))))
         (vector-to-map)
         (combine-elements)
         (filter #(not (nil? (:url %))))
         (map (fn [schema] (conj schema (hash-map :backbone-elements (flat-backbones (:backbone-elements schema) [])))))
         (vector-to-map)
         ((fn [schemas]
            (save-to-single-file schemas)

            (->> (->> (apply-constraints (concat constraint-schemas (flatten extra-constraint-schemas)) {} schemas)
                      (doallmap))
                 (concat (save-domain-resources schemas))
                 (save-resources-map)))))))

(main)

