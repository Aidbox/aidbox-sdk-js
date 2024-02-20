using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class MedicationAdministration_Dosage : BackboneElement
{
	public string? Text { get; set; }
	public Base.CodeableConcept? Site { get; set; }
	public Base.CodeableConcept? Route { get; set; }
	public Base.CodeableConcept? Method { get; set; }
	public Base.Quantity? Dose { get; set; }
	public Base.Ratio? RateRatio { get; set; }
	public Base.Quantity? RateQuantity { get; set; }
}

public class MedicationAdministration_Performer : BackboneElement
{
	public Base.CodeableConcept? Function { get; set; }
	public required Base.ResourceReference Actor { get; set; }
}

public class MedicationAdministration : DomainResource
{
	public Base.CodeableConcept? Category { get; set; }
	public Base.ResourceReference? Request { get; set; }
	public Base.ResourceReference[]? EventHistory { get; set; }
	public MedicationAdministration_Dosage? Dosage { get; set; }
	public string[]? Instantiates { get; set; }
	public Base.CodeableConcept[]? ReasonCode { get; set; }
	public Base.CodeableConcept? MedicationCodeableConcept { get; set; }
	public Base.CodeableConcept[]? StatusReason { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public Base.ResourceReference[]? SupportingInformation { get; set; }
	public string? EffectiveDateTime { get; set; }
	public required string Status { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.ResourceReference? Context { get; set; }
	public Base.ResourceReference[]? Device { get; set; }
	public Base.ResourceReference? MedicationReference { get; set; }
	public Base.ResourceReference[]? PartOf { get; set; }
	public required Base.ResourceReference Subject { get; set; }
	public MedicationAdministration_Performer[]? Performer { get; set; }
	public Base.Period? EffectivePeriod { get; set; }
	public Base.ResourceReference[]? ReasonReference { get; set; }
}