namespace Aidbox.FHIR.Base;

public class Age : Quantity
{
}

public class String : Element
{
}

public class Markdown : String
{
}

public class Date : Element
{
}

public class ProductShelfLife : BackboneElement
{
	public Base.Identifier? Identifier { get; set; }
	public required Base.CodeableConcept Type { get; set; }
	public required Base.Quantity Period { get; set; }
	public Base.CodeableConcept[]? SpecialPrecautionsForStorage { get; set; }
}

public class Duration : Quantity
{
}

public class Dosage : BackboneElement
{
	public Base.CodeableConcept? Site { get; set; }
	public Base.CodeableConcept? Method { get; set; }
	public string? PatientInstruction { get; set; }
	public Base.Quantity? MaxDosePerLifetime { get; set; }
	public Base.Quantity? MaxDosePerAdministration { get; set; }
	public Base.CodeableConcept? Route { get; set; }
	public bool? AsNeededBoolean { get; set; }
	public string? Timing { get; set; }
	public Base.CodeableConcept[]? AdditionalInstruction { get; set; }
	public int? Sequence { get; set; }
	public Base.Ratio? MaxDosePerPeriod { get; set; }
	public Base.Element[]? DoseAndRate { get; set; }
	public Base.CodeableConcept? AsNeededCodeableConcept { get; set; }
	public string? Text { get; set; }
}

public class Url : Uri
{
}

public class DomainResource : Resource
{
	public Base.Narrative? Text { get; set; }
	public Base.Resource[]? Contained { get; set; }
	public Base.Extension[]? Extension { get; set; }
	public Base.Extension[]? ModifierExtension { get; set; }
}

public class Population : BackboneElement
{
	public Base.Range? AgeRange { get; set; }
	public Base.CodeableConcept? AgeCodeableConcept { get; set; }
	public Base.CodeableConcept? Gender { get; set; }
	public Base.CodeableConcept? Race { get; set; }
	public Base.CodeableConcept? PhysiologicalCondition { get; set; }
}

public class SampledData : Element
{
	public required Base.Quantity Origin { get; set; }
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
	public Base.Quantity? Width { get; set; }
	public Base.Quantity? NominalVolume { get; set; }
	public Base.Quantity? Weight { get; set; }
	public string? Shape { get; set; }
	public Base.CodeableConcept? Scoring { get; set; }
	public Base.Attachment[]? Image { get; set; }
	public Base.Quantity? Depth { get; set; }
	public Base.Quantity? ExternalDiameter { get; set; }
	public Base.Quantity? Height { get; set; }
}

public class Integer : Element
{
}

public class Base64Binary : Element
{
}

public class Extension : Element
{
	public string? ValueBase64Binary { get; set; }
	public string? ValueAge { get; set; }
	public Base.ParameterDefinition? ValueParameterDefinition { get; set; }
	public string? ValueTiming { get; set; }
	public string? ValueCode { get; set; }
	public Base.ResourceReference? ValueReference { get; set; }
	public Base.Contributor? ValueContributor { get; set; }
	public Base.ContactDetail? ValueContactDetail { get; set; }
	public string? ValueUri { get; set; }
	public Base.UsageContext? ValueUsageContext { get; set; }
	public string? ValueTime { get; set; }
	public string? ValueDecimal { get; set; }
	public string? ValueCanonical { get; set; }
	public string? ValueMarkdown { get; set; }
	public Base.Identifier? ValueIdentifier { get; set; }
	public Base.TriggerDefinition? ValueTriggerDefinition { get; set; }
	public Base.Quantity? ValueQuantity { get; set; }
	public string? ValueCount { get; set; }
	public string? ValueString { get; set; }
	public Base.Ratio? ValueRatio { get; set; }
	public bool? ValueBoolean { get; set; }
	public string? ValueInstant { get; set; }
	public string? ValueDateTime { get; set; }
	public string? ValueDate { get; set; }
	public string? ValueDuration { get; set; }
	public Base.DataRequirement? ValueDataRequirement { get; set; }
	public Base.Meta? ValueMeta { get; set; }
	public Base.Money? ValueMoney { get; set; }
	public Base.Coding? ValueCoding { get; set; }
	public Base.ResourceExpression? ValueExpression { get; set; }
	public Base.SampledData? ValueSampledData { get; set; }
	public string? ValueDosage { get; set; }
	public Base.ContactPoint? ValueContactPoint { get; set; }
	public required string Url { get; set; }
	public Base.CodeableConcept? ValueCodeableConcept { get; set; }
	public Base.Annotation? ValueAnnotation { get; set; }
	public Base.Period? ValuePeriod { get; set; }
	public string? ValueDistance { get; set; }
	public Base.Range? ValueRange { get; set; }
	public Base.Signature? ValueSignature { get; set; }
	public string? ValueUuid { get; set; }
	public int? ValueInteger { get; set; }
	public Base.HumanName? ValueHumanName { get; set; }
	public string? ValueUnsignedInt { get; set; }
	public Base.Attachment? ValueAttachment { get; set; }
	public string? ValueOid { get; set; }
	public Base.Address? ValueAddress { get; set; }
	public Base.RelatedArtifact? ValueRelatedArtifact { get; set; }
	public string? ValuePositiveInt { get; set; }
	public string? ValueId { get; set; }
	public string? ValueUrl { get; set; }
}

public class Ratio : Element
{
	public Base.Quantity? Numerator { get; set; }
	public Base.Quantity? Denominator { get; set; }
}

public class Parameters_Parameter
{
	public string? ValueBase64Binary { get; set; }
	public string? ValueAge { get; set; }
	public Base.ParameterDefinition? ValueParameterDefinition { get; set; }
	public string? ValueTiming { get; set; }
	public string? ValueCode { get; set; }
	public Base.ResourceReference? ValueReference { get; set; }
	public Base.Contributor? ValueContributor { get; set; }
	public Base.ContactDetail? ValueContactDetail { get; set; }
	public string? ValueUri { get; set; }
	public Base.UsageContext? ValueUsageContext { get; set; }
	public string? ValueTime { get; set; }
	public string? ValueDecimal { get; set; }
	public string? ValueCanonical { get; set; }
	public required string Name { get; set; }
	public string? ValueMarkdown { get; set; }
	public Base.Identifier? ValueIdentifier { get; set; }
	public Base.TriggerDefinition? ValueTriggerDefinition { get; set; }
	public Base.Quantity? ValueQuantity { get; set; }
	public string[]? Part { get; set; }
	public string? ValueCount { get; set; }
	public string? ValueString { get; set; }
	public Base.Ratio? ValueRatio { get; set; }
	public bool? ValueBoolean { get; set; }
	public string? ValueInstant { get; set; }
	public string? ValueDateTime { get; set; }
	public string? ValueDate { get; set; }
	public string? ValueDuration { get; set; }
	public Base.DataRequirement? ValueDataRequirement { get; set; }
	public Base.Meta? ValueMeta { get; set; }
	public Base.Money? ValueMoney { get; set; }
	public Base.Coding? ValueCoding { get; set; }
	public Base.ResourceExpression? ValueExpression { get; set; }
	public Base.SampledData? ValueSampledData { get; set; }
	public Base.Resource? Resource { get; set; }
	public string? ValueDosage { get; set; }
	public Base.ContactPoint? ValueContactPoint { get; set; }
	public Base.CodeableConcept? ValueCodeableConcept { get; set; }
	public Base.Annotation? ValueAnnotation { get; set; }
	public Base.Period? ValuePeriod { get; set; }
	public string? ValueDistance { get; set; }
	public Base.Range? ValueRange { get; set; }
	public Base.Signature? ValueSignature { get; set; }
	public string? ValueUuid { get; set; }
	public int? ValueInteger { get; set; }
	public Base.HumanName? ValueHumanName { get; set; }
	public string? ValueUnsignedInt { get; set; }
	public Base.Attachment? ValueAttachment { get; set; }
	public string? ValueOid { get; set; }
	public Base.Address? ValueAddress { get; set; }
	public Base.RelatedArtifact? ValueRelatedArtifact { get; set; }
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
	public Base.Resource? Outcome { get; set; }
}

public class Bundle_Entry
{
	public string[]? Link { get; set; }
	public string? FullUrl { get; set; }
	public Base.Resource? Resource { get; set; }
	public Bundle_Entry_Search? Search { get; set; }
	public Bundle_Entry_Request? Request { get; set; }
	public Bundle_Entry_Response? Response { get; set; }
}

public class Bundle : Resource
{
	public Base.Identifier? Identifier { get; set; }
	public required string Type { get; set; }
	public string? Timestamp { get; set; }
	public string? Total { get; set; }
	public Bundle_Link[]? Link { get; set; }
	public Bundle_Entry[]? Entry { get; set; }
	public Base.Signature? Signature { get; set; }
}

public class Instant : Element
{
}

public class ContactDetail : Element
{
	public string? Name { get; set; }
	public Base.ContactPoint[]? Telecom { get; set; }
}

public class Address : Element
{
	public string? Use { get; set; }
	public string? City { get; set; }
	public string? Type { get; set; }
	public string? State { get; set; }
	public string[]? Line { get; set; }
	public string? PostalCode { get; set; }
	public Base.Period? Period { get; set; }
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
	public Base.Identifier? Identifier { get; set; }
	public string? Display { get; set; }
}

public class ElementDefinition : BackboneElement
{
	public Base.Element[]? Constraint { get; set; }
	public string? FixedMarkdown { get; set; }
	public required string Path { get; set; }
	public Base.Range? PatternRange { get; set; }
	public Base.Meta? PatternMeta { get; set; }
	public string? DefaultValueTime { get; set; }
	public string? FixedCode { get; set; }
	public string? MaxValueDecimal { get; set; }
	public string? Requirements { get; set; }
	public string? PatternDosage { get; set; }
	public Base.DataRequirement? DefaultValueDataRequirement { get; set; }
	public string? Min { get; set; }
	public Base.Money? DefaultValueMoney { get; set; }
	public string? FixedPositiveInt { get; set; }
	public string? PatternTiming { get; set; }
	public string? Definition { get; set; }
	public Base.Contributor? PatternContributor { get; set; }
	public Base.ContactPoint? PatternContactPoint { get; set; }
	public Base.ContactPoint? DefaultValueContactPoint { get; set; }
	public int? MinValueInteger { get; set; }
	public Base.Meta? DefaultValueMeta { get; set; }
	public bool? IsModifier { get; set; }
	public Base.Ratio? PatternRatio { get; set; }
	public Base.ContactDetail? PatternContactDetail { get; set; }
	public string? Short { get; set; }
	public Base.UsageContext? FixedUsageContext { get; set; }
	public Base.Coding? DefaultValueCoding { get; set; }
	public string? FixedAge { get; set; }
	public Base.DataRequirement? PatternDataRequirement { get; set; }
	public string? MinValueDate { get; set; }
	public string? MaxValuePositiveInt { get; set; }
	public Base.RelatedArtifact? FixedRelatedArtifact { get; set; }
	public Base.Address? FixedAddress { get; set; }
	public string? DefaultValueCode { get; set; }
	public string? FixedUri { get; set; }
	public Base.SampledData? DefaultValueSampledData { get; set; }
	public string? FixedDistance { get; set; }
	public string? PatternUnsignedInt { get; set; }
	public string? DefaultValueMarkdown { get; set; }
	public Base.HumanName? DefaultValueHumanName { get; set; }
	public string? MinValueInstant { get; set; }
	public string? DefaultValueDuration { get; set; }
	public string? DefaultValueDecimal { get; set; }
	public string? DefaultValueUri { get; set; }
	public string? FixedDosage { get; set; }
	public Base.Ratio? FixedRatio { get; set; }
	public Base.ContactDetail? FixedContactDetail { get; set; }
	public Base.SampledData? PatternSampledData { get; set; }
	public Base.ParameterDefinition? FixedParameterDefinition { get; set; }
	public Base.Quantity? DefaultValueQuantity { get; set; }
	public Base.Attachment? PatternAttachment { get; set; }
	public string? DefaultValueCount { get; set; }
	public Base.ResourceExpression? FixedExpression { get; set; }
	public string? MinValueDecimal { get; set; }
	public string? FixedUnsignedInt { get; set; }
	public string? FixedDuration { get; set; }
	public Base.TriggerDefinition? PatternTriggerDefinition { get; set; }
	public Base.Element[]? Mapping { get; set; }
	public string? ContentReference { get; set; }
	public string? FixedOid { get; set; }
	public string? DefaultValueId { get; set; }
	public Base.Identifier? FixedIdentifier { get; set; }
	public string? DefaultValueBase64Binary { get; set; }
	public Base.Element? Slicing { get; set; }
	public string? FixedDateTime { get; set; }
	public Base.ContactDetail? DefaultValueContactDetail { get; set; }
	public Base.Element[]? Type { get; set; }
	public bool? DefaultValueBoolean { get; set; }
	public Base.Period? DefaultValuePeriod { get; set; }
	public bool? PatternBoolean { get; set; }
	public Base.TriggerDefinition? DefaultValueTriggerDefinition { get; set; }
	public bool? MustSupport { get; set; }
	public string? DefaultValueDate { get; set; }
	public Base.Money? FixedMoney { get; set; }
	public string? SliceName { get; set; }
	public string? FixedUuid { get; set; }
	public string? FixedDate { get; set; }
	public Base.ResourceReference? FixedReference { get; set; }
	public Base.HumanName? FixedHumanName { get; set; }
	public Base.TriggerDefinition? FixedTriggerDefinition { get; set; }
	public Base.ResourceReference? DefaultValueReference { get; set; }
	public string? PatternDecimal { get; set; }
	public string? DefaultValueDosage { get; set; }
	public Base.DataRequirement? FixedDataRequirement { get; set; }
	public Base.Range? DefaultValueRange { get; set; }
	public string? PatternString { get; set; }
	public string? MinValueTime { get; set; }
	public string? PatternTime { get; set; }
	public string? MeaningWhenMissing { get; set; }
	public Base.Quantity? MaxValueQuantity { get; set; }
	public string? FixedDecimal { get; set; }
	public Base.Coding? FixedCoding { get; set; }
	public Base.Annotation? PatternAnnotation { get; set; }
	public Base.SampledData? FixedSampledData { get; set; }
	public string? PatternUuid { get; set; }
	public string? PatternDuration { get; set; }
	public string? PatternCode { get; set; }
	public string? FixedCount { get; set; }
	public Base.Signature? PatternSignature { get; set; }
	public string? MinValueUnsignedInt { get; set; }
	public Base.CodeableConcept? FixedCodeableConcept { get; set; }
	public Base.ResourceReference? PatternReference { get; set; }
	public string? DefaultValueInstant { get; set; }
	public Base.Element? Binding { get; set; }
	public string? PatternCount { get; set; }
	public string? MaxValueDate { get; set; }
	public string[]? Alias { get; set; }
	public Base.Attachment? DefaultValueAttachment { get; set; }
	public string? DefaultValueUnsignedInt { get; set; }
	public string? PatternAge { get; set; }
	public Base.Signature? FixedSignature { get; set; }
	public string[]? Representation { get; set; }
	public Base.ParameterDefinition? PatternParameterDefinition { get; set; }
	public string? FixedId { get; set; }
	public string? FixedUrl { get; set; }
	public string? DefaultValueDistance { get; set; }
	public Base.Identifier? PatternIdentifier { get; set; }
	public string? MaxValueDateTime { get; set; }
	public Base.ContactPoint? FixedContactPoint { get; set; }
	public Base.Quantity? FixedQuantity { get; set; }
	public Base.Annotation? FixedAnnotation { get; set; }
	public string? PatternCanonical { get; set; }
	public string? Max { get; set; }
	public string? MinValueDateTime { get; set; }
	public string? FixedString { get; set; }
	public string? Label { get; set; }
	public Base.Contributor? DefaultValueContributor { get; set; }
	public string[]? Condition { get; set; }
	public Base.Ratio? DefaultValueRatio { get; set; }
	public string? PatternInstant { get; set; }
	public string? DefaultValueCanonical { get; set; }
	public Base.ResourceExpression? DefaultValueExpression { get; set; }
	public string? Comment { get; set; }
	public Base.Signature? DefaultValueSignature { get; set; }
	public string? PatternDate { get; set; }
	public Base.Coding[]? Code { get; set; }
	public string? FixedTime { get; set; }
	public string? DefaultValueUrl { get; set; }
	public Base.Contributor? FixedContributor { get; set; }
	public string? MaxValueInstant { get; set; }
	public Base.Coding? PatternCoding { get; set; }
	public Base.HumanName? PatternHumanName { get; set; }
	public string? PatternMarkdown { get; set; }
	public string? FixedBase64Binary { get; set; }
	public string? PatternDistance { get; set; }
	public Base.RelatedArtifact? PatternRelatedArtifact { get; set; }
	public string? FixedTiming { get; set; }
	public int? MaxLength { get; set; }
	public Base.Annotation? DefaultValueAnnotation { get; set; }
	public string? DefaultValueUuid { get; set; }
	public string? FixedCanonical { get; set; }
	public Base.UsageContext? PatternUsageContext { get; set; }
	public Base.Period? PatternPeriod { get; set; }
	public Base.Address? DefaultValueAddress { get; set; }
	public int? MaxValueInteger { get; set; }
	public string? PatternOid { get; set; }
	public bool? SliceIsConstraining { get; set; }
	public string? DefaultValueString { get; set; }
	public Base.Element[]? Example { get; set; }
	public string? DefaultValueAge { get; set; }
	public string? PatternPositiveInt { get; set; }
	public Base.Money? PatternMoney { get; set; }
	public string? PatternId { get; set; }
	public Base.Quantity? PatternQuantity { get; set; }
	public string? MinValuePositiveInt { get; set; }
	public Base.Period? FixedPeriod { get; set; }
	public string? DefaultValueOid { get; set; }
	public string? OrderMeaning { get; set; }
	public Base.UsageContext? DefaultValueUsageContext { get; set; }
	public Base.Attachment? FixedAttachment { get; set; }
	public Base.CodeableConcept? PatternCodeableConcept { get; set; }
	public Base.Quantity? MinValueQuantity { get; set; }
	public Base.Element? Base { get; set; }
	public int? PatternInteger { get; set; }
	public Base.ParameterDefinition? DefaultValueParameterDefinition { get; set; }
	public string? DefaultValueDateTime { get; set; }
	public string? DefaultValuePositiveInt { get; set; }
	public string? MaxValueUnsignedInt { get; set; }
	public int? DefaultValueInteger { get; set; }
	public string? IsModifierReason { get; set; }
	public Base.Address? PatternAddress { get; set; }
	public string? PatternBase64Binary { get; set; }
	public string? PatternUrl { get; set; }
	public string? PatternDateTime { get; set; }
	public string? DefaultValueTiming { get; set; }
	public string? PatternUri { get; set; }
	public Base.Range? FixedRange { get; set; }
	public Base.RelatedArtifact? DefaultValueRelatedArtifact { get; set; }
	public string? MaxValueTime { get; set; }
	public Base.Identifier? DefaultValueIdentifier { get; set; }
	public Base.CodeableConcept? DefaultValueCodeableConcept { get; set; }
	public bool? FixedBoolean { get; set; }
	public bool? IsSummary { get; set; }
	public Base.Meta? FixedMeta { get; set; }
	public string? FixedInstant { get; set; }
	public Base.ResourceExpression? PatternExpression { get; set; }
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
	public Base.Period? Period { get; set; }
}

public class RelatedArtifact : Element
{
	public required string Type { get; set; }
	public string? Label { get; set; }
	public string? Display { get; set; }
	public string? Citation { get; set; }
	public string? Url { get; set; }
	public Base.Attachment? Document { get; set; }
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

public class Uuid : Uri
{
}

public class Id : String
{
}

public class UnsignedInt : Integer
{
}

public class MarketingStatus : BackboneElement
{
	public required Base.CodeableConcept Country { get; set; }
	public Base.CodeableConcept? Jurisdiction { get; set; }
	public required Base.CodeableConcept Status { get; set; }
	public required Base.Period DateRange { get; set; }
	public string? RestoreDate { get; set; }
}

public class Signature : Element
{
	public required Base.Coding[] Type { get; set; }
	public required string When { get; set; }
	public required Base.ResourceReference Who { get; set; }
	public Base.ResourceReference? OnBehalfOf { get; set; }
	public string? TargetFormat { get; set; }
	public string? SigFormat { get; set; }
	public string? Data { get; set; }
}

public class Resource
{
	public string? Id { get; set; }
	public Base.Meta? Meta { get; set; }
	public string? ImplicitRules { get; set; }
	public string? Language { get; set; }
}

public class SubstanceAmount : BackboneElement
{
	public Base.Quantity? AmountQuantity { get; set; }
	public Base.Range? AmountRange { get; set; }
	public string? AmountString { get; set; }
	public Base.CodeableConcept? AmountType { get; set; }
	public string? AmountText { get; set; }
	public Base.Element? ReferenceRange { get; set; }
}

public class Contributor : Element
{
	public required string Type { get; set; }
	public required string Name { get; set; }
	public Base.ContactDetail[]? Contact { get; set; }
}

public class UsageContext : Element
{
	public required Base.Coding Code { get; set; }
	public Base.CodeableConcept? ValueCodeableConcept { get; set; }
	public Base.Quantity? ValueQuantity { get; set; }
	public Base.Range? ValueRange { get; set; }
	public Base.ResourceReference? ValueReference { get; set; }
}

public class Canonical : Uri
{
}

public class Meta : Element
{
	public string? VersionId { get; set; }
	public string? LastUpdated { get; set; }
	public string? Source { get; set; }
	public string[]? Profile { get; set; }
	public Base.Coding[]? Security { get; set; }
	public Base.Coding[]? Tag { get; set; }
}

public class Code : String
{
}

public class Distance : Quantity
{
}

public class Quantity : Element
{
	public string? Value { get; set; }
	public string? Comparator { get; set; }
	public string? Unit { get; set; }
	public string? System { get; set; }
	public string? Code { get; set; }
}

public class Oid : Uri
{
}

public class ContactPoint : Element
{
	public string? System { get; set; }
	public string? Value { get; set; }
	public string? Use { get; set; }
	public string? Rank { get; set; }
	public Base.Period? Period { get; set; }
}

public class Annotation : Element
{
	public Base.ResourceReference? AuthorReference { get; set; }
	public string? AuthorString { get; set; }
	public string? Time { get; set; }
	public required string Text { get; set; }
}

public class Binary : Resource
{
	public required string ContentType { get; set; }
	public Base.ResourceReference? SecurityContext { get; set; }
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
	public Base.Extension[]? Extension { get; set; }
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
	public Base.ResourceReference? TimingReference { get; set; }
	public string? Name { get; set; }
	public required string Type { get; set; }
	public string? TimingDateTime { get; set; }
	public string? TimingTiming { get; set; }
	public Base.ResourceExpression? Condition { get; set; }
	public string? TimingDate { get; set; }
	public Base.DataRequirement[]? Data { get; set; }
}

public class Range : Element
{
	public Base.Quantity? Low { get; set; }
	public Base.Quantity? High { get; set; }
}

public class BackboneElement : Element
{
	public Base.Extension[]? ModifierExtension { get; set; }
}

public class CodeableConcept : Element
{
	public Base.Coding[]? Coding { get; set; }
	public string? Text { get; set; }
}

public class DataRequirement : Element
{
	public string? Limit { get; set; }
	public Base.CodeableConcept? SubjectCodeableConcept { get; set; }
	public required string Type { get; set; }
	public string[]? MustSupport { get; set; }
	public Base.Element[]? CodeFilter { get; set; }
	public Base.ResourceReference? SubjectReference { get; set; }
	public Base.Element[]? DateFilter { get; set; }
	public Base.Element[]? Sort { get; set; }
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
	public Base.CodeableConcept? Type { get; set; }
	public string? System { get; set; }
	public string? Value { get; set; }
	public Base.Period? Period { get; set; }
	public Base.ResourceReference? Assigner { get; set; }
}

public class DateTime : Element
{
}

public class Uri : Element
{
}

public class Decimal : Element
{
}

public class Timing : BackboneElement
{
	public string[]? Event { get; set; }
	public Base.Element? Repeat { get; set; }
	public Base.CodeableConcept? Code { get; set; }
}

public class PositiveInt : Integer
{
}