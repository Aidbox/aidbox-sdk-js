using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class Organization_Contact : BackboneElement
{
	public Base.CodeableConcept? Purpose { get; set; }
	public Base.HumanName? Name { get; set; }
	public Base.ContactPoint[]? Telecom { get; set; }
	public Base.Address? Address { get; set; }
}

public class Organization : DomainResource
{
	public Base.Address[]? Address { get; set; }
	public string? Name { get; set; }
	public Base.CodeableConcept[]? Type { get; set; }
	public string[]? Alias { get; set; }
	public bool? Active { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.ContactPoint[]? Telecom { get; set; }
	public Base.ResourceReference? PartOf { get; set; }
	public Base.ResourceReference[]? Endpoint { get; set; }
	public Organization_Contact[]? Contact { get; set; }
}