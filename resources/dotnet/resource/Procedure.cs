using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class Procedure_FocalDevice : BackboneElement
{
	public Base.CodeableConcept? Action { get; set; }
	public required Base.ResourceReference Manipulated { get; set; }
}

public class Procedure_Performer : BackboneElement
{
	public Base.CodeableConcept? Function { get; set; }
	public required Base.ResourceReference Actor { get; set; }
	public Base.ResourceReference? OnBehalfOf { get; set; }
}

public class Procedure : DomainResource
{
	public Base.CodeableConcept? Category { get; set; }
	public Base.ResourceReference[]? Report { get; set; }
	public Base.CodeableConcept[]? UsedCode { get; set; }
	public Base.ResourceReference[]? UsedReference { get; set; }
	public string[]? InstantiatesCanonical { get; set; }
	public string[]? InstantiatesUri { get; set; }
	public Procedure_FocalDevice[]? FocalDevice { get; set; }
	public Base.ResourceReference? Encounter { get; set; }
	public string? PerformedAge { get; set; }
	public Base.ResourceReference[]? ComplicationDetail { get; set; }
	public Base.CodeableConcept[]? ReasonCode { get; set; }
	public string? PerformedString { get; set; }
	public Base.CodeableConcept? StatusReason { get; set; }
	public Base.CodeableConcept? Outcome { get; set; }
	public Base.ResourceReference? Asserter { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public Base.Range? PerformedRange { get; set; }
	public Base.CodeableConcept[]? Complication { get; set; }
	public required string Status { get; set; }
	public string? PerformedDateTime { get; set; }
	public Base.ResourceReference? Recorder { get; set; }
	public Base.CodeableConcept? Code { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.CodeableConcept[]? BodySite { get; set; }
	public Base.ResourceReference[]? BasedOn { get; set; }
	public Base.ResourceReference[]? PartOf { get; set; }
	public Base.Period? PerformedPeriod { get; set; }
	public Base.ResourceReference? Location { get; set; }
	public Base.CodeableConcept[]? FollowUp { get; set; }
	public required Base.ResourceReference Subject { get; set; }
	public Procedure_Performer[]? Performer { get; set; }
	public Base.ResourceReference[]? ReasonReference { get; set; }
}