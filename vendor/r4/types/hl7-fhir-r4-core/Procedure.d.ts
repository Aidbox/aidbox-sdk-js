/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Annotation } from "./Annotation";
import { Age } from "./Age";
import { Period } from "./Period";
import { CodeableConcept } from "./CodeableConcept";
import { uri } from "./uri";
import { dateTime } from "./dateTime";
import { Range } from "./Range";
import { canonical } from "./canonical";
import { DomainResource } from "./DomainResource";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** An action that is or was performed on or for a patient. This can be a physical intervention like an operation, or less invasive like long term services, counseling, or hypnotherapy. */
export interface Procedure extends DomainResource {
    resourceType: 'Procedure';
    /** Classification of the procedure */
    category?: CodeableConcept;
    /** Any report resulting from the procedure */
    report?: Array<Reference>;
    /** Coded items used during the procedure */
    usedCode?: Array<CodeableConcept>;
    /** Items used during procedure */
    usedReference?: Array<Reference>;
    /** Instantiates FHIR protocol or definition */
    instantiatesCanonical?: Array<canonical>;
    /** Instantiates external protocol or definition */
    instantiatesUri?: Array<uri>;
    _performedDateTime?: Element;
    /** Manipulated, implanted, or removed device */
    focalDevice?: Array<ProcedureFocalDevice>;
    /** Encounter created as part of */
    encounter?: Reference<'Encounter'>;
    performedAge?: Age;
    /** A condition that is a result of the procedure */
    complicationDetail?: Array<Reference>;
    _performedString?: Element;
    _status?: Element;
    /** Coded reason procedure performed */
    reasonCode?: Array<CodeableConcept>;
    performedString?: string;
    /** Reason for current status */
    statusReason?: CodeableConcept;
    /** The result of procedure */
    outcome?: CodeableConcept;
    /** Person who asserts this procedure */
    asserter?: Reference<'Patient' | 'PractitionerRole' | 'Practitioner' | 'RelatedPerson'>;
    /** Additional information about the procedure */
    note?: Array<Annotation>;
    performedRange?: Range;
    /** Complication following the procedure */
    complication?: Array<CodeableConcept>;
    /** preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown */
    status: `${ProcedureStatus}`;
    performedDateTime?: dateTime;
    /** Who recorded the procedure */
    recorder?: Reference<'Patient' | 'PractitionerRole' | 'Practitioner' | 'RelatedPerson'>;
    /** Identification of the procedure */
    code?: CodeableConcept;
    /** External Identifiers for this procedure */
    identifier?: Array<Identifier>;
    /** Target body sites */
    bodySite?: Array<CodeableConcept>;
    /** A request for this procedure */
    basedOn?: Array<Reference>;
    /** Part of referenced event */
    partOf?: Array<Reference>;
    performedPeriod?: Period;
    /** Where the procedure happened */
    location?: Reference<'Location'>;
    /** Instructions for follow up */
    followUp?: Array<CodeableConcept>;
    _instantiatesCanonical?: Array<Element>;
    /** Who the procedure was performed on */
    subject: Reference<'Patient' | 'Group'>;
    /** The people who performed the procedure */
    performer?: Array<ProcedurePerformer>;
    /** The justification that the procedure was performed */
    reasonReference?: Array<Reference>;
    _instantiatesUri?: Array<Element>;
}
/** Manipulated, implanted, or removed device */
export interface ProcedureFocalDevice extends BackboneElement {
    /** Kind of change to device */
    action?: CodeableConcept;
    /** Device that was changed */
    manipulated: Reference<'Device'>;
}
/** preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown */
export declare enum ProcedureStatus {
    Completed = "completed",
    EnteredInError = "entered-in-error",
    InProgress = "in-progress",
    NotDone = "not-done",
    OnHold = "on-hold",
    Preparation = "preparation",
    Stopped = "stopped",
    Unknown = "unknown"
}
/** The people who performed the procedure */
export interface ProcedurePerformer extends BackboneElement {
    /** Type of performance */
    function?: CodeableConcept;
    /** The reference to the practitioner */
    actor: Reference<'Patient' | 'PractitionerRole' | 'Organization' | 'Device' | 'Practitioner' | 'RelatedPerson'>;
    /** Organization the device or practitioner was acting for */
    onBehalfOf?: Reference<'Organization'>;
}
