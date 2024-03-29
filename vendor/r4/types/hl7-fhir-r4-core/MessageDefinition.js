"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageDefinitionResponseRequired = exports.MessageDefinitionCode = exports.MessageDefinitionStatus = exports.MessageDefinitionCategory = void 0;
/** consequence | currency | notification */
var MessageDefinitionCategory;
(function (MessageDefinitionCategory) {
    MessageDefinitionCategory["Consequence"] = "consequence";
    MessageDefinitionCategory["Currency"] = "currency";
    MessageDefinitionCategory["Notification"] = "notification";
})(MessageDefinitionCategory = exports.MessageDefinitionCategory || (exports.MessageDefinitionCategory = {}));
/** draft | active | retired | unknown */
var MessageDefinitionStatus;
(function (MessageDefinitionStatus) {
    MessageDefinitionStatus["Active"] = "active";
    MessageDefinitionStatus["Draft"] = "draft";
    MessageDefinitionStatus["Retired"] = "retired";
    MessageDefinitionStatus["Unknown"] = "unknown";
})(MessageDefinitionStatus = exports.MessageDefinitionStatus || (exports.MessageDefinitionStatus = {}));
/** Type of resource */
var MessageDefinitionCode;
(function (MessageDefinitionCode) {
    MessageDefinitionCode["ImmunizationEvaluation"] = "ImmunizationEvaluation";
    MessageDefinitionCode["Appointment"] = "Appointment";
    MessageDefinitionCode["StructureMap"] = "StructureMap";
    MessageDefinitionCode["CareTeam"] = "CareTeam";
    MessageDefinitionCode["Linkage"] = "Linkage";
    MessageDefinitionCode["Communication"] = "Communication";
    MessageDefinitionCode["MedicationDispense"] = "MedicationDispense";
    MessageDefinitionCode["ImagingStudy"] = "ImagingStudy";
    MessageDefinitionCode["ChargeItem"] = "ChargeItem";
    MessageDefinitionCode["AdverseEvent"] = "AdverseEvent";
    MessageDefinitionCode["Media"] = "Media";
    MessageDefinitionCode["SubstancePolymer"] = "SubstancePolymer";
    MessageDefinitionCode["QuestionnaireResponse"] = "QuestionnaireResponse";
    MessageDefinitionCode["Coverage"] = "Coverage";
    MessageDefinitionCode["Procedure"] = "Procedure";
    MessageDefinitionCode["AuditEvent"] = "AuditEvent";
    MessageDefinitionCode["PaymentReconciliation"] = "PaymentReconciliation";
    MessageDefinitionCode["MedicinalProductManufactured"] = "MedicinalProductManufactured";
    MessageDefinitionCode["CompartmentDefinition"] = "CompartmentDefinition";
    MessageDefinitionCode["Organization"] = "Organization";
    MessageDefinitionCode["ExplanationOfBenefit"] = "ExplanationOfBenefit";
    MessageDefinitionCode["Composition"] = "Composition";
    MessageDefinitionCode["CoverageEligibilityResponse"] = "CoverageEligibilityResponse";
    MessageDefinitionCode["DocumentReference"] = "DocumentReference";
    MessageDefinitionCode["EventDefinition"] = "EventDefinition";
    MessageDefinitionCode["SubstanceProtein"] = "SubstanceProtein";
    MessageDefinitionCode["TerminologyCapabilities"] = "TerminologyCapabilities";
    MessageDefinitionCode["Encounter"] = "Encounter";
    MessageDefinitionCode["ImplementationGuide"] = "ImplementationGuide";
    MessageDefinitionCode["EvidenceVariable"] = "EvidenceVariable";
    MessageDefinitionCode["ObservationDefinition"] = "ObservationDefinition";
    MessageDefinitionCode["DiagnosticReport"] = "DiagnosticReport";
    MessageDefinitionCode["ExampleScenario"] = "ExampleScenario";
    MessageDefinitionCode["ResearchDefinition"] = "ResearchDefinition";
    MessageDefinitionCode["Parameters"] = "Parameters";
    MessageDefinitionCode["SearchParameter"] = "SearchParameter";
    MessageDefinitionCode["MedicinalProductInteraction"] = "MedicinalProductInteraction";
    MessageDefinitionCode["CodeSystem"] = "CodeSystem";
    MessageDefinitionCode["MessageDefinition"] = "MessageDefinition";
    MessageDefinitionCode["NutritionOrder"] = "NutritionOrder";
    MessageDefinitionCode["VerificationResult"] = "VerificationResult";
    MessageDefinitionCode["MedicationAdministration"] = "MedicationAdministration";
    MessageDefinitionCode["CatalogEntry"] = "CatalogEntry";
    MessageDefinitionCode["Flag"] = "Flag";
    MessageDefinitionCode["DeviceUseStatement"] = "DeviceUseStatement";
    MessageDefinitionCode["Contract"] = "Contract";
    MessageDefinitionCode["Invoice"] = "Invoice";
    MessageDefinitionCode["PaymentNotice"] = "PaymentNotice";
    MessageDefinitionCode["Location"] = "Location";
    MessageDefinitionCode["Claim"] = "Claim";
    MessageDefinitionCode["Specimen"] = "Specimen";
    MessageDefinitionCode["MedicationStatement"] = "MedicationStatement";
    MessageDefinitionCode["EnrollmentResponse"] = "EnrollmentResponse";
    MessageDefinitionCode["Evidence"] = "Evidence";
    MessageDefinitionCode["Bundle"] = "Bundle";
    MessageDefinitionCode["ResearchElementDefinition"] = "ResearchElementDefinition";
    MessageDefinitionCode["BodyStructure"] = "BodyStructure";
    MessageDefinitionCode["MedicinalProduct"] = "MedicinalProduct";
    MessageDefinitionCode["ResearchStudy"] = "ResearchStudy";
    MessageDefinitionCode["AppointmentResponse"] = "AppointmentResponse";
    MessageDefinitionCode["MedicinalProductIndication"] = "MedicinalProductIndication";
    MessageDefinitionCode["Measure"] = "Measure";
    MessageDefinitionCode["Person"] = "Person";
    MessageDefinitionCode["InsurancePlan"] = "InsurancePlan";
    MessageDefinitionCode["Patient"] = "Patient";
    MessageDefinitionCode["EffectEvidenceSynthesis"] = "EffectEvidenceSynthesis";
    MessageDefinitionCode["ResearchSubject"] = "ResearchSubject";
    MessageDefinitionCode["Medication"] = "Medication";
    MessageDefinitionCode["ConceptMap"] = "ConceptMap";
    MessageDefinitionCode["CoverageEligibilityRequest"] = "CoverageEligibilityRequest";
    MessageDefinitionCode["SubstanceSourceMaterial"] = "SubstanceSourceMaterial";
    MessageDefinitionCode["VisionPrescription"] = "VisionPrescription";
    MessageDefinitionCode["MolecularSequence"] = "MolecularSequence";
    MessageDefinitionCode["MedicinalProductUndesirableEffect"] = "MedicinalProductUndesirableEffect";
    MessageDefinitionCode["OperationOutcome"] = "OperationOutcome";
    MessageDefinitionCode["MessageHeader"] = "MessageHeader";
    MessageDefinitionCode["AllergyIntolerance"] = "AllergyIntolerance";
    MessageDefinitionCode["SubstanceReferenceInformation"] = "SubstanceReferenceInformation";
    MessageDefinitionCode["SupplyDelivery"] = "SupplyDelivery";
    MessageDefinitionCode["EpisodeOfCare"] = "EpisodeOfCare";
    MessageDefinitionCode["PractitionerRole"] = "PractitionerRole";
    MessageDefinitionCode["Library"] = "Library";
    MessageDefinitionCode["Practitioner"] = "Practitioner";
    MessageDefinitionCode["MedicationRequest"] = "MedicationRequest";
    MessageDefinitionCode["ImmunizationRecommendation"] = "ImmunizationRecommendation";
    MessageDefinitionCode["Immunization"] = "Immunization";
    MessageDefinitionCode["GraphDefinition"] = "GraphDefinition";
    MessageDefinitionCode["Account"] = "Account";
    MessageDefinitionCode["MedicinalProductIngredient"] = "MedicinalProductIngredient";
    MessageDefinitionCode["MeasureReport"] = "MeasureReport";
    MessageDefinitionCode["DeviceMetric"] = "DeviceMetric";
    MessageDefinitionCode["Goal"] = "Goal";
    MessageDefinitionCode["MedicationKnowledge"] = "MedicationKnowledge";
    MessageDefinitionCode["ClaimResponse"] = "ClaimResponse";
    MessageDefinitionCode["DeviceDefinition"] = "DeviceDefinition";
    MessageDefinitionCode["Slot"] = "Slot";
    MessageDefinitionCode["ValueSet"] = "ValueSet";
    MessageDefinitionCode["MedicinalProductAuthorization"] = "MedicinalProductAuthorization";
    MessageDefinitionCode["StructureDefinition"] = "StructureDefinition";
    MessageDefinitionCode["MedicinalProductContraindication"] = "MedicinalProductContraindication";
    MessageDefinitionCode["DeviceRequest"] = "DeviceRequest";
    MessageDefinitionCode["List"] = "List";
    MessageDefinitionCode["Questionnaire"] = "Questionnaire";
    MessageDefinitionCode["DomainResource"] = "DomainResource";
    MessageDefinitionCode["Endpoint"] = "Endpoint";
    MessageDefinitionCode["NamingSystem"] = "NamingSystem";
    MessageDefinitionCode["MedicinalProductPackaged"] = "MedicinalProductPackaged";
    MessageDefinitionCode["Basic"] = "Basic";
    MessageDefinitionCode["Binary"] = "Binary";
    MessageDefinitionCode["PlanDefinition"] = "PlanDefinition";
    MessageDefinitionCode["Subscription"] = "Subscription";
    MessageDefinitionCode["RelatedPerson"] = "RelatedPerson";
    MessageDefinitionCode["SubstanceSpecification"] = "SubstanceSpecification";
    MessageDefinitionCode["SubstanceNucleicAcid"] = "SubstanceNucleicAcid";
    MessageDefinitionCode["GuidanceResponse"] = "GuidanceResponse";
    MessageDefinitionCode["ClinicalImpression"] = "ClinicalImpression";
    MessageDefinitionCode["OrganizationAffiliation"] = "OrganizationAffiliation";
    MessageDefinitionCode["Resource"] = "Resource";
    MessageDefinitionCode["Condition"] = "Condition";
    MessageDefinitionCode["CapabilityStatement"] = "CapabilityStatement";
    MessageDefinitionCode["HealthcareService"] = "HealthcareService";
    MessageDefinitionCode["SpecimenDefinition"] = "SpecimenDefinition";
    MessageDefinitionCode["RiskAssessment"] = "RiskAssessment";
    MessageDefinitionCode["OperationDefinition"] = "OperationDefinition";
    MessageDefinitionCode["ActivityDefinition"] = "ActivityDefinition";
    MessageDefinitionCode["Schedule"] = "Schedule";
    MessageDefinitionCode["BiologicallyDerivedProduct"] = "BiologicallyDerivedProduct";
    MessageDefinitionCode["Group"] = "Group";
    MessageDefinitionCode["MedicinalProductPharmaceutical"] = "MedicinalProductPharmaceutical";
    MessageDefinitionCode["FamilyMemberHistory"] = "FamilyMemberHistory";
    MessageDefinitionCode["ServiceRequest"] = "ServiceRequest";
    MessageDefinitionCode["DetectedIssue"] = "DetectedIssue";
    MessageDefinitionCode["Device"] = "Device";
    MessageDefinitionCode["RequestGroup"] = "RequestGroup";
    MessageDefinitionCode["TestScript"] = "TestScript";
    MessageDefinitionCode["RiskEvidenceSynthesis"] = "RiskEvidenceSynthesis";
    MessageDefinitionCode["SupplyRequest"] = "SupplyRequest";
    MessageDefinitionCode["Task"] = "Task";
    MessageDefinitionCode["CommunicationRequest"] = "CommunicationRequest";
    MessageDefinitionCode["EnrollmentRequest"] = "EnrollmentRequest";
    MessageDefinitionCode["ChargeItemDefinition"] = "ChargeItemDefinition";
    MessageDefinitionCode["Substance"] = "Substance";
    MessageDefinitionCode["Provenance"] = "Provenance";
    MessageDefinitionCode["Consent"] = "Consent";
    MessageDefinitionCode["CarePlan"] = "CarePlan";
    MessageDefinitionCode["TestReport"] = "TestReport";
    MessageDefinitionCode["Observation"] = "Observation";
    MessageDefinitionCode["DocumentManifest"] = "DocumentManifest";
})(MessageDefinitionCode = exports.MessageDefinitionCode || (exports.MessageDefinitionCode = {}));
/** always | on-error | never | on-success */
var MessageDefinitionResponseRequired;
(function (MessageDefinitionResponseRequired) {
    MessageDefinitionResponseRequired["Always"] = "always";
    MessageDefinitionResponseRequired["Never"] = "never";
    MessageDefinitionResponseRequired["OnError"] = "on-error";
    MessageDefinitionResponseRequired["OnSuccess"] = "on-success";
})(MessageDefinitionResponseRequired = exports.MessageDefinitionResponseRequired || (exports.MessageDefinitionResponseRequired = {}));
