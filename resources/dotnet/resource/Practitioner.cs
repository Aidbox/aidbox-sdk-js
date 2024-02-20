using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class Practitioner_Qualification : BackboneElement
{
	public Base.Identifier[]? Identifier { get; set; }
	public required Base.CodeableConcept Code { get; set; }
	public Base.Period? Period { get; set; }
	public Base.ResourceReference? Issuer { get; set; }
}

public class Practitioner : DomainResource
{
	public Base.Address[]? Address { get; set; }
	public Base.HumanName[]? Name { get; set; }
	public string? BirthDate { get; set; }
	public Base.Attachment[]? Photo { get; set; }
	public bool? Active { get; set; }
	public Base.CodeableConcept[]? Communication { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Practitioner_Qualification[]? Qualification { get; set; }
	public Base.ContactPoint[]? Telecom { get; set; }
	public string? Gender { get; set; }
}