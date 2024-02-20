using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class ResearchDefinition : DomainResource
{
	public string? Description { get; set; }
	public Base.ResourceReference? ExposureAlternative { get; set; }
	public string? Date { get; set; }
	public Base.ContactDetail[]? Endorser { get; set; }
	public string? Publisher { get; set; }
	public string? ApprovalDate { get; set; }
	public Base.CodeableConcept[]? Jurisdiction { get; set; }
	public string? Purpose { get; set; }
	public Base.CodeableConcept? SubjectCodeableConcept { get; set; }
	public string? Name { get; set; }
	public Base.UsageContext[]? UseContext { get; set; }
	public string? Copyright { get; set; }
	public bool? Experimental { get; set; }
	public Base.ResourceReference? Outcome { get; set; }
	public Base.CodeableConcept[]? Topic { get; set; }
	public string? Title { get; set; }
	public string[]? Library { get; set; }
	public Base.ContactDetail[]? Author { get; set; }
	public string? Usage { get; set; }
	public required string Status { get; set; }
	public string? Subtitle { get; set; }
	public required Base.ResourceReference Population { get; set; }
	public string[]? Comment { get; set; }
	public string? Url { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public string? LastReviewDate { get; set; }
	public Base.ContactDetail[]? Editor { get; set; }
	public Base.ContactDetail[]? Reviewer { get; set; }
	public string? ShortTitle { get; set; }
	public Base.ResourceReference? Exposure { get; set; }
	public string? Version { get; set; }
	public Base.RelatedArtifact[]? RelatedArtifact { get; set; }
	public Base.ContactDetail[]? Contact { get; set; }
	public Base.ResourceReference? SubjectReference { get; set; }
	public Base.Period? EffectivePeriod { get; set; }
}