using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Constraint;

public class UsCorePractitioner
{
	public Meta Meta { get; } = new() { Profile = ["http://hl7.org/fhir/us/core/StructureDefinition/us-core-practitioner"] };
	public Base.Address[]? Address { get; set; }
	public required Base.HumanName[] Name { get; set; }
	public string? BirthDate { get; set; }
	public Base.Attachment[]? Photo { get; set; }
	public bool? Active { get; set; }
	public Base.CodeableConcept[]? Communication { get; set; }
	public required Base.Identifier[] Identifier { get; set; }
	public Practitioner_Qualification[]? Qualification { get; set; }
	public Base.ContactPoint[]? Telecom { get; set; }
	public string? Gender { get; set; }
	public Base.Narrative? Text { get; set; }
	public Base.Resource[]? Contained { get; set; }
	public Base.Extension[]? Extension { get; set; }
	public Base.Extension[]? ModifierExtension { get; set; }
	public string? Id { get; set; }
	public string? ImplicitRules { get; set; }
	public string? Language { get; set; }

public class Practitioner_Qualification : BackboneElement
{
	public Base.Identifier[]? Identifier { get; set; }
	public required Base.CodeableConcept Code { get; set; }
	public Base.Period? Period { get; set; }
	public Base.ResourceReference? Issuer { get; set; }
}
}