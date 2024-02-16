"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompartmentDefinitionCode = exports.CompartmentDefinitionResourceCode = exports.CompartmentDefinitionStatus = void 0;
/** draft | active | retired | unknown */
var CompartmentDefinitionStatus;
(function (CompartmentDefinitionStatus) {
    CompartmentDefinitionStatus["Active"] = "active";
    CompartmentDefinitionStatus["Draft"] = "draft";
    CompartmentDefinitionStatus["Retired"] = "retired";
    CompartmentDefinitionStatus["Unknown"] = "unknown";
})(CompartmentDefinitionStatus = exports.CompartmentDefinitionStatus || (exports.CompartmentDefinitionStatus = {}));
/** Name of resource type */
var CompartmentDefinitionResourceCode;
(function (CompartmentDefinitionResourceCode) {
    CompartmentDefinitionResourceCode["ImmunizationEvaluation"] = "ImmunizationEvaluation";
    CompartmentDefinitionResourceCode["Appointment"] = "Appointment";
    CompartmentDefinitionResourceCode["StructureMap"] = "StructureMap";
    CompartmentDefinitionResourceCode["CareTeam"] = "CareTeam";
    CompartmentDefinitionResourceCode["Linkage"] = "Linkage";
    CompartmentDefinitionResourceCode["Communication"] = "Communication";
    CompartmentDefinitionResourceCode["MedicationDispense"] = "MedicationDispense";
    CompartmentDefinitionResourceCode["ImagingStudy"] = "ImagingStudy";
    CompartmentDefinitionResourceCode["ChargeItem"] = "ChargeItem";
    CompartmentDefinitionResourceCode["AdverseEvent"] = "AdverseEvent";
    CompartmentDefinitionResourceCode["Media"] = "Media";
    CompartmentDefinitionResourceCode["SubstancePolymer"] = "SubstancePolymer";
    CompartmentDefinitionResourceCode["QuestionnaireResponse"] = "QuestionnaireResponse";
    CompartmentDefinitionResourceCode["Coverage"] = "Coverage";
    CompartmentDefinitionResourceCode["Procedure"] = "Procedure";
    CompartmentDefinitionResourceCode["AuditEvent"] = "AuditEvent";
    CompartmentDefinitionResourceCode["PaymentReconciliation"] = "PaymentReconciliation";
    CompartmentDefinitionResourceCode["MedicinalProductManufactured"] = "MedicinalProductManufactured";
    CompartmentDefinitionResourceCode["CompartmentDefinition"] = "CompartmentDefinition";
    CompartmentDefinitionResourceCode["Organization"] = "Organization";
    CompartmentDefinitionResourceCode["ExplanationOfBenefit"] = "ExplanationOfBenefit";
    CompartmentDefinitionResourceCode["Composition"] = "Composition";
    CompartmentDefinitionResourceCode["CoverageEligibilityResponse"] = "CoverageEligibilityResponse";
    CompartmentDefinitionResourceCode["DocumentReference"] = "DocumentReference";
    CompartmentDefinitionResourceCode["EventDefinition"] = "EventDefinition";
    CompartmentDefinitionResourceCode["SubstanceProtein"] = "SubstanceProtein";
    CompartmentDefinitionResourceCode["TerminologyCapabilities"] = "TerminologyCapabilities";
    CompartmentDefinitionResourceCode["Encounter"] = "Encounter";
    CompartmentDefinitionResourceCode["ImplementationGuide"] = "ImplementationGuide";
    CompartmentDefinitionResourceCode["EvidenceVariable"] = "EvidenceVariable";
    CompartmentDefinitionResourceCode["ObservationDefinition"] = "ObservationDefinition";
    CompartmentDefinitionResourceCode["DiagnosticReport"] = "DiagnosticReport";
    CompartmentDefinitionResourceCode["ExampleScenario"] = "ExampleScenario";
    CompartmentDefinitionResourceCode["ResearchDefinition"] = "ResearchDefinition";
    CompartmentDefinitionResourceCode["Parameters"] = "Parameters";
    CompartmentDefinitionResourceCode["SearchParameter"] = "SearchParameter";
    CompartmentDefinitionResourceCode["MedicinalProductInteraction"] = "MedicinalProductInteraction";
    CompartmentDefinitionResourceCode["CodeSystem"] = "CodeSystem";
    CompartmentDefinitionResourceCode["MessageDefinition"] = "MessageDefinition";
    CompartmentDefinitionResourceCode["NutritionOrder"] = "NutritionOrder";
    CompartmentDefinitionResourceCode["VerificationResult"] = "VerificationResult";
    CompartmentDefinitionResourceCode["MedicationAdministration"] = "MedicationAdministration";
    CompartmentDefinitionResourceCode["CatalogEntry"] = "CatalogEntry";
    CompartmentDefinitionResourceCode["Flag"] = "Flag";
    CompartmentDefinitionResourceCode["DeviceUseStatement"] = "DeviceUseStatement";
    CompartmentDefinitionResourceCode["Contract"] = "Contract";
    CompartmentDefinitionResourceCode["Invoice"] = "Invoice";
    CompartmentDefinitionResourceCode["PaymentNotice"] = "PaymentNotice";
    CompartmentDefinitionResourceCode["Location"] = "Location";
    CompartmentDefinitionResourceCode["Claim"] = "Claim";
    CompartmentDefinitionResourceCode["Specimen"] = "Specimen";
    CompartmentDefinitionResourceCode["MedicationStatement"] = "MedicationStatement";
    CompartmentDefinitionResourceCode["EnrollmentResponse"] = "EnrollmentResponse";
    CompartmentDefinitionResourceCode["Evidence"] = "Evidence";
    CompartmentDefinitionResourceCode["Bundle"] = "Bundle";
    CompartmentDefinitionResourceCode["ResearchElementDefinition"] = "ResearchElementDefinition";
    CompartmentDefinitionResourceCode["BodyStructure"] = "BodyStructure";
    CompartmentDefinitionResourceCode["MedicinalProduct"] = "MedicinalProduct";
    CompartmentDefinitionResourceCode["ResearchStudy"] = "ResearchStudy";
    CompartmentDefinitionResourceCode["AppointmentResponse"] = "AppointmentResponse";
    CompartmentDefinitionResourceCode["MedicinalProductIndication"] = "MedicinalProductIndication";
    CompartmentDefinitionResourceCode["Measure"] = "Measure";
    CompartmentDefinitionResourceCode["Person"] = "Person";
    CompartmentDefinitionResourceCode["InsurancePlan"] = "InsurancePlan";
    CompartmentDefinitionResourceCode["Patient"] = "Patient";
    CompartmentDefinitionResourceCode["EffectEvidenceSynthesis"] = "EffectEvidenceSynthesis";
    CompartmentDefinitionResourceCode["ResearchSubject"] = "ResearchSubject";
    CompartmentDefinitionResourceCode["Medication"] = "Medication";
    CompartmentDefinitionResourceCode["ConceptMap"] = "ConceptMap";
    CompartmentDefinitionResourceCode["CoverageEligibilityRequest"] = "CoverageEligibilityRequest";
    CompartmentDefinitionResourceCode["SubstanceSourceMaterial"] = "SubstanceSourceMaterial";
    CompartmentDefinitionResourceCode["VisionPrescription"] = "VisionPrescription";
    CompartmentDefinitionResourceCode["MolecularSequence"] = "MolecularSequence";
    CompartmentDefinitionResourceCode["MedicinalProductUndesirableEffect"] = "MedicinalProductUndesirableEffect";
    CompartmentDefinitionResourceCode["OperationOutcome"] = "OperationOutcome";
    CompartmentDefinitionResourceCode["MessageHeader"] = "MessageHeader";
    CompartmentDefinitionResourceCode["AllergyIntolerance"] = "AllergyIntolerance";
    CompartmentDefinitionResourceCode["SubstanceReferenceInformation"] = "SubstanceReferenceInformation";
    CompartmentDefinitionResourceCode["SupplyDelivery"] = "SupplyDelivery";
    CompartmentDefinitionResourceCode["EpisodeOfCare"] = "EpisodeOfCare";
    CompartmentDefinitionResourceCode["PractitionerRole"] = "PractitionerRole";
    CompartmentDefinitionResourceCode["Library"] = "Library";
    CompartmentDefinitionResourceCode["Practitioner"] = "Practitioner";
    CompartmentDefinitionResourceCode["MedicationRequest"] = "MedicationRequest";
    CompartmentDefinitionResourceCode["ImmunizationRecommendation"] = "ImmunizationRecommendation";
    CompartmentDefinitionResourceCode["Immunization"] = "Immunization";
    CompartmentDefinitionResourceCode["GraphDefinition"] = "GraphDefinition";
    CompartmentDefinitionResourceCode["Account"] = "Account";
    CompartmentDefinitionResourceCode["MedicinalProductIngredient"] = "MedicinalProductIngredient";
    CompartmentDefinitionResourceCode["MeasureReport"] = "MeasureReport";
    CompartmentDefinitionResourceCode["DeviceMetric"] = "DeviceMetric";
    CompartmentDefinitionResourceCode["Goal"] = "Goal";
    CompartmentDefinitionResourceCode["MedicationKnowledge"] = "MedicationKnowledge";
    CompartmentDefinitionResourceCode["ClaimResponse"] = "ClaimResponse";
    CompartmentDefinitionResourceCode["DeviceDefinition"] = "DeviceDefinition";
    CompartmentDefinitionResourceCode["Slot"] = "Slot";
    CompartmentDefinitionResourceCode["ValueSet"] = "ValueSet";
    CompartmentDefinitionResourceCode["MedicinalProductAuthorization"] = "MedicinalProductAuthorization";
    CompartmentDefinitionResourceCode["StructureDefinition"] = "StructureDefinition";
    CompartmentDefinitionResourceCode["MedicinalProductContraindication"] = "MedicinalProductContraindication";
    CompartmentDefinitionResourceCode["DeviceRequest"] = "DeviceRequest";
    CompartmentDefinitionResourceCode["List"] = "List";
    CompartmentDefinitionResourceCode["Questionnaire"] = "Questionnaire";
    CompartmentDefinitionResourceCode["DomainResource"] = "DomainResource";
    CompartmentDefinitionResourceCode["Endpoint"] = "Endpoint";
    CompartmentDefinitionResourceCode["NamingSystem"] = "NamingSystem";
    CompartmentDefinitionResourceCode["MedicinalProductPackaged"] = "MedicinalProductPackaged";
    CompartmentDefinitionResourceCode["Basic"] = "Basic";
    CompartmentDefinitionResourceCode["Binary"] = "Binary";
    CompartmentDefinitionResourceCode["PlanDefinition"] = "PlanDefinition";
    CompartmentDefinitionResourceCode["Subscription"] = "Subscription";
    CompartmentDefinitionResourceCode["RelatedPerson"] = "RelatedPerson";
    CompartmentDefinitionResourceCode["SubstanceSpecification"] = "SubstanceSpecification";
    CompartmentDefinitionResourceCode["SubstanceNucleicAcid"] = "SubstanceNucleicAcid";
    CompartmentDefinitionResourceCode["GuidanceResponse"] = "GuidanceResponse";
    CompartmentDefinitionResourceCode["ClinicalImpression"] = "ClinicalImpression";
    CompartmentDefinitionResourceCode["OrganizationAffiliation"] = "OrganizationAffiliation";
    CompartmentDefinitionResourceCode["Resource"] = "Resource";
    CompartmentDefinitionResourceCode["Condition"] = "Condition";
    CompartmentDefinitionResourceCode["CapabilityStatement"] = "CapabilityStatement";
    CompartmentDefinitionResourceCode["HealthcareService"] = "HealthcareService";
    CompartmentDefinitionResourceCode["SpecimenDefinition"] = "SpecimenDefinition";
    CompartmentDefinitionResourceCode["RiskAssessment"] = "RiskAssessment";
    CompartmentDefinitionResourceCode["OperationDefinition"] = "OperationDefinition";
    CompartmentDefinitionResourceCode["ActivityDefinition"] = "ActivityDefinition";
    CompartmentDefinitionResourceCode["Schedule"] = "Schedule";
    CompartmentDefinitionResourceCode["BiologicallyDerivedProduct"] = "BiologicallyDerivedProduct";
    CompartmentDefinitionResourceCode["Group"] = "Group";
    CompartmentDefinitionResourceCode["MedicinalProductPharmaceutical"] = "MedicinalProductPharmaceutical";
    CompartmentDefinitionResourceCode["FamilyMemberHistory"] = "FamilyMemberHistory";
    CompartmentDefinitionResourceCode["ServiceRequest"] = "ServiceRequest";
    CompartmentDefinitionResourceCode["DetectedIssue"] = "DetectedIssue";
    CompartmentDefinitionResourceCode["Device"] = "Device";
    CompartmentDefinitionResourceCode["RequestGroup"] = "RequestGroup";
    CompartmentDefinitionResourceCode["TestScript"] = "TestScript";
    CompartmentDefinitionResourceCode["RiskEvidenceSynthesis"] = "RiskEvidenceSynthesis";
    CompartmentDefinitionResourceCode["SupplyRequest"] = "SupplyRequest";
    CompartmentDefinitionResourceCode["Task"] = "Task";
    CompartmentDefinitionResourceCode["CommunicationRequest"] = "CommunicationRequest";
    CompartmentDefinitionResourceCode["EnrollmentRequest"] = "EnrollmentRequest";
    CompartmentDefinitionResourceCode["ChargeItemDefinition"] = "ChargeItemDefinition";
    CompartmentDefinitionResourceCode["Substance"] = "Substance";
    CompartmentDefinitionResourceCode["Provenance"] = "Provenance";
    CompartmentDefinitionResourceCode["Consent"] = "Consent";
    CompartmentDefinitionResourceCode["CarePlan"] = "CarePlan";
    CompartmentDefinitionResourceCode["TestReport"] = "TestReport";
    CompartmentDefinitionResourceCode["Observation"] = "Observation";
    CompartmentDefinitionResourceCode["DocumentManifest"] = "DocumentManifest";
})(CompartmentDefinitionResourceCode = exports.CompartmentDefinitionResourceCode || (exports.CompartmentDefinitionResourceCode = {}));
/** Patient | Encounter | RelatedPerson | Practitioner | Device */
var CompartmentDefinitionCode;
(function (CompartmentDefinitionCode) {
    CompartmentDefinitionCode["Device"] = "Device";
    CompartmentDefinitionCode["Encounter"] = "Encounter";
    CompartmentDefinitionCode["Patient"] = "Patient";
    CompartmentDefinitionCode["Practitioner"] = "Practitioner";
    CompartmentDefinitionCode["RelatedPerson"] = "RelatedPerson";
})(CompartmentDefinitionCode = exports.CompartmentDefinitionCode || (exports.CompartmentDefinitionCode = {}));
