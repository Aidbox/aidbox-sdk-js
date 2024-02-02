/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Annotation } from "./Annotation";
import { Age } from "./Age";
import { Period } from "./Period";
import { CodeableConcept } from "./CodeableConcept";
import { dateTime } from "./dateTime";
import { Range } from "./Range";
import { DomainResource } from "./DomainResource";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { code } from "./code";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** Risk of harmful or undesirable, physiological response which is unique to an individual and associated with exposure to a substance. */
export interface AllergyIntolerance extends DomainResource {
    resourceType: 'AllergyIntolerance';
    /** Who the sensitivity is for */
    patient: Reference<'Patient'>;
    /** food | medication | environment | biologic */
    category?: Array<code>;
    _onsetString?: Element;
    /** low | high | unable-to-assess */
    criticality?: `${AllergyIntoleranceCriticality}`;
    /** active | inactive | resolved */
    clinicalStatus?: `${AllergyIntoleranceClinicalStatus}`;
    onsetRange?: Range;
    onsetAge?: Age;
    /** Encounter when the allergy or intolerance was asserted */
    encounter?: Reference<'Encounter'>;
    _type?: Element;
    onsetPeriod?: Period;
    /** allergy | intolerance - Underlying mechanism (if known) */
    type?: `${AllergyIntoleranceType}`;
    /** Source of the information about the allergy */
    asserter?: Reference<'Patient' | 'PractitionerRole' | 'Practitioner' | 'RelatedPerson'>;
    /** Additional text not captured in other fields */
    note?: Array<Annotation>;
    /** Date first version of the resource instance was recorded */
    recordedDate?: dateTime;
    _recordedDate?: Element;
    onsetString?: string;
    /** Who recorded the sensitivity */
    recorder?: Reference<'Patient' | 'PractitionerRole' | 'Practitioner' | 'RelatedPerson'>;
    /** Code that identifies the allergy or intolerance */
    code?: CodeableConcept;
    /** External ids for this item */
    identifier?: Array<Identifier>;
    _criticality?: Element;
    onsetDateTime?: dateTime;
    _category?: Array<Element>;
    /** Date(/time) of last known occurrence of a reaction */
    lastOccurrence?: dateTime;
    _onsetDateTime?: Element;
    /** unconfirmed | confirmed | refuted | entered-in-error */
    verificationStatus?: `${AllergyIntoleranceVerificationStatus}`;
    /** Adverse Reaction Events linked to exposure to substance */
    reaction?: Array<AllergyIntoleranceReaction>;
    _lastOccurrence?: Element;
}
/** low | high | unable-to-assess */
export declare enum AllergyIntoleranceCriticality {
    High = "high",
    Low = "low",
    UnableToAssess = "unable-to-assess"
}
/** active | inactive | resolved */
export declare enum AllergyIntoleranceClinicalStatus {
    Active = "active",
    Inactive = "inactive",
    Resolved = "resolved"
}
/** allergy | intolerance - Underlying mechanism (if known) */
export declare enum AllergyIntoleranceType {
    Allergy = "allergy",
    Intolerance = "intolerance"
}
/** unconfirmed | confirmed | refuted | entered-in-error */
export declare enum AllergyIntoleranceVerificationStatus {
    Confirmed = "confirmed",
    EnteredInError = "entered-in-error",
    Presumed = "presumed",
    Refuted = "refuted",
    Unconfirmed = "unconfirmed"
}
/** mild | moderate | severe (of event as a whole) */
export declare enum AllergyIntoleranceSeverity {
    Mild = "mild",
    Moderate = "moderate",
    Severe = "severe"
}
/** Adverse Reaction Events linked to exposure to substance */
export interface AllergyIntoleranceReaction extends BackboneElement {
    /** Description of the event as a whole */
    description?: string;
    /** Date(/time) when manifestations showed */
    onset?: dateTime;
    _onset?: Element;
    /** Clinical symptoms/signs associated with the Event */
    manifestation: Array<CodeableConcept>;
    /** How the subject was exposed to the substance */
    exposureRoute?: CodeableConcept;
    _description?: Element;
    /** Text about event not captured in other fields */
    note?: Array<Annotation>;
    /** Specific substance or pharmaceutical product considered to be responsible for event */
    substance?: CodeableConcept;
    /** mild | moderate | severe (of event as a whole) */
    severity?: `${AllergyIntoleranceSeverity}`;
    _severity?: Element;
}
