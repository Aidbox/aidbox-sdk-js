/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Attachment } from "./Attachment";
import { Period } from "./Period";
import { CodeableConcept } from "./CodeableConcept";
import { uri } from "./uri";
import { Coding } from "./Coding";
import { dateTime } from "./dateTime";
import { DomainResource } from "./DomainResource";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** A record of a healthcare consumer’s  choices, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
export interface Consent extends DomainResource {
    resourceType: 'Consent';
    /** Who the consent applies to */
    patient?: Reference<'Patient'>;
    /** Classification of the consent statement - for indexing/retrieval */
    category: Array<CodeableConcept>;
    provision?: ConsentProvision;
    _dateTime?: Element;
    _status?: Element;
    sourceAttachment?: Attachment;
    /** Custodian of the consent */
    organization?: Array<Reference>;
    /** Consent Verified by patient or family */
    verification?: Array<ConsentVerification>;
    /** Which of the four areas this resource covers (extensible) */
    scope: CodeableConcept;
    /** Policies covered by this consent */
    policy?: Array<ConsentPolicy>;
    sourceReference?: Reference<'QuestionnaireResponse' | 'Contract' | 'DocumentReference' | 'Consent'>;
    /** When this Consent was created or indexed */
    dateTime?: dateTime;
    /** draft | proposed | active | rejected | inactive | entered-in-error */
    status: `${ConsentStatus}`;
    /** Regulation that this consents to */
    policyRule?: CodeableConcept;
    /** Identifier for this record (external references) */
    identifier?: Array<Identifier>;
    /** Who is agreeing to the policy and rules */
    performer?: Array<Reference>;
}
/** Consent Verified by patient or family */
export interface ConsentVerification extends BackboneElement {
    /** Has been verified */
    verified: boolean;
    _verified?: Element;
    /** Person who verified */
    verifiedWith?: Reference<'Patient' | 'RelatedPerson'>;
    /** When consent verified */
    verificationDate?: dateTime;
    _verificationDate?: Element;
}
/** Policies covered by this consent */
export interface ConsentPolicy extends BackboneElement {
    /** Enforcement source for policy */
    authority?: uri;
    _authority?: Element;
    /** Specific policy covered by this consent */
    uri?: uri;
    _uri?: Element;
}
/** draft | proposed | active | rejected | inactive | entered-in-error */
export declare enum ConsentStatus {
    Active = "active",
    Draft = "draft",
    EnteredInError = "entered-in-error",
    Inactive = "inactive",
    Proposed = "proposed",
    Rejected = "rejected"
}
/** deny | permit */
export declare enum ConsentProvisionType {
    Deny = "deny",
    Permit = "permit"
}
/** Who|what controlled by this rule (or group, by role) */
export interface ConsentProvisionActor extends BackboneElement {
    /** How the actor is involved */
    role: CodeableConcept;
    /** Resource for the actor (or group, by role) */
    reference: Reference<'CareTeam' | 'Patient' | 'PractitionerRole' | 'Organization' | 'Device' | 'Practitioner' | 'RelatedPerson' | 'Group'>;
}
/** instance | related | dependents | authoredby */
export declare enum ConsentProvisionMeaning {
    Authoredby = "authoredby",
    Dependents = "dependents",
    Instance = "instance",
    Related = "related"
}
/** Data controlled by this rule */
export interface ConsentProvisionData extends BackboneElement {
    /** instance | related | dependents | authoredby */
    meaning: `${ConsentProvisionMeaning}`;
    _meaning?: Element;
    /** The actual data reference */
    reference: Reference;
}
/** Constraints to the base Consent.policyRule */
export interface ConsentProvision extends BackboneElement {
    /** Nested Exception Rules */
    provision?: Array<ConsentProvision>;
    /** Context of activities covered by this rule */
    purpose?: Array<Coding>;
    /** Timeframe for data controlled by this rule */
    dataPeriod?: Period;
    _type?: Element;
    /** deny | permit */
    type?: `${ConsentProvisionType}`;
    /** e.g. Resource Type, Profile, CDA, etc. */
    class?: Array<Coding>;
    /** e.g. LOINC or SNOMED CT code, etc. in the content */
    code?: Array<CodeableConcept>;
    /** Actions controlled by this rule */
    action?: Array<CodeableConcept>;
    /** Timeframe for this rule */
    period?: Period;
    /** Security Labels that define affected resources */
    securityLabel?: Array<Coding>;
    /** Who|what controlled by this rule (or group, by role) */
    actor?: Array<ConsentProvisionActor>;
    /** Data controlled by this rule */
    data?: Array<ConsentProvisionData>;
}
