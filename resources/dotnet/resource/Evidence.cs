using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class Evidence : DomainResource
{
	public string? Description { get; set; }
	public string? Date { get; set; }
	public Base.ContactDetail[]? Endorser { get; set; }
	public string? Publisher { get; set; }
	public string? ApprovalDate { get; set; }
	public Base.CodeableConcept[]? Jurisdiction { get; set; }
	public string? Name { get; set; }
	public Base.UsageContext[]? UseContext { get; set; }
	public string? Copyright { get; set; }
	public Base.ResourceReference[]? Outcome { get; set; }
	public Base.CodeableConcept[]? Topic { get; set; }
	public string? Title { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public Base.ContactDetail[]? Author { get; set; }
	public required string Status { get; set; }
	public string? Subtitle { get; set; }
	public string? Url { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public string? LastReviewDate { get; set; }
	public Base.ContactDetail[]? Editor { get; set; }
	public Base.ContactDetail[]? Reviewer { get; set; }
	public string? ShortTitle { get; set; }
	public string? Version { get; set; }
	public Base.RelatedArtifact[]? RelatedArtifact { get; set; }
	public Base.ContactDetail[]? Contact { get; set; }
	public required Base.ResourceReference ExposureBackground { get; set; }
	public Base.Period? EffectivePeriod { get; set; }
	public Base.ResourceReference[]? ExposureVariant { get; set; }
}