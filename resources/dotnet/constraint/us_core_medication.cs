using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Constraint;

public class UsCoreMedication
{
	public Meta Meta { get; } = new() { Profile = ["http://hl7.org/fhir/us/core/StructureDefinition/us-core-medication"] };
	public Base.Identifier[]? Identifier { get; set; }
	public required Base.CodeableConcept Code { get; set; }
	public string? Status { get; set; }
	public Base.ResourceReference? Manufacturer { get; set; }
	public Base.CodeableConcept? Form { get; set; }
	public Base.Ratio? Amount { get; set; }
	public Medication_Ingredient[]? Ingredient { get; set; }
	public Medication_Batch? Batch { get; set; }
	public Base.Narrative? Text { get; set; }
	public Base.Resource[]? Contained { get; set; }
	public Base.Extension[]? Extension { get; set; }
	public Base.Extension[]? ModifierExtension { get; set; }
	public string? Id { get; set; }
	public string? ImplicitRules { get; set; }
	public string? Language { get; set; }

public class Medication_Ingredient : BackboneElement
{
	public Base.CodeableConcept? ItemCodeableConcept { get; set; }
	public Base.ResourceReference? ItemReference { get; set; }
	public bool? IsActive { get; set; }
	public Base.Ratio? Strength { get; set; }
}

public class Medication_Batch : BackboneElement
{
	public string? LotNumber { get; set; }
	public string? ExpirationDate { get; set; }
}
}