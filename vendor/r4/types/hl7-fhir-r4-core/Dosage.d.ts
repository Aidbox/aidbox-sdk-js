/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { CodeableConcept } from "./CodeableConcept";
import { SimpleQuantity } from "./SimpleQuantity";
import { Range } from "./Range";
import { Timing } from "./Timing";
import { Quantity } from "./Quantity";
import { integer } from "./integer";
import { Ratio } from "./Ratio";
import { Element } from "./Element";
import { BackboneElement } from "./BackboneElement";
/** Base StructureDefinition for Dosage Type: Indicates how the medication is/was taken or should be taken by the patient. */
export interface Dosage extends BackboneElement {
    _sequence?: Element;
    /** Body site to administer to */
    site?: CodeableConcept;
    _patientInstruction?: Element;
    /** Technique for administering medication */
    method?: CodeableConcept;
    /** Patient or consumer oriented instructions */
    patientInstruction?: string;
    /** Upper limit on medication per lifetime of the patient */
    maxDosePerLifetime?: SimpleQuantity;
    /** Upper limit on medication per administration */
    maxDosePerAdministration?: SimpleQuantity;
    /** How drug should enter body */
    route?: CodeableConcept;
    _asNeededBoolean?: Element;
    asNeededBoolean?: boolean;
    /** When medication should be administered */
    timing?: Timing;
    /** Supplemental instruction or warnings to the patient - e.g. "with meals", "may cause drowsiness" */
    additionalInstruction?: Array<CodeableConcept>;
    /** The order of the dosage instructions */
    sequence?: integer;
    /** Upper limit on medication per unit of time */
    maxDosePerPeriod?: Ratio;
    _text?: Element;
    /** Amount of medication administered */
    doseAndRate?: Array<DosageDoseAndRate>;
    asNeededCodeableConcept?: CodeableConcept;
    /** Free text dosage instructions e.g. SIG */
    text?: string;
}
/** Amount of medication administered */
export interface DosageDoseAndRate extends Element {
    /** The kind of dose or rate specified */
    type?: CodeableConcept;
    doseRange?: Range;
    doseQuantity?: Quantity;
    rateRatio?: Ratio;
    rateRange?: Range;
    rateQuantity?: Quantity;
}
