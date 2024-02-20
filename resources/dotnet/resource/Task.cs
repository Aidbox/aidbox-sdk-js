using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class Task_Restriction : BackboneElement
{
	public string? Repetitions { get; set; }
	public Base.Period? Period { get; set; }
	public Base.ResourceReference[]? Recipient { get; set; }
}

public class Task_Output : BackboneElement
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
	public required Base.CodeableConcept Type { get; set; }
	public string? ValueDuration { get; set; }
	public Base.DataRequirement? ValueDataRequirement { get; set; }
	public Base.Meta? ValueMeta { get; set; }
	public Base.Money? ValueMoney { get; set; }
	public Base.Coding? ValueCoding { get; set; }
	public Base.ResourceExpression? ValueExpression { get; set; }
	public Base.SampledData? ValueSampledData { get; set; }
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

public class Task_Input : BackboneElement
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
	public required Base.CodeableConcept Type { get; set; }
	public string? ValueDuration { get; set; }
	public Base.DataRequirement? ValueDataRequirement { get; set; }
	public Base.Meta? ValueMeta { get; set; }
	public Base.Money? ValueMoney { get; set; }
	public Base.Coding? ValueCoding { get; set; }
	public Base.ResourceExpression? ValueExpression { get; set; }
	public Base.SampledData? ValueSampledData { get; set; }
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

public class Task : DomainResource
{
	public Task_Restriction? Restriction { get; set; }
	public string? Description { get; set; }
	public Base.CodeableConcept[]? PerformerType { get; set; }
	public Base.Period? ExecutionPeriod { get; set; }
	public Base.ResourceReference[]? Insurance { get; set; }
	public string? InstantiatesCanonical { get; set; }
	public string? InstantiatesUri { get; set; }
	public Base.ResourceReference[]? RelevantHistory { get; set; }
	public Base.ResourceReference? Encounter { get; set; }
	public Base.CodeableConcept? ReasonCode { get; set; }
	public Base.CodeableConcept? StatusReason { get; set; }
	public string? AuthoredOn { get; set; }
	public Task_Output[]? Output { get; set; }
	public Base.CodeableConcept? BusinessStatus { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public Base.ResourceReference? For_ { get; set; }
	public Base.ResourceReference? Requester { get; set; }
	public string? LastModified { get; set; }
	public string? Priority { get; set; }
	public required string Status { get; set; }
	public Base.Identifier? GroupIdentifier { get; set; }
	public Base.CodeableConcept? Code { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public required string Intent { get; set; }
	public Base.ResourceReference? Focus { get; set; }
	public Task_Input[]? Input { get; set; }
	public Base.ResourceReference[]? BasedOn { get; set; }
	public Base.ResourceReference[]? PartOf { get; set; }
	public Base.ResourceReference? Location { get; set; }
	public Base.ResourceReference? Owner { get; set; }
	public Base.ResourceReference? ReasonReference { get; set; }
}