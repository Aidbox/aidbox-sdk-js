/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { CodeableConcept } from "./CodeableConcept";
import { Range } from "./Range";
import { integer } from "./integer";
import { DomainResource } from "./DomainResource";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { code } from "./code";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
import { decimal } from "./decimal";
/** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
export interface ObservationDefinition extends DomainResource {
    resourceType: 'ObservationDefinition';
    /** Characteristics of quantitative results */
    quantitativeDetails?: ObservationDefinitionQuantitativeDetails;
    /** Category of observation */
    category?: Array<CodeableConcept>;
    /** Method used to produce the observation */
    method?: CodeableConcept;
    _multipleResultsAllowed?: Element;
    /** Value set of valid coded values for the observations conforming to this ObservationDefinition */
    validCodedValueSet?: Reference<'ValueSet'>;
    _preferredReportName?: Element;
    /** Qualified range for continuous and ordinal observation results */
    qualifiedInterval?: Array<ObservationDefinitionQualifiedInterval>;
    /** Value set of abnormal coded values for the observations conforming to this ObservationDefinition */
    abnormalCodedValueSet?: Reference<'ValueSet'>;
    /** Type of observation (code / type) */
    code: CodeableConcept;
    /** Business identifier for this ObservationDefinition instance */
    identifier?: Array<Identifier>;
    /** Quantity | CodeableConcept | string | boolean | integer | Range | Ratio | SampledData | time | dateTime | Period */
    permittedDataType?: Array<code>;
    /** Multiple results allowed */
    multipleResultsAllowed?: boolean;
    /** Value set of normal coded values for the observations conforming to this ObservationDefinition */
    normalCodedValueSet?: Reference<'ValueSet'>;
    _permittedDataType?: Array<Element>;
    /** Preferred report name */
    preferredReportName?: string;
    /** Value set of critical coded values for the observations conforming to this ObservationDefinition */
    criticalCodedValueSet?: Reference<'ValueSet'>;
}
/** Characteristics of quantitative results */
export interface ObservationDefinitionQuantitativeDetails extends BackboneElement {
    /** Customary unit for quantitative results */
    customaryUnit?: CodeableConcept;
    /** SI unit for quantitative results */
    unit?: CodeableConcept;
    /** SI to Customary unit conversion factor */
    conversionFactor?: decimal;
    _conversionFactor?: Element;
    /** Decimal precision of observation quantitative results */
    decimalPrecision?: integer;
    _decimalPrecision?: Element;
}
/** reference | critical | absolute */
export declare enum ObservationDefinitionCategory {
    Absolute = "absolute",
    Critical = "critical",
    Reference = "reference"
}
/** male | female | other | unknown */
export declare enum ObservationDefinitionGender {
    Female = "female",
    Male = "male",
    Other = "other",
    Unknown = "unknown"
}
/** Qualified range for continuous and ordinal observation results */
export interface ObservationDefinitionQualifiedInterval extends BackboneElement {
    /** reference | critical | absolute */
    category?: `${ObservationDefinitionCategory}`;
    /** Applicable age range, if relevant */
    age?: Range;
    /** Targetted population of the range */
    appliesTo?: Array<CodeableConcept>;
    _gender?: Element;
    _condition?: Element;
    /** Condition associated with the reference range */
    condition?: string;
    /** Range context qualifier */
    context?: CodeableConcept;
    /** Applicable gestational age range, if relevant */
    gestationalAge?: Range;
    /** male | female | other | unknown */
    gender?: `${ObservationDefinitionGender}`;
    _category?: Element;
    /** The interval itself, for continuous or ordinal observations */
    range?: Range;
}
