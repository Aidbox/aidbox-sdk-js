/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Address } from "./Address";
import { CodeableConcept } from "./CodeableConcept";
import { Coding } from "./Coding";
import { ContactPoint } from "./ContactPoint";
import { time } from "./time";
import { DomainResource } from "./DomainResource";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { code } from "./code";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
import { decimal } from "./decimal";
/** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
export interface Location extends DomainResource {
    resourceType: 'Location';
    /** Additional details about the location that could be displayed as further information to identify the location beyond its name */
    description?: string;
    /** Physical location */
    address?: Address;
    /** Organization responsible for provisioning and upkeep */
    managingOrganization?: Reference<'Organization'>;
    /** Name of the location as used by humans */
    name?: string;
    _status?: Element;
    /** instance | kind */
    mode?: `${LocationMode}`;
    /** Type of function performed */
    type?: Array<CodeableConcept>;
    _description?: Element;
    /** A list of alternate names that the location is known as, or was known as, in the past */
    alias?: Array<string>;
    /** active | suspended | inactive */
    status?: `${LocationStatus}`;
    _name?: Element;
    _availabilityExceptions?: Element;
    /** Unique code or number identifying the location to its users */
    identifier?: Array<Identifier>;
    /** What days/times during a week is this location usually open */
    hoursOfOperation?: Array<LocationHoursOfOperation>;
    /** Description of availability exceptions */
    availabilityExceptions?: string;
    /** The absolute geographic location */
    position?: LocationPosition;
    /** Contact details of the location */
    telecom?: Array<ContactPoint>;
    /** The operational status of the location (typically only for a bed/room) */
    operationalStatus?: Coding;
    /** Another Location this one is physically a part of */
    partOf?: Reference<'Location'>;
    _alias?: Array<Element>;
    _mode?: Element;
    /** Physical form of the location */
    physicalType?: CodeableConcept;
    /** Technical endpoints providing access to services operated for the location */
    endpoint?: Array<Reference>;
}
/** instance | kind */
export declare enum LocationMode {
    Instance = "instance",
    Kind = "kind"
}
/** active | suspended | inactive */
export declare enum LocationStatus {
    Active = "active",
    Inactive = "inactive",
    Suspended = "suspended"
}
/** What days/times during a week is this location usually open */
export interface LocationHoursOfOperation extends BackboneElement {
    /** mon | tue | wed | thu | fri | sat | sun */
    daysOfWeek?: Array<code>;
    _daysOfWeek?: Array<Element>;
    /** The Location is open all day */
    allDay?: boolean;
    _allDay?: Element;
    /** Time that the Location opens */
    openingTime?: time;
    _openingTime?: Element;
    /** Time that the Location closes */
    closingTime?: time;
    _closingTime?: Element;
}
/** The absolute geographic location */
export interface LocationPosition extends BackboneElement {
    /** Longitude with WGS84 datum */
    longitude: decimal;
    _longitude?: Element;
    /** Latitude with WGS84 datum */
    latitude: decimal;
    _latitude?: Element;
    /** Altitude with WGS84 datum */
    altitude?: decimal;
    _altitude?: Element;
}
