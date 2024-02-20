using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class Schedule : DomainResource
{
	public Base.Identifier[]? Identifier { get; set; }
	public bool? Active { get; set; }
	public Base.CodeableConcept[]? ServiceCategory { get; set; }
	public Base.CodeableConcept[]? ServiceType { get; set; }
	public Base.CodeableConcept[]? Specialty { get; set; }
	public required Base.ResourceReference[] Actor { get; set; }
	public Base.Period? PlanningHorizon { get; set; }
	public string? Comment { get; set; }
}