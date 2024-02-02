/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Annotation } from "./Annotation";
import { unsignedInt } from "./unsignedInt";
import { Period } from "./Period";
import { CodeableConcept } from "./CodeableConcept";
import { SimpleQuantity } from "./SimpleQuantity";
import { uri } from "./uri";
import { dateTime } from "./dateTime";
import { Dosage } from "./Dosage";
import { canonical } from "./canonical";
import { Duration } from "./Duration";
import { DomainResource } from "./DomainResource";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns. */
export interface MedicationRequest extends DomainResource {
    resourceType: 'MedicationRequest';
    /** Desired kind of performer of the medication administration */
    performerType?: CodeableConcept;
    /** Type of medication usage */
    category?: Array<CodeableConcept>;
    /** Associated insurance coverage */
    insurance?: Array<Reference>;
    /** Instantiates FHIR protocol or definition */
    instantiatesCanonical?: Array<canonical>;
    /** A list of events of interest in the lifecycle */
    eventHistory?: Array<Reference>;
    /** Instantiates external protocol or definition */
    instantiatesUri?: Array<uri>;
    /** Any restrictions on medication substitution */
    substitution?: MedicationRequestSubstitution;
    _authoredOn?: Element;
    /** Clinical Issue with action */
    detectedIssue?: Array<Reference>;
    /** Encounter created as part of encounter/admission/stay */
    encounter?: Reference<'Encounter'>;
    _doNotPerform?: Element;
    /** Medication supply authorization */
    dispenseRequest?: MedicationRequestDispenseRequest;
    _priority?: Element;
    _status?: Element;
    /** Reason or indication for ordering or not ordering the medication */
    reasonCode?: Array<CodeableConcept>;
    medicationCodeableConcept: CodeableConcept;
    /** Reason for current status */
    statusReason?: CodeableConcept;
    /** When request was initially authored */
    authoredOn?: dateTime;
    /** Information about the prescription */
    note?: Array<Annotation>;
    _reportedBoolean?: Element;
    _intent?: Element;
    /** Who/What requested the Request */
    requester?: Reference<'Patient' | 'PractitionerRole' | 'Organization' | 'Device' | 'Practitioner' | 'RelatedPerson'>;
    /** Information to support ordering of the medication */
    supportingInformation?: Array<Reference>;
    reportedReference?: Reference<'Patient' | 'PractitionerRole' | 'Organization' | 'Practitioner' | 'RelatedPerson'>;
    /** routine | urgent | asap | stat */
    priority?: `${MedicationRequestPriority}`;
    /** active | on-hold | cancelled | completed | entered-in-error | stopped | draft | unknown */
    status: `${MedicationRequestStatus}`;
    /** How the medication should be taken */
    dosageInstruction?: Array<Dosage>;
    /** Composite request this is part of */
    groupIdentifier?: Identifier;
    /** Person who entered the request */
    recorder?: Reference<'PractitionerRole' | 'Practitioner'>;
    reportedBoolean?: boolean;
    /** External ids for this request */
    identifier?: Array<Identifier>;
    /** True if request is prohibiting action */
    doNotPerform?: boolean;
    /** proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option */
    intent: `${MedicationRequestIntent}`;
    /** What request fulfills */
    basedOn?: Array<Reference>;
    /** An order/prescription that is being replaced */
    priorPrescription?: Reference<'MedicationRequest'>;
    medicationReference: Reference<'Medication'>;
    /** Overall pattern of medication administration */
    courseOfTherapyType?: CodeableConcept;
    _instantiatesCanonical?: Array<Element>;
    /** Who or group medication request is for */
    subject: Reference<'Patient' | 'Group'>;
    /** Intended performer of administration */
    performer?: Reference<'CareTeam' | 'Patient' | 'PractitionerRole' | 'Organization' | 'Device' | 'Practitioner' | 'RelatedPerson'>;
    /** Condition or observation that supports why the prescription is being written */
    reasonReference?: Array<Reference>;
    _instantiatesUri?: Array<Element>;
}
/** Any restrictions on medication substitution */
export interface MedicationRequestSubstitution extends BackboneElement {
    allowedBoolean: boolean;
    _allowedBoolean: Element;
    allowedCodeableConcept: CodeableConcept;
    /** Why should (not) substitution be made */
    reason?: CodeableConcept;
}
/** First fill details */
export interface MedicationRequestInitialFill extends BackboneElement {
    /** First fill quantity */
    quantity?: SimpleQuantity;
    /** First fill duration */
    duration?: Duration;
}
/** Medication supply authorization */
export interface MedicationRequestDispenseRequest extends BackboneElement {
    /** First fill details */
    initialFill?: MedicationRequestInitialFill;
    /** Minimum period of time between dispenses */
    dispenseInterval?: Duration;
    /** Time period supply is authorized for */
    validityPeriod?: Period;
    /** Number of refills authorized */
    numberOfRepeatsAllowed?: unsignedInt;
    _numberOfRepeatsAllowed?: Element;
    /** Amount of medication to supply per dispense */
    quantity?: SimpleQuantity;
    /** Number of days supply per dispense */
    expectedSupplyDuration?: Duration;
    /** Intended dispenser */
    performer?: Reference<'Organization'>;
}
/** routine | urgent | asap | stat */
export declare enum MedicationRequestPriority {
    Asap = "asap",
    Routine = "routine",
    Stat = "stat",
    Urgent = "urgent"
}
/** active | on-hold | cancelled | completed | entered-in-error | stopped | draft | unknown */
export declare enum MedicationRequestStatus {
    Active = "active",
    Cancelled = "cancelled",
    Completed = "completed",
    Draft = "draft",
    EnteredInError = "entered-in-error",
    OnHold = "on-hold",
    Stopped = "stopped",
    Unknown = "unknown"
}
/** proposal | plan | order | original-order | reflex-order | filler-order | instance-order | option */
export declare enum MedicationRequestIntent {
    FillerOrder = "filler-order",
    InstanceOrder = "instance-order",
    Option = "option",
    Order = "order",
    OriginalOrder = "original-order",
    Plan = "plan",
    Proposal = "proposal",
    ReflexOrder = "reflex-order"
}
