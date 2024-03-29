/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { uri } from "./uri";
import { Element } from "./Element";
import { code } from "./code";
import { decimal } from "./decimal";
/** Base StructureDefinition for Quantity Type: A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies. */
export interface Quantity extends Element {
    _code?: Element;
    /** System that defines coded unit form */
    system?: uri;
    _comparator?: Element;
    /** Unit representation */
    unit?: string;
    /** Numerical value (with implicit precision) */
    value?: decimal;
    _value?: Element;
    /** Coded form of the unit */
    code?: code;
    /** < | <= | >= | > - how to understand the value */
    comparator?: `${QuantityComparator}`;
    _system?: Element;
    _unit?: Element;
}
/** < | <= | >= | > - how to understand the value */
export declare enum QuantityComparator {
    "<" = "<",
    "<=" = "<=",
    ">" = ">",
    ">=" = ">="
}
