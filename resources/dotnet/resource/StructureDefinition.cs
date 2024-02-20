using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class StructureDefinition_Mapping : BackboneElement
{
	public required string Identity { get; set; }
	public string? Uri { get; set; }
	public string? Name { get; set; }
	public string? Comment { get; set; }
}

public class StructureDefinition_Snapshot : BackboneElement
{
	public required Base.ElementDefinition[] Element { get; set; }
}

public class StructureDefinition_Context : BackboneElement
{
	public required string Type { get; set; }
	public required string Expression { get; set; }
}

public class StructureDefinition_Differential : BackboneElement
{
	public required Base.ElementDefinition[] Element { get; set; }
}

public class StructureDefinition : DomainResource
{
	public string? Description { get; set; }
	public string? Date { get; set; }
	public string? Derivation { get; set; }
	public string? Publisher { get; set; }
	public string[]? ContextInvariant { get; set; }
	public string? FhirVersion { get; set; }
	public Base.CodeableConcept[]? Jurisdiction { get; set; }
	public string? Purpose { get; set; }
	public required string Name { get; set; }
	public StructureDefinition_Mapping[]? Mapping { get; set; }
	public Base.UsageContext[]? UseContext { get; set; }
	public required bool Abstract { get; set; }
	public string? Copyright { get; set; }
	public required string Type { get; set; }
	public bool? Experimental { get; set; }
	public string? Title { get; set; }
	public StructureDefinition_Snapshot? Snapshot { get; set; }
	public Base.Coding[]? Keyword { get; set; }
	public required string Status { get; set; }
	public required string Kind { get; set; }
	public required string Url { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public StructureDefinition_Context[]? Context { get; set; }
	public string? Version { get; set; }
	public StructureDefinition_Differential? Differential { get; set; }
	public Base.ContactDetail[]? Contact { get; set; }
	public string? BaseDefinition { get; set; }
}