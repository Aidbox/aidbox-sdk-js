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
   :reference-type "export interface Reference<T extends ResourceType> {id: string; _id?: string; display?: string | undefined;_display?: Element | undefined;identifier?: Identifier | undefined;
    resourceType: T;type?: string | undefined;_type?: Element | undefined;}"
   :reference-type-fhir "export interface Reference<T extends ResourceType> {id?: string; _id?: string; display?: string | undefined;_display?: Element | undefined;
    identifier?: Identifier | undefined;reference?: string | undefined;_reference?: Element | undefined;type?: string | undefined;_type?: Element | undefined;}"
   :resourcetype-type "export type ResourceType = keyof ResourceTypeMap;\n"
   :extension-type "export interface Extension extends Element {\nurl: uri;value?: RequireAtLeastOne<OneKey<{\nunsignedInt?: unsignedInt;
      Signature?: Signature;markdown?: markdown;date?: date;Dosage?: Dosage;ContactDetail?: ContactDetail;RelatedArtifact?: RelatedArtifact;instant?: instant;UsageContext?: UsageContext;time?: time;DataRequirement?: DataRequirement;base64Binary?: base64Binary;Meta?: Meta;Distance?: Distance;SampledData?: SampledData;TriggerDefinition?: TriggerDefinition;Identifier?: Identifier;string?: string;Address?: Address;Expression?: Expression;dateTime?: dateTime;Range?: Range;integer?: integer;Ratio?: Ratio;oid?: oid;ContactPoint?: ContactPoint;Money?: Money;decimal?: decimal;id?: id;
      Attachment?: Attachment;Contributor?: Contributor;Period?: Period;canonical?: canonical;url?: url;code?: code;HumanName?: HumanName;positiveInt?: positiveInt;ParameterDefinition?: ParameterDefinition;Coding?: Coding;
      Timing?: Timing;Duration?: Duration;uri?: uri;CodeableConcept?: CodeableConcept; uuid?: uuid;Count?: Count;Quantity?: Quantity;boolean?: boolean;Annotation?: Annotation;Age?: Age;Reference?: Reference<ResourceType>;}>>;\n}"
   :extension-type-fhir "export interface Extension extends Element {\nurl: string;_url?: Element;
     valueBase64Binary?: string;_valueBase64Binary?: Element;valueBoolean?: boolean;_valueBoolean?: Element;valueCanonical?: string;_valueCanonical?: Element;
     valueCode?: string;_valueCode?: Element;valueDate?: string;_valueDate?: Element;valueDateTime?: string;_valueDateTime?: Element;valueDecimal?: number;valueId?: string;_valueId?: Element;valueInstant?: string;_valueInstant?: Element;valueInteger?: number;valueMarkdown?: string;_valueMarkdown?: Element;
     valueOid?: string;_valueOid?: Element;valuePositiveInt?: number;valueString?: string;_valueString?: Element;valueTime?: string;_valueTime?: Element;valueUnsignedInt?: number;valueUri?: string;_valueUri?: Element;valueUrl?: string;
     _valueUrl?: Element;valueUuid?: string;_valueUuid?: Element;valueAddress?: Address;valueAge?: Age;valueAnnotation?: Annotation;valueAttachment?: Attachment;valueCodeableConcept?: CodeableConcept;valueCoding?: Coding;valueContactPoint?: ContactPoint;
     valueCount?: Count;valueDistance?: Distance;valueDuration?: Duration;valueHumanName?: HumanName;valueIdentifier?: Identifier;valueMoney?: Money;valuePeriod?: Period;valueQuantity?: Quantity;valueRange?: Range;valueRatio?: Ratio;
     valueSignature?: Signature;valueTiming?: Timing;valueContactDetail?: ContactDetail;valueContributor?: Contributor;valueDataRequirement?: DataRequirement;valueExpression?: Expression;valueParameterDefinition?: ParameterDefinition;
     valueRelatedArtifact?: RelatedArtifact;valueTriggerDefinition?: TriggerDefinition;valueUsageContext?: UsageContext;valueDosage?: Dosage;valueMeta?: Meta;\n
    }"
   :modify-type "export type Modify<T, R> = Omit<T, keyof R> & R;"
   :subs-subscription "export interface SubsSubscription extends DomainResource<'SubsSubscription'> {\nstatus: 'active' | 'off';
                       trigger: Partial<Record<ResourceType, { event: Array<'all' | 'create' | 'update' | 'delete'>; filter?: unknown }>>;
                       channel: {\ntype: 'rest-hook';\nendpoint: string;\npayload?: { content: string; contentType: string; context: unknown };
                       headers?: Record<string, string>;\ntimeout?: number;\n};\n}"})

(def non-parsable-premitives
  {:string "string"
   :number "number"
   :boolean "boolean"})

(def schema-state (atom {}))

;; (def schema-state (atom {"Organization"
;;                          {:_active 'Element,
;;                           :address ['Address],
;;                           :name 'string,
;;                           :type [{:type 'value-set, :value ['CodeableConcept]}],
;;                           :alias ['string],
;;                           :active boolean,
;;                           :_name 'Element,
;;                           :identifier ['Identifier],
;;                           :telecom ['ContactPoint],
;;                           :partOf {:type 'reference, :value ['Organization]},
;;                           :_alias ['Element],
;;                           :endpoint [{:type 'reference, :value ['Endpoint]}],
;;                           :contact
;;                           [{:purpose {:type 'value-set, :value ['CodeableConcept]},
;;                             :name 'HumanName,
;;                             :telecom ['ContactPoint],
;;                             :address 'Address}]},
;;                          "Address"
;;                          {:_line ['Element],
;;                           :use
;;                           {:type 'value-set,
;;                            :value "'billing' | 'home' | 'old' | 'temp' | 'work'"},
;;                           :city 'string,
;;                           :_type 'Element,
;;                           :type {:type 'value-set, :value "'both' | 'physical' | 'postal'"},
;;                           :_city 'Element,
;;                           :state 'string,
;;                           :_district 'Element,
;;                           :_state 'Element,
;;                           :line ['string],
;;                           :postalCode 'string,
;;                           :_country 'Element,
;;                           :_postalCode 'Element,
;;                           :_text 'Element,
;;                           :period 'Period,
;;                           :country 'string,
;;                           :_use 'Element,
;;                           :district 'string,
;;                           :text 'string}}))

(defn get-resourcetype-type [map-name] (str "type ResourceType = keyof " map-name ";\n"))

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

(defn get-value-for-schema-state [ztx vtx data]
  (let [type (:type data)
        ref (:refers (:zen.fhir/reference data))
        value-set (:zen.fhir/value-set data)
        required? (not (gut/get-not-required-filed-sign vtx))]

    (cond (= type 'zen/map) {:required required?
                             :value {}}

          (= type 'zen/vector) {:required required?
                                :value (conj [] (get-value-for-schema-state ztx vtx (:every data)))}

          value-set {:type 'value-set
                     :required required?
                     :value (generate-valueset-type ztx vtx data)}

          ref {:type 'reference
               :required required?
               :value (mapv #(str %) (gut/set-to-string {} ref))}

          (:confirms data) {:required required?
                            :value (symbol (first (gut/set-to-string {} (:confirms data))))}
          :else nil)))

(defn modify-path [path]
  (reduce (fn [acc item]
            (cond (= item :keys) acc
                  (= item :every) (conj acc :value 0 :value)
                  :else (conj acc item))) [] path))

(defn generate-values [ztx vtx data]
  (let [interface-name (:interface-name vtx)
        complete-path (into [interface-name] (modify-path (:path vtx)))
        path-till-cur-key (pop complete-path)
        cur-key (last complete-path)
        cur-element (get-in @schema-state path-till-cur-key)
        path (if (vector? cur-element) (conj path-till-cur-key 0 cur-key) complete-path)
        value (get-value-for-schema-state ztx vtx data)]

    (when (= (:version vtx) (:fhir-version vtx)) (swap! schema-state assoc-in path value))
    (if (and (:exclusive-keys data) (not (gut/check-need-generate-exclusive-keys data)))
      "" (str (gut/get-key vtx)
              (gut/get-not-required-filed-sign vtx)
              ":"))))

(defn prettify-reference-name [n]
  (let [removed-us-core (str/replace n #"us-core-" "")]
    (cond (= removed-us-core "relatedperson") "RelatedPerson"
          (= removed-us-core "practitionerrole") "PractitionerRole"
          (= removed-us-core "careteam") "CareTeam"
          :else (gut/capitalize-first removed-us-core))))

(defn get-reference-union-type [vtx references]
  (str "Reference<"
       (if (empty? references) "ResourceType"
           (str/join " | " (map (fn [item]
                                  (cond
                                    (= (name item) "schema")
                                    (str "'" (prettify-reference-name (first (gut/set-to-string vtx #{item}))) "'")
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
                 (and (contains? (:duplicates vtx) extended-resource)
                      (not= (:version vtx) (:fhir-version vtx)))
                 (format " extends Modify<%s['%s']," (gut/get-resource-map-name (:fhir-version vtx)) (get-in (:duplicates vtx) [extended-resource]))
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

    (when (= (:version vtx) (:fhir-version vtx)) (swap! schema-state assoc-in [interface-name] {}))
    (str "export interface " interface-name extand)))

(defn generate-name
  [vtx data]
  (str (gut/get-desc data)
       (if (:is-type vtx)
         (generate-type vtx data)
         (generate-interface vtx data))))

(defn generate-confirms [vtx schema]
  (let [result  (str
                 (cond
                   (contains? (:confirms schema) 'zen.fhir/Reference)
                   (get-reference-union-type vtx (:refers (:zen.fhir/reference schema)))
                   (= (first (gut/set-to-string vtx (:confirms schema))) "BackboneElement") ""
                   :else (str (first (gut/set-to-string vtx (:confirms schema))))))]

    (gut/prettify-name result)))

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

    (if (gut/check-need-generate-exclusive-keys schema)
      (format "RequireAtLeastOne<%sOneKey<{ %s }>>" non-exclusive-keys-type exclusive-keys-type) "")))

(defn get-extention [path ts extension-path]
  (let [extension-value "extension?: Array<Extension>;"
        path-without-last-el (str/join "." (drop-last path))
        path-without-twolast-el (str/join "." (drop-last 2 path))]
    (if (some #(or (= path-without-last-el  %) (= path-without-twolast-el  %)) extension-path) "" extension-value)))

(defn update-extention-path [vtx]
  (let [path-without-last-el (str/join "." (drop-last (:path vtx)))]
    (if (some #(= path-without-last-el %) (:extension-path vtx))
      vtx
      (update vtx :extension-path conj path-without-last-el))))

(zen.schema/register-compile-key-interpreter!
 [:keys ::ts]
 (fn [_ ztx ks]
   (fn [vtx data opts]
     (let [new-vtx (if (or (:fhir/extensionUri data) (:fhir/extensionUri (:every data))) (update-extention-path vtx) vtx)]
       (if-let [s (or (when (some #(= :slicing %) (:path vtx)) "")
                      (when (or (:fhir/extensionUri data) (:fhir/extensionUri (:every data)))
                        (get-extention (:path vtx) (:ts vtx) (:extension-path vtx)))
                      (when (or (:zen.fhir/profileUri data) (:zen.fhir/type data)) (generate-name vtx data))
                      (when (:exclusive-keys data) (get-exclusive-keys-type ztx vtx data))
                      (when (gut/exclusive-keys-child? vtx) "")
                      (when (gut/keys-in-array-child? vtx) "")
                      (when (:enum data) "")
                      (when (and (= (:validation-type data) :open) (not (:keys data))) "any")
                      (when (:zen.fhir/value-set data) (generate-valueset-type ztx vtx data))
                      (when (:confirms data) (generate-confirms vtx data))
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
         (update new-vtx :ts conj s)
         new-vtx)))))

(defn adjust-path [path k]
  (if (= (count path) 1) (conj path k) (conj (pop path) k)))

(defn generate-types-from-schema-state [schema keys-to-filter vtx]
  (str/join "" (reduce (fn [acc [k v]]
                         (let [not-required-sign (if (or (:required v)
                                                         (not (gut/get-not-required-filed-sign {:require (:require vtx)
                                                                                                :path (adjust-path (:path vtx) k)})))
                                                   "" "?")
                               value (:value v)
                               processed-value
                               (cond
                                 (symbol? value) value

                                 (and (vector? value) (symbol? (:value (first value))))
                                 (format "Array<%s>" (:value (first value)))

                                 (and (vector? value) (= (:type (first value)) 'value-set))
                                 (format "Array<%s>" (:value (first value)))

                                 (and (vector? value) (= (:type (first value)) 'reference))
                                 (format "Array<%s>" (format "Reference<%s>"
                                                             (str/join " | " (map #(str "'" % "'")  (:value (first value))))))

                                 (= (:type v) 'value-set) value

                                 (= (:type v) 'reference) (format "Reference<%s>" (str/join " | " (map #(str "'" % "'")  value)))

                                 (map? value) (generate-types-from-schema-state value [] vtx)

                                 (and (vector? value) (map? (:value (first value))))
                                 (str "Array<{" (generate-types-from-schema-state (:value (first value)) []
                                                                                  (update vtx :path conj k :every :keys)) "}>"))]

                           (if (gut/contains-keyword? k keys-to-filter) acc
                               (conj acc (str (name k) not-required-sign ": " processed-value "; ")))))
                       [] schema)))

(defn check-fhir-flags-type [data]
  (and (:fhir/flags data) (not (:type data)) (not (:confirms data)) (not (:zen.fhir/value-set data))))

(defn check-fhir-flag [schema]
  (let [data (if (:every schema) (:every schema) schema)]
    (and (or (:fhir/flags data) (:fhir/flags schema))
         (= (count (filter #(not (check-fhir-flags-type ((keyword %) (:keys data)))) (keys (:keys data)))) 0))))

(defn get-core-data [path]
  (let [core-data (get-in @schema-state path)]
    (println "core-data2" core-data)
    (cond
      (= (count path) 1) core-data
      (map? (:value core-data)) (:value core-data)
      (= (:value core-data) 'Element) [(:value core-data)]
      :else (get-in @schema-state [(str (:value core-data))]))))

(defn get-core-values? [vtx data]
  (let [filtred-path (gut/modify-path (:path vtx))
        path-to-core-data (into [(:interface-name vtx)] filtred-path)
        filtred-data (filter (fn [[_k v]]
                               (not (if (:every v) (check-fhir-flags-type (:every v))
                                        (check-fhir-flags-type v)))) data)
        profile-data-keys (mapv #(first %) filtred-data)
        core-data (get-core-data path-to-core-data)]

    (println "path" (:path vtx))
    (println "filtred-path" filtred-path)
    (pp/pprint core-data)
    (cond (symbol? core-data) core-data
          (= (count profile-data-keys) (count (keys core-data))) ["{ "]
          :else (conj ["{ "] (generate-types-from-schema-state core-data profile-data-keys vtx)))))

(defn get-keys-value [vtx data]
  (println "ts")
  (pp/pprint (:ts vtx))
  (println "path" (:path vtx))
  (println "data")
  (pp/pprint data)
  (if (or (= (:version vtx) (:fhir-version vtx))
          (and (= (count (:path vtx)) 1) (= (count (get (:require vtx) "root")) 0)))
    ["{ "]
    (get-core-values? vtx data)))

(zen.schema/register-schema-pre-process-hook!
 ::ts
 (fn [ztx schema]
   (fn [vtx data opts]
     (let [new-vtx (cond
                     (and (not= (:version vtx) (:fhir-version vtx)) (:every data) (check-fhir-flag data))
                     (update vtx :ignore-path conj (str/join "." (:path vtx)))
                     (and (not (:keys data)) (empty? (:path vtx)))
                     (assoc vtx :is-type true)
                     (or (and (:confirms data) (:keys data)) (:require data))
                     (gut/update-require-and-keys-in-array vtx data)
                     (:exclusive-keys data)
                     (update vtx :exclusive-keys conj (gut/generate-exclusive-keys vtx data))
                     :else vtx)]
       (cond
         (some #(str/starts-with? (str/join "." (:path new-vtx)) %) (:ignore-path new-vtx))
         (update new-vtx :ts conj "")
         (check-fhir-flags-type data) (update new-vtx :ts conj "")
         (or (= (last (:path vtx)) :slicing) (:slicing (:tag data)))
         (update new-vtx :ts conj "unknown")
         (some #(= :slicing %) (:path vtx)) new-vtx
         (= (last (:path new-vtx)) :zen.fhir/type) new-vtx
         (gut/exclusive-keys-child? new-vtx) new-vtx
         (or (:fhir/extensionUri data) (:fhir/extensionUri (:every data))) new-vtx
         (= (last (:schema new-vtx)) :enum)
         (update new-vtx :ts conj (gut/generate-enum data))
         (= (last (:schema new-vtx)) :values)
         (update new-vtx :ts conj (gut/get-desc data) (generate-values ztx new-vtx data))
         (and (= (last (:path new-vtx)) :keys) (= (:interface-name vtx) "Resource"))
         (update new-vtx :ts conj "<T extends string = ResourceType> { \n resourceType: T;")
         (and (= (last (:path new-vtx)) :keys) (= (:interface-name vtx) "DomainResource"))
         (update new-vtx :ts conj "<T extends string = 'DomainResource'> extends Resource<T> {\n")
         (= (last (:path new-vtx)) :keys) (update new-vtx :ts into (get-keys-value vtx data))
         (= (last (:schema new-vtx)) :every) (update new-vtx :ts conj "Array<")
         :else new-vtx)))))

(zen.schema/register-schema-post-process-hook!
 ::ts
 (fn [ztx schema]
   (fn [vtx data opts]
     (cond
       (and (:exclusive-keys data) (not (gut/check-need-generate-exclusive-keys data)))
       (update vtx :ts conj "")
       (some #(str/starts-with? (str/join "." (:path vtx)) %) (:ignore-path vtx))
       (update vtx :ts conj "")
       (check-fhir-flags-type data) (update vtx :ts conj "")
       (or (some #(= :slicing %) (:path vtx)) (:slicing (:tag data))) vtx
       (gut/exclusive-keys-child? vtx) vtx
       (or (:fhir/extensionUri data) (:fhir/extensionUri (:every data))) vtx
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

(def non-generated-structures ["Reference" "Extension" "Definition" "FiveWs" "ExampleSectionLibrary" "CqfRelativedatetime" "ElementdefinitionDe" "ExampleComposition" "translation" "RelativeDate"])

(defn get-resource-names [schema structures profiles version fhir-version profile-version duplicates]
  (let [resources-to-filter (if (and (not= version fhir-version) (not= version profile-version))
                              (into non-generated-structures (keys duplicates)) non-generated-structures)]
    (filter (fn [item]
              (not (some #(= item %) resources-to-filter)))
            (into (if (= version profile-version) (keys profiles) (keys schema)) (map (fn [[_k v]]
                                                                                        (let [n (gut/get-structure-name v)]
                                                                                          (gut/prettify-name n)))
                                                                                      structures)))))

(defn generate-types-for-version [ztx zen-path version result-folder-path fhir-version profile-version duplicates api-type]
  (let [schema (:schemas (zen.core/get-symbol ztx (symbol (str version "/base-schemas"))))
        structures (:schemas (zen.core/get-symbol ztx (symbol (str version "/structures"))))
        profiles (when (not= fhir-version version) (:schemas (zen.core/get-symbol ztx (symbol (str version "/profiles")))))
        resource-names  (get-resource-names schema structures profiles version fhir-version profile-version duplicates)
        key-value-resources (gut/get-keyvalue-resources resource-names)
        path-to-ftr-index (str zen-path "/zen-packages/" version "/index.nippy")
        result-file-path (str result-folder-path "/" version ".d.ts")
        import-for-custom (format "import { %s, Resource, CodeableConcept, Extension, date, dateTime, Period, decimal } from \"./%s.ts\";"
                                  (gut/get-resource-map-name fhir-version) fhir-version)
        import "import { Reference, RequireAtLeastOne, OneKey, Modify } from \"./aidbox-types.ts\";\n"
        resource-map-name (gut/get-resource-map-name version)
        resourcetype-type (get-resourcetype-type resource-map-name)
        resource-type-map-interface (str "export interface " resource-map-name " {\n")
        resource-type-map (str/join "\n" (conj (into [resource-type-map-interface] key-value-resources) "}"))
        extension-interface (if (= api-type "fhir") (:extension-type-fhir prepared-interfaces) (:extension-type prepared-interfaces))
        defaults [(when (not= version fhir-version) import-for-custom)
                  import resourcetype-type resource-type-map (when (= version fhir-version) extension-interface)]]

    (println "Building FTR index...")
    (when (.exists (io/file path-to-ftr-index)) (get-ftr-index ztx path-to-ftr-index))

    (spit result-file-path (str/join "" defaults))

    (println (str version " resource generation..."))
    (mapv (fn [[k _v]]
            (zen.core/read-ns ztx (symbol (str version "." k)))
            (let [closing-modify-type (when (and (not= version fhir-version) (some #(= k %) (keys duplicates))) "> {}")
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
                                                             :exclusive-keys {}
                                                             :extension-path []}
                                                            (zen.core/get-symbol ztx 'zen/schema)
                                                            (zen.core/get-symbol ztx (symbol (str version "." k "/schema")))
                                                            {:interpreters [::ts]}))]
              (spit result-file-path
                    (str/join "" (conj (:ts schemas-result) closing-modify-type "\n")) :append true))) schema)

    (mapv (fn [[_k v]]
            (let [n (gut/get-structure-name v)
                  petrified-name (gut/prettify-name n)
                  _ (zen.core/read-ns ztx (symbol (str version "." n)))
                  closing-modify-type (when (and (not= version fhir-version) (some #(= petrified-name %) (keys duplicates))) "> {}")
                  schema (zen.core/get-symbol ztx (symbol v))
                  structures-result (when (and (or (:type schema) (:confirms schema) (:keys schema)) (not (some #(= petrified-name %) non-generated-structures)))
                                      (zen.schema/apply-schema ztx
                                                               {:ts []
                                                                :require {}
                                                                :exclusive-keys {}
                                                                :interface-name petrified-name
                                                                :version version
                                                                :duplicates duplicates
                                                                :fhir-version fhir-version
                                                                :keys-in-array {}
                                                                :extension-path []}
                                                               (zen.core/get-symbol ztx 'zen/schema)
                                                               (zen.core/get-symbol ztx (symbol v))
                                                               {:interpreters [::ts]}))]
              (spit result-file-path (str/join "" (conj (:ts structures-result)  closing-modify-type "\n")) :append true))) structures)

    (mapv (fn [[k v]]
            (mapv (fn [[_ schema-name]]
                    (let [_ (zen.core/read-ns ztx (symbol (namespace schema-name)))
                          interface-name (gut/prettify-profile-name (namespace schema-name) k version)
                          closing-modify-type (when (and (not= version fhir-version) (some #(= k %) (keys duplicates))) "> {}")
                          schemas-result (when (not (re-find #"-" k))
                                           (zen.schema/apply-schema ztx
                                                                    {:ts []
                                                                     :require {}
                                                                     :interface-name interface-name
                                                                     :is-type false
                                                                     :version version
                                                                     :duplicates duplicates
                                                                     :fhir-version fhir-version
                                                                     :keys-in-array {}
                                                                     :exclusive-keys {}
                                                                     :extension-path []}
                                                                    (zen.core/get-symbol ztx 'zen/schema)
                                                                    (zen.core/get-symbol ztx (symbol schema-name))
                                                                    {:interpreters [::ts]}))]
                      (spit result-file-path
                            (str/join "" (conj (:ts schemas-result) closing-modify-type "\n")) :append true))) v)) profiles)

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
          (let [resource-map-name (gut/get-resource-map-name version)
                default-imports (if (= version fhir-version) ", DomainResource, Identifier, Element" "")]
            (format "import { %s%s } from \"./%s.ts\";\n"
                    resource-map-name default-imports version)))
        versions))

(defn generate-types-exports [ztx duplicates versions fhir-version profile-version]
  (let [resources-per-version
        (reduce (fn [acc version]
                  (let [resource-names
                        (keys (:schemas (zen.core/get-symbol ztx (symbol (str version "/base-schemas")))))
                        structures (:schemas (zen.core/get-symbol ztx (symbol (str version "/structures"))))
                        profile-names (if profile-version (keys (:schemas (zen.core/get-symbol ztx (symbol (str profile-version "/profiles"))))) [])
                        filtered-structures (filter-structures ztx structures)
                        structures-names (map (fn [[_k v]] (gut/get-structure-name v)) filtered-structures)
                        all-resource-names (into (into resource-names structures-names) profile-names)
                        filtred-resource-names (if (= version profile-version) all-resource-names
                                                   (filter (fn [n] (not (some #(= n %) (if (= version fhir-version) profile-names (keys duplicates))))) all-resource-names))]

                    (assoc acc version filtred-resource-names)))
                {}  versions)]

    (mapv (fn [[version names]]
            (let [search-params (if (= version fhir-version) "SearchParams, " "")]
              (format "export { %s %s } from \"./%s.ts\";" search-params (str/join ", " names) version)))
          resources-per-version)))

(defn generate-index-file [api-type result-folder-path versions fhir-version profiles-version types-exports]
  (let [resourcetype-type (:resourcetype-type prepared-interfaces)
        reference-type (if (= api-type "fhir")
                         (:reference-type-fhir prepared-interfaces)
                         (:reference-type prepared-interfaces))
        onekey-type (:onekey-type prepared-interfaces)
        require-at-least-one-type (:require-at-least-one-type prepared-interfaces)
        subs-subscription (:subs-subscription prepared-interfaces)
        modify-type (:modify-type prepared-interfaces)
        imports (into (generate-imports-for-index-file versions fhir-version) types-exports)
        resource-type-map (gut/get-index-resource-type-map versions fhir-version profiles-version)
        defaults (into imports
                       [onekey-type require-at-least-one-type resource-type-map resourcetype-type reference-type modify-type subs-subscription])
        result-file-path (str result-folder-path "/aidbox-types.d.ts")]

    (spit result-file-path (str/join "" defaults) :append true)))

(defn generate-types [zen-path {api-type :api-type profiles :profiles} result-folder-path]
  (let [ztx  (zen.core/new-context {:package-paths [zen-path]})
        _ (read-versions ztx zen-path)
        schemas (zen.core/get-tag ztx 'zen.fhir/base-schemas)
        structures (zen.core/get-tag ztx 'zen.fhir/structures)
        versions (mapv #(namespace %) schemas)
        fhir-version (some #(re-matches #"^hl7-fhir-r.+-core$" %) versions)
        profile-version (when (boolean profiles) (namespace (first (filter #(not= (namespace %) fhir-version) (zen.core/get-tag ztx 'zen.fhir/profiles)))))
        versions-with-profile (if (boolean profiles) (conj versions profile-version) versions)
        resource-names (flatten (map #(keys (:schemas (zen.core/get-symbol ztx (symbol %)))) schemas))
        profile-names (keys (:schemas (zen.core/get-symbol ztx (symbol (str profile-version "/profiles")))))
        structure-names (get-structure-names ztx structures)
        names (into (into resource-names structure-names) profile-names)
        duplicates (into (gut/find-duplicates names) (gut/find-profiles-dublicate names))
        types-exports (generate-types-exports ztx duplicates versions-with-profile fhir-version profile-version)
        searches (get-searches ztx (zen.core/get-tag ztx 'zen.fhir/searches))
        search-params-start-interface "export interface SearchParams extends Record<ResourceType, unknown> {\n"
        search-params-end-interface "\n}"
        search-params-content (get-search-params ztx searches)
        search-params-result (conj (into [search-params-start-interface]  search-params-content) search-params-end-interface)]

    (generate-index-file api-type result-folder-path versions-with-profile fhir-version profile-version types-exports)
    (println "Type generation...")
    (mapv (fn [version]
            (generate-types-for-version ztx zen-path version result-folder-path fhir-version profile-version duplicates api-type))
          versions-with-profile)

    (println "Search params generation...")

    (spit (str result-folder-path "/" fhir-version ".d.ts") (str/join "" search-params-result) :append true)
    #_(pp/pprint @schema-state)))

(defn get-sdk [zen-path args]
  (io/make-parents (str zen-path "/package/index.js"))
  (with-open [zen-project (io/reader (str zen-path "/zen-package.edn"))]
    (first (:deps (edn/read (java.io.PushbackReader. zen-project)))))
  (with-open [in (io/input-stream (clojure.java.io/resource "index.js"))]
    (io/copy in (clojure.java.io/file (str zen-path "/package/index.js"))))
  (with-open [in (io/input-stream (clojure.java.io/resource "index.d.ts"))]
    (io/copy in (clojure.java.io/file (str zen-path "/package/index.d.ts"))))
  (with-open [in (io/input-stream (clojure.java.io/resource "package.json"))]
    (io/copy in (clojure.java.io/file (str zen-path "/package/package.json"))))

  (generate-types zen-path args "./package")
  (println "Archive generation")
  (shell/sh "bash" "-c" (str " tar -czvf ../aidbox-javascript-sdk-v1.0.0.tgz -C package ."
                             " && rm -rf package"))
  (println "Done")

  (System/exit 0))

(defn get-types [zen-path args]
  (io/make-parents (str zen-path "/types/aidbox-types.d.ts"))
  (generate-types zen-path args "./types")

  (println "Done"))

(comment
  (get-types "/Users/ross/Desktop/HS/aidbox-sdk-js/zen-project" {:api-type "fhir" :profiles 'true}))

(comment
  (def ztx (zen.core/new-context {}))

  (def my-structs-ns
    '{:ns my-sturcts

      defaults
      {:zen/tags #{zen/property zen/schema}
       :type zen/boolean}

      User
      {:zen/tags #{zen.fhir/profile-schema zen/schema},
       :zen/desc "Practitioner resource for use in NZ",
       :zen.fhir/type "Practitioner",
       :zen.fhir/profileUri "http://hl7.org.nz/fhir/StructureDefinition/NzPractitioner",
       :zen.fhir/version "0.6.23-1",
       :require #{:description :reasonCode},
       :confirms #{hl7-fhir-r4-core.Practitioner/schema
                   zen.fhir/Resource},
       :type zen/map,
       :keys {;; :_created {:confirms #{hl7-fhir-r4-core.Element/schema}},
              ;; :description {:confirms #{hl7-fhir-r4-core.string/schema},
              ;;               :zen/desc "Shown on a subject line in a meeting request, or appointment list"},
              ;; :serviceCategory {:type zen/vector,
              ;;                   :every {:confirms #{hl7-fhir-r4-core.CodeableConcept/schema},
              ;;                           :fhir/flags #{:SU},
              ;;                           :zen.fhir/value-set {:symbol hl7-fhir-r4-core.value-set.service-category/value-set,
              ;;                                                :strength :example},
              ;;                           :zen/desc "A broad categorization of the service that is to be performed during this appointment"}},
              ;; :slot {:type zen/vector,
              ;;        :every {:confirms #{hl7-fhir-r4-core.Reference/schema
              ;;                            zen.fhir/Reference},
              ;;                :zen.fhir/reference {:refers #{hl7-fhir-r4-core.Slot/schema}},
              ;;                :zen/desc "The slots that this appointment is filling"}}
              ;; :start {:confirms #{hl7-fhir-r4-core.instant/schema},
              ;;         :fhir/flags #{:SU},
              ;;         :zen/desc "When appointment is to take place"},
              ;; :reasonCode {:type zen/vector,
              ;;              :every {:confirms #{hl7-fhir-r4-core.CodeableConcept/schema},
              ;;                      :fhir/flags #{:SU},
              ;;                      :zen.fhir/value-set {:symbol hl7-fhir-r4-core.value-set.encounter-reason/value-set,
              ;;                                           :strength :preferred},
              ;;                      :zen/desc "Coded reason this appointment is scheduled"}},
              ;; :created {:confirms #{hl7-fhir-r4-core.dateTime/schema},
              ;;           :zen/desc "The date that this appointment was initially created"},
              :participant {:type zen/vector,
                            :every {:confirms #{hl7-fhir-r4-core.BackboneElement/schema},
                                    :type zen/map,
                                    :keys {:type {:type zen/vector,
                                                  :every {:confirms #{hl7-fhir-r4-core.CodeableConcept/schema},
                                                          :fhir/flags #{:SU},
                                                          :zen.fhir/value-set {:symbol hl7-fhir-r4-core.value-set.encounter-participant-type/value-set,
                                                                               :strength :extensible},
                                                          :zen/desc "Role of participant in the appointment"}},
                                           :actor {:confirms #{hl7-fhir-r4-core.Reference/schema
                                                               zen.fhir/Reference},
                                                   :fhir/flags #{:SU},
                                                   :zen.fhir/reference {:refers #{hl7-fhir-r4-core.Patient/schema
                                                                                  hl7-fhir-r4-core.PractitionerRole/schema
                                                                                  hl7-fhir-r4-core.HealthcareService/schema
                                                                                  hl7-fhir-r4-core.Device/schema
                                                                                  hl7-fhir-r4-core.Location/schema
                                                                                  hl7-fhir-r4-core.Practitioner/schema
                                                                                  hl7-fhir-r4-core.RelatedPerson/schema}},
                                                   :zen/desc "Person, Location/HealthcareService or Device"},
                                           :required {:confirms #{hl7-fhir-r4-core.code/schema},
                                                      :fhir/flags #{:SU},
                                                      :zen.fhir/value-set {:symbol hl7-fhir-r4-core.value-set.participantrequired/value-set,
                                                                           :strength :required},
                                                      :zen/desc "required | optional | information-only"},
                                           :_required {:confirms #{hl7-fhir-r4-core.Element/schema}},
                                           :status {:confirms #{hl7-fhir-r4-core.code/schema},
                                                    :fhir/flags #{:SU},
                                                    :zen.fhir/value-set {:symbol hl7-fhir-r4-core.value-set.participationstatus/value-set,
                                                                         :strength :required},
                                                    :zen/desc "accepted | declined | tentative | needs-action"},
                                           :_status {:confirms #{hl7-fhir-r4-core.Element/schema}},
                                           :period {:confirms #{hl7-fhir-r4-core.Period/schema},
                                                    :zen/desc "Participation period of the actor"}},
                                    :require #{:status},
                                    :zen/desc "Participants involved in appointment"},
                            :minItems 1}}}})

  (zen.core/load-ns ztx my-structs-ns)

  (def r
    (sut/apply-schema ztx
                      {:ts []
                       :require {}
                       :exclusive-keys {}
                       :interface-name "Appointment"
                       :version "hl7-fhir-r4-core"
                       :duplicates {"Organization" "Organization"}
                       :fhir-version "hl7-fhir-r4-core"
                       :keys-in-array {}
                       :extension-path []
                       :ignore-path []}
                      (zen.core/get-symbol ztx 'zen/schema)
                      (zen.core/get-symbol ztx 'my-sturcts/User)
                      {:interpreters [::ts]}))

  (pp/pprint @schema-state)
  (println (:ts r))
  (str/join "" (::ts r)))
