/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { UsageContext } from "./UsageContext";
import { Age } from "./Age";
import { Period } from "./Period";
import { ContactDetail } from "./ContactDetail";
import { CodeableConcept } from "./CodeableConcept";
import { SimpleQuantity } from "./SimpleQuantity";
import { uri } from "./uri";
import { Expression } from "./Expression";
import { dateTime } from "./dateTime";
import { Dosage } from "./Dosage";
import { Range } from "./Range";
import { RelatedArtifact } from "./RelatedArtifact";
import { Timing } from "./Timing";
import { canonical } from "./canonical";
import { Duration } from "./Duration";
import { DomainResource } from "./DomainResource";
import { date } from "./date";
import { markdown } from "./markdown";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
export interface ActivityDefinition extends DomainResource {
    resourceType: 'ActivityDefinition';
    /** What observations must be produced by this action */
    observationResultRequirement?: Array<Reference>;
    timingRange?: Range;
    /** Natural language description of the activity definition */
    description?: markdown;
    _usage?: Element;
    _kind?: Element;
    /** Date last changed */
    date?: dateTime;
    /** Transform to apply the template */
    transform?: canonical;
    /** Who endorsed the content */
    endorser?: Array<ContactDetail>;
    /** Name of the publisher (organization or individual) */
    publisher?: string;
    /** When the activity definition was approved by publisher */
    approvalDate?: date;
    /** Intended jurisdiction for activity definition (if applicable) */
    jurisdiction?: Array<CodeableConcept>;
    /** Detailed dosage instructions */
    dosage?: Array<Dosage>;
    _publisher?: Element;
    /** What observations are required to perform this action */
    observationRequirement?: Array<Reference>;
    /** Why this activity definition is defined */
    purpose?: markdown;
    _date?: Element;
    subjectCodeableConcept?: CodeableConcept;
    _doNotPerform?: Element;
    productCodeableConcept?: CodeableConcept;
    /** Name for this activity definition (computer friendly) */
    name?: string;
    productReference?: Reference<'Medication' | 'Substance'>;
    timingPeriod?: Period;
    _priority?: Element;
    _status?: Element;
    _experimental?: Element;
    /** The context that the content is intended to support */
    useContext?: Array<UsageContext>;
    /** Use and/or publishing restrictions */
    copyright?: markdown;
    _approvalDate?: Element;
    /** For testing purposes, not real usage */
    experimental?: boolean;
    /** E.g. Education, Treatment, Assessment, etc. */
    topic?: Array<CodeableConcept>;
    /** Who should participate in the action */
    participant?: Array<ActivityDefinitionParticipant>;
    /** Name for this activity definition (human friendly) */
    title?: string;
    _description?: Element;
    _profile?: Element;
    /** Logic used by the activity definition */
    library?: Array<canonical>;
    /** Who authored the content */
    author?: Array<ContactDetail>;
    _intent?: Element;
    _purpose?: Element;
    timingDateTime?: dateTime;
    timingTiming?: Timing;
    /** Describes the clinical usage of the activity definition */
    usage?: string;
    timingDuration?: Duration;
    _lastReviewDate?: Element;
    /** routine | urgent | asap | stat */
    priority?: `${ActivityDefinitionPriority}`;
    _transform?: Element;
    /** draft | active | retired | unknown */
    status: `${ActivityDefinitionStatus}`;
    /** Subordinate title of the activity definition */
    subtitle?: string;
    /** Kind of resource */
    kind?: `${ActivityDefinitionKind}`;
    _name?: Element;
    /** Dynamic aspects of the definition */
    dynamicValue?: Array<ActivityDefinitionDynamicValue>;
    /** Canonical identifier for this activity definition, represented as a URI (globally unique) */
    url?: uri;
    /** Detail type of activity */
    code?: CodeableConcept;
    /** Additional identifier for the activity definition */
    identifier?: Array<Identifier>;
    /** When the activity definition was last reviewed */
    lastReviewDate?: date;
    /** Who edited the content */
    editor?: Array<ContactDetail>;
    _subtitle?: Element;
    /** True if the activity should not be performed */
    doNotPerform?: boolean;
    /** What part of body to perform on */
    bodySite?: Array<CodeableConcept>;
    timingAge?: Age;
    /** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option */
    intent?: `${ActivityDefinitionIntent}`;
    _library?: Array<Element>;
    _copyright?: Element;
    _timingDateTime?: Element;
    _title?: Element;
    /** What specimens are required to perform this action */
    specimenRequirement?: Array<Reference>;
    /** Who reviewed the content */
    reviewer?: Array<ContactDetail>;
    /** How much is administered/consumed/supplied */
    quantity?: SimpleQuantity;
    /** Business version of the activity definition */
    version?: string;
    _version?: Element;
    /** Additional documentation, citations, etc. */
    relatedArtifact?: Array<RelatedArtifact>;
    /** Where it should happen */
    location?: Reference<'Location'>;
    /** Contact details for the publisher */
    contact?: Array<ContactDetail>;
    subjectReference?: Reference<'Group'>;
    _url?: Element;
    /** What profile the resource needs to conform to */
    profile?: canonical;
    /** When the activity definition is expected to be used */
    effectivePeriod?: Period;
}
/** patient | practitioner | related-person | device */
export declare enum ActivityDefinitionType {
    Device = "device",
    Patient = "patient",
    Practitioner = "practitioner",
    RelatedPerson = "related-person"
}
/** Who should participate in the action */
export interface ActivityDefinitionParticipant extends BackboneElement {
    /** patient | practitioner | related-person | device */
    type: `${ActivityDefinitionType}`;
    _type?: Element;
    /** E.g. Nurse, Surgeon, Parent, etc. */
    role?: CodeableConcept;
}
/** routine | urgent | asap | stat */
export declare enum ActivityDefinitionPriority {
    Asap = "asap",
    Routine = "routine",
    Stat = "stat",
    Urgent = "urgent"
}
/** draft | active | retired | unknown */
export declare enum ActivityDefinitionStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown"
}
/** Kind of resource */
export declare enum ActivityDefinitionKind {
    Appointment = "Appointment",
    NutritionOrder = "NutritionOrder",
    Contract = "Contract",
    Claim = "Claim",
    AppointmentResponse = "AppointmentResponse",
    VisionPrescription = "VisionPrescription",
    MedicationRequest = "MedicationRequest",
    ImmunizationRecommendation = "ImmunizationRecommendation",
    DeviceRequest = "DeviceRequest",
    ServiceRequest = "ServiceRequest",
    SupplyRequest = "SupplyRequest",
    Task = "Task",
    CommunicationRequest = "CommunicationRequest",
    EnrollmentRequest = "EnrollmentRequest",
    CarePlan = "CarePlan"
}
/** Dynamic aspects of the definition */
export interface ActivityDefinitionDynamicValue extends BackboneElement {
    /** The path to the element to be set dynamically */
    path: string;
    _path?: Element;
    /** An expression that provides the dynamic value for the customization */
    expression: Expression;
}
/** proposal | plan | directive | order | original-order | reflex-order | filler-order | instance-order | option */
export declare enum ActivityDefinitionIntent {
    Order = "order",
    FillerOrder = "filler-order",
    Option = "option",
    Directive = "directive",
    Proposal = "proposal",
    ReflexOrder = "reflex-order",
    Plan = "plan",
    InstanceOrder = "instance-order",
    OriginalOrder = "original-order"
}
