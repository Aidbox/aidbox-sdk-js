/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { uri } from "./uri";
import { Element } from "./Element";
import { Identifier } from "./Identifier";
/** Base StructureDefinition for Reference Type: A reference from one resource to another. */
export interface Reference<T = string> extends Element {
    /** Literal reference, Relative, internal or absolute URL */
    reference?: string;
    _reference?: Element;
    /** Type the reference refers to (e.g. "Patient") */
    type?: uri;
    _type?: Element;
    /** Logical reference, when literal reference is not known */
    identifier?: Identifier;
    /** Text alternative for the resource */
    display?: string;
    _display?: Element;
}
