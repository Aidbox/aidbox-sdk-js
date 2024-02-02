/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { CodeableConcept } from "./CodeableConcept";
import { SimpleQuantity } from "./SimpleQuantity";
import { Range } from "./Range";
import { Quantity } from "./Quantity";
import { Duration } from "./Duration";
import { DomainResource } from "./DomainResource";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** A kind of specimen with associated set of requirements. */
export interface SpecimenDefinition extends DomainResource {
    resourceType: 'SpecimenDefinition';
    /** Business identifier of a kind of specimen */
    identifier?: Identifier;
    /** Kind of material to collect */
    typeCollected?: CodeableConcept;
    /** Patient preparation for collection */
    patientPreparation?: Array<CodeableConcept>;
    /** Time aspect for collection */
    timeAspect?: string;
    _timeAspect?: Element;
    /** Specimen collection procedure */
    collection?: Array<CodeableConcept>;
    /** Specimen in container intended for testing by lab */
    typeTested?: Array<SpecimenDefinitionTypeTested>;
}
/** preferred | alternate */
export declare enum SpecimenDefinitionPreference {
    Alternate = "alternate",
    Preferred = "preferred"
}
/** Specimen handling before testing */
export interface SpecimenDefinitionHandling extends BackboneElement {
    /** Temperature qualifier */
    temperatureQualifier?: CodeableConcept;
    /** Temperature range */
    temperatureRange?: Range;
    /** Maximum preservation time */
    maxDuration?: Duration;
    /** Preservation instruction */
    instruction?: string;
    _instruction?: Element;
}
/** Additive associated with container */
export interface SpecimenDefinitionAdditive extends BackboneElement {
    additiveCodeableConcept: CodeableConcept;
    additiveReference: Reference<'Substance'>;
}
/** The specimen's container */
export interface SpecimenDefinitionContainer extends BackboneElement {
    /** Container description */
    description?: string;
    _preparation?: Element;
    /** Container capacity */
    capacity?: SimpleQuantity;
    minimumVolumeQuantity?: Quantity;
    /** Kind of container associated with the kind of specimen */
    type?: CodeableConcept;
    /** Color of container cap */
    cap?: CodeableConcept;
    /** Specimen container preparation */
    preparation?: string;
    _description?: Element;
    _minimumVolumeString?: Element;
    /** Container material */
    material?: CodeableConcept;
    /** Additive associated with container */
    additive?: Array<SpecimenDefinitionAdditive>;
    minimumVolumeString?: string;
}
/** Specimen in container intended for testing by lab */
export interface SpecimenDefinitionTypeTested extends BackboneElement {
    /** Specimen requirements */
    requirement?: string;
    /** Specimen retention time */
    retentionTime?: Duration;
    _preference?: Element;
    /** Primary or secondary specimen */
    isDerived?: boolean;
    _isDerived?: Element;
    /** Type of intended specimen */
    type?: CodeableConcept;
    /** Rejection criterion */
    rejectionCriterion?: Array<CodeableConcept>;
    /** preferred | alternate */
    preference: `${SpecimenDefinitionPreference}`;
    /** Specimen handling before testing */
    handling?: Array<SpecimenDefinitionHandling>;
    /** The specimen's container */
    container?: SpecimenDefinitionContainer;
    _requirement?: Element;
}
