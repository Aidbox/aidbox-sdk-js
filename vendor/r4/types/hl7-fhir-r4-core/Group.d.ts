/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { unsignedInt } from "./unsignedInt";
import { Period } from "./Period";
import { CodeableConcept } from "./CodeableConcept";
import { Range } from "./Range";
import { Quantity } from "./Quantity";
import { DomainResource } from "./DomainResource";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { code } from "./code";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
/** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
export interface Group extends DomainResource {
    _active?: Element;
    _quantity?: Element;
    /** Label for Group */
    name?: string;
    _type?: Element;
    /** person | animal | practitioner | device | medication | substance */
    type: code;
    /** Who or what is in group */
    member?: Array<GroupMember>;
    /** Include / Exclude group members by Trait */
    characteristic?: Array<GroupCharacteristic>;
    /** Whether this group's record is in active use */
    active?: boolean;
    _name?: Element;
    /** Kind of Group members */
    code?: CodeableConcept;
    /** Unique id */
    identifier?: Array<Identifier>;
    _actual?: Element;
    /** Number of members */
    quantity?: unsignedInt;
    /** Entity that is the custodian of the Group's definition */
    managingEntity?: Reference<"PractitionerRole" | "Organization" | "Practitioner" | "RelatedPerson">;
    /** Descriptive or actual */
    actual: boolean;
}
/** Who or what is in group */
export interface GroupMember extends BackboneElement {
    /** Reference to the group member */
    entity: Reference<"Patient" | "PractitionerRole" | "Medication" | "Device" | "Substance" | "Practitioner" | "Group">;
    /** Period member belonged to the group */
    period?: Period;
    /** If member is no longer in group */
    inactive?: boolean;
    _inactive?: Element;
}
/** Include / Exclude group members by Trait */
export interface GroupCharacteristic extends BackboneElement {
    /** Group includes or excludes */
    exclude: boolean;
    _valueBoolean: Element;
    valueReference: Reference;
    valueQuantity: Quantity;
    valueBoolean: boolean;
    /** Kind of characteristic */
    code: CodeableConcept;
    valueCodeableConcept: CodeableConcept;
    /** Period over which characteristic is tested */
    period?: Period;
    _exclude?: Element;
    valueRange: Range;
}
