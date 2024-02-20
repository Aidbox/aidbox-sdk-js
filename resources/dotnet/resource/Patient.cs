using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class Patient_Link : BackboneElement
{
	public required Base.ResourceReference Other { get; set; }
	public required string Type { get; set; }
}

public class Patient_Communication : BackboneElement
{
	public required Base.CodeableConcept Language { get; set; }
	public bool? Preferred { get; set; }
}

public class Patient_Contact : BackboneElement
{
	public Base.CodeableConcept[]? Relationship { get; set; }
	public Base.HumanName? Name { get; set; }
	public Base.ContactPoint[]? Telecom { get; set; }
	public Base.Address? Address { get; set; }
	public string? Gender { get; set; }
	public Base.ResourceReference? Organization { get; set; }
	public Base.Period? Period { get; set; }
}

public class Patient : DomainResource
{
	public bool? MultipleBirthBoolean { get; set; }
	public Base.Address[]? Address { get; set; }
	public string? DeceasedDateTime { get; set; }
	public Base.ResourceReference? ManagingOrganization { get; set; }
	public bool? DeceasedBoolean { get; set; }
	public Base.HumanName[]? Name { get; set; }
	public string? BirthDate { get; set; }
	public int? MultipleBirthInteger { get; set; }
	public Base.Attachment[]? Photo { get; set; }
	public Patient_Link[]? Link { get; set; }
	public bool? Active { get; set; }
	public Patient_Communication[]? Communication { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.ContactPoint[]? Telecom { get; set; }
	public Base.ResourceReference[]? GeneralPractitioner { get; set; }
	public string? Gender { get; set; }
	public Base.CodeableConcept? MaritalStatus { get; set; }
	public Patient_Contact[]? Contact { get; set; }
}