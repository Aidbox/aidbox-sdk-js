/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { CodeableConcept } from "./CodeableConcept";
import { ProdCharacteristic } from "./ProdCharacteristic";
import { Quantity } from "./Quantity";
import { DomainResource } from "./DomainResource";
import { Reference } from "./Reference";
/** The manufactured item as contained in the packaged medicinal product. */
export interface MedicinalProductManufactured extends DomainResource {
    resourceType: 'MedicinalProductManufactured';
    /** Dose form as manufactured and before any transformation into the pharmaceutical product */
    manufacturedDoseForm: CodeableConcept;
    /** The “real world” units in which the quantity of the manufactured item is described */
    unitOfPresentation?: CodeableConcept;
    /** The quantity or "count number" of the manufactured item */
    quantity: Quantity;
    /** Manufacturer of the item (Note that this should be named "manufacturer" but it currently causes technical issues) */
    manufacturer?: Array<Reference>;
    /** Ingredient */
    ingredient?: Array<Reference>;
    /** Dimensions, color etc. */
    physicalCharacteristics?: ProdCharacteristic;
    /** Other codeable characteristics */
    otherCharacteristics?: Array<CodeableConcept>;
}
