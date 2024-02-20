using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Constraint;

public class ElementdefinitionDe
{
	public Meta Meta { get; } = new() { Profile = ["http://hl7.org/fhir/StructureDefinition/elementdefinition-de"] };
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
	public Base.Ratio? PatternRatio { get; set; }
	public Base.ContactDetail? PatternContactDetail { get; set; }
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
	public string? FixedOid { get; set; }
	public string? DefaultValueId { get; set; }
	public Base.Identifier? FixedIdentifier { get; set; }
	public string? DefaultValueBase64Binary { get; set; }
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
	public Base.Meta? FixedMeta { get; set; }
	public string? FixedInstant { get; set; }
	public Base.ResourceExpression? PatternExpression { get; set; }
	public int? FixedInteger { get; set; }
	public Base.Extension[]? ModifierExtension { get; set; }
	public string? Id { get; set; }
	public Base.Extension[]? Extension { get; set; }
}