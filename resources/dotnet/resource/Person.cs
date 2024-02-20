using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class Person_Link : BackboneElement
{
	public required Base.ResourceReference Target { get; set; }
	public string? Assurance { get; set; }
}

public class Person : DomainResource
{
	public Base.Address[]? Address { get; set; }
	public Base.ResourceReference? ManagingOrganization { get; set; }
	public Base.HumanName[]? Name { get; set; }
	public string? BirthDate { get; set; }
	public Base.Attachment? Photo { get; set; }
	public Person_Link[]? Link { get; set; }
	public bool? Active { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.ContactPoint[]? Telecom { get; set; }
	public string? Gender { get; set; }
}