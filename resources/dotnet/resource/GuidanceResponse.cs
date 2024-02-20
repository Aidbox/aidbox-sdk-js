using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class GuidanceResponse : DomainResource
{
	public Base.DataRequirement[]? DataRequirement { get; set; }
	public string? ModuleCanonical { get; set; }
	public Base.ResourceReference? Encounter { get; set; }
	public Base.CodeableConcept[]? ReasonCode { get; set; }
	public Base.ResourceReference? OutputParameters { get; set; }
	public Base.ResourceReference[]? EvaluationMessage { get; set; }
	public Base.Identifier? RequestIdentifier { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public required string Status { get; set; }
	public Base.ResourceReference? Result { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.CodeableConcept? ModuleCodeableConcept { get; set; }
	public string? ModuleUri { get; set; }
	public string? OccurrenceDateTime { get; set; }
	public Base.ResourceReference? Subject { get; set; }
	public Base.ResourceReference? Performer { get; set; }
	public Base.ResourceReference[]? ReasonReference { get; set; }
}