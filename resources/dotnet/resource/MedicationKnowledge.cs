using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class MedicationKnowledge_Monograph : BackboneElement
{
	public Base.CodeableConcept? Type { get; set; }
	public Base.ResourceReference? Source { get; set; }
}

public class MedicationKnowledge_Regulatory_Substitution : BackboneElement
{
	public required Base.CodeableConcept Type { get; set; }
	public required bool Allowed { get; set; }
}

public class MedicationKnowledge_Regulatory_Schedule : BackboneElement
{
	public required Base.CodeableConcept Schedule { get; set; }
}

public class MedicationKnowledge_Regulatory_MaxDispense : BackboneElement
{
	public required Base.Quantity Quantity { get; set; }
	public string? Period { get; set; }
}

public class MedicationKnowledge_Regulatory : BackboneElement
{
	public required Base.ResourceReference RegulatoryAuthority { get; set; }
	public MedicationKnowledge_Regulatory_Substitution[]? Substitution { get; set; }
	public MedicationKnowledge_Regulatory_Schedule[]? Schedule { get; set; }
	public MedicationKnowledge_Regulatory_MaxDispense? MaxDispense { get; set; }
}

public class MedicationKnowledge_DrugCharacteristic : BackboneElement
{
	public Base.CodeableConcept? Type { get; set; }
	public Base.CodeableConcept? ValueCodeableConcept { get; set; }
	public string? ValueString { get; set; }
	public Base.Quantity? ValueQuantity { get; set; }
	public string? ValueBase64Binary { get; set; }
}

public class MedicationKnowledge_Packaging : BackboneElement
{
	public Base.CodeableConcept? Type { get; set; }
	public Base.Quantity? Quantity { get; set; }
}

public class MedicationKnowledge_RelatedMedicationKnowledge : BackboneElement
{
	public required Base.CodeableConcept Type { get; set; }
	public required Base.ResourceReference[] Reference { get; set; }
}

public class MedicationKnowledge_MedicineClassification : BackboneElement
{
	public required Base.CodeableConcept Type { get; set; }
	public Base.CodeableConcept[]? Classification { get; set; }
}

public class MedicationKnowledge_Kinetics : BackboneElement
{
	public Base.Quantity[]? AreaUnderCurve { get; set; }
	public Base.Quantity[]? LethalDose50 { get; set; }
	public string? HalfLifePeriod { get; set; }
}

public class MedicationKnowledge_Ingredient : BackboneElement
{
	public Base.CodeableConcept? ItemCodeableConcept { get; set; }
	public Base.ResourceReference? ItemReference { get; set; }
	public bool? IsActive { get; set; }
	public Base.Ratio? Strength { get; set; }
}

public class MedicationKnowledge_MonitoringProgram : BackboneElement
{
	public Base.CodeableConcept? Type { get; set; }
	public string? Name { get; set; }
}

public class MedicationKnowledge_AdministrationGuidelines_Dosage : BackboneElement
{
	public required Base.CodeableConcept Type { get; set; }
	public required string[] Dosage { get; set; }
}

public class MedicationKnowledge_AdministrationGuidelines_PatientCharacteristics : BackboneElement
{
	public Base.CodeableConcept? CharacteristicCodeableConcept { get; set; }
	public Base.Quantity? CharacteristicQuantity { get; set; }
	public string[]? Value { get; set; }
}

public class MedicationKnowledge_AdministrationGuidelines : BackboneElement
{
	public MedicationKnowledge_AdministrationGuidelines_Dosage[]? Dosage { get; set; }
	public Base.CodeableConcept? IndicationCodeableConcept { get; set; }
	public Base.ResourceReference? IndicationReference { get; set; }
	public MedicationKnowledge_AdministrationGuidelines_PatientCharacteristics[]? PatientCharacteristics { get; set; }
}

public class MedicationKnowledge_Cost : BackboneElement
{
	public required Base.CodeableConcept Type { get; set; }
	public string? Source { get; set; }
	public required Base.Money Cost { get; set; }
}

public class MedicationKnowledge : DomainResource
{
	public string? PreparationInstruction { get; set; }
	public Base.Quantity? Amount { get; set; }
	public MedicationKnowledge_Monograph[]? Monograph { get; set; }
	public MedicationKnowledge_Regulatory[]? Regulatory { get; set; }
	public Base.CodeableConcept? DoseForm { get; set; }
	public Base.CodeableConcept[]? IntendedRoute { get; set; }
	public MedicationKnowledge_DrugCharacteristic[]? DrugCharacteristic { get; set; }
	public MedicationKnowledge_Packaging? Packaging { get; set; }
	public MedicationKnowledge_RelatedMedicationKnowledge[]? RelatedMedicationKnowledge { get; set; }
	public MedicationKnowledge_MedicineClassification[]? MedicineClassification { get; set; }
	public MedicationKnowledge_Kinetics[]? Kinetics { get; set; }
	public Base.ResourceReference[]? AssociatedMedication { get; set; }
	public MedicationKnowledge_Ingredient[]? Ingredient { get; set; }
	public MedicationKnowledge_MonitoringProgram[]? MonitoringProgram { get; set; }
	public Base.ResourceReference[]? Contraindication { get; set; }
	public string? Status { get; set; }
	public Base.CodeableConcept[]? ProductType { get; set; }
	public string[]? Synonym { get; set; }
	public Base.CodeableConcept? Code { get; set; }
	public MedicationKnowledge_AdministrationGuidelines[]? AdministrationGuidelines { get; set; }
	public Base.ResourceReference? Manufacturer { get; set; }
	public MedicationKnowledge_Cost[]? Cost { get; set; }
}