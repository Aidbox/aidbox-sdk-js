using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class ResearchElementDefinition_Characteristic : BackboneElement
{
	public string? StudyEffectiveTiming { get; set; }
	public bool? Exclude { get; set; }
	public Base.ResourceExpression? DefinitionExpression { get; set; }
	public string? ParticipantEffectiveDuration { get; set; }
	public string? StudyEffectiveDuration { get; set; }
	public Base.DataRequirement? DefinitionDataRequirement { get; set; }
	public string? DefinitionCanonical { get; set; }
	public string? StudyEffectiveGroupMeasure { get; set; }
	public string? ParticipantEffectiveTiming { get; set; }
	public string? ParticipantEffectiveGroupMeasure { get; set; }
	public string? StudyEffectiveDescription { get; set; }
	public string? ParticipantEffectiveDateTime { get; set; }
	public string? StudyEffectiveTimeFromStart { get; set; }
	public Base.CodeableConcept? UnitOfMeasure { get; set; }
	public Base.Period? ParticipantEffectivePeriod { get; set; }
	public string? ParticipantEffectiveDescription { get; set; }
	public Base.CodeableConcept? DefinitionCodeableConcept { get; set; }
	public Base.UsageContext[]? UsageContext { get; set; }
	public Base.Period? StudyEffectivePeriod { get; set; }
	public string? ParticipantEffectiveTimeFromStart { get; set; }
	public string? StudyEffectiveDateTime { get; set; }
}

public class ResearchElementDefinition : DomainResource
{
	public string? Description { get; set; }
	public string? Date { get; set; }
	public Base.ContactDetail[]? Endorser { get; set; }
	public string? Publisher { get; set; }
	public string? ApprovalDate { get; set; }
	public string? VariableType { get; set; }
	public Base.CodeableConcept[]? Jurisdiction { get; set; }
	public string? Purpose { get; set; }
	public Base.CodeableConcept? SubjectCodeableConcept { get; set; }
	public string? Name { get; set; }
	public Base.UsageContext[]? UseContext { get; set; }
	public string? Copyright { get; set; }
	public required string Type { get; set; }
	public bool? Experimental { get; set; }
	public Base.CodeableConcept[]? Topic { get; set; }
	public string? Title { get; set; }
	public string[]? Library { get; set; }
	public Base.ContactDetail[]? Author { get; set; }
	public required ResearchElementDefinition_Characteristic[] Characteristic { get; set; }
	public string? Usage { get; set; }
	public required string Status { get; set; }
	public string? Subtitle { get; set; }
	public string[]? Comment { get; set; }
	public string? Url { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public string? LastReviewDate { get; set; }
	public Base.ContactDetail[]? Editor { get; set; }
	public Base.ContactDetail[]? Reviewer { get; set; }
	public string? ShortTitle { get; set; }
	public string? Version { get; set; }
	public Base.RelatedArtifact[]? RelatedArtifact { get; set; }
	public Base.ContactDetail[]? Contact { get; set; }
	public Base.ResourceReference? SubjectReference { get; set; }
	public Base.Period? EffectivePeriod { get; set; }
}