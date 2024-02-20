using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class RelatedPerson_Communication : BackboneElement
{
	public required Base.CodeableConcept Language { get; set; }
	public bool? Preferred { get; set; }
}

public class RelatedPerson : DomainResource
{
	public required Base.ResourceReference Patient { get; set; }
	public Base.Address[]? Address { get; set; }
	public Base.HumanName[]? Name { get; set; }
	public string? BirthDate { get; set; }
	public Base.CodeableConcept[]? Relationship { get; set; }
	public Base.Attachment[]? Photo { get; set; }
	public bool? Active { get; set; }
	public RelatedPerson_Communication[]? Communication { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.ContactPoint[]? Telecom { get; set; }
	public string? Gender { get; set; }
	public Base.Period? Period { get; set; }
}