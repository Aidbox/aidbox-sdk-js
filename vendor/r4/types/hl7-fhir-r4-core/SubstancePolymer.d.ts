/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Attachment } from "./Attachment";
import { CodeableConcept } from "./CodeableConcept";
import { SubstanceAmount } from "./SubstanceAmount";
import { integer } from "./integer";
import { DomainResource } from "./DomainResource";
import { Element } from "./Element";
import { BackboneElement } from "./BackboneElement";
/** Todo. */
export interface SubstancePolymer extends DomainResource {
    resourceType: 'SubstancePolymer';
    /** Todo */
    class?: CodeableConcept;
    /** Todo */
    geometry?: CodeableConcept;
    /** Todo */
    copolymerConnectivity?: Array<CodeableConcept>;
    /** Todo */
    modification?: Array<string>;
    _modification?: Array<Element>;
    /** Todo */
    monomerSet?: Array<SubstancePolymerMonomerSet>;
    /** Todo */
    repeat?: Array<SubstancePolymerRepeat>;
}
/** Todo */
export interface SubstancePolymerStartingMaterial extends BackboneElement {
    /** Todo */
    material?: CodeableConcept;
    /** Todo */
    type?: CodeableConcept;
    /** Todo */
    isDefining?: boolean;
    _isDefining?: Element;
    /** Todo */
    amount?: SubstanceAmount;
}
/** Todo */
export interface SubstancePolymerMonomerSet extends BackboneElement {
    /** Todo */
    ratioType?: CodeableConcept;
    /** Todo */
    startingMaterial?: Array<SubstancePolymerStartingMaterial>;
}
/** Todo */
export interface SubstancePolymerDegreeOfPolymerisation extends BackboneElement {
    /** Todo */
    degree?: CodeableConcept;
    /** Todo */
    amount?: SubstanceAmount;
}
/** Todo */
export interface SubstancePolymerStructuralRepresentation extends BackboneElement {
    /** Todo */
    type?: CodeableConcept;
    /** Todo */
    representation?: string;
    _representation?: Element;
    /** Todo */
    attachment?: Attachment;
}
/** Todo */
export interface SubstancePolymerRepeatUnit extends BackboneElement {
    /** Todo */
    orientationOfPolymerisation?: CodeableConcept;
    /** Todo */
    repeatUnit?: string;
    _repeatUnit?: Element;
    /** Todo */
    amount?: SubstanceAmount;
    /** Todo */
    degreeOfPolymerisation?: Array<SubstancePolymerDegreeOfPolymerisation>;
    /** Todo */
    structuralRepresentation?: Array<SubstancePolymerStructuralRepresentation>;
}
/** Todo */
export interface SubstancePolymerRepeat extends BackboneElement {
    /** Todo */
    numberOfUnits?: integer;
    _numberOfUnits?: Element;
    /** Todo */
    averageMolecularFormula?: string;
    _averageMolecularFormula?: Element;
    /** Todo */
    repeatUnitAmountType?: CodeableConcept;
    /** Todo */
    repeatUnit?: Array<SubstancePolymerRepeatUnit>;
}
