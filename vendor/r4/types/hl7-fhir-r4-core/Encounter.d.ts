/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { positiveInt } from "./positiveInt";
import { Period } from "./Period";
import { CodeableConcept } from "./CodeableConcept";
import { Coding } from "./Coding";
import { Duration } from "./Duration";
import { DomainResource } from "./DomainResource";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** An interaction between a patient and healthcare provider(s) for the purpose of providing healthcare service(s) or assessing the health status of a patient. */
export interface Encounter extends DomainResource {
    resourceType: 'Encounter';
    /** The appointment that scheduled this encounter */
    appointment?: Array<Reference>;
    /** The list of diagnosis relevant to this encounter */
    diagnosis?: Array<EncounterDiagnosis>;
    _status?: Element;
    /** The organization (facility) responsible for this encounter */
    serviceProvider?: Reference<'Organization'>;
    /** Episode(s) of care that this encounter should be recorded against */
    episodeOfCare?: Array<Reference>;
    /** Coded reason the encounter takes place */
    reasonCode?: Array<CodeableConcept>;
    /** Specific type of encounter */
    type?: Array<CodeableConcept>;
    /** List of participants involved in the encounter */
    participant?: Array<EncounterParticipant>;
    /** Specific type of service */
    serviceType?: CodeableConcept;
    /** The set of accounts that may be used for billing for this Encounter */
    account?: Array<Reference>;
    /** List of past encounter classes */
    classHistory?: Array<EncounterClassHistory>;
    /** Indicates the urgency of the encounter */
    priority?: CodeableConcept;
    /** planned | arrived | triaged | in-progress | onleave | finished | cancelled + */
    status: `${EncounterStatus}`;
    /** Classification of patient encounter */
    class: Coding;
    /** Quantity of time the encounter lasted (less time absent) */
    length?: Duration;
    /** Identifier(s) by which this encounter is known */
    identifier?: Array<Identifier>;
    /** Details about the admission to a healthcare service */
    hospitalization?: EncounterHospitalization;
    /** The start and end time of the encounter */
    period?: Period;
    /** The ServiceRequest that initiated this encounter */
    basedOn?: Array<Reference>;
    /** Another Encounter this encounter is part of */
    partOf?: Reference<'Encounter'>;
    /** List of locations where the patient has been */
    location?: Array<EncounterLocation>;
    /** The patient or group present at the encounter */
    subject?: Reference<'Patient' | 'Group'>;
    /** List of past encounter statuses */
    statusHistory?: Array<EncounterStatusHistory>;
    /** Reason the encounter takes place (reference) */
    reasonReference?: Array<Reference>;
}
/** The list of diagnosis relevant to this encounter */
export interface EncounterDiagnosis extends BackboneElement {
    /** The diagnosis or procedure relevant to the encounter */
    condition: Reference<'Procedure' | 'Condition'>;
    /** Role that this diagnosis has within the encounter (e.g. admission, billing, discharge …) */
    use?: CodeableConcept;
    /** Ranking of the diagnosis (for each role type) */
    rank?: positiveInt;
    _rank?: Element;
}
/** List of participants involved in the encounter */
export interface EncounterParticipant extends BackboneElement {
    /** Role of participant in encounter */
    type?: Array<CodeableConcept>;
    /** Period of time during the encounter that the participant participated */
    period?: Period;
    /** Persons involved in the encounter other than the patient */
    individual?: Reference<'PractitionerRole' | 'Practitioner' | 'RelatedPerson'>;
}
/** List of past encounter classes */
export interface EncounterClassHistory extends BackboneElement {
    /** inpatient | outpatient | ambulatory | emergency + */
    class: Coding;
    /** The time that the episode was in the specified class */
    period: Period;
}
/** planned | arrived | triaged | in-progress | onleave | finished | cancelled + */
export declare enum EncounterStatus {
    Cancelled = "cancelled",
    Arrived = "arrived",
    Onleave = "onleave",
    Triaged = "triaged",
    Planned = "planned",
    Unknown = "unknown",
    InProgress = "in-progress",
    EnteredInError = "entered-in-error",
    Finished = "finished"
}
/** Details about the admission to a healthcare service */
export interface EncounterHospitalization extends BackboneElement {
    /** Category or kind of location after discharge */
    dischargeDisposition?: CodeableConcept;
    /** Pre-admission identifier */
    preAdmissionIdentifier?: Identifier;
    /** Wheelchair, translator, stretcher, etc. */
    specialArrangement?: Array<CodeableConcept>;
    /** Diet preferences reported by the patient */
    dietPreference?: Array<CodeableConcept>;
    /** From where patient was admitted (physician referral, transfer) */
    admitSource?: CodeableConcept;
    /** Special courtesies (VIP, board member) */
    specialCourtesy?: Array<CodeableConcept>;
    /** The type of hospital re-admission that has occurred (if any). If the value is absent, then this is not identified as a readmission */
    reAdmission?: CodeableConcept;
    /** The location/organization from which the patient came before admission */
    origin?: Reference<'Organization' | 'Location'>;
    /** Location/organization to which the patient is discharged */
    destination?: Reference<'Organization' | 'Location'>;
}
/** List of locations where the patient has been */
export interface EncounterLocation extends BackboneElement {
    /** Location the encounter takes place */
    location: Reference<'Location'>;
    /** planned | active | reserved | completed */
    status?: `${EncounterStatus}`;
    _status?: Element;
    /** The physical type of the location (usually the level in the location hierachy - bed room ward etc.) */
    physicalType?: CodeableConcept;
    /** Time period during which the patient was present at the location */
    period?: Period;
}
/** List of past encounter statuses */
export interface EncounterStatusHistory extends BackboneElement {
    /** planned | arrived | triaged | in-progress | onleave | finished | cancelled + */
    status: `${EncounterStatus}`;
    _status?: Element;
    /** The time that the episode was in the specified status */
    period: Period;
}
