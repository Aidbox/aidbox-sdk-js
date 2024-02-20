using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class RiskAssessment_Prediction : BackboneElement
{
	public string? RelativeRisk { get; set; }
	public Base.Range? WhenRange { get; set; }
	public Base.CodeableConcept? Outcome { get; set; }
	public Base.Period? WhenPeriod { get; set; }
	public string? Rationale { get; set; }
	public Base.Range? ProbabilityRange { get; set; }
	public Base.CodeableConcept? QualitativeRisk { get; set; }
	public string? ProbabilityDecimal { get; set; }
}

public class RiskAssessment : DomainResource
{
	public Base.ResourceReference? Parent { get; set; }
	public Base.ResourceReference? Encounter { get; set; }
	public RiskAssessment_Prediction[]? Prediction { get; set; }
	public Base.CodeableConcept? Method { get; set; }
	public Base.ResourceReference[]? Basis { get; set; }
	public Base.CodeableConcept[]? ReasonCode { get; set; }
	public string? Mitigation { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public Base.Period? OccurrencePeriod { get; set; }
	public required string Status { get; set; }
	public Base.ResourceReference? Condition { get; set; }
	public Base.CodeableConcept? Code { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.ResourceReference? BasedOn { get; set; }
	public string? OccurrenceDateTime { get; set; }
	public required Base.ResourceReference Subject { get; set; }
	public Base.ResourceReference? Performer { get; set; }
	public Base.ResourceReference[]? ReasonReference { get; set; }
}