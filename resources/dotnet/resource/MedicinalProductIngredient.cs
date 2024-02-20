using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class MedicinalProductIngredient_SpecifiedSubstance_Strength_ReferenceStrength : BackboneElement
{
	public Base.CodeableConcept? Substance { get; set; }
	public required Base.Ratio Strength { get; set; }
	public Base.Ratio? StrengthLowLimit { get; set; }
	public string? MeasurementPoint { get; set; }
	public Base.CodeableConcept[]? Country { get; set; }
}

public class MedicinalProductIngredient_SpecifiedSubstance_Strength : BackboneElement
{
	public required Base.Ratio Presentation { get; set; }
	public Base.Ratio? PresentationLowLimit { get; set; }
	public Base.Ratio? Concentration { get; set; }
	public Base.Ratio? ConcentrationLowLimit { get; set; }
	public string? MeasurementPoint { get; set; }
	public Base.CodeableConcept[]? Country { get; set; }
	public MedicinalProductIngredient_SpecifiedSubstance_Strength_ReferenceStrength[]? ReferenceStrength { get; set; }
}

public class MedicinalProductIngredient_SpecifiedSubstance : BackboneElement
{
	public required Base.CodeableConcept Code { get; set; }
	public required Base.CodeableConcept Group { get; set; }
	public Base.CodeableConcept? Confidentiality { get; set; }
	public MedicinalProductIngredient_SpecifiedSubstance_Strength[]? Strength { get; set; }
}

public class MedicinalProductIngredient_Substance : BackboneElement
{
	public required Base.CodeableConcept Code { get; set; }
	public string[]? Strength { get; set; }
}

public class MedicinalProductIngredient : DomainResource
{
	public Base.Identifier? Identifier { get; set; }
	public required Base.CodeableConcept Role { get; set; }
	public bool? AllergenicIndicator { get; set; }
	public Base.ResourceReference[]? Manufacturer { get; set; }
	public MedicinalProductIngredient_SpecifiedSubstance[]? SpecifiedSubstance { get; set; }
	public MedicinalProductIngredient_Substance? Substance { get; set; }
}