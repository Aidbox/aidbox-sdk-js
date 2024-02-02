/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Period } from "./Period";
import { CodeableConcept } from "./CodeableConcept";
import { ContactPoint } from "./ContactPoint";
import { time } from "./time";
import { DomainResource } from "./DomainResource";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { code } from "./code";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** A specific set of Roles/Locations/specialties/services that a practitioner may perform at an organization for a period of time. */
export interface PractitionerRole extends DomainResource {
    resourceType: 'PractitionerRole';
    _active?: Element;
    /** Times the Service Site is available */
    availableTime?: Array<PractitionerRoleAvailableTime>;
    /** Specific specialty of the practitioner */
    specialty?: Array<CodeableConcept>;
    /** Not available during this time due to provided reason */
    notAvailable?: Array<PractitionerRoleNotAvailable>;
    /** Organization where the roles are available */
    organization?: Reference<'Organization'>;
    /** Whether this practitioner role record is in active use */
    active?: boolean;
    _availabilityExceptions?: Element;
    /** Roles which this practitioner may perform */
    code?: Array<CodeableConcept>;
    /** Business Identifiers that are specific to a role/location */
    identifier?: Array<Identifier>;
    /** Description of availability exceptions */
    availabilityExceptions?: string;
    /** Practitioner that is able to provide the defined services for the organization */
    practitioner?: Reference<'Practitioner'>;
    /** Contact details that are specific to the role/location/service */
    telecom?: Array<ContactPoint>;
    /** The period during which the practitioner is authorized to perform in these role(s) */
    period?: Period;
    /** The location(s) at which this practitioner provides care */
    location?: Array<Reference>;
    /** Technical endpoints providing access to services operated for the practitioner with this role */
    endpoint?: Array<Reference>;
    /** The list of healthcare services that this worker provides for this role's Organization/Location(s) */
    healthcareService?: Array<Reference>;
}
/** Times the Service Site is available */
export interface PractitionerRoleAvailableTime extends BackboneElement {
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
export interface PractitionerRoleNotAvailable extends BackboneElement {
    /** Reason presented to the user explaining why time not available */
    description: string;
    _description?: Element;
    /** Service not available from this date */
    during?: Period;
}
