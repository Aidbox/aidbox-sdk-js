"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphDefinitionLinkTargetCompartmentUse = exports.GraphDefinitionLinkTargetCompartmentCode = exports.GraphDefinitionLinkTargetCompartmentRule = exports.GraphDefinitionStart = exports.GraphDefinitionLinkTargetType = exports.GraphDefinitionStatus = void 0;
/** draft | active | retired | unknown */
var GraphDefinitionStatus;
(function (GraphDefinitionStatus) {
    GraphDefinitionStatus["Active"] = "active";
    GraphDefinitionStatus["Draft"] = "draft";
    GraphDefinitionStatus["Retired"] = "retired";
    GraphDefinitionStatus["Unknown"] = "unknown";
})(GraphDefinitionStatus = exports.GraphDefinitionStatus || (exports.GraphDefinitionStatus = {}));
/** Type of resource this link refers to */
var GraphDefinitionLinkTargetType;
(function (GraphDefinitionLinkTargetType) {
    GraphDefinitionLinkTargetType["ImmunizationEvaluation"] = "ImmunizationEvaluation";
    GraphDefinitionLinkTargetType["Appointment"] = "Appointment";
    GraphDefinitionLinkTargetType["StructureMap"] = "StructureMap";
    GraphDefinitionLinkTargetType["CareTeam"] = "CareTeam";
    GraphDefinitionLinkTargetType["Linkage"] = "Linkage";
    GraphDefinitionLinkTargetType["Communication"] = "Communication";
    GraphDefinitionLinkTargetType["MedicationDispense"] = "MedicationDispense";
    GraphDefinitionLinkTargetType["ImagingStudy"] = "ImagingStudy";
    GraphDefinitionLinkTargetType["ChargeItem"] = "ChargeItem";
    GraphDefinitionLinkTargetType["AdverseEvent"] = "AdverseEvent";
    GraphDefinitionLinkTargetType["Media"] = "Media";
    GraphDefinitionLinkTargetType["SubstancePolymer"] = "SubstancePolymer";
    GraphDefinitionLinkTargetType["QuestionnaireResponse"] = "QuestionnaireResponse";
    GraphDefinitionLinkTargetType["Coverage"] = "Coverage";
    GraphDefinitionLinkTargetType["Procedure"] = "Procedure";
    GraphDefinitionLinkTargetType["AuditEvent"] = "AuditEvent";
    GraphDefinitionLinkTargetType["PaymentReconciliation"] = "PaymentReconciliation";
    GraphDefinitionLinkTargetType["MedicinalProductManufactured"] = "MedicinalProductManufactured";
    GraphDefinitionLinkTargetType["CompartmentDefinition"] = "CompartmentDefinition";
    GraphDefinitionLinkTargetType["Organization"] = "Organization";
    GraphDefinitionLinkTargetType["ExplanationOfBenefit"] = "ExplanationOfBenefit";
    GraphDefinitionLinkTargetType["Composition"] = "Composition";
    GraphDefinitionLinkTargetType["CoverageEligibilityResponse"] = "CoverageEligibilityResponse";
    GraphDefinitionLinkTargetType["DocumentReference"] = "DocumentReference";
    GraphDefinitionLinkTargetType["EventDefinition"] = "EventDefinition";
    GraphDefinitionLinkTargetType["SubstanceProtein"] = "SubstanceProtein";
    GraphDefinitionLinkTargetType["TerminologyCapabilities"] = "TerminologyCapabilities";
    GraphDefinitionLinkTargetType["Encounter"] = "Encounter";
    GraphDefinitionLinkTargetType["ImplementationGuide"] = "ImplementationGuide";
    GraphDefinitionLinkTargetType["EvidenceVariable"] = "EvidenceVariable";
    GraphDefinitionLinkTargetType["ObservationDefinition"] = "ObservationDefinition";
    GraphDefinitionLinkTargetType["DiagnosticReport"] = "DiagnosticReport";
    GraphDefinitionLinkTargetType["ExampleScenario"] = "ExampleScenario";
    GraphDefinitionLinkTargetType["ResearchDefinition"] = "ResearchDefinition";
    GraphDefinitionLinkTargetType["Parameters"] = "Parameters";
    GraphDefinitionLinkTargetType["SearchParameter"] = "SearchParameter";
    GraphDefinitionLinkTargetType["MedicinalProductInteraction"] = "MedicinalProductInteraction";
    GraphDefinitionLinkTargetType["CodeSystem"] = "CodeSystem";
    GraphDefinitionLinkTargetType["MessageDefinition"] = "MessageDefinition";
    GraphDefinitionLinkTargetType["NutritionOrder"] = "NutritionOrder";
    GraphDefinitionLinkTargetType["VerificationResult"] = "VerificationResult";
    GraphDefinitionLinkTargetType["MedicationAdministration"] = "MedicationAdministration";
    GraphDefinitionLinkTargetType["CatalogEntry"] = "CatalogEntry";
    GraphDefinitionLinkTargetType["Flag"] = "Flag";
    GraphDefinitionLinkTargetType["DeviceUseStatement"] = "DeviceUseStatement";
    GraphDefinitionLinkTargetType["Contract"] = "Contract";
    GraphDefinitionLinkTargetType["Invoice"] = "Invoice";
    GraphDefinitionLinkTargetType["PaymentNotice"] = "PaymentNotice";
    GraphDefinitionLinkTargetType["Location"] = "Location";
    GraphDefinitionLinkTargetType["Claim"] = "Claim";
    GraphDefinitionLinkTargetType["Specimen"] = "Specimen";
    GraphDefinitionLinkTargetType["MedicationStatement"] = "MedicationStatement";
    GraphDefinitionLinkTargetType["EnrollmentResponse"] = "EnrollmentResponse";
    GraphDefinitionLinkTargetType["Evidence"] = "Evidence";
    GraphDefinitionLinkTargetType["Bundle"] = "Bundle";
    GraphDefinitionLinkTargetType["ResearchElementDefinition"] = "ResearchElementDefinition";
    GraphDefinitionLinkTargetType["BodyStructure"] = "BodyStructure";
    GraphDefinitionLinkTargetType["MedicinalProduct"] = "MedicinalProduct";
    GraphDefinitionLinkTargetType["ResearchStudy"] = "ResearchStudy";
    GraphDefinitionLinkTargetType["AppointmentResponse"] = "AppointmentResponse";
    GraphDefinitionLinkTargetType["MedicinalProductIndication"] = "MedicinalProductIndication";
    GraphDefinitionLinkTargetType["Measure"] = "Measure";
    GraphDefinitionLinkTargetType["Person"] = "Person";
    GraphDefinitionLinkTargetType["InsurancePlan"] = "InsurancePlan";
    GraphDefinitionLinkTargetType["Patient"] = "Patient";
    GraphDefinitionLinkTargetType["EffectEvidenceSynthesis"] = "EffectEvidenceSynthesis";
    GraphDefinitionLinkTargetType["ResearchSubject"] = "ResearchSubject";
    GraphDefinitionLinkTargetType["Medication"] = "Medication";
    GraphDefinitionLinkTargetType["ConceptMap"] = "ConceptMap";
    GraphDefinitionLinkTargetType["CoverageEligibilityRequest"] = "CoverageEligibilityRequest";
    GraphDefinitionLinkTargetType["SubstanceSourceMaterial"] = "SubstanceSourceMaterial";
    GraphDefinitionLinkTargetType["VisionPrescription"] = "VisionPrescription";
    GraphDefinitionLinkTargetType["MolecularSequence"] = "MolecularSequence";
    GraphDefinitionLinkTargetType["MedicinalProductUndesirableEffect"] = "MedicinalProductUndesirableEffect";
    GraphDefinitionLinkTargetType["OperationOutcome"] = "OperationOutcome";
    GraphDefinitionLinkTargetType["MessageHeader"] = "MessageHeader";
    GraphDefinitionLinkTargetType["AllergyIntolerance"] = "AllergyIntolerance";
    GraphDefinitionLinkTargetType["SubstanceReferenceInformation"] = "SubstanceReferenceInformation";
    GraphDefinitionLinkTargetType["SupplyDelivery"] = "SupplyDelivery";
    GraphDefinitionLinkTargetType["EpisodeOfCare"] = "EpisodeOfCare";
    GraphDefinitionLinkTargetType["PractitionerRole"] = "PractitionerRole";
    GraphDefinitionLinkTargetType["Library"] = "Library";
    GraphDefinitionLinkTargetType["Practitioner"] = "Practitioner";
    GraphDefinitionLinkTargetType["MedicationRequest"] = "MedicationRequest";
    GraphDefinitionLinkTargetType["ImmunizationRecommendation"] = "ImmunizationRecommendation";
    GraphDefinitionLinkTargetType["Immunization"] = "Immunization";
    GraphDefinitionLinkTargetType["GraphDefinition"] = "GraphDefinition";
    GraphDefinitionLinkTargetType["Account"] = "Account";
    GraphDefinitionLinkTargetType["MedicinalProductIngredient"] = "MedicinalProductIngredient";
    GraphDefinitionLinkTargetType["MeasureReport"] = "MeasureReport";
    GraphDefinitionLinkTargetType["DeviceMetric"] = "DeviceMetric";
    GraphDefinitionLinkTargetType["Goal"] = "Goal";
    GraphDefinitionLinkTargetType["MedicationKnowledge"] = "MedicationKnowledge";
    GraphDefinitionLinkTargetType["ClaimResponse"] = "ClaimResponse";
    GraphDefinitionLinkTargetType["DeviceDefinition"] = "DeviceDefinition";
    GraphDefinitionLinkTargetType["Slot"] = "Slot";
    GraphDefinitionLinkTargetType["ValueSet"] = "ValueSet";
    GraphDefinitionLinkTargetType["MedicinalProductAuthorization"] = "MedicinalProductAuthorization";
    GraphDefinitionLinkTargetType["StructureDefinition"] = "StructureDefinition";
    GraphDefinitionLinkTargetType["MedicinalProductContraindication"] = "MedicinalProductContraindication";
    GraphDefinitionLinkTargetType["DeviceRequest"] = "DeviceRequest";
    GraphDefinitionLinkTargetType["List"] = "List";
    GraphDefinitionLinkTargetType["Questionnaire"] = "Questionnaire";
    GraphDefinitionLinkTargetType["DomainResource"] = "DomainResource";
    GraphDefinitionLinkTargetType["Endpoint"] = "Endpoint";
    GraphDefinitionLinkTargetType["NamingSystem"] = "NamingSystem";
    GraphDefinitionLinkTargetType["MedicinalProductPackaged"] = "MedicinalProductPackaged";
    GraphDefinitionLinkTargetType["Basic"] = "Basic";
    GraphDefinitionLinkTargetType["Binary"] = "Binary";
    GraphDefinitionLinkTargetType["PlanDefinition"] = "PlanDefinition";
    GraphDefinitionLinkTargetType["Subscription"] = "Subscription";
    GraphDefinitionLinkTargetType["RelatedPerson"] = "RelatedPerson";
    GraphDefinitionLinkTargetType["SubstanceSpecification"] = "SubstanceSpecification";
    GraphDefinitionLinkTargetType["SubstanceNucleicAcid"] = "SubstanceNucleicAcid";
    GraphDefinitionLinkTargetType["GuidanceResponse"] = "GuidanceResponse";
    GraphDefinitionLinkTargetType["ClinicalImpression"] = "ClinicalImpression";
    GraphDefinitionLinkTargetType["OrganizationAffiliation"] = "OrganizationAffiliation";
    GraphDefinitionLinkTargetType["Resource"] = "Resource";
    GraphDefinitionLinkTargetType["Condition"] = "Condition";
    GraphDefinitionLinkTargetType["CapabilityStatement"] = "CapabilityStatement";
    GraphDefinitionLinkTargetType["HealthcareService"] = "HealthcareService";
    GraphDefinitionLinkTargetType["SpecimenDefinition"] = "SpecimenDefinition";
    GraphDefinitionLinkTargetType["RiskAssessment"] = "RiskAssessment";
    GraphDefinitionLinkTargetType["OperationDefinition"] = "OperationDefinition";
    GraphDefinitionLinkTargetType["ActivityDefinition"] = "ActivityDefinition";
    GraphDefinitionLinkTargetType["Schedule"] = "Schedule";
    GraphDefinitionLinkTargetType["BiologicallyDerivedProduct"] = "BiologicallyDerivedProduct";
    GraphDefinitionLinkTargetType["Group"] = "Group";
    GraphDefinitionLinkTargetType["MedicinalProductPharmaceutical"] = "MedicinalProductPharmaceutical";
    GraphDefinitionLinkTargetType["FamilyMemberHistory"] = "FamilyMemberHistory";
    GraphDefinitionLinkTargetType["ServiceRequest"] = "ServiceRequest";
    GraphDefinitionLinkTargetType["DetectedIssue"] = "DetectedIssue";
    GraphDefinitionLinkTargetType["Device"] = "Device";
    GraphDefinitionLinkTargetType["RequestGroup"] = "RequestGroup";
    GraphDefinitionLinkTargetType["TestScript"] = "TestScript";
    GraphDefinitionLinkTargetType["RiskEvidenceSynthesis"] = "RiskEvidenceSynthesis";
    GraphDefinitionLinkTargetType["SupplyRequest"] = "SupplyRequest";
    GraphDefinitionLinkTargetType["Task"] = "Task";
    GraphDefinitionLinkTargetType["CommunicationRequest"] = "CommunicationRequest";
    GraphDefinitionLinkTargetType["EnrollmentRequest"] = "EnrollmentRequest";
    GraphDefinitionLinkTargetType["ChargeItemDefinition"] = "ChargeItemDefinition";
    GraphDefinitionLinkTargetType["Substance"] = "Substance";
    GraphDefinitionLinkTargetType["Provenance"] = "Provenance";
    GraphDefinitionLinkTargetType["Consent"] = "Consent";
    GraphDefinitionLinkTargetType["CarePlan"] = "CarePlan";
    GraphDefinitionLinkTargetType["TestReport"] = "TestReport";
    GraphDefinitionLinkTargetType["Observation"] = "Observation";
    GraphDefinitionLinkTargetType["DocumentManifest"] = "DocumentManifest";
})(GraphDefinitionLinkTargetType = exports.GraphDefinitionLinkTargetType || (exports.GraphDefinitionLinkTargetType = {}));
/** Type of resource at which the graph starts */
var GraphDefinitionStart;
(function (GraphDefinitionStart) {
    GraphDefinitionStart["ImmunizationEvaluation"] = "ImmunizationEvaluation";
    GraphDefinitionStart["Appointment"] = "Appointment";
    GraphDefinitionStart["StructureMap"] = "StructureMap";
    GraphDefinitionStart["CareTeam"] = "CareTeam";
    GraphDefinitionStart["Linkage"] = "Linkage";
    GraphDefinitionStart["Communication"] = "Communication";
    GraphDefinitionStart["MedicationDispense"] = "MedicationDispense";
    GraphDefinitionStart["ImagingStudy"] = "ImagingStudy";
    GraphDefinitionStart["ChargeItem"] = "ChargeItem";
    GraphDefinitionStart["AdverseEvent"] = "AdverseEvent";
    GraphDefinitionStart["Media"] = "Media";
    GraphDefinitionStart["SubstancePolymer"] = "SubstancePolymer";
    GraphDefinitionStart["QuestionnaireResponse"] = "QuestionnaireResponse";
    GraphDefinitionStart["Coverage"] = "Coverage";
    GraphDefinitionStart["Procedure"] = "Procedure";
    GraphDefinitionStart["AuditEvent"] = "AuditEvent";
    GraphDefinitionStart["PaymentReconciliation"] = "PaymentReconciliation";
    GraphDefinitionStart["MedicinalProductManufactured"] = "MedicinalProductManufactured";
    GraphDefinitionStart["CompartmentDefinition"] = "CompartmentDefinition";
    GraphDefinitionStart["Organization"] = "Organization";
    GraphDefinitionStart["ExplanationOfBenefit"] = "ExplanationOfBenefit";
    GraphDefinitionStart["Composition"] = "Composition";
    GraphDefinitionStart["CoverageEligibilityResponse"] = "CoverageEligibilityResponse";
    GraphDefinitionStart["DocumentReference"] = "DocumentReference";
    GraphDefinitionStart["EventDefinition"] = "EventDefinition";
    GraphDefinitionStart["SubstanceProtein"] = "SubstanceProtein";
    GraphDefinitionStart["TerminologyCapabilities"] = "TerminologyCapabilities";
    GraphDefinitionStart["Encounter"] = "Encounter";
    GraphDefinitionStart["ImplementationGuide"] = "ImplementationGuide";
    GraphDefinitionStart["EvidenceVariable"] = "EvidenceVariable";
    GraphDefinitionStart["ObservationDefinition"] = "ObservationDefinition";
    GraphDefinitionStart["DiagnosticReport"] = "DiagnosticReport";
    GraphDefinitionStart["ExampleScenario"] = "ExampleScenario";
    GraphDefinitionStart["ResearchDefinition"] = "ResearchDefinition";
    GraphDefinitionStart["Parameters"] = "Parameters";
    GraphDefinitionStart["SearchParameter"] = "SearchParameter";
    GraphDefinitionStart["MedicinalProductInteraction"] = "MedicinalProductInteraction";
    GraphDefinitionStart["CodeSystem"] = "CodeSystem";
    GraphDefinitionStart["MessageDefinition"] = "MessageDefinition";
    GraphDefinitionStart["NutritionOrder"] = "NutritionOrder";
    GraphDefinitionStart["VerificationResult"] = "VerificationResult";
    GraphDefinitionStart["MedicationAdministration"] = "MedicationAdministration";
    GraphDefinitionStart["CatalogEntry"] = "CatalogEntry";
    GraphDefinitionStart["Flag"] = "Flag";
    GraphDefinitionStart["DeviceUseStatement"] = "DeviceUseStatement";
    GraphDefinitionStart["Contract"] = "Contract";
    GraphDefinitionStart["Invoice"] = "Invoice";
    GraphDefinitionStart["PaymentNotice"] = "PaymentNotice";
    GraphDefinitionStart["Location"] = "Location";
    GraphDefinitionStart["Claim"] = "Claim";
    GraphDefinitionStart["Specimen"] = "Specimen";
    GraphDefinitionStart["MedicationStatement"] = "MedicationStatement";
    GraphDefinitionStart["EnrollmentResponse"] = "EnrollmentResponse";
    GraphDefinitionStart["Evidence"] = "Evidence";
    GraphDefinitionStart["Bundle"] = "Bundle";
    GraphDefinitionStart["ResearchElementDefinition"] = "ResearchElementDefinition";
    GraphDefinitionStart["BodyStructure"] = "BodyStructure";
    GraphDefinitionStart["MedicinalProduct"] = "MedicinalProduct";
    GraphDefinitionStart["ResearchStudy"] = "ResearchStudy";
    GraphDefinitionStart["AppointmentResponse"] = "AppointmentResponse";
    GraphDefinitionStart["MedicinalProductIndication"] = "MedicinalProductIndication";
    GraphDefinitionStart["Measure"] = "Measure";
    GraphDefinitionStart["Person"] = "Person";
    GraphDefinitionStart["InsurancePlan"] = "InsurancePlan";
    GraphDefinitionStart["Patient"] = "Patient";
    GraphDefinitionStart["EffectEvidenceSynthesis"] = "EffectEvidenceSynthesis";
    GraphDefinitionStart["ResearchSubject"] = "ResearchSubject";
    GraphDefinitionStart["Medication"] = "Medication";
    GraphDefinitionStart["ConceptMap"] = "ConceptMap";
    GraphDefinitionStart["CoverageEligibilityRequest"] = "CoverageEligibilityRequest";
    GraphDefinitionStart["SubstanceSourceMaterial"] = "SubstanceSourceMaterial";
    GraphDefinitionStart["VisionPrescription"] = "VisionPrescription";
    GraphDefinitionStart["MolecularSequence"] = "MolecularSequence";
    GraphDefinitionStart["MedicinalProductUndesirableEffect"] = "MedicinalProductUndesirableEffect";
    GraphDefinitionStart["OperationOutcome"] = "OperationOutcome";
    GraphDefinitionStart["MessageHeader"] = "MessageHeader";
    GraphDefinitionStart["AllergyIntolerance"] = "AllergyIntolerance";
    GraphDefinitionStart["SubstanceReferenceInformation"] = "SubstanceReferenceInformation";
    GraphDefinitionStart["SupplyDelivery"] = "SupplyDelivery";
    GraphDefinitionStart["EpisodeOfCare"] = "EpisodeOfCare";
    GraphDefinitionStart["PractitionerRole"] = "PractitionerRole";
    GraphDefinitionStart["Library"] = "Library";
    GraphDefinitionStart["Practitioner"] = "Practitioner";
    GraphDefinitionStart["MedicationRequest"] = "MedicationRequest";
    GraphDefinitionStart["ImmunizationRecommendation"] = "ImmunizationRecommendation";
    GraphDefinitionStart["Immunization"] = "Immunization";
    GraphDefinitionStart["GraphDefinition"] = "GraphDefinition";
    GraphDefinitionStart["Account"] = "Account";
    GraphDefinitionStart["MedicinalProductIngredient"] = "MedicinalProductIngredient";
    GraphDefinitionStart["MeasureReport"] = "MeasureReport";
    GraphDefinitionStart["DeviceMetric"] = "DeviceMetric";
    GraphDefinitionStart["Goal"] = "Goal";
    GraphDefinitionStart["MedicationKnowledge"] = "MedicationKnowledge";
    GraphDefinitionStart["ClaimResponse"] = "ClaimResponse";
    GraphDefinitionStart["DeviceDefinition"] = "DeviceDefinition";
    GraphDefinitionStart["Slot"] = "Slot";
    GraphDefinitionStart["ValueSet"] = "ValueSet";
    GraphDefinitionStart["MedicinalProductAuthorization"] = "MedicinalProductAuthorization";
    GraphDefinitionStart["StructureDefinition"] = "StructureDefinition";
    GraphDefinitionStart["MedicinalProductContraindication"] = "MedicinalProductContraindication";
    GraphDefinitionStart["DeviceRequest"] = "DeviceRequest";
    GraphDefinitionStart["List"] = "List";
    GraphDefinitionStart["Questionnaire"] = "Questionnaire";
    GraphDefinitionStart["DomainResource"] = "DomainResource";
    GraphDefinitionStart["Endpoint"] = "Endpoint";
    GraphDefinitionStart["NamingSystem"] = "NamingSystem";
    GraphDefinitionStart["MedicinalProductPackaged"] = "MedicinalProductPackaged";
    GraphDefinitionStart["Basic"] = "Basic";
    GraphDefinitionStart["Binary"] = "Binary";
    GraphDefinitionStart["PlanDefinition"] = "PlanDefinition";
    GraphDefinitionStart["Subscription"] = "Subscription";
    GraphDefinitionStart["RelatedPerson"] = "RelatedPerson";
    GraphDefinitionStart["SubstanceSpecification"] = "SubstanceSpecification";
    GraphDefinitionStart["SubstanceNucleicAcid"] = "SubstanceNucleicAcid";
    GraphDefinitionStart["GuidanceResponse"] = "GuidanceResponse";
    GraphDefinitionStart["ClinicalImpression"] = "ClinicalImpression";
    GraphDefinitionStart["OrganizationAffiliation"] = "OrganizationAffiliation";
    GraphDefinitionStart["Resource"] = "Resource";
    GraphDefinitionStart["Condition"] = "Condition";
    GraphDefinitionStart["CapabilityStatement"] = "CapabilityStatement";
    GraphDefinitionStart["HealthcareService"] = "HealthcareService";
    GraphDefinitionStart["SpecimenDefinition"] = "SpecimenDefinition";
    GraphDefinitionStart["RiskAssessment"] = "RiskAssessment";
    GraphDefinitionStart["OperationDefinition"] = "OperationDefinition";
    GraphDefinitionStart["ActivityDefinition"] = "ActivityDefinition";
    GraphDefinitionStart["Schedule"] = "Schedule";
    GraphDefinitionStart["BiologicallyDerivedProduct"] = "BiologicallyDerivedProduct";
    GraphDefinitionStart["Group"] = "Group";
    GraphDefinitionStart["MedicinalProductPharmaceutical"] = "MedicinalProductPharmaceutical";
    GraphDefinitionStart["FamilyMemberHistory"] = "FamilyMemberHistory";
    GraphDefinitionStart["ServiceRequest"] = "ServiceRequest";
    GraphDefinitionStart["DetectedIssue"] = "DetectedIssue";
    GraphDefinitionStart["Device"] = "Device";
    GraphDefinitionStart["RequestGroup"] = "RequestGroup";
    GraphDefinitionStart["TestScript"] = "TestScript";
    GraphDefinitionStart["RiskEvidenceSynthesis"] = "RiskEvidenceSynthesis";
    GraphDefinitionStart["SupplyRequest"] = "SupplyRequest";
    GraphDefinitionStart["Task"] = "Task";
    GraphDefinitionStart["CommunicationRequest"] = "CommunicationRequest";
    GraphDefinitionStart["EnrollmentRequest"] = "EnrollmentRequest";
    GraphDefinitionStart["ChargeItemDefinition"] = "ChargeItemDefinition";
    GraphDefinitionStart["Substance"] = "Substance";
    GraphDefinitionStart["Provenance"] = "Provenance";
    GraphDefinitionStart["Consent"] = "Consent";
    GraphDefinitionStart["CarePlan"] = "CarePlan";
    GraphDefinitionStart["TestReport"] = "TestReport";
    GraphDefinitionStart["Observation"] = "Observation";
    GraphDefinitionStart["DocumentManifest"] = "DocumentManifest";
})(GraphDefinitionStart = exports.GraphDefinitionStart || (exports.GraphDefinitionStart = {}));
/** identical | matching | different | custom */
var GraphDefinitionLinkTargetCompartmentRule;
(function (GraphDefinitionLinkTargetCompartmentRule) {
    GraphDefinitionLinkTargetCompartmentRule["Custom"] = "custom";
    GraphDefinitionLinkTargetCompartmentRule["Different"] = "different";
    GraphDefinitionLinkTargetCompartmentRule["Identical"] = "identical";
    GraphDefinitionLinkTargetCompartmentRule["Matching"] = "matching";
})(GraphDefinitionLinkTargetCompartmentRule = exports.GraphDefinitionLinkTargetCompartmentRule || (exports.GraphDefinitionLinkTargetCompartmentRule = {}));
/** Patient | Encounter | RelatedPerson | Practitioner | Device */
var GraphDefinitionLinkTargetCompartmentCode;
(function (GraphDefinitionLinkTargetCompartmentCode) {
    GraphDefinitionLinkTargetCompartmentCode["Device"] = "Device";
    GraphDefinitionLinkTargetCompartmentCode["Encounter"] = "Encounter";
    GraphDefinitionLinkTargetCompartmentCode["Patient"] = "Patient";
    GraphDefinitionLinkTargetCompartmentCode["Practitioner"] = "Practitioner";
    GraphDefinitionLinkTargetCompartmentCode["RelatedPerson"] = "RelatedPerson";
})(GraphDefinitionLinkTargetCompartmentCode = exports.GraphDefinitionLinkTargetCompartmentCode || (exports.GraphDefinitionLinkTargetCompartmentCode = {}));
/** condition | requirement */
var GraphDefinitionLinkTargetCompartmentUse;
(function (GraphDefinitionLinkTargetCompartmentUse) {
    GraphDefinitionLinkTargetCompartmentUse["Condition"] = "condition";
    GraphDefinitionLinkTargetCompartmentUse["Requirement"] = "requirement";
})(GraphDefinitionLinkTargetCompartmentUse = exports.GraphDefinitionLinkTargetCompartmentUse || (exports.GraphDefinitionLinkTargetCompartmentUse = {}));
