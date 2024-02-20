using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class NamingSystem_UniqueId : BackboneElement
{
	public required string Type { get; set; }
	public required string Value { get; set; }
	public bool? Preferred { get; set; }
	public string? Comment { get; set; }
	public Base.Period? Period { get; set; }
}

public class NamingSystem : DomainResource
{
	public string? Description { get; set; }
	public required string Date { get; set; }
	public string? Publisher { get; set; }
	public Base.CodeableConcept[]? Jurisdiction { get; set; }
	public required string Name { get; set; }
	public Base.UsageContext[]? UseContext { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public string? Responsible { get; set; }
	public string? Usage { get; set; }
	public required string Status { get; set; }
	public required string Kind { get; set; }
	public required NamingSystem_UniqueId[] UniqueId { get; set; }
	public Base.ContactDetail[]? Contact { get; set; }
}