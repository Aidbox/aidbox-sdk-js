using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Constraint;

public class UsCoreOrganization
{
	public Meta Meta { get; } = new() { Profile = ["http://hl7.org/fhir/us/core/StructureDefinition/us-core-organization"] };
	public Base.Address[]? Address { get; set; }
	public required string Name { get; set; }
	public Base.CodeableConcept[]? Type { get; set; }
	public string[]? Alias { get; set; }
	public required bool Active { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.ContactPoint[]? Telecom { get; set; }
	public Base.ResourceReference? PartOf { get; set; }
	public Base.ResourceReference[]? Endpoint { get; set; }
	public Organization_Contact[]? Contact { get; set; }
	public Base.Narrative? Text { get; set; }
	public Base.Resource[]? Contained { get; set; }
	public Base.Extension[]? Extension { get; set; }
	public Base.Extension[]? ModifierExtension { get; set; }
	public string? Id { get; set; }
	public string? ImplicitRules { get; set; }
	public string? Language { get; set; }

public class Organization_Contact : BackboneElement
{
	public Base.CodeableConcept? Purpose { get; set; }
	public Base.HumanName? Name { get; set; }
	public Base.ContactPoint[]? Telecom { get; set; }
	public Base.Address? Address { get; set; }
}
}