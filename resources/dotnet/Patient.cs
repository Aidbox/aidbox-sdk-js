using UTILS;
using HL7.FHIR.R4.BASE;

namespace HL7.FHIR.R4.RESOURCE;

public partial class Patient_Link
{
	public ResourceReference Other { get; set; }
	public string Type { get; set; }
}

public class Patient_Communication
{
	public CodeableConcept Language { get; set; }
	public bool? Preferred { get; set; }
}

public class Patient_Contact
{
	public CodeableConcept[]? Relationship { get; set; }
	public HumanName? Name { get; set; }
	public ContactPoint[]? Telecom { get; set; }
	public Address? Address { get; set; }
	public string? Gender { get; set; }
	public ResourceReference? Organization { get; set; }
	public Period? Period { get; set; }
}

public class Patient : DomainResource, IResource
{
	public bool? MultipleBirthBoolean { get; set; }
	public Address[]? Address { get; set; }
	public string? DeceasedDateTime { get; set; }
	public ResourceReference? ManagingOrganization { get; set; }
	public bool? DeceasedBoolean { get; set; }
	public HumanName[]? Name { get; set; }
	public string? BirthDate { get; set; }
	public int? MultipleBirthInteger { get; set; }
	public Attachment[]? Photo { get; set; }
	public Patient_Link[]? Link { get; set; }
	public bool? Active { get; set; }
	public Patient_Communication[]? Communication { get; set; }
	public Identifier[]? Identifier { get; set; }
	public ContactPoint[]? Telecom { get; set; }
	public ResourceReference[]? GeneralPractitioner { get; set; }
	public string? Gender { get; set; }
	public CodeableConcept? MaritalStatus { get; set; }
	public Patient_Contact[]? Contact { get; set; }
}
