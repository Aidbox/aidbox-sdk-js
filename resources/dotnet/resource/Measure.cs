using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class Measure_Group_Population : BackboneElement
{
	public Base.CodeableConcept? Code { get; set; }
	public string? Description { get; set; }
	public required Base.ResourceExpression Criteria { get; set; }
}

public class Measure_Group_Stratifier_Component : BackboneElement
{
	public Base.CodeableConcept? Code { get; set; }
	public string? Description { get; set; }
	public required Base.ResourceExpression Criteria { get; set; }
}

public class Measure_Group_Stratifier : BackboneElement
{
	public Base.CodeableConcept? Code { get; set; }
	public string? Description { get; set; }
	public Base.ResourceExpression? Criteria { get; set; }
	public Measure_Group_Stratifier_Component[]? Component { get; set; }
}

public class Measure_Group : BackboneElement
{
	public Base.CodeableConcept? Code { get; set; }
	public string? Description { get; set; }
	public Measure_Group_Population[]? Population { get; set; }
	public Measure_Group_Stratifier[]? Stratifier { get; set; }
}

public class Measure_SupplementalData : BackboneElement
{
	public Base.CodeableConcept? Code { get; set; }
	public Base.CodeableConcept[]? Usage { get; set; }
	public string? Description { get; set; }
	public required Base.ResourceExpression Criteria { get; set; }
}

public class Measure : DomainResource
{
	public string? Description { get; set; }
	public string[]? Definition { get; set; }
	public string? Date { get; set; }
	public Measure_Group[]? Group { get; set; }
	public Base.ContactDetail[]? Endorser { get; set; }
	public string? Publisher { get; set; }
	public string? ApprovalDate { get; set; }
	public Base.CodeableConcept? CompositeScoring { get; set; }
	public string? Disclaimer { get; set; }
	public Base.CodeableConcept[]? Jurisdiction { get; set; }
	public string? Purpose { get; set; }
	public Base.CodeableConcept? SubjectCodeableConcept { get; set; }
	public string? Name { get; set; }
	public Base.UsageContext[]? UseContext { get; set; }
	public string? Copyright { get; set; }
	public string? Guidance { get; set; }
	public Base.CodeableConcept[]? Type { get; set; }
	public bool? Experimental { get; set; }
	public Base.CodeableConcept[]? Topic { get; set; }
	public string? Title { get; set; }
	public Measure_SupplementalData[]? SupplementalData { get; set; }
	public string[]? Library { get; set; }
	public Base.ContactDetail[]? Author { get; set; }
	public string? Usage { get; set; }
	public string? Rationale { get; set; }
	public required string Status { get; set; }
	public string? Subtitle { get; set; }
	public string? Url { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public string? LastReviewDate { get; set; }
	public Base.ContactDetail[]? Editor { get; set; }
	public string? RiskAdjustment { get; set; }
	public Base.CodeableConcept? Scoring { get; set; }
	public Base.ContactDetail[]? Reviewer { get; set; }
	public string? Version { get; set; }
	public Base.RelatedArtifact[]? RelatedArtifact { get; set; }
	public Base.ContactDetail[]? Contact { get; set; }
	public Base.ResourceReference? SubjectReference { get; set; }
	public Base.CodeableConcept? ImprovementNotation { get; set; }
	public string? RateAggregation { get; set; }
	public Base.Period? EffectivePeriod { get; set; }
	public string? ClinicalRecommendationStatement { get; set; }
}