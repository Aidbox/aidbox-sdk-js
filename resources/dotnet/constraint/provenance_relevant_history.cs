using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Constraint;

public class ProvenanceRelevantHistory
{
	public Meta Meta { get; } = new() { Profile = ["http://hl7.org/fhir/StructureDefinition/provenance-relevant-history"] };
	public Base.Signature[]? Signature { get; set; }
	public string? OccurredDateTime { get; set; }
	public required string Recorded { get; set; }
	public required Provenance_Agent[] Agent { get; set; }
	public string[]? Policy { get; set; }
	public Base.CodeableConcept[]? Reason { get; set; }
	public required Base.CodeableConcept Activity { get; set; }
	public required Base.ResourceReference[] Target { get; set; }
	public Base.ResourceReference? Location { get; set; }
	public Provenance_Entity[]? Entity { get; set; }
	public Base.Narrative? Text { get; set; }
	public Base.Resource[]? Contained { get; set; }
	public Base.Extension[]? Extension { get; set; }
	public Base.Extension[]? ModifierExtension { get; set; }
	public string? Id { get; set; }
	public string? ImplicitRules { get; set; }
	public string? Language { get; set; }

public class Provenance_Agent : BackboneElement
{
	public Base.CodeableConcept? Type { get; set; }
	public Base.CodeableConcept[]? Role { get; set; }
	public required Base.ResourceReference Who { get; set; }
	public Base.ResourceReference? OnBehalfOf { get; set; }
}

public class Provenance_Entity : BackboneElement
{
	public required string Role { get; set; }
	public required Base.ResourceReference What { get; set; }
	public string[]? Agent { get; set; }
}
}