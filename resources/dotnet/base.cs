namespace HL7.FHIR.R4.BASE;

public class ProductShelfLife : BackboneElement
{
	public Identifier? Identifier { get; set; }
	public required CodeableConcept Type { get; set; }
	public required Quantity Period { get; set; }
	public CodeableConcept[]? SpecialPrecautionsForStorage { get; set; }
}

public class Duration : Quantity { }

public class Dosage : BackboneElement
{
	public CodeableConcept? Site { get; set; }
	public CodeableConcept? Method { get; set; }
	public string? PatientInstruction { get; set; }
	public Quantity? MaxDosePerLifetime { get; set; }
	public Quantity? MaxDosePerAdministration { get; set; }
	public CodeableConcept? Route { get; set; }
	public bool? AsNeededBoolean { get; set; }
	public string? Timing { get; set; }
	public CodeableConcept[]? AdditionalInstruction { get; set; }
	public int? Sequence { get; set; }
	public Ratio? MaxDosePerPeriod { get; set; }
	public Element[]? DoseAndRate { get; set; }
	public CodeableConcept? AsNeededCodeableConcept { get; set; }
	public string? Text { get; set; }
}

public class DomainResource : Resource
{
	public Narrative? Text { get; set; }
	public Resource[]? Contained { get; set; }
	public Extension[]? Extension { get; set; }
	public Extension[]? ModifierExtension { get; set; }
}

public class Population : BackboneElement
{
	public Range? AgeRange { get; set; }
	public CodeableConcept? AgeCodeableConcept { get; set; }
	public CodeableConcept? Gender { get; set; }
	public CodeableConcept? Race { get; set; }
	public CodeableConcept? PhysiologicalCondition { get; set; }
}

public class SampledData : Element
{
	public required Quantity Origin { get; set; }
	public required string Period { get; set; }
	public string? Factor { get; set; }
	public string? LowerLimit { get; set; }
	public string? UpperLimit { get; set; }
	public required string Dimensions { get; set; }
	public string? Data { get; set; }
}

public class ProdCharacteristic : BackboneElement
{
	public string[]? Imprint { get; set; }
	public string[]? Color { get; set; }
	public Quantity? Width { get; set; }
	public Quantity? NominalVolume { get; set; }
	public Quantity? Weight { get; set; }
	public string? Shape { get; set; }
	public CodeableConcept? Scoring { get; set; }
	public Attachment[]? Image { get; set; }
	public Quantity? Depth { get; set; }
	public Quantity? ExternalDiameter { get; set; }
	public Quantity? Height { get; set; }
}

public class Extension : Element
{
	public string? ValueBase64Binary { get; set; }
	public string? ValueAge { get; set; }
	public ParameterDefinition? ValueParameterDefinition { get; set; }
	public string? ValueTiming { get; set; }
	public string? ValueCode { get; set; }
	public ResourceExpression? ValueReference { get; set; }
	public Contributor? ValueContributor { get; set; }
	public ContactDetail? ValueContactDetail { get; set; }
	public string? ValueUri { get; set; }
	public UsageContext? ValueUsageContext { get; set; }
	public string? ValueTime { get; set; }
	public string? ValueDecimal { get; set; }
	public string? ValueCanonical { get; set; }
	public string? ValueMarkdown { get; set; }
	public Identifier? ValueIdentifier { get; set; }
	public TriggerDefinition? ValueTriggerDefinition { get; set; }
	public Quantity? ValueQuantity { get; set; }
	public string? ValueCount { get; set; }
	public string? ValueString { get; set; }
	public Ratio? ValueRatio { get; set; }
	public bool? ValueBoolean { get; set; }
	public string? ValueInstant { get; set; }
	public string? ValueDateTime { get; set; }
	public string? ValueDate { get; set; }
	public string? ValueDuration { get; set; }
	public DataRequirement? ValueDataRequirement { get; set; }
	public Meta? ValueMeta { get; set; }
	public Money? ValueMoney { get; set; }
	public Coding? ValueCoding { get; set; }
	public ResourceExpression? ValueExpression { get; set; }
	public SampledData? ValueSampledData { get; set; }
	public string? ValueDosage { get; set; }
	public ContactPoint? ValueContactPoint { get; set; }
	public required string Url { get; set; }
	public CodeableConcept? ValueCodeableConcept { get; set; }
	public Annotation? ValueAnnotation { get; set; }
	public Period? ValuePeriod { get; set; }
	public string? ValueDistance { get; set; }
	public Range? ValueRange { get; set; }
	public Signature? ValueSignature { get; set; }
	public string? ValueUuid { get; set; }
	public int? ValueInteger { get; set; }
	public HumanName? ValueHumanName { get; set; }
	public string? ValueUnsignedInt { get; set; }
	public Attachment? ValueAttachment { get; set; }
	public string? ValueOid { get; set; }
	public Address? ValueAddress { get; set; }
	public RelatedArtifact? ValueRelatedArtifact { get; set; }
	public string? ValuePositiveInt { get; set; }
	public string? ValueId { get; set; }
	public string? ValueUrl { get; set; }
}

public class Ratio : Element
{
	public Quantity? Numerator { get; set; }
	public Quantity? Denominator { get; set; }
}

public class Parameters_Parameter
{
	public string? ValueBase64Binary { get; set; }
	public string? ValueAge { get; set; }
	public ParameterDefinition? ValueParameterDefinition { get; set; }
	public string? ValueTiming { get; set; }
	public string? ValueCode { get; set; }
	public ResourceExpression? ValueReference { get; set; }
	public Contributor? ValueContributor { get; set; }
	public ContactDetail? ValueContactDetail { get; set; }
	public string? ValueUri { get; set; }
	public UsageContext? ValueUsageContext { get; set; }
	public string? ValueTime { get; set; }
	public string? ValueDecimal { get; set; }
	public string? ValueCanonical { get; set; }
	public required string Name { get; set; }
	public string? ValueMarkdown { get; set; }
	public Identifier? ValueIdentifier { get; set; }
	public TriggerDefinition? ValueTriggerDefinition { get; set; }
	public Quantity? ValueQuantity { get; set; }
	public string[]? Part { get; set; }
	public string? ValueCount { get; set; }
	public string? ValueString { get; set; }
	public Ratio? ValueRatio { get; set; }
	public bool? ValueBoolean { get; set; }
	public string? ValueInstant { get; set; }
	public string? ValueDateTime { get; set; }
	public string? ValueDate { get; set; }
	public string? ValueDuration { get; set; }
	public DataRequirement? ValueDataRequirement { get; set; }
	public Meta? ValueMeta { get; set; }
	public Money? ValueMoney { get; set; }
	public Coding? ValueCoding { get; set; }
	public ResourceExpression? ValueExpression { get; set; }
	public SampledData? ValueSampledData { get; set; }
	public Resource? Resource { get; set; }
	public string? ValueDosage { get; set; }
	public ContactPoint? ValueContactPoint { get; set; }
	public CodeableConcept? ValueCodeableConcept { get; set; }
	public Annotation? ValueAnnotation { get; set; }
	public Period? ValuePeriod { get; set; }
	public string? ValueDistance { get; set; }
	public Range? ValueRange { get; set; }
	public Signature? ValueSignature { get; set; }
	public string? ValueUuid { get; set; }
	public int? ValueInteger { get; set; }
	public HumanName? ValueHumanName { get; set; }
	public string? ValueUnsignedInt { get; set; }
	public Attachment? ValueAttachment { get; set; }
	public string? ValueOid { get; set; }
	public Address? ValueAddress { get; set; }
	public RelatedArtifact? ValueRelatedArtifact { get; set; }
	public string? ValuePositiveInt { get; set; }
	public string? ValueId { get; set; }
	public string? ValueUrl { get; set; }
}

public class Parameters : Resource
{
	public Parameters_Parameter[]? Parameter { get; set; }
}

public class Count : Quantity
{
}

public class ParameterDefinition : Element
{
	public string? Name { get; set; }
	public required string Use { get; set; }
	public int? Min { get; set; }
	public string? Max { get; set; }
	public string? Documentation { get; set; }
	public required string Type { get; set; }
	public string? Profile { get; set; }
}

public class Bundle_Link
{
	public required string Relation { get; set; }
	public required string Url { get; set; }
}

public class Bundle_Entry_Search
{
	public string? Mode { get; set; }
	public string? Score { get; set; }
}

public class Bundle_Entry_Request
{
	public required string Method { get; set; }
	public required string Url { get; set; }
	public string? IfNoneMatch { get; set; }
	public string? IfModifiedSince { get; set; }
	public string? IfMatch { get; set; }
	public string? IfNoneExist { get; set; }
}

public class Bundle_Entry_Response
{
	public required string Status { get; set; }
	public string? Location { get; set; }
	public string? Etag { get; set; }
	public string? LastModified { get; set; }
	public Resource? Outcome { get; set; }
}

public class Bundle_Entry
{
	public string[]? Link { get; set; }
	public string? FullUrl { get; set; }
	public Resource? Resource { get; set; }
	public Bundle_Entry_Search? Search { get; set; }
	public Bundle_Entry_Request? Request { get; set; }
	public Bundle_Entry_Response? Response { get; set; }
}

public class Bundle : Resource
{
	public Identifier? Identifier { get; set; }
	public required string Type { get; set; }
	public string? Timestamp { get; set; }
	public string? Total { get; set; }
	public Bundle_Link[]? Link { get; set; }
	public Bundle_Entry[]? Entry { get; set; }
	public Signature? Signature { get; set; }
}

public class Instant : Element
{
}

public class ContactDetail : Element
{
	public string? Name { get; set; }
	public ContactPoint[]? Telecom { get; set; }
}

public class Address : Element
{
	public string? Use { get; set; }
	public string? City { get; set; }
	public string? Type { get; set; }
	public string? State { get; set; }
	public string[]? Line { get; set; }
	public string? PostalCode { get; set; }
	public Period? Period { get; set; }
	public string? Country { get; set; }
	public string? District { get; set; }
	public string? Text { get; set; }
}

public class Coding : Element
{
	public string? System { get; set; }
	public string? Version { get; set; }
	public string? Code { get; set; }
	public string? Display { get; set; }
	public bool? UserSelected { get; set; }
}

public class ResourceReference : Element
{
	public string? Reference { get; set; }
	public string? Type { get; set; }
	public Identifier? Identifier { get; set; }
	public string? Display { get; set; }
}

public class ElementDefinition : BackboneElement
{
	public Element[]? Constraint { get; set; }
	public string? FixedMarkdown { get; set; }
	public required string Path { get; set; }
	public Range? PatternRange { get; set; }
	public Meta? PatternMeta { get; set; }
	public string? DefaultValueTime { get; set; }
	public string? FixedCode { get; set; }
	public string? MaxValueDecimal { get; set; }
	public string? Requirements { get; set; }
	public string? PatternDosage { get; set; }
	public DataRequirement? DefaultValueDataRequirement { get; set; }
	public string? Min { get; set; }
	public Money? DefaultValueMoney { get; set; }
	public string? FixedPositiveInt { get; set; }
	public string? PatternTiming { get; set; }
	public string? Definition { get; set; }
	public Contributor? PatternContributor { get; set; }
	public ContactPoint? PatternContactPoint { get; set; }
	public ContactPoint? DefaultValueContactPoint { get; set; }
	public int? MinValueInteger { get; set; }
	public Meta? DefaultValueMeta { get; set; }
	public bool? IsModifier { get; set; }
	public Ratio? PatternRatio { get; set; }
	public ContactDetail? PatternContactDetail { get; set; }
	public string? Short { get; set; }
	public UsageContext? FixedUsageContext { get; set; }
	public Coding? DefaultValueCoding { get; set; }
	public string? FixedAge { get; set; }
	public DataRequirement? PatternDataRequirement { get; set; }
	public string? MinValueDate { get; set; }
	public string? MaxValuePositiveInt { get; set; }
	public RelatedArtifact? FixedRelatedArtifact { get; set; }
	public Address? FixedAddress { get; set; }
	public string? DefaultValueCode { get; set; }
	public string? FixedUri { get; set; }
	public SampledData? DefaultValueSampledData { get; set; }
	public string? FixedDistance { get; set; }
	public string? PatternUnsignedInt { get; set; }
	public string? DefaultValueMarkdown { get; set; }
	public HumanName? DefaultValueHumanName { get; set; }
	public string? MinValueInstant { get; set; }
	public string? DefaultValueDuration { get; set; }
	public string? DefaultValueDecimal { get; set; }
	public string? DefaultValueUri { get; set; }
	public string? FixedDosage { get; set; }
	public Ratio? FixedRatio { get; set; }
	public ContactDetail? FixedContactDetail { get; set; }
	public SampledData? PatternSampledData { get; set; }
	public ParameterDefinition? FixedParameterDefinition { get; set; }
	public Quantity? DefaultValueQuantity { get; set; }
	public Attachment? PatternAttachment { get; set; }
	public string? DefaultValueCount { get; set; }
	public ResourceExpression? FixedExpression { get; set; }
	public string? MinValueDecimal { get; set; }
	public string? FixedUnsignedInt { get; set; }
	public string? FixedDuration { get; set; }
	public TriggerDefinition? PatternTriggerDefinition { get; set; }
	public Element[]? Mapping { get; set; }
	public string? ContentReference { get; set; }
	public string? FixedOid { get; set; }
	public string? DefaultValueId { get; set; }
	public Identifier? FixedIdentifier { get; set; }
	public string? DefaultValueBase64Binary { get; set; }
	public Element? Slicing { get; set; }
	public string? FixedDateTime { get; set; }
	public ContactDetail? DefaultValueContactDetail { get; set; }
	public Element[]? Type { get; set; }
	public bool? DefaultValueBoolean { get; set; }
	public Period? DefaultValuePeriod { get; set; }
	public bool? PatternBoolean { get; set; }
	public TriggerDefinition? DefaultValueTriggerDefinition { get; set; }
	public bool? MustSupport { get; set; }
	public string? DefaultValueDate { get; set; }
	public Money? FixedMoney { get; set; }
	public string? SliceName { get; set; }
	public string? FixedUuid { get; set; }
	public string? FixedDate { get; set; }
	public ResourceReference? FixedReference { get; set; }
	public HumanName? FixedHumanName { get; set; }
	public TriggerDefinition? FixedTriggerDefinition { get; set; }
	public ResourceReference? DefaultValueReference { get; set; }
	public string? PatternDecimal { get; set; }
	public string? DefaultValueDosage { get; set; }
	public DataRequirement? FixedDataRequirement { get; set; }
	public Range? DefaultValueRange { get; set; }
	public string? PatternString { get; set; }
	public string? MinValueTime { get; set; }
	public string? PatternTime { get; set; }
	public string? MeaningWhenMissing { get; set; }
	public Quantity? MaxValueQuantity { get; set; }
	public string? FixedDecimal { get; set; }
	public Coding? FixedCoding { get; set; }
	public Annotation? PatternAnnotation { get; set; }
	public SampledData? FixedSampledData { get; set; }
	public string? PatternUuid { get; set; }
	public string? PatternDuration { get; set; }
	public string? PatternCode { get; set; }
	public string? FixedCount { get; set; }
	public Signature? PatternSignature { get; set; }
	public string? MinValueUnsignedInt { get; set; }
	public CodeableConcept? FixedCodeableConcept { get; set; }
	public ResourceReference? PatternReference { get; set; }
	public string? DefaultValueInstant { get; set; }
	public Element? Binding { get; set; }
	public string? PatternCount { get; set; }
	public string? MaxValueDate { get; set; }
	public string[]? Alias { get; set; }
	public Attachment? DefaultValueAttachment { get; set; }
	public string? DefaultValueUnsignedInt { get; set; }
	public string? PatternAge { get; set; }
	public Signature? FixedSignature { get; set; }
	public string[]? Representation { get; set; }
	public ParameterDefinition? PatternParameterDefinition { get; set; }
	public string? FixedId { get; set; }
	public string? FixedUrl { get; set; }
	public string? DefaultValueDistance { get; set; }
	public Identifier? PatternIdentifier { get; set; }
	public string? MaxValueDateTime { get; set; }
	public ContactPoint? FixedContactPoint { get; set; }
	public Quantity? FixedQuantity { get; set; }
	public Annotation? FixedAnnotation { get; set; }
	public string? PatternCanonical { get; set; }
	public string? Max { get; set; }
	public string? MinValueDateTime { get; set; }
	public string? FixedString { get; set; }
	public string? Label { get; set; }
	public Contributor? DefaultValueContributor { get; set; }
	public string[]? Condition { get; set; }
	public Ratio? DefaultValueRatio { get; set; }
	public string? PatternInstant { get; set; }
	public string? DefaultValueCanonical { get; set; }
	public ResourceExpression? DefaultValueExpression { get; set; }
	public string? Comment { get; set; }
	public Signature? DefaultValueSignature { get; set; }
	public string? PatternDate { get; set; }
	public Coding[]? Code { get; set; }
	public string? FixedTime { get; set; }
	public string? DefaultValueUrl { get; set; }
	public Contributor? FixedContributor { get; set; }
	public string? MaxValueInstant { get; set; }
	public Coding? PatternCoding { get; set; }
	public HumanName? PatternHumanName { get; set; }
	public string? PatternMarkdown { get; set; }
	public string? FixedBase64Binary { get; set; }
	public string? PatternDistance { get; set; }
	public RelatedArtifact? PatternRelatedArtifact { get; set; }
	public string? FixedTiming { get; set; }
	public int? MaxLength { get; set; }
	public Annotation? DefaultValueAnnotation { get; set; }
	public string? DefaultValueUuid { get; set; }
	public string? FixedCanonical { get; set; }
	public UsageContext? PatternUsageContext { get; set; }
	public Period? PatternPeriod { get; set; }
	public Address? DefaultValueAddress { get; set; }
	public int? MaxValueInteger { get; set; }
	public string? PatternOid { get; set; }
	public bool? SliceIsConstraining { get; set; }
	public string? DefaultValueString { get; set; }
	public Element[]? Example { get; set; }
	public string? DefaultValueAge { get; set; }
	public string? PatternPositiveInt { get; set; }
	public Money? PatternMoney { get; set; }
	public string? PatternId { get; set; }
	public Quantity? PatternQuantity { get; set; }
	public string? MinValuePositiveInt { get; set; }
	public Period? FixedPeriod { get; set; }
	public string? DefaultValueOid { get; set; }
	public string? OrderMeaning { get; set; }
	public UsageContext? DefaultValueUsageContext { get; set; }
	public Attachment? FixedAttachment { get; set; }
	public CodeableConcept? PatternCodeableConcept { get; set; }
	public Quantity? MinValueQuantity { get; set; }
	public Element? Base { get; set; }
	public int? PatternInteger { get; set; }
	public ParameterDefinition? DefaultValueParameterDefinition { get; set; }
	public string? DefaultValueDateTime { get; set; }
	public string? DefaultValuePositiveInt { get; set; }
	public string? MaxValueUnsignedInt { get; set; }
	public int? DefaultValueInteger { get; set; }
	public string? IsModifierReason { get; set; }
	public Address? PatternAddress { get; set; }
	public string? PatternBase64Binary { get; set; }
	public string? PatternUrl { get; set; }
	public string? PatternDateTime { get; set; }
	public string? DefaultValueTiming { get; set; }
	public string? PatternUri { get; set; }
	public Range? FixedRange { get; set; }
	public RelatedArtifact? DefaultValueRelatedArtifact { get; set; }
	public string? MaxValueTime { get; set; }
	public Identifier? DefaultValueIdentifier { get; set; }
	public CodeableConcept? DefaultValueCodeableConcept { get; set; }
	public bool? FixedBoolean { get; set; }
	public bool? IsSummary { get; set; }
	public Meta? FixedMeta { get; set; }
	public string? FixedInstant { get; set; }
	public ResourceExpression? PatternExpression { get; set; }
	public int? FixedInteger { get; set; }
}

public class Period : Element
{
	public string? Start { get; set; }
	public string? End { get; set; }
}

public class Xhtml : Element
{
}

public class HumanName : Element
{
	public string? Use { get; set; }
	public string? Text { get; set; }
	public string? Family { get; set; }
	public string[]? Given { get; set; }
	public string[]? Prefix { get; set; }
	public string[]? Suffix { get; set; }
	public Period? Period { get; set; }
}

public class RelatedArtifact : Element
{
	public required string Type { get; set; }
	public string? Label { get; set; }
	public string? Display { get; set; }
	public string? Citation { get; set; }
	public string? Url { get; set; }
	public Attachment? Document { get; set; }
	public string? Resource { get; set; }
}

public class ResourceExpression : Element
{
	public string? Description { get; set; }
	public string? Name { get; set; }
	public required string Language { get; set; }
	public string? Expression { get; set; }
	public string? Reference { get; set; }
}

public class MarketingStatus : BackboneElement
{
	public required CodeableConcept Country { get; set; }
	public CodeableConcept? Jurisdiction { get; set; }
	public required CodeableConcept Status { get; set; }
	public required Period DateRange { get; set; }
	public string? RestoreDate { get; set; }
}

public class Signature : Element
{
	public required Coding[] Type { get; set; }
	public required string When { get; set; }
	public required ResourceReference Who { get; set; }
	public ResourceReference? OnBehalfOf { get; set; }
	public string? TargetFormat { get; set; }
	public string? SigFormat { get; set; }
	public string? Data { get; set; }
}

public class Resource
{
	public string? Id { get; set; }
	public Meta? Meta { get; set; }
	public string? ImplicitRules { get; set; }
	public string? Language { get; set; }
}

public class SubstanceAmount : BackboneElement
{
	public Quantity? AmountQuantity { get; set; }
	public Range? AmountRange { get; set; }
	public string? AmountString { get; set; }
	public CodeableConcept? AmountType { get; set; }
	public string? AmountText { get; set; }
	public Element? ReferenceRange { get; set; }
}

public class Contributor : Element
{
	public required string Type { get; set; }
	public required string Name { get; set; }
	public ContactDetail[]? Contact { get; set; }
}

public class UsageContext : Element
{
	public required Coding Code { get; set; }
	public CodeableConcept? ValueCodeableConcept { get; set; }
	public Quantity? ValueQuantity { get; set; }
	public Range? ValueRange { get; set; }
	public ResourceReference? ValueReference { get; set; }
}

public class Meta : Element
{
	public string? VersionId { get; set; }
	public string? LastUpdated { get; set; }
	public string? Source { get; set; }
	public string[]? Profile { get; set; }
	public Coding[]? Security { get; set; }
	public Coding[]? Tag { get; set; }
}

public class Quantity : Element
{
	public string? Value { get; set; }
	public string? Comparator { get; set; }
	public string? Unit { get; set; }
	public string? System { get; set; }
	public string? Code { get; set; }
}

public class ContactPoint : Element
{
	public string? System { get; set; }
	public string? Value { get; set; }
	public string? Use { get; set; }
	public string? Rank { get; set; }
	public Period? Period { get; set; }
}

public class Annotation : Element
{
	public ResourceReference? AuthorReference { get; set; }
	public string? AuthorString { get; set; }
	public string? Time { get; set; }
	public required string Text { get; set; }
}

public class Binary : Resource
{
	public required string ContentType { get; set; }
	public ResourceReference? SecurityContext { get; set; }
	public string? Data { get; set; }
}

public class Attachment : Element
{
	public string? ContentType { get; set; }
	public string? Language { get; set; }
	public string? Data { get; set; }
	public string? Url { get; set; }
	public string? Size { get; set; }
	public string? Hash { get; set; }
	public string? Title { get; set; }
	public string? Creation { get; set; }
}

public class Boolean : Element
{
}

public class Element
{
	public string? Id { get; set; }
	public Extension[]? Extension { get; set; }
}

public class Narrative : Element
{
	public required string Status { get; set; }
	public required string Div { get; set; }
}

public class Time : Element
{
}

public class TriggerDefinition : Element
{
	public ResourceReference? TimingReference { get; set; }
	public string? Name { get; set; }
	public required string Type { get; set; }
	public string? TimingDateTime { get; set; }
	public string? TimingTiming { get; set; }
	public ResourceExpression? Condition { get; set; }
	public string? TimingDate { get; set; }
	public DataRequirement[]? Data { get; set; }
}

public class Range : Element
{
	public Quantity? Low { get; set; }
	public Quantity? High { get; set; }
}

public class BackboneElement : Element
{
	public Extension[]? ModifierExtension { get; set; }
}

public class CodeableConcept : Element
{
	public Coding[]? Coding { get; set; }
	public string? Text { get; set; }
}

public class DataRequirement : Element
{
	public string? Limit { get; set; }
	public CodeableConcept? SubjectCodeableConcept { get; set; }
	public required string Type { get; set; }
	public string[]? MustSupport { get; set; }
	public Element[]? CodeFilter { get; set; }
	public ResourceReference? SubjectReference { get; set; }
	public Element[]? DateFilter { get; set; }
	public Element[]? Sort { get; set; }
	public string[]? Profile { get; set; }
}

public class Money : Element
{
	public string? Value { get; set; }
	public string? Currency { get; set; }
}

public class Identifier : Element
{
	public string? Use { get; set; }
	public CodeableConcept? Type { get; set; }
	public string? System { get; set; }
	public string? Value { get; set; }
	public Period? Period { get; set; }
	public ResourceReference? Assigner { get; set; }
}

public class Timing : BackboneElement
{
	public string[]? Event { get; set; }
	public Element? Repeat { get; set; }
	public CodeableConcept? Code { get; set; }
}
