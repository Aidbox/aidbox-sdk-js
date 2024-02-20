using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class SearchParameter_Component : BackboneElement
{
	public required string Definition { get; set; }
	public required string Expression { get; set; }
}

public class SearchParameter : DomainResource
{
	public required string Description { get; set; }
	public string? Date { get; set; }
	public string? Expression { get; set; }
	public string[]? Modifier { get; set; }
	public string? Publisher { get; set; }
	public bool? MultipleAnd { get; set; }
	public Base.CodeableConcept[]? Jurisdiction { get; set; }
	public string? DerivedFrom { get; set; }
	public string? Purpose { get; set; }
	public bool? MultipleOr { get; set; }
	public required string Name { get; set; }
	public Base.UsageContext[]? UseContext { get; set; }
	public string? Xpath { get; set; }
	public string? XpathUsage { get; set; }
	public required string Type { get; set; }
	public bool? Experimental { get; set; }
	public SearchParameter_Component[]? Component { get; set; }
	public required string Status { get; set; }
	public string[]? Chain { get; set; }
	public required string Url { get; set; }
	public required string Code { get; set; }
	public string[]? Comparator { get; set; }
	public string[]? Target { get; set; }
	public required string[] Base { get; set; }
	public string? Version { get; set; }
	public Base.ContactDetail[]? Contact { get; set; }
}