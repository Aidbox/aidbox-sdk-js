/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Period } from "./Period";
import { Element } from "./Element";
import { code } from "./code";
/** Base StructureDefinition for HumanName Type: A human's name with the ability to identify parts and usage. */
export interface HumanName extends Element {
    _family?: Element;
    /** Parts that come after the name */
    suffix?: Array<string>;
    _suffix?: Array<Element>;
    /** Given names (not always 'first'). Includes middle names */
    given?: Array<string>;
    /** Family name (often called 'Surname') */
    family?: string;
    _prefix?: Array<Element>;
    /** usual | official | temp | nickname | anonymous | old | maiden */
    use?: code;
    /** Parts that come before the name */
    prefix?: Array<string>;
    _given?: Array<Element>;
    _text?: Element;
    /** Time period when name was/is in use */
    period?: Period;
    _use?: Element;
    /** Text representation of the full name */
    text?: string;
}
