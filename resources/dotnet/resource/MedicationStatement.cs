using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class MedicationStatement : DomainResource
{
	public Base.CodeableConcept? Category { get; set; }
	public string[]? Dosage { get; set; }
	public Base.ResourceReference[]? DerivedFrom { get; set; }
	public Base.CodeableConcept[]? ReasonCode { get; set; }
	public Base.CodeableConcept? MedicationCodeableConcept { get; set; }
	public Base.CodeableConcept[]? StatusReason { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public string? EffectiveDateTime { get; set; }
	public required string Status { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.ResourceReference? Context { get; set; }
	public string? DateAsserted { get; set; }
	public Base.ResourceReference[]? BasedOn { get; set; }
	public Base.ResourceReference? MedicationReference { get; set; }
	public Base.ResourceReference[]? PartOf { get; set; }
	public Base.ResourceReference? InformationSource { get; set; }
	public required Base.ResourceReference Subject { get; set; }
	public Base.Period? EffectivePeriod { get; set; }
	public Base.ResourceReference[]? ReasonReference { get; set; }
}