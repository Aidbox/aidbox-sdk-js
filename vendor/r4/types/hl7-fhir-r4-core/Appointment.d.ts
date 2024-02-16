/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { positiveInt } from "./positiveInt";
import { unsignedInt } from "./unsignedInt";
import { Period } from "./Period";
import { CodeableConcept } from "./CodeableConcept";
import { dateTime } from "./dateTime";
import { DomainResource } from "./DomainResource";
import { instant } from "./instant";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** A booking of a healthcare event among patient(s), practitioner(s), related person(s) and/or device(s) for a specific date/time. This may result in one or more Encounter(s). */
export interface Appointment extends DomainResource {
    resourceType: 'Appointment';
    _created?: Element;
    /** Shown on a subject line in a meeting request, or appointment list */
    description?: string;
    /** A broad categorization of the service that is to be performed during this appointment */
    serviceCategory?: Array<CodeableConcept>;
    /** The slots that this appointment is filling */
    slot?: Array<Reference>;
    _patientInstruction?: Element;
    /** The specialty of a practitioner that would be required to perform the service requested in this appointment */
    specialty?: Array<CodeableConcept>;
    /** The coded reason for the appointment being cancelled */
    cancelationReason?: CodeableConcept;
    /** Potential date/time interval(s) requested to allocate the appointment within */
    requestedPeriod?: Array<Period>;
    /** Detailed information and instructions for the patient */
    patientInstruction?: string;
    _end?: Element;
    _priority?: Element;
    _status?: Element;
    /** When appointment is to take place */
    start?: instant;
    /** Coded reason this appointment is scheduled */
    reasonCode?: Array<CodeableConcept>;
    /** The date that this appointment was initially created */
    created?: dateTime;
    /** Participants involved in appointment */
    participant: Array<AppointmentParticipant>;
    /** The specific service that is to be performed during this appointment */
    serviceType?: Array<CodeableConcept>;
    _description?: Element;
    /** Additional information to support the appointment */
    supportingInformation?: Array<Reference>;
    /** Used to make informed decisions if needing to re-prioritize */
    priority?: unsignedInt;
    /** The style of appointment or patient that has been booked in the slot (not service type) */
    appointmentType?: CodeableConcept;
    /** proposed | pending | booked | arrived | fulfilled | cancelled | noshow | entered-in-error | checked-in | waitlist */
    status: `${AppointmentStatus}`;
    /** Additional comments */
    comment?: string;
    /** Can be less than start/end (e.g. estimate) */
    minutesDuration?: positiveInt;
    /** External Ids for this item */
    identifier?: Array<Identifier>;
    _minutesDuration?: Element;
    /** The service request this appointment is allocated to assess */
    basedOn?: Array<Reference>;
    /** When appointment is to conclude */
    end?: instant;
    _start?: Element;
    _comment?: Element;
    /** Reason the appointment is to take place (resource) */
    reasonReference?: Array<Reference>;
}
/** required | optional | information-only */
export declare enum AppointmentParticipantRequired {
    InformationOnly = "information-only",
    Optional = "optional",
    Required = "required"
}
/** accepted | declined | tentative | needs-action */
export declare enum AppointmentParticipantStatus {
    Accepted = "accepted",
    Declined = "declined",
    NeedsAction = "needs-action",
    Tentative = "tentative"
}
/** Participants involved in appointment */
export interface AppointmentParticipant extends BackboneElement {
    /** Role of participant in the appointment */
    type?: Array<CodeableConcept>;
    /** Person, Location/HealthcareService or Device */
    actor?: Reference<'Patient' | 'PractitionerRole' | 'HealthcareService' | 'Device' | 'Location' | 'Practitioner' | 'RelatedPerson'>;
    /** required | optional | information-only */
    required?: `${AppointmentParticipantRequired}`;
    _required?: Element;
    /** accepted | declined | tentative | needs-action */
    status: `${AppointmentParticipantStatus}`;
    _status?: Element;
    /** Participation period of the actor */
    period?: Period;
}
/** proposed | pending | booked | arrived | fulfilled | cancelled | noshow | entered-in-error | checked-in | waitlist */
export declare enum AppointmentStatus {
    Fulfilled = "fulfilled",
    Proposed = "proposed",
    Cancelled = "cancelled",
    Arrived = "arrived",
    CheckedIn = "checked-in",
    Noshow = "noshow",
    EnteredInError = "entered-in-error",
    Booked = "booked",
    Pending = "pending",
    Waitlist = "waitlist"
}
