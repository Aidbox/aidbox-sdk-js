using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class BodyStructure : DomainResource
{
	public Base.Identifier[]? Identifier { get; set; }
	public bool? Active { get; set; }
	public Base.CodeableConcept? Morphology { get; set; }
	public Base.CodeableConcept? Location { get; set; }
	public Base.CodeableConcept[]? LocationQualifier { get; set; }
	public string? Description { get; set; }
	public Base.Attachment[]? Image { get; set; }
	public required Base.ResourceReference Patient { get; set; }
}