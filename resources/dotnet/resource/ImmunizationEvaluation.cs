using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class ImmunizationEvaluation : DomainResource
{
	public required Base.ResourceReference Patient { get; set; }
	public string? Description { get; set; }
	public string? SeriesDosesPositiveInt { get; set; }
	public string? Date { get; set; }
	public string? DoseNumberPositiveInt { get; set; }
	public string? Series { get; set; }
	public Base.ResourceReference? Authority { get; set; }
	public string? DoseNumberString { get; set; }
	public string? SeriesDosesString { get; set; }
	public Base.CodeableConcept[]? DoseStatusReason { get; set; }
	public required Base.ResourceReference ImmunizationEvent { get; set; }
	public required string Status { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public required Base.CodeableConcept TargetDisease { get; set; }
	public required Base.CodeableConcept DoseStatus { get; set; }
}