/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { dateTime } from "./dateTime";
import { Element } from "./Element";
/** Base StructureDefinition for Period Type: A time period defined by a start and end date and optionally time. */
export interface Period extends Element {
    /** Starting time with inclusive boundary */
    start?: dateTime;
    _start?: Element;
    /** End time with inclusive boundary, if not ongoing */
    end?: dateTime;
    _end?: Element;
}
