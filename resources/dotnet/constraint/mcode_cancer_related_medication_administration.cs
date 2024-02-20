using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Constraint;

public class McodeCancerRelatedMedicationAdministration
{
	public Meta Meta { get; } = new() { Profile = ["http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-cancer-related-medication-administration"] };
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
	public Base.Narrative? Text { get; set; }
	public Base.Resource[]? Contained { get; set; }
	public Base.Extension[]? Extension { get; set; }
	public Base.Extension[]? ModifierExtension { get; set; }
	public string? Id { get; set; }
	public string? ImplicitRules { get; set; }
	public string? Language { get; set; }

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
}