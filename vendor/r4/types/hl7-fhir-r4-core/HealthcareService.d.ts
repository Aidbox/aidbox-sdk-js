/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Attachment } from "./Attachment";
import { Period } from "./Period";
import { CodeableConcept } from "./CodeableConcept";
import { ContactPoint } from "./ContactPoint";
import { time } from "./time";
import { DomainResource } from "./DomainResource";
import { markdown } from "./markdown";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { code } from "./code";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** The details of a healthcare service available at a location. */
export interface HealthcareService extends DomainResource {
    resourceType: 'HealthcareService';
    /** Location(s) service is intended for/available to */
    coverageArea?: Array<Reference>;
    _active?: Element;
    /** Broad category of service being performed or delivered */
    category?: Array<CodeableConcept>;
    /** Times the Service Site is available */
    availableTime?: Array<HealthcareServiceAvailableTime>;
    _extraDetails?: Element;
    /** Specialties handled by the HealthcareService */
    specialty?: Array<CodeableConcept>;
    /** Description of service as presented to a consumer while searching */
    name?: string;
    /** Not available during this time due to provided reason */
    notAvailable?: Array<HealthcareServiceNotAvailable>;
    /** Organization that provides this service */
    providedBy?: Reference<'Organization'>;
    /** Type of service that may be delivered or performed */
    type?: Array<CodeableConcept>;
    /** Specific eligibility requirements required to use the service */
    eligibility?: Array<HealthcareServiceEligibility>;
    _appointmentRequired?: Element;
    /** Extra details about the service that can't be placed in the other fields */
    extraDetails?: markdown;
    /** Collection of characteristics (attributes) */
    characteristic?: Array<CodeableConcept>;
    /** Facilitates quick identification of the service */
    photo?: Attachment;
    /** Whether this HealthcareService record is in active use */
    active?: boolean;
    /** The language that this service is offered in */
    communication?: Array<CodeableConcept>;
    /** Additional description and/or any specific issues not covered elsewhere */
    comment?: string;
    _name?: Element;
    _availabilityExceptions?: Element;
    /** External identifiers for this item */
    identifier?: Array<Identifier>;
    /** Conditions under which service is available/offered */
    serviceProvisionCode?: Array<CodeableConcept>;
    /** Description of availability exceptions */
    availabilityExceptions?: string;
    /** If an appointment is required for access to this service */
    appointmentRequired?: boolean;
    /** Ways that the service accepts referrals */
    referralMethod?: Array<CodeableConcept>;
    /** Contacts related to the healthcare service */
    telecom?: Array<ContactPoint>;
    /** Location(s) where service may be provided */
    location?: Array<Reference>;
    /** Programs that this service is applicable to */
    program?: Array<CodeableConcept>;
    /** Technical endpoints providing access to electronic services operated for the healthcare service */
    endpoint?: Array<Reference>;
    _comment?: Element;
}
/** Times the Service Site is available */
export interface HealthcareServiceAvailableTime extends BackboneElement {
    /** mon | tue | wed | thu | fri | sat | sun */
    daysOfWeek?: Array<code>;
    _daysOfWeek?: Array<Element>;
    /** Always available? e.g. 24 hour service */
    allDay?: boolean;
    _allDay?: Element;
    /** Opening time of day (ignored if allDay = true) */
    availableStartTime?: time;
    _availableStartTime?: Element;
    /** Closing time of day (ignored if allDay = true) */
    availableEndTime?: time;
    _availableEndTime?: Element;
}
/** Not available during this time due to provided reason */
export interface HealthcareServiceNotAvailable extends BackboneElement {
    /** Reason presented to the user explaining why time not available */
    description: string;
    _description?: Element;
    /** Service not available from this date */
    during?: Period;
}
/** Specific eligibility requirements required to use the service */
export interface HealthcareServiceEligibility extends BackboneElement {
    /** Coded value for the eligibility */
    code?: CodeableConcept;
    /** Describes the eligibility conditions for the service */
    comment?: markdown;
    _comment?: Element;
}
