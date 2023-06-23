/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Annotation } from "./Annotation";
import { Period } from "./Period";
import { CodeableConcept } from "./CodeableConcept";
import { SimpleQuantity } from "./SimpleQuantity";
import { uri } from "./uri";
import { dateTime } from "./dateTime";
import { Quantity } from "./Quantity";
import { DomainResource } from "./DomainResource";
import { Ratio } from "./Ratio";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { code } from "./code";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** Describes the event of a patient consuming or otherwise being administered a medication.  This may be as simple as swallowing a tablet or it may be a long running infusion.  Related resources tie this event to the authorizing prescription, and the specific encounter between patient and health care practitioner. */
export interface MedicationAdministration extends DomainResource {
    /** Type of medication usage */
    category?: CodeableConcept;
    /** Request administration performed against */
    request?: Reference<"MedicationRequest">;
    _effectiveDateTime: Element;
    /** A list of events of interest in the lifecycle */
    eventHistory?: Array<Reference>;
    /** Details of how medication was taken */
    dosage?: MedicationAdministrationDosage;
    /** Instantiates protocol or definition */
    instantiates?: Array<uri>;
    _instantiates?: Array<Element>;
    _status?: Element;
    /** Reason administration performed */
    reasonCode?: Array<CodeableConcept>;
    medicationCodeableConcept: CodeableConcept;
    /** Reason administration not performed */
    statusReason?: Array<CodeableConcept>;
    /** Information about the administration */
    note?: Array<Annotation>;
    /** Additional information to support administration */
    supportingInformation?: Array<Reference>;
    effectiveDateTime: dateTime;
    /** in-progress | not-done | on-hold | completed | entered-in-error | stopped | unknown */
    status: code;
    /** External identifier */
    identifier?: Array<Identifier>;
    /** Encounter or Episode of Care administered as part of */
    context?: Reference<"EpisodeOfCare" | "Encounter">;
    /** Device used to administer */
    device?: Array<Reference>;
    medicationReference: Reference<"Medication">;
    /** Part of referenced event */
    partOf?: Array<Reference>;
    /** Who received medication */
    subject: Reference<"Patient" | "Group">;
    /** Who performed the medication administration and what they did */
    performer?: Array<MedicationAdministrationPerformer>;
    effectivePeriod: Period;
    /** Condition or observation that supports why the medication was administered */
    reasonReference?: Array<Reference>;
}
/** Details of how medication was taken */
export interface MedicationAdministrationDosage extends BackboneElement {
    /** Body site administered to */
    site?: CodeableConcept;
    /** How drug was administered */
    method?: CodeableConcept;
    /** Amount of medication per dose */
    dose?: SimpleQuantity;
    /** Path of substance into body */
    route?: CodeableConcept;
    _text?: Element;
    rateRatio?: Ratio;
    rateQuantity?: Quantity;
    /** Free text dosage instructions e.g. SIG */
    text?: string;
}
/** Who performed the medication administration and what they did */
export interface MedicationAdministrationPerformer extends BackboneElement {
    /** Type of performance */
    function?: CodeableConcept;
    /** Who performed the medication administration */
    actor: Reference<"Patient" | "PractitionerRole" | "Device" | "Practitioner" | "RelatedPerson">;
}