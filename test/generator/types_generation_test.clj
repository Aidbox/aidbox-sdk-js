(ns generator.types-generation-test
  (:require [zen.schema :as sut]
            [zen.core]
            [clojure.test :as t]
            [clojure.string :as str]
            [generator.types-generation]))

(t/deftest test-generator-on-appopintment
  (def ztx (zen.core/new-context {}))

  (def my-structs-ns
    '{:ns my-sturcts

      defaults
      {:zen/tags #{zen/property zen/schema}
       :type zen/boolean}

      Appointment
      {:zen.fhir/version "0.6.20-2",
       :confirms #{hl7-fhir-r4-core.DomainResource/schema
                   zen.fhir/Resource},
       :zen/tags #{zen/schema zen.fhir/base-schema},
       :zen.fhir/profileUri "http://hl7.org/fhir/StructureDefinition/Appointment",
       :require #{:participant :status},
       :type zen/map,
       :zen/desc "A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s).",
       :keys {:_created {:confirms #{hl7-fhir-r4-core.Element/schema}},
              :description {:confirms #{hl7-fhir-r4-core.string/schema},
                            :zen/desc "Shown on a subject line in a meeting request, or appointment list"},
              :serviceCategory {:type zen/vector,
                                :every {:confirms #{hl7-fhir-r4-core.CodeableConcept/schema},
                                        :fhir/flags #{:SU},
                                        :zen.fhir/value-set {:symbol hl7-fhir-r4-core.value-set.service-category/value-set,
                                                             :strength :example},
                                        :zen/desc "A broad categorization of the service that is to be performed during this appointment"}},
              :slot {:type zen/vector,
                     :every {:confirms #{hl7-fhir-r4-core.Reference/schema
                                         zen.fhir/Reference},
                             :zen.fhir/reference {:refers #{hl7-fhir-r4-core.Slot/schema}},
                             :zen/desc "The slots that this appointment is filling"}},
              :_patientInstruction {:confirms #{hl7-fhir-r4-core.Element/schema}},
              :specialty {:type zen/vector,
                          :every {:confirms #{hl7-fhir-r4-core.CodeableConcept/schema},
                                  :fhir/flags #{:SU},
                                  :zen.fhir/value-set {:symbol hl7-fhir-r4-core.value-set.c80-practice-codes/value-set,
                                                       :strength :preferred},
                                  :zen/desc "The specialty of a practitioner that would be required to perform the service requested in this appointment"}},
              :cancelationReason {:confirms #{hl7-fhir-r4-core.CodeableConcept/schema},
                                  :fhir/flags #{:SU},
                                  :zen.fhir/value-set {:symbol hl7-fhir-r4-core.value-set.appointment-cancellation-reason/value-set,
                                                       :strength :example},
                                  :zen/desc "The coded reason for the appointment being cancelled"},
              :requestedPeriod {:type zen/vector,
                                :every {:confirms #{hl7-fhir-r4-core.Period/schema},
                                        :zen/desc "Potential date/time interval(s) requested to allocate the appointment within"}},
              :patientInstruction {:confirms #{hl7-fhir-r4-core.string/schema},
                                   :zen/desc "Detailed information and instructions for the patient"},
              :_end {:confirms #{hl7-fhir-r4-core.Element/schema}},
              :_priority {:confirms #{hl7-fhir-r4-core.Element/schema}},
              :_status {:confirms #{hl7-fhir-r4-core.Element/schema}},
              :start {:confirms #{hl7-fhir-r4-core.instant/schema},
                      :fhir/flags #{:SU},
                      :zen/desc "When appointment is to take place"},
              :reasonCode {:type zen/vector,
                           :every {:confirms #{hl7-fhir-r4-core.CodeableConcept/schema},
                                   :fhir/flags #{:SU},
                                   :zen.fhir/value-set {:symbol hl7-fhir-r4-core.value-set.encounter-reason/value-set,
                                                        :strength :preferred},
                                   :zen/desc "Coded reason this appointment is scheduled"}},
              :created {:confirms #{hl7-fhir-r4-core.dateTime/schema},
                        :zen/desc "The date that this appointment was initially created"},
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
                            :minItems 1},
              :serviceType {:type zen/vector,
                            :every {:confirms #{hl7-fhir-r4-core.CodeableConcept/schema},
                                    :fhir/flags #{:SU},
                                    :zen.fhir/value-set {:symbol hl7-fhir-r4-core.value-set.service-type/value-set,
                                                         :strength :example},
                                    :zen/desc "The specific service that is to be performed during this appointment"}},
              :_description {:confirms #{hl7-fhir-r4-core.Element/schema}},
              :supportingInformation {:type zen/vector,
                                      :every {:confirms #{hl7-fhir-r4-core.Reference/schema
                                                          zen.fhir/Reference},
                                              :zen.fhir/reference {:refers #{}},
                                              :zen/desc "Additional information to support the appointment"}},
              :priority {:confirms #{hl7-fhir-r4-core.unsignedInt/schema},
                         :zen/desc "Used to make informed decisions if needing to re-prioritize"},
              :appointmentType {:confirms #{hl7-fhir-r4-core.CodeableConcept/schema},
                                :fhir/flags #{:SU},
                                :zen.fhir/value-set {:symbol hl7-terminology-r4.value-set.v2-0276/value-set,
                                                     :strength :preferred},
                                :zen/desc "The style of appointment or patient that has been booked in the slot (not service type)"},
              :status {:confirms #{hl7-fhir-r4-core.code/schema},
                       :fhir/flags #{:SU :?!},
                       :zen.fhir/value-set {:symbol hl7-fhir-r4-core.value-set.appointmentstatus/value-set,
                                            :strength :required},
                       :zen/desc "proposed | pending | booked | arrived | fulfilled | cancelled | noshow | entered-in-error | checked-in | waitlist"},
              :comment {:confirms #{hl7-fhir-r4-core.string/schema},
                        :zen/desc "Additional comments"},
              :minutesDuration {:confirms #{hl7-fhir-r4-core.positiveInt/schema},
                                :zen/desc "Can be less than start/end (e.g. estimate)"},
              :identifier {:type zen/vector,
                           :every {:confirms #{hl7-fhir-r4-core.Identifier/schema},
                                   :fhir/flags #{:SU},
                                   :zen/desc "External Ids for this item"}},
              :_minutesDuration {:confirms #{hl7-fhir-r4-core.Element/schema}},
              :basedOn {:type zen/vector,
                        :every {:confirms #{hl7-fhir-r4-core.Reference/schema
                                            zen.fhir/Reference},
                                :zen.fhir/reference {:refers #{hl7-fhir-r4-core.ServiceRequest/schema}},
                                :zen/desc "The service request this appointment is allocated to assess"}},
              :end {:confirms #{hl7-fhir-r4-core.instant/schema},
                    :fhir/flags #{:SU},
                    :zen/desc "When appointment is to conclude"},
              :_start {:confirms #{hl7-fhir-r4-core.Element/schema}},
              :_comment {:confirms #{hl7-fhir-r4-core.Element/schema}},
              :reasonReference {:type zen/vector,
                                :every {:confirms #{hl7-fhir-r4-core.Reference/schema
                                                    zen.fhir/Reference},
                                        :zen.fhir/reference {:refers #{hl7-fhir-r4-core.Observation/schema
                                                                       hl7-fhir-r4-core.Procedure/schema
                                                                       hl7-fhir-r4-core.ImmunizationRecommendation/schema
                                                                       hl7-fhir-r4-core.Condition/schema}},
                                        :zen/desc "Reason the appointment is to take place (resource)"}}},
       :zen.fhir/type "Appointment"}})

  (zen.core/load-ns ztx my-structs-ns)

  (def r
    (sut/apply-schema ztx
                      {:ts []
                       :require {}
                       :exclusive-keys {}
                       :is-type false
                       :interface-name "Appointment"
                       :version "hl7-fhir-r4-core"
                       :duplicates []
                       :fhir-version "hl7-fhir-r4-core"
                       :keys-in-array {}}
                      (zen.core/get-symbol ztx 'zen/schema)
                      (zen.core/get-symbol ztx 'my-sturcts/Appointment)
                      {:interpreters [:generator.types-generation/ts]}))

  (def appointment-interface
    (str "/* A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */"
         "\nexport interface Appointment extends DomainResource<'Appointment'>"
         "{ _created?:Element;"
         "/* Shown on a subject line in a meeting request, or appointment list */"
         "\ndescription?:string;"
         "serviceCategory?:Array<CodeableConcept>;"
         "slot?:Array<Reference<'Slot'>>;"
         "_patientInstruction?:Element;"
         "specialty?:Array<CodeableConcept>;"
         "/* The coded reason for the appointment being cancelled */"
         "\ncancelationReason?:CodeableConcept;"
         "requestedPeriod?:Array<Period>;"
         "/* Detailed information and instructions for the patient */"
         "\npatientInstruction?:string;"
         "_end?:Element;_priority?:Element;"
         "_status?:Element;"
         "/* When appointment is to take place */"
         "\nstart?:instant;reasonCode?:Array<CodeableConcept>;"
         "/* The date that this appointment was initially created */"
         "\ncreated?:dateTime;participant:Array<{ type?:Array<CodeableConcept>;"
         "/* Person, Location/HealthcareService or Device */"
         "\nactor?:Reference<'Patient' | 'PractitionerRole' | 'HealthcareService' | 'Device' | 'Location' | 'Practitioner' | 'RelatedPerson'>;"
         "/* required | optional | information-only */"
         "\nrequired?:string;_required?:Element;"
         "/* accepted | declined | tentative | needs-action */"
         "\nstatus:string;_status?:Element;"
         "/* Participation period of the actor */\nperiod?:Period; }>;"
         "serviceType?:Array<CodeableConcept>;"
         "_description?:Element;"
         "supportingInformation?:Array<Reference<ResourceType>>;"
         "/* Used to make informed decisions if needing to re-prioritize */"
         "\npriority?:unsignedInt;"
         "/* The style of appointment or patient that has been booked in the slot (not service type) */"
         "\nappointmentType?:CodeableConcept;"
         "/* proposed | pending | booked | arrived | fulfilled | cancelled | noshow | entered-in-error | checked-in | waitlist */\nstatus:string;"
         "/* Additional comments */"
         "\ncomment?:string;/* Can be less than start/end (e.g. estimate) */"
         "\nminutesDuration?:positiveInt;identifier?:Array<Identifier>;"
         "_minutesDuration?:Element;basedOn?:Array<Reference<'ServiceRequest'>>;"
         "/* When appointment is to conclude */"
         "\nend?:instant;_start?:Element;"
         "_comment?:Element;"
         "reasonReference?:Array<Reference<'Observation' | 'Procedure' | 'ImmunizationRecommendation' | 'Condition'>>; }"))

  (t/is (= appointment-interface (str/join "" (:ts r)))))

(t/deftest test-generator-on-custom-resource
  (def ztx (zen.core/new-context {}))

  (def my-structs-ns
    '{:ns my-sturcts

      defaults
      {:zen/tags #{zen/property zen/schema}
       :type zen/boolean}

      PlanDefinition
      {:zen/tags #{aidbox.repository.v1/repository zen/schema zen.fhir/base-schema},
       :confirms #{zen.fhir/Resource},
       :extra-parameter-sources :all,
       :zen.fhir/version "0.5.11",
       :zen.fhir/type "PlanDefinition",
       :require #{:editedBy :systemAccount :organization :title :action :campaignType :trigger},
       :keys {:editedBy {:confirms #{zen.fhir/Reference},
                         :zen.fhir/reference {:refers #{custom.User/schema}}},
              :answeringMachineDetection {:enum [{:value "active"} {:value "inactive"}],
                                          :type zen/string},
              :schedule {:require #{:startTime :endTime :splitTime},
                         :keys {:data {:type zen/vector, :every {:require #{:name :value},
                                                                 :keys {:name {:type zen/string},
                                                                        :value {:type zen/boolean}},
                                                                 :type zen/map}},
                                :endTime {:type zen/string},
                                :splitTime {:type zen/string},
                                :startTime {:type zen/string}},
                         :type zen/map},
              :workflowVersion {:enum [{:value "v0"} {:value "v1"}],
                                :type zen/string,
                                :zen/desc "Version of conductor workflow"},
              :isDeleted {:type zen/boolean},
              :criteria {:require #{:source},
                         :keys {:query {:require #{:params :string},
                                        :keys {:params {:type zen/vector, :every {:type zen/string}},
                                               :string {:type zen/string}},
                                        :type zen/map},
                                :source {:type zen/vector,
                                         :every {:keys {:entity {:type zen/string},
                                                        :display {:type zen/string},
                                                        :operator {:type zen/string},
                                                        :attribute {:type zen/string}},
                                                 :type zen/map, :validation-type :open}}},
                         :type zen/map},
              :replyPolicyConfiguration {:keys {:cancel
                                                {:keys
                                                 {:mode
                                                  {:enum [{:value "business"} {:value "default"}],
                                                   :type zen/string},
                                                  :timeout {:enum [{:value "24"} {:value "none"} {:value "day-before"}],
                                                            :type zen/string},
                                                  :template {:type zen/string}},
                                                 :type zen/map},
                                                :custom {:keys
                                                         {:mode {:enum [{:value "business"} {:value "default"}],
                                                                 :type zen/string},
                                                          :timeout {:enum [{:value "24"} {:value "none"} {:value "day-before"}],
                                                                    :type zen/string},
                                                          :template {:type zen/string}},
                                                         :type zen/map},
                                                :repeat {:keys {:mode {:enum [{:value "business"} {:value "default"}],
                                                                       :type zen/string},
                                                                :timeout {:enum [{:value "24"} {:value "none"} {:value "day-before"}],
                                                                          :type zen/string},
                                                                :template {:type zen/string}},
                                                         :type zen/map},
                                                :confirm {:keys {:mode {:enum [{:value "business"} {:value "default"}],
                                                                        :type zen/string},
                                                                 :timeout {:enum [{:value "24"} {:value "none"} {:value "day-before"}],
                                                                           :type zen/string},
                                                                 :template {:type zen/string}},
                                                          :type zen/map},
                                                :opt-out {:keys {:mode {:enum [{:value "business"} {:value "default"}],
                                                                        :type zen/string}, :timeout {:enum [{:value "24"} {:value "none"} {:value "day-before"}],
                                                                                                     :type zen/string}, :template {:type zen/string}}, :type zen/map},
                                                :timeout {:keys {:mode {:enum [{:value "business"} {:value "default"}], :type zen/string},
                                                                 :timeout {:enum [{:value "24"} {:value "none"} {:value "day-before"}],
                                                                           :type zen/string},
                                                                 :template {:type zen/string}},
                                                          :type zen/map},
                                                :reschedule {:keys {:mode {:enum [{:value "business"} {:value "default"}],
                                                                           :type zen/string},
                                                                    :timeout {:enum [{:value "24"} {:value "none"} {:value "day-before"}],
                                                                              :type zen/string},
                                                                    :template {:type zen/string}},
                                                             :type zen/map},
                                                :not-recognized {:keys {:mode {:enum [{:value "business"} {:value "default"}],
                                                                               :type zen/string},
                                                                        :timeout {:enum [{:value "24"} {:value "none"} {:value "day-before"}],
                                                                                  :type zen/string},
                                                                        :template {:type zen/string}}, :type zen/map}},
                                         :type zen/map}, :extra {:validation-type :open},
              :systemAccount {:confirms #{zen.fhir/Reference},
                              :zen.fhir/reference {:refers #{custom.SystemAccount/schema}}},
              :organization {:confirms #{zen.fhir/Reference},
                             :zen.fhir/reference {:refers #{hl7-fhir-r4-core.Organization/schema}}},
              :title {:type zen/string},
              :retryConfiguration {:require #{:count :timeout},
                                   :keys {:count {:type zen/number},
                                          :timeout {:type zen/number}},
                                   :type zen/map},
              :filter {:keys {:or {:type zen/vector, :every {:keys {:key {:type zen/string},
                                                                    :type {:enum [{:value "date"}], :type zen/string},
                                                                    :value {:type zen/vector, :every {:type zen/string}},
                                                                    :subKey {:type zen/string},
                                                                    :operator {:enum [{:value "eq"} {:value "ne"} {:value "gte"} {:value "gt"} {:value "lt"} {:value "lte"} {:value "between"}],
                                                                               :type zen/string}, :lastValue {:type zen/string}},
                                                             :type zen/map}},
                              :and {:type zen/vector,
                                    :every {:keys {:key {:type zen/string},
                                                   :type {:enum [{:value "date"}],
                                                          :type zen/string},
                                                   :value {:type zen/vector, :every {:type zen/string}},
                                                   :subKey {:type zen/string},
                                                   :operator {:enum [{:value "eq"} {:value "ne"} {:value "gte"} {:value "gt"} {:value "lt"} {:value "lte"} {:value "between"}],
                                                              :type zen/string}, :lastValue {:type zen/string}},
                                            :type zen/map}},
                              :key {:type zen/string}, :type {:enum [{:value "date"}], :type zen/string},
                              :value {:type zen/vector, :every {:type zen/string}}, :subKey {:type zen/string},
                              :operator {:enum [{:value "eq"} {:value "ne"} {:value "gte"} {:value "gt"} {:value "lt"} {:value "lte"} {:value "between"}],
                                         :type zen/string}, :lastValue {:type zen/string}}, :type zen/map},
              :campaignGroup {:confirms #{zen.fhir/Reference}, :zen.fhir/reference {:refers #{custom.CampaignGroup/schema}}},
              :action {:require #{:id :code},
                       :keys {:id {:validation-type :open},
                              :code {:validation-type :open}},
                       :type zen/map},
              :campaignType {:enum [{:value "appointment-reminder"} {:value "appointment-notification"}],
                             :type zen/string},
              :trigger {:require #{:resourceType :event},
                        :keys {:event {:type zen/string},
                               :resourceType {:type zen/string}},
                        :type zen/map}},
       :type zen/map}})

  (zen.core/load-ns ztx my-structs-ns)

  (def r
    (sut/apply-schema ztx
                      {:ts []
                       :require {}
                       :exclusive-keys {}
                       :is-type false
                       :interface-name "PlanDefinition"
                       :version "something"
                       :duplicates {"PlanDefinition" "PlanDefinition"}
                       :fhir-version "hl7-fhir-r4-core"
                       :keys-in-array {}}
                      (zen.core/get-symbol ztx 'zen/schema)
                      (zen.core/get-symbol ztx 'my-sturcts/PlanDefinition)
                      {:interpreters [:generator.types-generation/ts]}))

  (def plandefinition-interface
    (str "export interface PlanDefinition extends Modify<Hl7FhirR4CoreResourceTypeMap['PlanDefinition'],"
         "{ editedBy:Reference<'User'>;"
         "answeringMachineDetection?:'active' | 'inactive';"
         "schedule?:{ data?:Array<{ name:string;value:boolean; }>;"
         "endTime:string;splitTime:string;startTime:string; };"
         "/* Version of conductor workflow */"
         "\nworkflowVersion?:'v0' | 'v1';"
         "isDeleted?:boolean;"
         "criteria?:{ query?:{ params:Array<string >;string:string; };"
         "source:Array<{ entity?:string;display?:string;operator?:string;attribute?:string; }>; };"
         "replyPolicyConfiguration?:{ cancel?:{ mode?:'business' | 'default';timeout?:'24' | 'none' | 'day-before';template?:string; };"
         "custom?:{ mode?:'business' | 'default';timeout?:'24' | 'none' | 'day-before';template?:string; };"
         "repeat?:{ mode?:'business' | 'default';timeout?:'24' | 'none' | 'day-before';template?:string; };"
         "confirm?:{ mode?:'business' | 'default';timeout?:'24' | 'none' | 'day-before';template?:string; };"
         "'opt-out'?:{ mode?:'business' | 'default';timeout?:'24' | 'none' | 'day-before';template?:string; };"
         "timeout?:{ mode?:'business' | 'default';timeout?:'24' | 'none' | 'day-before';template?:string; };"
         "reschedule?:{ mode?:'business' | 'default';timeout?:'24' | 'none' | 'day-before';template?:string; };'"
         "not-recognized'?:{ mode?:'business' | 'default';timeout?:'24' | 'none' | 'day-before';template?:string; }; };"
         "extra?:any;systemAccount:Reference<'SystemAccount'>;"
         "organization:Reference<'Organization'>;"
         "title:string;retryConfiguration?:{ count:number;timeout:number; };"
         "filter?:{ or?:Array<{ key?:string;type?:'date';value?:Array<string >;"
         "subKey?:string;operator?:'eq' | 'ne' | 'gte' | 'gt' | 'lt' | 'lte' | 'between';lastValue?:string; }>;"
         "and?:Array<{ key?:string;type?:'date';value?:Array<string >;"
         "subKey?:string;operator?:'eq' | 'ne' | 'gte' | 'gt' | 'lt' | 'lte' | 'between';lastValue?:string; }>;"
         "key?:string;type?:'date';value?:Array<string >;"
         "subKey?:string;"
         "operator?:'eq' | 'ne' | 'gte' | 'gt' | 'lt' | 'lte' | 'between';"
         "lastValue?:string; };"
         "campaignGroup?:Reference<'CampaignGroup'>;"
         "action:{ id:any;code:any; };"
         "campaignType:'appointment-reminder' | 'appointment-notification';"
         "trigger:{ event:string;resourceType:string; }; }"))

  (t/is (= plandefinition-interface (str/join "" (:ts r)))))
