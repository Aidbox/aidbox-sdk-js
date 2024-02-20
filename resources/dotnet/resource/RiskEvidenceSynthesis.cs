using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class RiskEvidenceSynthesis_SampleSize : BackboneElement
{
	public string? Description { get; set; }
	public int? NumberOfStudies { get; set; }
	public int? NumberOfParticipants { get; set; }
}

public class RiskEvidenceSynthesis_Certainty_CertaintySubcomponent : BackboneElement
{
	public Base.CodeableConcept? Type { get; set; }
	public Base.CodeableConcept[]? Rating { get; set; }
	public Base.Annotation[]? Note { get; set; }
}

public class RiskEvidenceSynthesis_Certainty : BackboneElement
{
	public Base.CodeableConcept[]? Rating { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public RiskEvidenceSynthesis_Certainty_CertaintySubcomponent[]? CertaintySubcomponent { get; set; }
}

public class RiskEvidenceSynthesis_RiskEstimate_PrecisionEstimate : BackboneElement
{
	public Base.CodeableConcept? Type { get; set; }
	public string? Level { get; set; }
	public string? From_ { get; set; }
	public string? To { get; set; }
}

public class RiskEvidenceSynthesis_RiskEstimate : BackboneElement
{
	public string? Description { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public string? Value { get; set; }
	public Base.CodeableConcept? UnitOfMeasure { get; set; }
	public int? DenominatorCount { get; set; }
	public int? NumeratorCount { get; set; }
	public RiskEvidenceSynthesis_RiskEstimate_PrecisionEstimate[]? PrecisionEstimate { get; set; }
}

public class RiskEvidenceSynthesis : DomainResource
{
	public string? Description { get; set; }
	public string? Date { get; set; }
	public Base.ContactDetail[]? Endorser { get; set; }
	public string? Publisher { get; set; }
	public string? ApprovalDate { get; set; }
	public Base.CodeableConcept[]? Jurisdiction { get; set; }
	public RiskEvidenceSynthesis_SampleSize? SampleSize { get; set; }
	public string? Name { get; set; }
	public Base.UsageContext[]? UseContext { get; set; }
	public string? Copyright { get; set; }
	public Base.CodeableConcept? StudyType { get; set; }
	public required Base.ResourceReference Outcome { get; set; }
	public Base.CodeableConcept[]? Topic { get; set; }
	public string? Title { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public Base.ContactDetail[]? Author { get; set; }
	public Base.CodeableConcept? SynthesisType { get; set; }
	public required string Status { get; set; }
	public required Base.ResourceReference Population { get; set; }
	public string? Url { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public string? LastReviewDate { get; set; }
	public Base.ContactDetail[]? Editor { get; set; }
	public RiskEvidenceSynthesis_Certainty[]? Certainty { get; set; }
	public Base.ContactDetail[]? Reviewer { get; set; }
	public Base.ResourceReference? Exposure { get; set; }
	public string? Version { get; set; }
	public Base.RelatedArtifact[]? RelatedArtifact { get; set; }
	public Base.ContactDetail[]? Contact { get; set; }
	public RiskEvidenceSynthesis_RiskEstimate? RiskEstimate { get; set; }
	public Base.Period? EffectivePeriod { get; set; }
}