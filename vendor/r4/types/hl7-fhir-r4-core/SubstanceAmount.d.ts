/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { CodeableConcept } from "./CodeableConcept";
import { Range } from "./Range";
import { Quantity } from "./Quantity";
import { Element } from "./Element";
import { BackboneElement } from "./BackboneElement";
/** Base StructureDefinition for SubstanceAmount Type: Chemical substances are a single substance type whose primary defining element is the molecular structure. Chemical substances shall be defined on the basis of their complete covalent molecular structure; the presence of a salt (counter-ion) and/or solvates (water, alcohols) is also captured. Purity, grade, physical form or particle size are not taken into account in the definition of a chemical substance or in the assignment of a Substance ID. */
export interface SubstanceAmount extends BackboneElement {
    _amountString?: Element;
    /** Reference range of possible or expected values */
    referenceRange?: SubstanceAmountReferenceRange;
    /** Most elements that require a quantitative value will also have a field called amount type. Amount type should always be specified because the actual value of the amount is often dependent on it. EXAMPLE: In capturing the actual relative amounts of substances or molecular fragments it is essential to indicate whether the amount refers to a mole ratio or weight ratio. For any given element an effort should be made to use same the amount type for all related definitional elements */
    amountType?: CodeableConcept;
    _amountText?: Element;
    amountQuantity?: Quantity;
    amountString?: string;
    amountRange?: Range;
    /** A textual comment on a numeric value */
    amountText?: string;
}
/** Reference range of possible or expected values */
export interface SubstanceAmountReferenceRange extends Element {
    /** Lower limit possible or expected */
    lowLimit?: Quantity;
    /** Upper limit possible or expected */
    highLimit?: Quantity;
}
