"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterDefinitionType = exports.ParameterDefinitionUse = void 0;
/** in | out */
var ParameterDefinitionUse;
(function (ParameterDefinitionUse) {
    ParameterDefinitionUse["In"] = "in";
    ParameterDefinitionUse["Out"] = "out";
})(ParameterDefinitionUse = exports.ParameterDefinitionUse || (exports.ParameterDefinitionUse = {}));
/** What type of value */
var ParameterDefinitionType;
(function (ParameterDefinitionType) {
    ParameterDefinitionType["ImmunizationEvaluation"] = "ImmunizationEvaluation";
    ParameterDefinitionType["Appointment"] = "Appointment";
    ParameterDefinitionType["StructureMap"] = "StructureMap";
    ParameterDefinitionType["Address"] = "Address";
    ParameterDefinitionType["CareTeam"] = "CareTeam";
    ParameterDefinitionType["UsageContext"] = "UsageContext";
    ParameterDefinitionType["Linkage"] = "Linkage";
    ParameterDefinitionType["Annotation"] = "Annotation";
    ParameterDefinitionType["Age"] = "Age";
    ParameterDefinitionType["Attachment"] = "Attachment";
    ParameterDefinitionType["Communication"] = "Communication";
    ParameterDefinitionType["MedicationDispense"] = "MedicationDispense";
    ParameterDefinitionType["ImagingStudy"] = "ImagingStudy";
    ParameterDefinitionType["ChargeItem"] = "ChargeItem";
    ParameterDefinitionType["Period"] = "Period";
    ParameterDefinitionType["AdverseEvent"] = "AdverseEvent";
    ParameterDefinitionType["ContactDetail"] = "ContactDetail";
    ParameterDefinitionType["DataRequirement"] = "DataRequirement";
    ParameterDefinitionType["Media"] = "Media";
    ParameterDefinitionType["CodeableConcept"] = "CodeableConcept";
    ParameterDefinitionType["Uri"] = "uri";
    ParameterDefinitionType["SubstancePolymer"] = "SubstancePolymer";
    ParameterDefinitionType["QuestionnaireResponse"] = "QuestionnaireResponse";
    ParameterDefinitionType["Coverage"] = "Coverage";
    ParameterDefinitionType["Procedure"] = "Procedure";
    ParameterDefinitionType["AuditEvent"] = "AuditEvent";
    ParameterDefinitionType["PaymentReconciliation"] = "PaymentReconciliation";
    ParameterDefinitionType["MedicinalProductManufactured"] = "MedicinalProductManufactured";
    ParameterDefinitionType["CompartmentDefinition"] = "CompartmentDefinition";
    ParameterDefinitionType["Type"] = "Type";
    ParameterDefinitionType["Organization"] = "Organization";
    ParameterDefinitionType["ExplanationOfBenefit"] = "ExplanationOfBenefit";
    ParameterDefinitionType["Composition"] = "Composition";
    ParameterDefinitionType["SimpleQuantity"] = "SimpleQuantity";
    ParameterDefinitionType["CoverageEligibilityResponse"] = "CoverageEligibilityResponse";
    ParameterDefinitionType["DocumentReference"] = "DocumentReference";
    ParameterDefinitionType["EventDefinition"] = "EventDefinition";
    ParameterDefinitionType["SubstanceProtein"] = "SubstanceProtein";
    ParameterDefinitionType["TerminologyCapabilities"] = "TerminologyCapabilities";
    ParameterDefinitionType["Encounter"] = "Encounter";
    ParameterDefinitionType["ImplementationGuide"] = "ImplementationGuide";
    ParameterDefinitionType["EvidenceVariable"] = "EvidenceVariable";
    ParameterDefinitionType["ObservationDefinition"] = "ObservationDefinition";
    ParameterDefinitionType["DiagnosticReport"] = "DiagnosticReport";
    ParameterDefinitionType["ExampleScenario"] = "ExampleScenario";
    ParameterDefinitionType["ResearchDefinition"] = "ResearchDefinition";
    ParameterDefinitionType["Parameters"] = "Parameters";
    ParameterDefinitionType["Instant"] = "instant";
    ParameterDefinitionType["SearchParameter"] = "SearchParameter";
    ParameterDefinitionType["MedicinalProductInteraction"] = "MedicinalProductInteraction";
    ParameterDefinitionType["CodeSystem"] = "CodeSystem";
    ParameterDefinitionType["MessageDefinition"] = "MessageDefinition";
    ParameterDefinitionType["NutritionOrder"] = "NutritionOrder";
    ParameterDefinitionType["VerificationResult"] = "VerificationResult";
    ParameterDefinitionType["MedicationAdministration"] = "MedicationAdministration";
    ParameterDefinitionType["CatalogEntry"] = "CatalogEntry";
    ParameterDefinitionType["Flag"] = "Flag";
    ParameterDefinitionType["DeviceUseStatement"] = "DeviceUseStatement";
    ParameterDefinitionType["TriggerDefinition"] = "TriggerDefinition";
    ParameterDefinitionType["Contract"] = "Contract";
    ParameterDefinitionType["Invoice"] = "Invoice";
    ParameterDefinitionType["MarketingStatus"] = "MarketingStatus";
    ParameterDefinitionType["Count"] = "Count";
    ParameterDefinitionType["PaymentNotice"] = "PaymentNotice";
    ParameterDefinitionType["Location"] = "Location";
    ParameterDefinitionType["Claim"] = "Claim";
    ParameterDefinitionType["Specimen"] = "Specimen";
    ParameterDefinitionType["MedicationStatement"] = "MedicationStatement";
    ParameterDefinitionType["EnrollmentResponse"] = "EnrollmentResponse";
    ParameterDefinitionType["Uuid"] = "uuid";
    ParameterDefinitionType["Evidence"] = "Evidence";
    ParameterDefinitionType["Bundle"] = "Bundle";
    ParameterDefinitionType["ResearchElementDefinition"] = "ResearchElementDefinition";
    ParameterDefinitionType["Expression"] = "Expression";
    ParameterDefinitionType["Coding"] = "Coding";
    ParameterDefinitionType["BodyStructure"] = "BodyStructure";
    ParameterDefinitionType["MedicinalProduct"] = "MedicinalProduct";
    ParameterDefinitionType["Canonical"] = "canonical";
    ParameterDefinitionType["ResearchStudy"] = "ResearchStudy";
    ParameterDefinitionType["Dosage"] = "Dosage";
    ParameterDefinitionType["AppointmentResponse"] = "AppointmentResponse";
    ParameterDefinitionType["MedicinalProductIndication"] = "MedicinalProductIndication";
    ParameterDefinitionType["Measure"] = "Measure";
    ParameterDefinitionType["Person"] = "Person";
    ParameterDefinitionType["InsurancePlan"] = "InsurancePlan";
    ParameterDefinitionType["Date"] = "date";
    ParameterDefinitionType["Patient"] = "Patient";
    ParameterDefinitionType["EffectEvidenceSynthesis"] = "EffectEvidenceSynthesis";
    ParameterDefinitionType["ResearchSubject"] = "ResearchSubject";
    ParameterDefinitionType["Medication"] = "Medication";
    ParameterDefinitionType["Range"] = "Range";
    ParameterDefinitionType["ConceptMap"] = "ConceptMap";
    ParameterDefinitionType["CoverageEligibilityRequest"] = "CoverageEligibilityRequest";
    ParameterDefinitionType["Population"] = "Population";
    ParameterDefinitionType["SubstanceSourceMaterial"] = "SubstanceSourceMaterial";
    ParameterDefinitionType["VisionPrescription"] = "VisionPrescription";
    ParameterDefinitionType["MolecularSequence"] = "MolecularSequence";
    ParameterDefinitionType["MedicinalProductUndesirableEffect"] = "MedicinalProductUndesirableEffect";
    ParameterDefinitionType["OperationOutcome"] = "OperationOutcome";
    ParameterDefinitionType["MessageHeader"] = "MessageHeader";
    ParameterDefinitionType["ContactPoint"] = "ContactPoint";
    ParameterDefinitionType["Signature"] = "Signature";
    ParameterDefinitionType["Decimal"] = "decimal";
    ParameterDefinitionType["Any"] = "Any";
    ParameterDefinitionType["AllergyIntolerance"] = "AllergyIntolerance";
    ParameterDefinitionType["SubstanceReferenceInformation"] = "SubstanceReferenceInformation";
    ParameterDefinitionType["SupplyDelivery"] = "SupplyDelivery";
    ParameterDefinitionType["EpisodeOfCare"] = "EpisodeOfCare";
    ParameterDefinitionType["PractitionerRole"] = "PractitionerRole";
    ParameterDefinitionType["Library"] = "Library";
    ParameterDefinitionType["Practitioner"] = "Practitioner";
    ParameterDefinitionType["Markdown"] = "markdown";
    ParameterDefinitionType["MedicationRequest"] = "MedicationRequest";
    ParameterDefinitionType["ImmunizationRecommendation"] = "ImmunizationRecommendation";
    ParameterDefinitionType["RelatedArtifact"] = "RelatedArtifact";
    ParameterDefinitionType["Timing"] = "Timing";
    ParameterDefinitionType["Immunization"] = "Immunization";
    ParameterDefinitionType["GraphDefinition"] = "GraphDefinition";
    ParameterDefinitionType["Account"] = "Account";
    ParameterDefinitionType["Url"] = "url";
    ParameterDefinitionType["MedicinalProductIngredient"] = "MedicinalProductIngredient";
    ParameterDefinitionType["ProdCharacteristic"] = "ProdCharacteristic";
    ParameterDefinitionType["Meta"] = "Meta";
    ParameterDefinitionType["Quantity"] = "Quantity";
    ParameterDefinitionType["MeasureReport"] = "MeasureReport";
    ParameterDefinitionType["Distance"] = "Distance";
    ParameterDefinitionType["HumanName"] = "HumanName";
    ParameterDefinitionType["DeviceMetric"] = "DeviceMetric";
    ParameterDefinitionType["Duration"] = "Duration";
    ParameterDefinitionType["SubstanceAmount"] = "SubstanceAmount";
    ParameterDefinitionType["Goal"] = "Goal";
    ParameterDefinitionType["MedicationKnowledge"] = "MedicationKnowledge";
    ParameterDefinitionType["Integer"] = "integer";
    ParameterDefinitionType["String"] = "string";
    ParameterDefinitionType["ClaimResponse"] = "ClaimResponse";
    ParameterDefinitionType["DeviceDefinition"] = "DeviceDefinition";
    ParameterDefinitionType["Slot"] = "Slot";
    ParameterDefinitionType["ValueSet"] = "ValueSet";
    ParameterDefinitionType["MedicinalProductAuthorization"] = "MedicinalProductAuthorization";
    ParameterDefinitionType["StructureDefinition"] = "StructureDefinition";
    ParameterDefinitionType["Base64Binary"] = "base64Binary";
    ParameterDefinitionType["MedicinalProductContraindication"] = "MedicinalProductContraindication";
    ParameterDefinitionType["ElementDefinition"] = "ElementDefinition";
    ParameterDefinitionType["DeviceRequest"] = "DeviceRequest";
    ParameterDefinitionType["List"] = "List";
    ParameterDefinitionType["Questionnaire"] = "Questionnaire";
    ParameterDefinitionType["DomainResource"] = "DomainResource";
    ParameterDefinitionType["Endpoint"] = "Endpoint";
    ParameterDefinitionType["NamingSystem"] = "NamingSystem";
    ParameterDefinitionType["MedicinalProductPackaged"] = "MedicinalProductPackaged";
    ParameterDefinitionType["Basic"] = "Basic";
    ParameterDefinitionType["Money"] = "Money";
    ParameterDefinitionType["Binary"] = "Binary";
    ParameterDefinitionType["PlanDefinition"] = "PlanDefinition";
    ParameterDefinitionType["Subscription"] = "Subscription";
    ParameterDefinitionType["SampledData"] = "SampledData";
    ParameterDefinitionType["ProductShelfLife"] = "ProductShelfLife";
    ParameterDefinitionType["RelatedPerson"] = "RelatedPerson";
    ParameterDefinitionType["SubstanceSpecification"] = "SubstanceSpecification";
    ParameterDefinitionType["Ratio"] = "Ratio";
    ParameterDefinitionType["SubstanceNucleicAcid"] = "SubstanceNucleicAcid";
    ParameterDefinitionType["GuidanceResponse"] = "GuidanceResponse";
    ParameterDefinitionType["ClinicalImpression"] = "ClinicalImpression";
    ParameterDefinitionType["OrganizationAffiliation"] = "OrganizationAffiliation";
    ParameterDefinitionType["Resource"] = "Resource";
    ParameterDefinitionType["UnsignedInt"] = "unsignedInt";
    ParameterDefinitionType["Condition"] = "Condition";
    ParameterDefinitionType["Extension"] = "Extension";
    ParameterDefinitionType["CapabilityStatement"] = "CapabilityStatement";
    ParameterDefinitionType["HealthcareService"] = "HealthcareService";
    ParameterDefinitionType["SpecimenDefinition"] = "SpecimenDefinition";
    ParameterDefinitionType["ParameterDefinition"] = "ParameterDefinition";
    ParameterDefinitionType["RiskAssessment"] = "RiskAssessment";
    ParameterDefinitionType["Xhtml"] = "xhtml";
    ParameterDefinitionType["OperationDefinition"] = "OperationDefinition";
    ParameterDefinitionType["ActivityDefinition"] = "ActivityDefinition";
    ParameterDefinitionType["Schedule"] = "Schedule";
    ParameterDefinitionType["BiologicallyDerivedProduct"] = "BiologicallyDerivedProduct";
    ParameterDefinitionType["PositiveInt"] = "positiveInt";
    ParameterDefinitionType["Code"] = "code";
    ParameterDefinitionType["Group"] = "Group";
    ParameterDefinitionType["MedicinalProductPharmaceutical"] = "MedicinalProductPharmaceutical";
    ParameterDefinitionType["FamilyMemberHistory"] = "FamilyMemberHistory";
    ParameterDefinitionType["ServiceRequest"] = "ServiceRequest";
    ParameterDefinitionType["DetectedIssue"] = "DetectedIssue";
    ParameterDefinitionType["Device"] = "Device";
    ParameterDefinitionType["Oid"] = "oid";
    ParameterDefinitionType["RequestGroup"] = "RequestGroup";
    ParameterDefinitionType["TestScript"] = "TestScript";
    ParameterDefinitionType["RiskEvidenceSynthesis"] = "RiskEvidenceSynthesis";
    ParameterDefinitionType["SupplyRequest"] = "SupplyRequest";
    ParameterDefinitionType["Element"] = "Element";
    ParameterDefinitionType["Reference"] = "Reference";
    ParameterDefinitionType["Task"] = "Task";
    ParameterDefinitionType["Identifier"] = "Identifier";
    ParameterDefinitionType["CommunicationRequest"] = "CommunicationRequest";
    ParameterDefinitionType["EnrollmentRequest"] = "EnrollmentRequest";
    ParameterDefinitionType["ChargeItemDefinition"] = "ChargeItemDefinition";
    ParameterDefinitionType["Substance"] = "Substance";
    ParameterDefinitionType["Id"] = "id";
    ParameterDefinitionType["Provenance"] = "Provenance";
    ParameterDefinitionType["Time"] = "time";
    ParameterDefinitionType["Consent"] = "Consent";
    ParameterDefinitionType["BackboneElement"] = "BackboneElement";
    ParameterDefinitionType["CarePlan"] = "CarePlan";
    ParameterDefinitionType["Narrative"] = "Narrative";
    ParameterDefinitionType["MoneyQuantity"] = "MoneyQuantity";
    ParameterDefinitionType["TestReport"] = "TestReport";
    ParameterDefinitionType["Observation"] = "Observation";
    ParameterDefinitionType["DateTime"] = "dateTime";
    ParameterDefinitionType["Boolean"] = "boolean";
    ParameterDefinitionType["DocumentManifest"] = "DocumentManifest";
    ParameterDefinitionType["Contributor"] = "Contributor";
})(ParameterDefinitionType = exports.ParameterDefinitionType || (exports.ParameterDefinitionType = {}));
