using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class StructureMap_Group_Input : BackboneElement
{
	public required string Name { get; set; }
	public string? Type { get; set; }
	public required string Mode { get; set; }
	public string? Documentation { get; set; }
}

public class StructureMap_Group_Rule_Source : BackboneElement
{
	public string? DefaultValueTime { get; set; }
	public Base.DataRequirement? DefaultValueDataRequirement { get; set; }
	public int? Min { get; set; }
	public Base.Money? DefaultValueMoney { get; set; }
	public Base.ContactPoint? DefaultValueContactPoint { get; set; }
	public Base.Meta? DefaultValueMeta { get; set; }
	public Base.Coding? DefaultValueCoding { get; set; }
	public string? Variable { get; set; }
	public string? DefaultValueCode { get; set; }
	public string? Element { get; set; }
	public Base.SampledData? DefaultValueSampledData { get; set; }
	public string? DefaultValueMarkdown { get; set; }
	public Base.HumanName? DefaultValueHumanName { get; set; }
	public string? DefaultValueDuration { get; set; }
	public string? DefaultValueDecimal { get; set; }
	public string? DefaultValueUri { get; set; }
	public string? Check { get; set; }
	public Base.Quantity? DefaultValueQuantity { get; set; }
	public string? DefaultValueCount { get; set; }
	public string? DefaultValueId { get; set; }
	public string? DefaultValueBase64Binary { get; set; }
	public Base.ContactDetail? DefaultValueContactDetail { get; set; }
	public string? Type { get; set; }
	public bool? DefaultValueBoolean { get; set; }
	public Base.Period? DefaultValuePeriod { get; set; }
	public Base.TriggerDefinition? DefaultValueTriggerDefinition { get; set; }
	public string? LogMessage { get; set; }
	public string? DefaultValueDate { get; set; }
	public Base.ResourceReference? DefaultValueReference { get; set; }
	public string? DefaultValueDosage { get; set; }
	public Base.Range? DefaultValueRange { get; set; }
	public string? DefaultValueInstant { get; set; }
	public Base.Attachment? DefaultValueAttachment { get; set; }
	public string? DefaultValueUnsignedInt { get; set; }
	public string? DefaultValueDistance { get; set; }
	public string? Max { get; set; }
	public Base.Contributor? DefaultValueContributor { get; set; }
	public string? Condition { get; set; }
	public Base.Ratio? DefaultValueRatio { get; set; }
	public string? DefaultValueCanonical { get; set; }
	public Base.ResourceExpression? DefaultValueExpression { get; set; }
	public Base.Signature? DefaultValueSignature { get; set; }
	public string? DefaultValueUrl { get; set; }
	public required string Context { get; set; }
	public Base.Annotation? DefaultValueAnnotation { get; set; }
	public string? DefaultValueUuid { get; set; }
	public Base.Address? DefaultValueAddress { get; set; }
	public string? DefaultValueString { get; set; }
	public string? DefaultValueAge { get; set; }
	public string? DefaultValueOid { get; set; }
	public Base.UsageContext? DefaultValueUsageContext { get; set; }
	public string? ListMode { get; set; }
	public Base.ParameterDefinition? DefaultValueParameterDefinition { get; set; }
	public string? DefaultValueDateTime { get; set; }
	public string? DefaultValuePositiveInt { get; set; }
	public int? DefaultValueInteger { get; set; }
	public string? DefaultValueTiming { get; set; }
	public Base.RelatedArtifact? DefaultValueRelatedArtifact { get; set; }
	public Base.Identifier? DefaultValueIdentifier { get; set; }
	public Base.CodeableConcept? DefaultValueCodeableConcept { get; set; }
}

public class StructureMap_Group_Rule_Target_Parameter : BackboneElement
{
	public string? ValueId { get; set; }
	public string? ValueString { get; set; }
	public bool? ValueBoolean { get; set; }
	public int? ValueInteger { get; set; }
	public string? ValueDecimal { get; set; }
}

public class StructureMap_Group_Rule_Target : BackboneElement
{
	public string? Context { get; set; }
	public string? ContextType { get; set; }
	public string? Element { get; set; }
	public string? Variable { get; set; }
	public string[]? ListMode { get; set; }
	public string? ListRuleId { get; set; }
	public string? Transform { get; set; }
	public StructureMap_Group_Rule_Target_Parameter[]? Parameter { get; set; }
}

public class StructureMap_Group_Rule_Dependent : BackboneElement
{
	public required string Name { get; set; }
	public required string[] Variable { get; set; }
}

public class StructureMap_Group_Rule : BackboneElement
{
	public required string Name { get; set; }
	public required StructureMap_Group_Rule_Source[] Source { get; set; }
	public StructureMap_Group_Rule_Target[]? Target { get; set; }
	public string[]? Rule { get; set; }
	public StructureMap_Group_Rule_Dependent[]? Dependent { get; set; }
	public string? Documentation { get; set; }
}

public class StructureMap_Group : BackboneElement
{
	public required string Name { get; set; }
	public string? Extends { get; set; }
	public required string TypeMode { get; set; }
	public string? Documentation { get; set; }
	public required StructureMap_Group_Input[] Input { get; set; }
	public required StructureMap_Group_Rule[] Rule { get; set; }
}

public class StructureMap_Structure : BackboneElement
{
	public required string Url { get; set; }
	public required string Mode { get; set; }
	public string? Alias { get; set; }
	public string? Documentation { get; set; }
}

public class StructureMap : DomainResource
{
	public string? Description { get; set; }
	public string? Date { get; set; }
	public required StructureMap_Group[] Group { get; set; }
	public string? Publisher { get; set; }
	public Base.CodeableConcept[]? Jurisdiction { get; set; }
	public string? Purpose { get; set; }
	public required string Name { get; set; }
	public Base.UsageContext[]? UseContext { get; set; }
	public string? Copyright { get; set; }
	public bool? Experimental { get; set; }
	public string? Title { get; set; }
	public StructureMap_Structure[]? Structure { get; set; }
	public required string Status { get; set; }
	public required string Url { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public string? Version { get; set; }
	public string[]? Import_ { get; set; }
	public Base.ContactDetail[]? Contact { get; set; }
}