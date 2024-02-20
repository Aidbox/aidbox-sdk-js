using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class OperationDefinition_Overload : BackboneElement
{
	public string[]? ParameterName { get; set; }
	public string? Comment { get; set; }
}

public class OperationDefinition_Parameter_ReferencedFrom : BackboneElement
{
	public required string Source { get; set; }
	public string? SourceId { get; set; }
}

public class OperationDefinition_Parameter_Binding : BackboneElement
{
	public required string Strength { get; set; }
	public required string ValueSet { get; set; }
}

public class OperationDefinition_Parameter : BackboneElement
{
	public required int Min { get; set; }
	public string? SearchType { get; set; }
	public required string Use { get; set; }
	public required string Name { get; set; }
	public string[]? Part { get; set; }
	public string? Type { get; set; }
	public OperationDefinition_Parameter_ReferencedFrom[]? ReferencedFrom { get; set; }
	public string? Documentation { get; set; }
	public OperationDefinition_Parameter_Binding? Binding { get; set; }
	public required string Max { get; set; }
	public string[]? TargetProfile { get; set; }
}

public class OperationDefinition : DomainResource
{
	public string? Description { get; set; }
	public string? Date { get; set; }
	public required bool System { get; set; }
	public string? Publisher { get; set; }
	public required bool Instance { get; set; }
	public Base.CodeableConcept[]? Jurisdiction { get; set; }
	public string? Purpose { get; set; }
	public required string Name { get; set; }
	public Base.UsageContext[]? UseContext { get; set; }
	public required bool Type { get; set; }
	public OperationDefinition_Overload[]? Overload { get; set; }
	public bool? Experimental { get; set; }
	public string? OutputProfile { get; set; }
	public string? Title { get; set; }
	public required string Status { get; set; }
	public string[]? Resource { get; set; }
	public bool? AffectsState { get; set; }
	public required string Kind { get; set; }
	public string? Comment { get; set; }
	public string? Url { get; set; }
	public required string Code { get; set; }
	public string? Base { get; set; }
	public string? Version { get; set; }
	public Base.ContactDetail[]? Contact { get; set; }
	public string? InputProfile { get; set; }
	public OperationDefinition_Parameter[]? Parameter { get; set; }
}