/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { UsageContext } from "./UsageContext";
import { ContactDetail } from "./ContactDetail";
import { CodeableConcept } from "./CodeableConcept";
import { uri } from "./uri";
import { dateTime } from "./dateTime";
import { canonical } from "./canonical";
import { DomainResource } from "./DomainResource";
import { markdown } from "./markdown";
import { Element } from "./Element";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** Example of workflow instance. */
export interface ExampleScenario extends DomainResource {
    resourceType: 'ExampleScenario';
    /** Date last changed */
    date?: dateTime;
    /** Name of the publisher (organization or individual) */
    publisher?: string;
    /** Each resource and each version that is present in the workflow */
    instance?: Array<ExampleScenarioInstance>;
    /** Intended jurisdiction for example scenario (if applicable) */
    jurisdiction?: Array<CodeableConcept>;
    _publisher?: Element;
    /** The purpose of the example, e.g. to illustrate a scenario */
    purpose?: markdown;
    _date?: Element;
    /** Name for this example scenario (computer friendly) */
    name?: string;
    process?: Array<ExampleScenarioProcess>;
    _status?: Element;
    _experimental?: Element;
    /** The context that the content is intended to support */
    useContext?: Array<UsageContext>;
    /** Use and/or publishing restrictions */
    copyright?: markdown;
    _workflow?: Array<Element>;
    /** For testing purposes, not real usage */
    experimental?: boolean;
    _purpose?: Element;
    /** Another nested workflow */
    workflow?: Array<canonical>;
    /** draft | active | retired | unknown */
    status: `${ExampleScenarioStatus}`;
    _name?: Element;
    /** Canonical identifier for this example scenario, represented as a URI (globally unique) */
    url?: uri;
    /** Additional identifier for the example scenario */
    identifier?: Array<Identifier>;
    _copyright?: Element;
    /** Business version of the example scenario */
    version?: string;
    _version?: Element;
    /** Contact details for the publisher */
    contact?: Array<ContactDetail>;
    _url?: Element;
    /** Actor participating in the resource */
    actor?: Array<ExampleScenarioActor>;
}
/** Actor participating in the resource */
export interface ExampleScenarioActor extends BackboneElement {
    /** ID or acronym of the actor */
    actorId: string;
    _actorId?: Element;
    /** person | entity */
    type: `${ExampleScenarioType}`;
    _type?: Element;
    /** The name of the actor as shown in the page */
    name?: string;
    _name?: Element;
    /** The description of the actor */
    description?: markdown;
    _description?: Element;
}
/** A specific version of the resource */
export interface ExampleScenarioVersion extends BackboneElement {
    /** The identifier of a specific version of a resource */
    versionId: string;
    _versionId?: Element;
    /** The description of the resource version */
    description: markdown;
    _description?: Element;
}
/** Alternate non-typical step action */
export interface ExampleScenarioProcessStepAlternative extends BackboneElement {
    /** Label for alternative */
    title: string;
    _title?: Element;
    /** A human-readable description of each option */
    description?: markdown;
    _description?: Element;
    /** What happens in each alternative option */
    step?: Array<ExampleScenarioProcessStep>;
}
/** Each resource and each version that is present in the workflow */
export interface ExampleScenarioInstance extends BackboneElement {
    /** Human-friendly description of the resource instance */
    description?: markdown;
    containedInstance?: Array<ExampleScenarioInstanceContainedInstance>;
    /** A short name for the resource instance */
    name?: string;
    _resourceId?: Element;
    /** The type of the resource */
    resourceType: `${ExampleScenarioResourceType}`;
    _resourceType?: Element;
    _description?: Element;
    /** The id of the resource for referencing */
    resourceId: string;
    _name?: Element;
    /** A specific version of the resource */
    version?: Array<ExampleScenarioVersion>;
}
/** person | entity */
export declare enum ExampleScenarioType {
    Entity = "entity",
    Person = "person"
}
/** Each major process - a group of operations */
export interface ExampleScenarioProcess extends BackboneElement {
    /** A longer description of the group of operations */
    description?: markdown;
    _postConditions?: Element;
    /** Description of final status after the process ends */
    postConditions?: markdown;
    /** Description of initial status before the process starts */
    preConditions?: markdown;
    _preConditions?: Element;
    /** The diagram title of the group of operations */
    title: string;
    _description?: Element;
    _title?: Element;
    step?: Array<ExampleScenarioProcessStep>;
}
/** Each interaction or action */
export interface ExampleScenarioProcessStepOperation extends BackboneElement {
    /** Each resource instance used by the responder */
    response?: ExampleScenarioInstanceContainedInstance;
    /** A comment to be inserted in the diagram */
    description?: markdown;
    /** Each resource instance used by the initiator */
    request?: ExampleScenarioInstanceContainedInstance;
    /** The sequential number of the interaction */
    number: string;
    /** The human-friendly name of the interaction */
    name?: string;
    /** Who starts the transaction */
    initiator?: string;
    _type?: Element;
    _initiatorActive?: Element;
    _number?: Element;
    /** The type of operation - CRUD */
    type?: string;
    /** Whether the receiver is deactivated right after the transaction */
    receiverActive?: boolean;
    _description?: Element;
    /** Whether the initiator is deactivated right after the transaction */
    initiatorActive?: boolean;
    _initiator?: Element;
    _name?: Element;
    _receiver?: Element;
    _receiverActive?: Element;
    /** Who receives the transaction */
    receiver?: string;
}
/** The type of the resource */
export declare enum ExampleScenarioResourceType {
    ImmunizationEvaluation = "ImmunizationEvaluation",
    Appointment = "Appointment",
    StructureMap = "StructureMap",
    CareTeam = "CareTeam",
    Linkage = "Linkage",
    Communication = "Communication",
    MedicationDispense = "MedicationDispense",
    ImagingStudy = "ImagingStudy",
    ChargeItem = "ChargeItem",
    AdverseEvent = "AdverseEvent",
    Media = "Media",
    SubstancePolymer = "SubstancePolymer",
    QuestionnaireResponse = "QuestionnaireResponse",
    Coverage = "Coverage",
    Procedure = "Procedure",
    AuditEvent = "AuditEvent",
    PaymentReconciliation = "PaymentReconciliation",
    MedicinalProductManufactured = "MedicinalProductManufactured",
    CompartmentDefinition = "CompartmentDefinition",
    Organization = "Organization",
    ExplanationOfBenefit = "ExplanationOfBenefit",
    Composition = "Composition",
    CoverageEligibilityResponse = "CoverageEligibilityResponse",
    DocumentReference = "DocumentReference",
    EventDefinition = "EventDefinition",
    SubstanceProtein = "SubstanceProtein",
    TerminologyCapabilities = "TerminologyCapabilities",
    Encounter = "Encounter",
    ImplementationGuide = "ImplementationGuide",
    EvidenceVariable = "EvidenceVariable",
    ObservationDefinition = "ObservationDefinition",
    DiagnosticReport = "DiagnosticReport",
    ExampleScenario = "ExampleScenario",
    ResearchDefinition = "ResearchDefinition",
    Parameters = "Parameters",
    SearchParameter = "SearchParameter",
    MedicinalProductInteraction = "MedicinalProductInteraction",
    CodeSystem = "CodeSystem",
    MessageDefinition = "MessageDefinition",
    NutritionOrder = "NutritionOrder",
    VerificationResult = "VerificationResult",
    MedicationAdministration = "MedicationAdministration",
    CatalogEntry = "CatalogEntry",
    Flag = "Flag",
    DeviceUseStatement = "DeviceUseStatement",
    Contract = "Contract",
    Invoice = "Invoice",
    PaymentNotice = "PaymentNotice",
    Location = "Location",
    Claim = "Claim",
    Specimen = "Specimen",
    MedicationStatement = "MedicationStatement",
    EnrollmentResponse = "EnrollmentResponse",
    Evidence = "Evidence",
    Bundle = "Bundle",
    ResearchElementDefinition = "ResearchElementDefinition",
    BodyStructure = "BodyStructure",
    MedicinalProduct = "MedicinalProduct",
    ResearchStudy = "ResearchStudy",
    AppointmentResponse = "AppointmentResponse",
    MedicinalProductIndication = "MedicinalProductIndication",
    Measure = "Measure",
    Person = "Person",
    InsurancePlan = "InsurancePlan",
    Patient = "Patient",
    EffectEvidenceSynthesis = "EffectEvidenceSynthesis",
    ResearchSubject = "ResearchSubject",
    Medication = "Medication",
    ConceptMap = "ConceptMap",
    CoverageEligibilityRequest = "CoverageEligibilityRequest",
    SubstanceSourceMaterial = "SubstanceSourceMaterial",
    VisionPrescription = "VisionPrescription",
    MolecularSequence = "MolecularSequence",
    MedicinalProductUndesirableEffect = "MedicinalProductUndesirableEffect",
    OperationOutcome = "OperationOutcome",
    MessageHeader = "MessageHeader",
    AllergyIntolerance = "AllergyIntolerance",
    SubstanceReferenceInformation = "SubstanceReferenceInformation",
    SupplyDelivery = "SupplyDelivery",
    EpisodeOfCare = "EpisodeOfCare",
    PractitionerRole = "PractitionerRole",
    Library = "Library",
    Practitioner = "Practitioner",
    MedicationRequest = "MedicationRequest",
    ImmunizationRecommendation = "ImmunizationRecommendation",
    Immunization = "Immunization",
    GraphDefinition = "GraphDefinition",
    Account = "Account",
    MedicinalProductIngredient = "MedicinalProductIngredient",
    MeasureReport = "MeasureReport",
    DeviceMetric = "DeviceMetric",
    Goal = "Goal",
    MedicationKnowledge = "MedicationKnowledge",
    ClaimResponse = "ClaimResponse",
    DeviceDefinition = "DeviceDefinition",
    Slot = "Slot",
    ValueSet = "ValueSet",
    MedicinalProductAuthorization = "MedicinalProductAuthorization",
    StructureDefinition = "StructureDefinition",
    MedicinalProductContraindication = "MedicinalProductContraindication",
    DeviceRequest = "DeviceRequest",
    List = "List",
    Questionnaire = "Questionnaire",
    DomainResource = "DomainResource",
    Endpoint = "Endpoint",
    NamingSystem = "NamingSystem",
    MedicinalProductPackaged = "MedicinalProductPackaged",
    Basic = "Basic",
    Binary = "Binary",
    PlanDefinition = "PlanDefinition",
    Subscription = "Subscription",
    RelatedPerson = "RelatedPerson",
    SubstanceSpecification = "SubstanceSpecification",
    SubstanceNucleicAcid = "SubstanceNucleicAcid",
    GuidanceResponse = "GuidanceResponse",
    ClinicalImpression = "ClinicalImpression",
    OrganizationAffiliation = "OrganizationAffiliation",
    Resource = "Resource",
    Condition = "Condition",
    CapabilityStatement = "CapabilityStatement",
    HealthcareService = "HealthcareService",
    SpecimenDefinition = "SpecimenDefinition",
    RiskAssessment = "RiskAssessment",
    OperationDefinition = "OperationDefinition",
    ActivityDefinition = "ActivityDefinition",
    Schedule = "Schedule",
    BiologicallyDerivedProduct = "BiologicallyDerivedProduct",
    Group = "Group",
    MedicinalProductPharmaceutical = "MedicinalProductPharmaceutical",
    FamilyMemberHistory = "FamilyMemberHistory",
    ServiceRequest = "ServiceRequest",
    DetectedIssue = "DetectedIssue",
    Device = "Device",
    RequestGroup = "RequestGroup",
    TestScript = "TestScript",
    RiskEvidenceSynthesis = "RiskEvidenceSynthesis",
    SupplyRequest = "SupplyRequest",
    Task = "Task",
    CommunicationRequest = "CommunicationRequest",
    EnrollmentRequest = "EnrollmentRequest",
    ChargeItemDefinition = "ChargeItemDefinition",
    Substance = "Substance",
    Provenance = "Provenance",
    Consent = "Consent",
    CarePlan = "CarePlan",
    TestReport = "TestReport",
    Observation = "Observation",
    DocumentManifest = "DocumentManifest"
}
/** draft | active | retired | unknown */
export declare enum ExampleScenarioStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown"
}
/** Each step of the process */
export interface ExampleScenarioProcessStep extends BackboneElement {
    /** Nested process */
    process?: Array<ExampleScenarioProcess>;
    /** If there is a pause in the flow */
    pause?: boolean;
    _pause?: Element;
    /** Each interaction or action */
    operation?: ExampleScenarioProcessStepOperation;
    /** Alternate non-typical step action */
    alternative?: Array<ExampleScenarioProcessStepAlternative>;
}
/** Resources contained in the instance */
export interface ExampleScenarioInstanceContainedInstance extends BackboneElement {
    /** Each resource contained in the instance */
    resourceId: string;
    _resourceId?: Element;
    /** A specific version of a resource contained in the instance */
    versionId?: string;
    _versionId?: Element;
}
