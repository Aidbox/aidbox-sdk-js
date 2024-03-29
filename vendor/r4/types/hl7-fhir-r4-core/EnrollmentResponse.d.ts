/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { dateTime } from "./dateTime";
import { DomainResource } from "./DomainResource";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { Identifier } from "./Identifier";
/** This resource provides enrollment and plan details from the processing of an EnrollmentRequest resource. */
export interface EnrollmentResponse extends DomainResource {
    resourceType: 'EnrollmentResponse';
    _created?: Element;
    /** Claim reference */
    request?: Reference<'EnrollmentRequest'>;
    /** Responsible practitioner */
    requestProvider?: Reference<'PractitionerRole' | 'Organization' | 'Practitioner'>;
    _disposition?: Element;
    _status?: Element;
    /** Creation date */
    created?: dateTime;
    /** queued | complete | error | partial */
    outcome?: `${EnrollmentResponseOutcome}`;
    /** Insurer */
    organization?: Reference<'Organization'>;
    _outcome?: Element;
    /** Disposition Message */
    disposition?: string;
    /** active | cancelled | draft | entered-in-error */
    status?: `${EnrollmentResponseStatus}`;
    /** Business Identifier */
    identifier?: Array<Identifier>;
}
/** queued | complete | error | partial */
export declare enum EnrollmentResponseOutcome {
    Complete = "complete",
    Error = "error",
    Partial = "partial",
    Queued = "queued"
}
/** active | cancelled | draft | entered-in-error */
export declare enum EnrollmentResponseStatus {
    Active = "active",
    Cancelled = "cancelled",
    Draft = "draft",
    EnteredInError = "entered-in-error"
}
