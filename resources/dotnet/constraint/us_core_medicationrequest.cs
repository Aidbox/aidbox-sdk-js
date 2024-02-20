using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Constraint;

public class UsCoreMedicationrequest
{
	public Meta Meta { get; } = new() { Profile = ["http://hl7.org/fhir/us/core/StructureDefinition/us-core-medicationrequest"] };
	public Base.CodeableConcept? PerformerType { get; set; }
	public Base.CodeableConcept[]? Category { get; set; }
	public Base.ResourceReference[]? Insurance { get; set; }
	public string[]? InstantiatesCanonical { get; set; }
	public Base.ResourceReference[]? EventHistory { get; set; }
	public string[]? InstantiatesUri { get; set; }
	public MedicationRequest_Substitution? Substitution { get; set; }
	public Base.ResourceReference[]? DetectedIssue { get; set; }
	public Base.ResourceReference? Encounter { get; set; }
	public MedicationRequest_DispenseRequest? DispenseRequest { get; set; }
	public Base.CodeableConcept[]? ReasonCode { get; set; }
	public Base.CodeableConcept? MedicationCodeableConcept { get; set; }
	public Base.CodeableConcept? StatusReason { get; set; }
	public string? AuthoredOn { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public required Base.ResourceReference Requester { get; set; }
	public Base.ResourceReference[]? SupportingInformation { get; set; }
	public Base.ResourceReference? ReportedReference { get; set; }
	public string? Priority { get; set; }
	public required string Status { get; set; }
	public string[]? DosageInstruction { get; set; }
	public Base.Identifier? GroupIdentifier { get; set; }
	public Base.ResourceReference? Recorder { get; set; }
	public bool? ReportedBoolean { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public bool? DoNotPerform { get; set; }
	public required string Intent { get; set; }
	public Base.ResourceReference[]? BasedOn { get; set; }
	public Base.ResourceReference? PriorPrescription { get; set; }
	public Base.ResourceReference? MedicationReference { get; set; }
	public Base.CodeableConcept? CourseOfTherapyType { get; set; }
	public required Base.ResourceReference Subject { get; set; }
	public Base.ResourceReference? Performer { get; set; }
	public Base.ResourceReference[]? ReasonReference { get; set; }
	public Base.Narrative? Text { get; set; }
	public Base.Resource[]? Contained { get; set; }
	public Base.Extension[]? Extension { get; set; }
	public Base.Extension[]? ModifierExtension { get; set; }
	public string? Id { get; set; }
	public string? ImplicitRules { get; set; }
	public string? Language { get; set; }

public class MedicationRequest_Substitution : BackboneElement
{
	public bool? AllowedBoolean { get; set; }
	public Base.CodeableConcept? AllowedCodeableConcept { get; set; }
	public Base.CodeableConcept? Reason { get; set; }
}

public class MedicationRequest_DispenseRequest_InitialFill : BackboneElement
{
	public Base.Quantity? Quantity { get; set; }
	public string? Duration { get; set; }
}

public class MedicationRequest_DispenseRequest : BackboneElement
{
	public MedicationRequest_DispenseRequest_InitialFill? InitialFill { get; set; }
	public string? DispenseInterval { get; set; }
	public Base.Period? ValidityPeriod { get; set; }
	public string? NumberOfRepeatsAllowed { get; set; }
	public Base.Quantity? Quantity { get; set; }
	public string? ExpectedSupplyDuration { get; set; }
	public Base.ResourceReference? Performer { get; set; }
}
}