using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class ResearchStudy_Arm : BackboneElement
{
	public required string Name { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public string? Description { get; set; }
}

public class ResearchStudy_Objective : BackboneElement
{
	public string? Name { get; set; }
	public Base.CodeableConcept? Type { get; set; }
}

public class ResearchStudy : DomainResource
{
	public string? Description { get; set; }
	public Base.CodeableConcept[]? Category { get; set; }
	public Base.ResourceReference[]? Enrollment { get; set; }
	public ResearchStudy_Arm[]? Arm { get; set; }
	public Base.ResourceReference[]? Site { get; set; }
	public Base.ResourceReference[]? Protocol { get; set; }
	public Base.ResourceReference? PrincipalInvestigator { get; set; }
	public Base.CodeableConcept? Phase { get; set; }
	public Base.CodeableConcept? ReasonStopped { get; set; }
	public string? Title { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public Base.CodeableConcept[]? Keyword { get; set; }
	public required string Status { get; set; }
	public Base.CodeableConcept[]? Condition { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.CodeableConcept? PrimaryPurposeType { get; set; }
	public Base.CodeableConcept[]? Focus { get; set; }
	public ResearchStudy_Objective[]? Objective { get; set; }
	public Base.Period? Period { get; set; }
	public Base.ResourceReference[]? PartOf { get; set; }
	public Base.RelatedArtifact[]? RelatedArtifact { get; set; }
	public Base.CodeableConcept[]? Location { get; set; }
	public Base.ContactDetail[]? Contact { get; set; }
	public Base.ResourceReference? Sponsor { get; set; }
}