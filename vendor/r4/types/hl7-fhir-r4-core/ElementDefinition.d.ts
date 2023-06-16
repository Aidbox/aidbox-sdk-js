/** GENERATED BY zen-cli
DON'T MODIFY MANUALLY */
import { Address } from "./Address";
import { UsageContext } from "./UsageContext";
import { Annotation } from "./Annotation";
import { Age } from "./Age";
import { Attachment } from "./Attachment";
import { positiveInt } from "./positiveInt";
import { unsignedInt } from "./unsignedInt";
import { Period } from "./Period";
import { url } from "./url";
import { ContactDetail } from "./ContactDetail";
import { DataRequirement } from "./DataRequirement";
import { CodeableConcept } from "./CodeableConcept";
import { TriggerDefinition } from "./TriggerDefinition";
import { uri } from "./uri";
import { Count } from "./Count";
import { Expression } from "./Expression";
import { Coding } from "./Coding";
import { id } from "./id";
import { dateTime } from "./dateTime";
import { Dosage } from "./Dosage";
import { Range } from "./Range";
import { oid } from "./oid";
import { ContactPoint } from "./ContactPoint";
import { uuid } from "./uuid";
import { Signature } from "./Signature";
import { RelatedArtifact } from "./RelatedArtifact";
import { Timing } from "./Timing";
import { Meta } from "./Meta";
import { Quantity } from "./Quantity";
import { Distance } from "./Distance";
import { canonical } from "./canonical";
import { HumanName } from "./HumanName";
import { Duration } from "./Duration";
import { time } from "./time";
import { integer } from "./integer";
import { Money } from "./Money";
import { SampledData } from "./SampledData";
import { date } from "./date";
import { Ratio } from "./Ratio";
import { markdown } from "./markdown";
import { ParameterDefinition } from "./ParameterDefinition";
import { base64Binary } from "./base64Binary";
import { instant } from "./instant";
import { Element } from "./Element";
import { Reference } from "./Reference";
import { code } from "./code";
import { Identifier } from "./Identifier";
import { BackboneElement } from "./BackboneElement";
import { decimal } from "./decimal";
import { Contributor } from "./Contributor";
/** Base StructureDefinition for ElementDefinition Type: Captures constraints on each element within the resource, profile, or extension. */
export interface ElementDefinition extends BackboneElement {
    /** Condition that must evaluate to true */
    constraint?: Array<ElementDefinitionConstraint>;
    _representation?: Array<Element>;
    fixedMarkdown?: markdown;
    /** Path of the element in the hierarchy of elements */
    path: string;
    _patternDecimal?: Element;
    patternRange?: Range;
    _fixedDate?: Element;
    patternMeta?: Meta;
    defaultValueTime?: time;
    _maxValueInteger?: Element;
    _fixedUnsignedInt?: Element;
    fixedCode?: code;
    maxValueDecimal?: decimal;
    /** Why this resource has been created */
    requirements?: markdown;
    patternDosage?: Dosage;
    _defaultValueTime?: Element;
    defaultValueDataRequirement?: DataRequirement;
    /** Minimum Cardinality */
    min?: unsignedInt;
    defaultValueMoney?: Money;
    fixedPositiveInt?: positiveInt;
    patternTiming?: Timing;
    /** Full formal definition as narrative text */
    definition?: markdown;
    patternContributor?: Contributor;
    patternContactPoint?: ContactPoint;
    defaultValueContactPoint?: ContactPoint;
    _meaningWhenMissing?: Element;
    _minValueInstant?: Element;
    _maxLength?: Element;
    minValueInteger?: integer;
    _defaultValueCode?: Element;
    defaultValueMeta?: Meta;
    /** If this modifies the meaning of other elements */
    isModifier?: boolean;
    _defaultValueBoolean?: Element;
    patternRatio?: Ratio;
    patternContactDetail?: ContactDetail;
    _patternInteger?: Element;
    _fixedInteger?: Element;
    _fixedUrl?: Element;
    /** Concise definition for space-constrained presentation */
    short?: string;
    fixedUsageContext?: UsageContext;
    _maxValueDateTime?: Element;
    defaultValueCoding?: Coding;
    fixedAge?: Age;
    patternDataRequirement?: DataRequirement;
    minValueDate?: date;
    maxValuePositiveInt?: positiveInt;
    fixedRelatedArtifact?: RelatedArtifact;
    fixedAddress?: Address;
    defaultValueCode?: code;
    fixedUri?: uri;
    _path?: Element;
    _fixedDecimal?: Element;
    defaultValueSampledData?: SampledData;
    _fixedMarkdown?: Element;
    _patternCanonical?: Element;
    fixedDistance?: Distance;
    patternUnsignedInt?: unsignedInt;
    _minValueDate?: Element;
    defaultValueMarkdown?: markdown;
    _orderMeaning?: Element;
    defaultValueHumanName?: HumanName;
    minValueInstant?: instant;
    defaultValueDuration?: Duration;
    _defaultValueInteger?: Element;
    defaultValueDecimal?: decimal;
    _patternBoolean?: Element;
    _requirements?: Element;
    _fixedOid?: Element;
    defaultValueUri?: uri;
    _maxValueUnsignedInt?: Element;
    _maxValueDate?: Element;
    fixedDosage?: Dosage;
    fixedRatio?: Ratio;
    _defaultValueString?: Element;
    _fixedUri?: Element;
    _mustSupport?: Element;
    fixedContactDetail?: ContactDetail;
    patternSampledData?: SampledData;
    fixedParameterDefinition?: ParameterDefinition;
    defaultValueQuantity?: Quantity;
    _defaultValueBase64Binary?: Element;
    patternAttachment?: Attachment;
    defaultValueCount?: Count;
    _maxValuePositiveInt?: Element;
    _fixedId?: Element;
    _definition?: Element;
    fixedExpression?: Expression;
    _sliceName?: Element;
    minValueDecimal?: decimal;
    fixedUnsignedInt?: unsignedInt;
    fixedDuration?: Duration;
    patternTriggerDefinition?: TriggerDefinition;
    /** Map element to another set of definitions */
    mapping?: Array<ElementDefinitionMapping>;
    /** Reference to definition of content for the element */
    contentReference?: uri;
    fixedOid?: oid;
    _minValueUnsignedInt?: Element;
    defaultValueId?: id;
    _defaultValueDecimal?: Element;
    _isSummary?: Element;
    _patternMarkdown?: Element;
    fixedIdentifier?: Identifier;
    defaultValueBase64Binary?: base64Binary;
    _sliceIsConstraining?: Element;
    /** This element is sliced - slices follow */
    slicing?: ElementDefinitionSlicing;
    fixedDateTime?: dateTime;
    _defaultValueMarkdown?: Element;
    _patternString?: Element;
    defaultValueContactDetail?: ContactDetail;
    /** Data type and Profile for this element */
    type?: Array<ElementDefinitionType>;
    defaultValueBoolean?: boolean;
    _defaultValueUri?: Element;
    defaultValuePeriod?: Period;
    patternBoolean?: boolean;
    defaultValueTriggerDefinition?: TriggerDefinition;
    /** If the element must be supported */
    mustSupport?: boolean;
    defaultValueDate?: date;
    _short?: Element;
    fixedMoney?: Money;
    /** Name for this particular element (in a set of slices) */
    sliceName?: string;
    fixedUuid?: uuid;
    _patternInstant?: Element;
    _maxValueDecimal?: Element;
    fixedDate?: date;
    fixedReference?: Reference;
    fixedHumanName?: HumanName;
    _fixedBoolean?: Element;
    fixedTriggerDefinition?: TriggerDefinition;
    defaultValueReference?: Reference;
    patternDecimal?: decimal;
    defaultValueDosage?: Dosage;
    fixedDataRequirement?: DataRequirement;
    defaultValueRange?: Range;
    patternString?: string;
    _patternUnsignedInt?: Element;
    _fixedUuid?: Element;
    minValueTime?: time;
    _patternCode?: Element;
    patternTime?: time;
    _patternBase64Binary?: Element;
    /** Implicit meaning when this element is missing */
    meaningWhenMissing?: markdown;
    maxValueQuantity?: Quantity;
    _contentReference?: Element;
    _patternUuid?: Element;
    fixedDecimal?: decimal;
    fixedCoding?: Coding;
    _maxValueInstant?: Element;
    patternAnnotation?: Annotation;
    _minValueDateTime?: Element;
    _fixedCanonical?: Element;
    _defaultValueOid?: Element;
    fixedSampledData?: SampledData;
    patternUuid?: uuid;
    _defaultValueInstant?: Element;
    _min?: Element;
    patternDuration?: Duration;
    patternCode?: code;
    fixedCount?: Count;
    patternSignature?: Signature;
    minValueUnsignedInt?: unsignedInt;
    fixedCodeableConcept?: CodeableConcept;
    _label?: Element;
    patternReference?: Reference;
    defaultValueInstant?: instant;
    /** ValueSet details if this is coded */
    binding?: ElementDefinitionBinding;
    patternCount?: Count;
    maxValueDate?: date;
    /** Other names */
    alias?: Array<string>;
    defaultValueAttachment?: Attachment;
    _defaultValueUuid?: Element;
    defaultValueUnsignedInt?: unsignedInt;
    _patternOid?: Element;
    patternAge?: Age;
    fixedSignature?: Signature;
    /** xmlAttr | xmlText | typeAttr | cdaText | xhtml */
    representation?: Array<code>;
    patternParameterDefinition?: ParameterDefinition;
    _isModifier?: Element;
    fixedId?: id;
    fixedUrl?: url;
    _patternId?: Element;
    defaultValueDistance?: Distance;
    patternIdentifier?: Identifier;
    maxValueDateTime?: dateTime;
    _condition?: Array<Element>;
    fixedContactPoint?: ContactPoint;
    fixedQuantity?: Quantity;
    fixedAnnotation?: Annotation;
    patternCanonical?: canonical;
    /** Maximum Cardinality (a number or *) */
    max?: string;
    minValueDateTime?: dateTime;
    fixedString?: string;
    _fixedPositiveInt?: Element;
    /** Name for element to display with or prompt for element */
    label?: string;
    defaultValueContributor?: Contributor;
    /** Reference to invariant about presence */
    condition?: Array<id>;
    _defaultValuePositiveInt?: Element;
    defaultValueRatio?: Ratio;
    patternInstant?: instant;
    defaultValueCanonical?: canonical;
    defaultValueExpression?: Expression;
    /** Comments about the use of this element */
    comment?: markdown;
    defaultValueSignature?: Signature;
    _defaultValueUrl?: Element;
    _patternTime?: Element;
    patternDate?: date;
    /** Corresponding codes in terminologies */
    code?: Array<Coding>;
    _minValueDecimal?: Element;
    _defaultValueCanonical?: Element;
    fixedTime?: time;
    defaultValueUrl?: url;
    fixedContributor?: Contributor;
    maxValueInstant?: instant;
    patternCoding?: Coding;
    patternHumanName?: HumanName;
    patternMarkdown?: markdown;
    _minValueInteger?: Element;
    fixedBase64Binary?: base64Binary;
    patternDistance?: Distance;
    patternRelatedArtifact?: RelatedArtifact;
    fixedTiming?: Timing;
    /** Max length for strings */
    maxLength?: integer;
    defaultValueAnnotation?: Annotation;
    defaultValueUuid?: uuid;
    fixedCanonical?: canonical;
    patternUsageContext?: UsageContext;
    _isModifierReason?: Element;
    patternPeriod?: Period;
    defaultValueAddress?: Address;
    maxValueInteger?: integer;
    patternOid?: oid;
    /** If this slice definition constrains an inherited slice definition (or not) */
    sliceIsConstraining?: boolean;
    defaultValueString?: string;
    _patternDateTime?: Element;
    /** Example value (as defined for type) */
    example?: Array<ElementDefinitionExample>;
    _max?: Element;
    defaultValueAge?: Age;
    patternPositiveInt?: positiveInt;
    patternMoney?: Money;
    patternId?: id;
    patternQuantity?: Quantity;
    minValuePositiveInt?: positiveInt;
    fixedPeriod?: Period;
    defaultValueOid?: oid;
    /** What the order of the elements means */
    orderMeaning?: string;
    _defaultValueDateTime?: Element;
    defaultValueUsageContext?: UsageContext;
    _minValueTime?: Element;
    _fixedDateTime?: Element;
    _fixedInstant?: Element;
    fixedAttachment?: Attachment;
    _patternUri?: Element;
    patternCodeableConcept?: CodeableConcept;
    minValueQuantity?: Quantity;
    _alias?: Array<Element>;
    /** Base definition information for tools */
    base?: ElementDefinitionBase;
    patternInteger?: integer;
    defaultValueParameterDefinition?: ParameterDefinition;
    defaultValueDateTime?: dateTime;
    defaultValuePositiveInt?: positiveInt;
    _defaultValueUnsignedInt?: Element;
    maxValueUnsignedInt?: unsignedInt;
    defaultValueInteger?: integer;
    /** Reason that this element is marked as a modifier */
    isModifierReason?: string;
    _minValuePositiveInt?: Element;
    _fixedBase64Binary?: Element;
    patternAddress?: Address;
    patternBase64Binary?: base64Binary;
    _defaultValueId?: Element;
    patternUrl?: url;
    patternDateTime?: dateTime;
    _fixedTime?: Element;
    defaultValueTiming?: Timing;
    _fixedCode?: Element;
    patternUri?: uri;
    fixedRange?: Range;
    defaultValueRelatedArtifact?: RelatedArtifact;
    _patternDate?: Element;
    maxValueTime?: time;
    _comment?: Element;
    defaultValueIdentifier?: Identifier;
    _fixedString?: Element;
    defaultValueCodeableConcept?: CodeableConcept;
    fixedBoolean?: boolean;
    /** Include when _summary = true? */
    isSummary?: boolean;
    _patternUrl?: Element;
    fixedMeta?: Meta;
    fixedInstant?: instant;
    _patternPositiveInt?: Element;
    patternExpression?: Expression;
    _defaultValueDate?: Element;
    _maxValueTime?: Element;
    fixedInteger?: integer;
}
/** Condition that must evaluate to true */
export interface ElementDefinitionConstraint extends Element {
    /** Why this constraint is necessary or appropriate */
    requirements?: string;
    /** FHIRPath expression of constraint */
    expression?: string;
    /** Target of 'condition' reference above */
    key: id;
    _requirements?: Element;
    /** Human description of constraint */
    human: string;
    /** XPath expression of constraint */
    xpath?: string;
    /** Reference to original source of constraint */
    source?: canonical;
    _expression?: Element;
    _human?: Element;
    /** error | warning */
    severity: code;
    _severity?: Element;
    _source?: Element;
    _xpath?: Element;
    _key?: Element;
}
/** Map element to another set of definitions */
export interface ElementDefinitionMapping extends Element {
    /** Reference to mapping declaration */
    identity: id;
    _identity?: Element;
    /** Computable language of mapping */
    language?: code;
    _language?: Element;
    /** Details of the mapping */
    map: string;
    _map?: Element;
    /** Comments about the mapping or its use */
    comment?: string;
    _comment?: Element;
}
/** Element values that are used to distinguish the slices */
export interface ElementDefinitionDiscriminator extends Element {
    /** value | exists | pattern | type | profile */
    type: code;
    _type?: Element;
    /** Path to element value */
    path: string;
    _path?: Element;
}
/** This element is sliced - slices follow */
export interface ElementDefinitionSlicing extends Element {
    /** Element values that are used to distinguish the slices */
    discriminator?: Array<ElementDefinitionDiscriminator>;
    /** Text description of how slicing works (or not) */
    description?: string;
    _description?: Element;
    /** If elements must be in same order as slices */
    ordered?: boolean;
    _ordered?: Element;
    /** closed | open | openAtEnd */
    rules: code;
    _rules?: Element;
}
/** Data type and Profile for this element */
export interface ElementDefinitionType extends Element {
    _code?: Element;
    _aggregation?: Array<Element>;
    _profile?: Array<Element>;
    /** Data type or Resource (reference to definition) */
    code: uri;
    /** Profile (StructureDefinition or IG) on the Reference/canonical target - one must apply */
    targetProfile?: Array<canonical>;
    /** contained | referenced | bundled - how aggregated */
    aggregation?: Array<code>;
    /** either | independent | specific */
    versioning?: code;
    _targetProfile?: Array<Element>;
    /** Profiles (StructureDefinition or IG) - one must apply */
    profile?: Array<canonical>;
    _versioning?: Element;
}
/** ValueSet details if this is coded */
export interface ElementDefinitionBinding extends Element {
    /** required | extensible | preferred | example */
    strength: code;
    _strength?: Element;
    /** Human explanation of the value set */
    description?: string;
    _description?: Element;
    /** Source of value set */
    valueSet?: canonical;
    _valueSet?: Element;
}
/** Example value (as defined for type) */
export interface ElementDefinitionExample extends Element {
    valueBase64Binary: base64Binary;
    _valueUri: Element;
    valueAge: Age;
    valueParameterDefinition: ParameterDefinition;
    valueTiming: Timing;
    valueCode: code;
    _valueBoolean: Element;
    valueReference: Reference;
    _valueBase64Binary: Element;
    valueContributor: Contributor;
    valueContactDetail: ContactDetail;
    _valueId: Element;
    _valueUnsignedInt: Element;
    _valueUrl: Element;
    valueUri: uri;
    valueUsageContext: UsageContext;
    valueTime: time;
    valueDecimal: decimal;
    _valueDecimal: Element;
    valueCanonical: canonical;
    valueMarkdown: markdown;
    valueIdentifier: Identifier;
    _valueString: Element;
    valueTriggerDefinition: TriggerDefinition;
    valueQuantity: Quantity;
    valueCount: Count;
    valueString: string;
    _valueUuid: Element;
    valueRatio: Ratio;
    valueBoolean: boolean;
    valueInstant: instant;
    valueDateTime: dateTime;
    valueDate: date;
    valueDuration: Duration;
    valueDataRequirement: DataRequirement;
    valueMeta: Meta;
    _valueCanonical: Element;
    valueMoney: Money;
    valueCoding: Coding;
    _valuePositiveInt: Element;
    valueExpression: Expression;
    _valueDateTime: Element;
    _label?: Element;
    valueSampledData: SampledData;
    _valueTime: Element;
    /** Describes the purpose of this example */
    label: string;
    valueDosage: Dosage;
    valueContactPoint: ContactPoint;
    valueCodeableConcept: CodeableConcept;
    _valueInstant: Element;
    _valueDate: Element;
    valueAnnotation: Annotation;
    valuePeriod: Period;
    _valueMarkdown: Element;
    _valueOid: Element;
    valueDistance: Distance;
    valueRange: Range;
    valueSignature: Signature;
    valueUuid: uuid;
    valueInteger: integer;
    _valueCode: Element;
    valueHumanName: HumanName;
    valueUnsignedInt: unsignedInt;
    valueAttachment: Attachment;
    valueOid: oid;
    valueAddress: Address;
    valueRelatedArtifact: RelatedArtifact;
    valuePositiveInt: positiveInt;
    valueId: id;
    valueUrl: url;
    _valueInteger: Element;
}
/** Base definition information for tools */
export interface ElementDefinitionBase extends Element {
    /** Path that identifies the base element */
    path: string;
    _path?: Element;
    /** Min cardinality of the base element */
    min: unsignedInt;
    _min?: Element;
    /** Max cardinality of the base element */
    max: string;
    _max?: Element;
}
