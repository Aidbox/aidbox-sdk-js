using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Constraint;

public class McodeTumor
{
	public Meta Meta { get; } = new() { Profile = ["http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-tumor"] };
	public required Base.Identifier[] Identifier { get; set; }
	public bool? Active { get; set; }
	public Base.CodeableConcept? Morphology { get; set; }
	public required Base.CodeableConcept Location { get; set; }
	public Base.CodeableConcept[]? LocationQualifier { get; set; }
	public string? Description { get; set; }
	public Base.Attachment[]? Image { get; set; }
	public required Base.ResourceReference Patient { get; set; }
	public Base.Narrative? Text { get; set; }
	public Base.Resource[]? Contained { get; set; }
	public Base.Extension[]? Extension { get; set; }
	public Base.Extension[]? ModifierExtension { get; set; }
	public string? Id { get; set; }
	public string? ImplicitRules { get; set; }
	public string? Language { get; set; }
}