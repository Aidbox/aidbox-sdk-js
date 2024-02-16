using HL7.FHIR.R4.BASE;
using UTILS;

namespace HL7.MCODE;

public class Patient_Link : BackboneElement
{
	public required ResourceReference Other { get; set; }
	public required string Type { get; set; }
}

public class Patient_Communication : BackboneElement
{
	public required CodeableConcept Language { get; set; }
	public bool? Preferred { get; set; }
}

public class Patient_Contact : BackboneElement
{
	public CodeableConcept[]? Relationship { get; set; }
	public HumanName? Name { get; set; }
	public ContactPoint[]? Telecom { get; set; }
	public Address? Address { get; set; }
	public string? Gender { get; set; }
	public ResourceReference? Organization { get; set; }
	public Period? Period { get; set; }
}

public class McodeCancerPatient : IResource
{
	public Meta Meta { get; } = new() { Profile = ["http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-patient"] };
	public bool? MultipleBirthBoolean { get; set; }
	public Address[]? Address { get; set; }
	public string? DeceasedDateTime { get; set; }
	public ResourceReference? ManagingOrganization { get; set; }
	public bool? DeceasedBoolean { get; set; }
	public required HumanName[] Name { get; set; }
	public string? BirthDate { get; set; }
	public int? MultipleBirthInteger { get; set; }
	public Attachment[]? Photo { get; set; }
	public Patient_Link[]? Link { get; set; }
	public bool? Active { get; set; }
	public Patient_Communication[]? Communication { get; set; }
	public required Identifier[] Identifier { get; set; }
	public ContactPoint[]? Telecom { get; set; }
	public ResourceReference[]? GeneralPractitioner { get; set; }
	public required string Gender { get; set; }
	public CodeableConcept? MaritalStatus { get; set; }
	public Patient_Contact[]? Contact { get; set; }
	public Narrative? Text { get; set; }
	public Resource[]? Contained { get; set; }
	public Extension[]? Extension { get; set; }
	public Extension[]? ModifierExtension { get; set; }
	public string? Id { get; set; }
	public string? ImplicitRules { get; set; }
	public string? Language { get; set; }
}


