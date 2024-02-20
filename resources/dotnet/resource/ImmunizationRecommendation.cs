using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class ImmunizationRecommendation_Recommendation_DateCriterion : BackboneElement
{
	public required Base.CodeableConcept Code { get; set; }
	public required string Value { get; set; }
}

public class ImmunizationRecommendation_Recommendation : BackboneElement
{
	public string? Description { get; set; }
	public string? SeriesDosesPositiveInt { get; set; }
	public Base.CodeableConcept[]? ContraindicatedVaccineCode { get; set; }
	public string? DoseNumberPositiveInt { get; set; }
	public string? Series { get; set; }
	public Base.CodeableConcept[]? VaccineCode { get; set; }
	public string? DoseNumberString { get; set; }
	public string? SeriesDosesString { get; set; }
	public required Base.CodeableConcept ForecastStatus { get; set; }
	public Base.CodeableConcept[]? ForecastReason { get; set; }
	public ImmunizationRecommendation_Recommendation_DateCriterion[]? DateCriterion { get; set; }
	public Base.CodeableConcept? TargetDisease { get; set; }
	public Base.ResourceReference[]? SupportingImmunization { get; set; }
	public Base.ResourceReference[]? SupportingPatientInformation { get; set; }
}

public class ImmunizationRecommendation : DomainResource
{
	public Base.Identifier[]? Identifier { get; set; }
	public required Base.ResourceReference Patient { get; set; }
	public required string Date { get; set; }
	public Base.ResourceReference? Authority { get; set; }
	public required ImmunizationRecommendation_Recommendation[] Recommendation { get; set; }
}