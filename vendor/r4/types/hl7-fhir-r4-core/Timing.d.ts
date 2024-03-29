/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { positiveInt } from "./positiveInt";
import { unsignedInt } from "./unsignedInt";
import { Period } from "./Period";
import { CodeableConcept } from "./CodeableConcept";
import { dateTime } from "./dateTime";
import { Range } from "./Range";
import { Duration } from "./Duration";
import { time } from "./time";
import { Element } from "./Element";
import { code } from "./code";
import { BackboneElement } from "./BackboneElement";
import { decimal } from "./decimal";
/** Base StructureDefinition for Timing Type: Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out. */
export interface Timing extends BackboneElement {
    /** When the event occurs */
    event?: Array<dateTime>;
    _event?: Array<Element>;
    /** When the event is to occur */
    repeat?: TimingRepeat;
    /** BID | TID | QID | AM | PM | QD | QOD | + */
    code?: CodeableConcept;
}
/** s | min | h | d | wk | mo | a - unit of time (UCUM) */
export declare enum TimingPeriodUnit {
    D = "d",
    Min = "min",
    S = "s",
    Mo = "mo",
    Wk = "wk",
    A = "a",
    H = "h"
}
/** s | min | h | d | wk | mo | a - unit of time (UCUM) */
export declare enum TimingDurationUnit {
    D = "d",
    Min = "min",
    S = "s",
    Mo = "mo",
    Wk = "wk",
    A = "a",
    H = "h"
}
/** When the event is to occur */
export interface TimingRepeat extends Element {
    _period?: Element;
    _durationMax?: Element;
    boundsRange?: Range;
    _countMax?: Element;
    _count?: Element;
    /** Event occurs up to frequencyMax times per period */
    frequencyMax?: positiveInt;
    _periodMax?: Element;
    boundsPeriod?: Period;
    /** Code for time period of occurrence */
    when?: Array<code>;
    _offset?: Element;
    /** Minutes from event (before or after) */
    offset?: unsignedInt;
    _duration?: Element;
    _frequency?: Element;
    /** s | min | h | d | wk | mo | a - unit of time (UCUM) */
    periodUnit?: `${TimingPeriodUnit}`;
    _timeOfDay?: Array<Element>;
    _frequencyMax?: Element;
    /** Event occurs frequency times per period */
    frequency?: positiveInt;
    /** How long when it happens (Max) */
    durationMax?: decimal;
    /** How long when it happens */
    duration?: decimal;
    boundsDuration?: Duration;
    /** s | min | h | d | wk | mo | a - unit of time (UCUM) */
    durationUnit?: `${TimingDurationUnit}`;
    /** mon | tue | wed | thu | fri | sat | sun */
    dayOfWeek?: Array<code>;
    /** Number of times to repeat */
    count?: positiveInt;
    _periodUnit?: Element;
    _dayOfWeek?: Array<Element>;
    _when?: Array<Element>;
    /** Upper limit of period (3-4 hours) */
    periodMax?: decimal;
    /** Event occurs frequency times per period */
    period?: decimal;
    /** Maximum number of times to repeat */
    countMax?: positiveInt;
    _durationUnit?: Element;
    /** Time of day for action */
    timeOfDay?: Array<time>;
}
