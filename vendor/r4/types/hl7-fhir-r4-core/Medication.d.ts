/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { CodeableConcept } from "./CodeableConcept";
import { dateTime } from "./dateTime";
import { DomainResource } from "./DomainResource";
import { Ratio } from "./Ratio";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { code } from "./code";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** This resource is primarily used for the identification and definition of a medication for the purposes of prescribing, dispensing, and administering a medication as well as for making statements about medication use. */
export interface Medication extends DomainResource {
    /** Amount of drug in package */
    amount?: Ratio;
    _status?: Element;
    /** Details about packaged medications */
    batch?: MedicationBatch;
    /** Active or inactive ingredient */
    ingredient?: Array<MedicationIngredient>;
    /** active | inactive | entered-in-error */
    status?: code;
    /** Codes that identify this medication */
    code?: CodeableConcept;
    /** Business identifier for this medication */
    identifier?: Array<Identifier>;
    /** Manufacturer of the item */
    manufacturer?: Reference<"Organization">;
    /** powder | tablets | capsule + */
    form?: CodeableConcept;
}
/** Details about packaged medications */
export interface MedicationBatch extends BackboneElement {
    /** Identifier assigned to batch */
    lotNumber?: string;
    _lotNumber?: Element;
    /** When batch will expire */
    expirationDate?: dateTime;
    _expirationDate?: Element;
}
/** Active or inactive ingredient */
export interface MedicationIngredient extends BackboneElement {
    itemCodeableConcept: CodeableConcept;
    itemReference: Reference<"Medication" | "Substance">;
    /** Active ingredient indicator */
    isActive?: boolean;
    _isActive?: Element;
    /** Quantity of ingredient present */
    strength?: Ratio;
}
