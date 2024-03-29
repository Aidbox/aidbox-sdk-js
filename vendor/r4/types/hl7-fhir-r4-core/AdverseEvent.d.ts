/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { CodeableConcept } from "./CodeableConcept";
import { dateTime } from "./dateTime";
import { DomainResource } from "./DomainResource";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
export interface AdverseEvent extends DomainResource {
    resourceType: 'AdverseEvent';
    /** product-problem | product-quality | product-use-error | wrong-dose | incorrect-prescribing-information | wrong-technique | wrong-route-of-administration | wrong-rate | wrong-duration | wrong-time | expired-drug | medical-device-use-error | problem-different-manufacturer | unsafe-physical-environment */
    category?: Array<CodeableConcept>;
    /** actual | potential */
    actuality: `${AdverseEventActuality}`;
    /** When the event occurred */
    date?: dateTime;
    /** AdverseEvent.study */
    study?: Array<Reference>;
    /** Encounter created as part of */
    encounter?: Reference<'Encounter'>;
    _date?: Element;
    /** The suspected agent causing the adverse event */
    suspectEntity?: Array<AdverseEventSuspectEntity>;
    /** AdverseEvent.referenceDocument */
    referenceDocument?: Array<Reference>;
    /** resolved | recovering | ongoing | resolvedWithSequelae | fatal | unknown */
    outcome?: `${AdverseEventOutcome}`;
    /** When the event was recorded */
    recordedDate?: dateTime;
    /** Type of the event itself in relation to the subject */
    event?: CodeableConcept;
    /** Who  was involved in the adverse event or the potential adverse event */
    contributor?: Array<Reference>;
    /** AdverseEvent.subjectMedicalHistory */
    subjectMedicalHistory?: Array<Reference>;
    _recordedDate?: Element;
    /** Who recorded the adverse event */
    recorder?: Reference<'Patient' | 'PractitionerRole' | 'Practitioner' | 'RelatedPerson'>;
    /** Seriousness of the event */
    seriousness?: CodeableConcept;
    /** mild | moderate | severe */
    severity?: `${AdverseEventSeverity}`;
    /** Business identifier for the event */
    identifier?: Identifier;
    /** When the event was detected */
    detected?: dateTime;
    /** Location where adverse event occurred */
    location?: Reference<'Location'>;
    _detected?: Element;
    /** Subject impacted by event */
    subject: Reference<'Patient' | 'Practitioner' | 'RelatedPerson' | 'Group'>;
    _actuality?: Element;
    /** Effect on the subject due to this event */
    resultingCondition?: Array<Reference>;
}
/** actual | potential */
export declare enum AdverseEventActuality {
    Actual = "actual",
    Potential = "potential"
}
/** Information on the possible cause of the event */
export interface AdverseEventCausality extends BackboneElement {
    /** Assessment of if the entity caused the event */
    assessment?: CodeableConcept;
    /** AdverseEvent.suspectEntity.causalityProductRelatedness */
    productRelatedness?: string;
    _productRelatedness?: Element;
    /** AdverseEvent.suspectEntity.causalityAuthor */
    author?: Reference<'PractitionerRole' | 'Practitioner'>;
    /** ProbabilityScale | Bayesian | Checklist */
    method?: CodeableConcept;
}
/** The suspected agent causing the adverse event */
export interface AdverseEventSuspectEntity extends BackboneElement {
    /** Refers to the specific entity that caused the adverse event */
    instance: Reference<'MedicationAdministration' | 'Medication' | 'Device' | 'Substance' | 'Procedure' | 'Immunization' | 'MedicationStatement'>;
    /** Information on the possible cause of the event */
    causality?: Array<AdverseEventCausality>;
}
/** resolved | recovering | ongoing | resolvedWithSequelae | fatal | unknown */
export declare enum AdverseEventOutcome {
    Fatal = "fatal",
    Ongoing = "ongoing",
    Recovering = "recovering",
    Resolved = "resolved",
    ResolvedWithSequelae = "resolvedWithSequelae",
    Unknown = "unknown"
}
/** mild | moderate | severe */
export declare enum AdverseEventSeverity {
    Mild = "mild",
    Moderate = "moderate",
    Severe = "severe"
}
