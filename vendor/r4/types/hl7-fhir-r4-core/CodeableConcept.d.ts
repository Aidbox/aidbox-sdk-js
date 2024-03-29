/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Coding } from "./Coding";
import { Element } from "./Element";
/** Base StructureDefinition for CodeableConcept Type: A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text. */
export interface CodeableConcept extends Element {
    /** Code defined by a terminology system */
    coding?: Array<Coding>;
    /** Plain text representation of the concept */
    text?: string;
    _text?: Element;
}
