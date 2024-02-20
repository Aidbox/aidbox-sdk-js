using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Constraint;

public class CodexrtRadiotherapyCoursePrescription
{
	public Meta Meta { get; } = new() { Profile = ["http://hl7.org/fhir/us/codex-radiation-therapy/StructureDefinition/codexrt-radiotherapy-course-prescription"] };
	public Base.CodeableConcept? PerformerType { get; set; }
	public required Base.CodeableConcept[] Category { get; set; }
	public Base.ResourceReference[]? Insurance { get; set; }
	public string[]? InstantiatesCanonical { get; set; }
	public string[]? InstantiatesUri { get; set; }
	public Base.ResourceReference[]? RelevantHistory { get; set; }
	public Base.ResourceReference[]? SupportingInfo { get; set; }
	public Base.ResourceReference? Encounter { get; set; }
	public string? PatientInstruction { get; set; }
	public Base.CodeableConcept[]? ReasonCode { get; set; }
	public string? AuthoredOn { get; set; }
	public string? OccurrenceTiming { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public bool? AsNeededBoolean { get; set; }
	public Base.Identifier? Requisition { get; set; }
	public Base.ResourceReference[]? LocationReference { get; set; }
	public Base.ResourceReference? Requester { get; set; }
	public string? Priority { get; set; }
	public Base.Period? OccurrencePeriod { get; set; }
	public required string Status { get; set; }
	public Base.Ratio? QuantityRatio { get; set; }
	public required Base.CodeableConcept Code { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.CodeableConcept[]? BodySite { get; set; }
	public required string Intent { get; set; }
	public Base.Range? QuantityRange { get; set; }
	public Base.Quantity? QuantityQuantity { get; set; }
	public Base.ResourceReference[]? Replaces { get; set; }
	public Base.CodeableConcept[]? OrderDetail { get; set; }
	public Base.ResourceReference[]? BasedOn { get; set; }
	public Base.CodeableConcept[]? LocationCode { get; set; }
	public string? OccurrenceDateTime { get; set; }
	public required Base.ResourceReference Subject { get; set; }
	public Base.CodeableConcept? AsNeededCodeableConcept { get; set; }
	public Base.ResourceReference[]? Performer { get; set; }
	public Base.ResourceReference[]? ReasonReference { get; set; }
	public Base.Narrative? Text { get; set; }
	public Base.Resource[]? Contained { get; set; }
	public Base.Extension[]? Extension { get; set; }
	public Base.Extension[]? ModifierExtension { get; set; }
	public string? Id { get; set; }
	public string? ImplicitRules { get; set; }
	public string? Language { get; set; }
}