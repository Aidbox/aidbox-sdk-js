/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { CodeableConcept } from "./CodeableConcept";
import { Quantity } from "./Quantity";
import { Duration } from "./Duration";
import { DomainResource } from "./DomainResource";
import { Ratio } from "./Ratio";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** A pharmaceutical product described in terms of its composition and dose form. */
export interface MedicinalProductPharmaceutical extends DomainResource {
    /** An identifier for the pharmaceutical medicinal product */
    identifier?: Array<Identifier>;
    /** The administrable dose form, after necessary reconstitution */
    administrableDoseForm: CodeableConcept;
    /** Todo */
    unitOfPresentation?: CodeableConcept;
    /** Ingredient */
    ingredient?: Array<Reference>;
    /** Accompanying device */
    device?: Array<Reference>;
    /** Characteristics e.g. a products onset of action */
    characteristics?: Array<MedicinalProductPharmaceuticalCharacteristics>;
    /** The path by which the pharmaceutical product is taken into or makes contact with the body */
    routeOfAdministration: Array<MedicinalProductPharmaceuticalRouteOfAdministration>;
}
/** Characteristics e.g. a products onset of action */
export interface MedicinalProductPharmaceuticalCharacteristics extends BackboneElement {
    /** A coded characteristic */
    code: CodeableConcept;
    /** The status of characteristic e.g. assigned or pending */
    status?: CodeableConcept;
}
/** A species specific time during which consumption of animal product is not appropriate */
export interface MedicinalProductPharmaceuticalWithdrawalPeriod extends BackboneElement {
    /** Coded expression for the type of tissue for which the withdrawal period applues, e.g. meat, milk */
    tissue: CodeableConcept;
    /** A value for the time */
    value: Quantity;
    /** Extra information about the withdrawal period */
    supportingInformation?: string;
    _supportingInformation?: Element;
}
/** A species for which this route applies */
export interface MedicinalProductPharmaceuticalTargetSpecies extends BackboneElement {
    /** Coded expression for the species */
    code: CodeableConcept;
    /** A species specific time during which consumption of animal product is not appropriate */
    withdrawalPeriod?: Array<MedicinalProductPharmaceuticalWithdrawalPeriod>;
}
/** The path by which the pharmaceutical product is taken into or makes contact with the body */
export interface MedicinalProductPharmaceuticalRouteOfAdministration extends BackboneElement {
    /** Coded expression for the route */
    code: CodeableConcept;
    /** The first dose (dose quantity) administered in humans can be specified, for a product under investigation, using a numerical value and its unit of measurement */
    firstDose?: Quantity;
    /** The maximum single dose that can be administered as per the protocol of a clinical trial can be specified using a numerical value and its unit of measurement */
    maxSingleDose?: Quantity;
    /** The maximum dose per day (maximum dose quantity to be administered in any one 24-h period) that can be administered as per the protocol referenced in the clinical trial authorisation */
    maxDosePerDay?: Quantity;
    /** The maximum dose per treatment period that can be administered as per the protocol referenced in the clinical trial authorisation */
    maxDosePerTreatmentPeriod?: Ratio;
    /** The maximum treatment period during which an Investigational Medicinal Product can be administered as per the protocol referenced in the clinical trial authorisation */
    maxTreatmentPeriod?: Duration;
    /** A species for which this route applies */
    targetSpecies?: Array<MedicinalProductPharmaceuticalTargetSpecies>;
}
