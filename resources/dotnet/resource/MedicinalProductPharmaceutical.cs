using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class MedicinalProductPharmaceutical_Characteristics : BackboneElement
{
	public required Base.CodeableConcept Code { get; set; }
	public Base.CodeableConcept? Status { get; set; }
}

public class MedicinalProductPharmaceutical_RouteOfAdministration_TargetSpecies_WithdrawalPeriod : BackboneElement
{
	public required Base.CodeableConcept Tissue { get; set; }
	public required Base.Quantity Value { get; set; }
	public string? SupportingInformation { get; set; }
}

public class MedicinalProductPharmaceutical_RouteOfAdministration_TargetSpecies : BackboneElement
{
	public required Base.CodeableConcept Code { get; set; }
	public MedicinalProductPharmaceutical_RouteOfAdministration_TargetSpecies_WithdrawalPeriod[]? WithdrawalPeriod { get; set; }
}

public class MedicinalProductPharmaceutical_RouteOfAdministration : BackboneElement
{
	public required Base.CodeableConcept Code { get; set; }
	public Base.Quantity? FirstDose { get; set; }
	public Base.Quantity? MaxSingleDose { get; set; }
	public Base.Quantity? MaxDosePerDay { get; set; }
	public Base.Ratio? MaxDosePerTreatmentPeriod { get; set; }
	public string? MaxTreatmentPeriod { get; set; }
	public MedicinalProductPharmaceutical_RouteOfAdministration_TargetSpecies[]? TargetSpecies { get; set; }
}

public class MedicinalProductPharmaceutical : DomainResource
{
	public Base.Identifier[]? Identifier { get; set; }
	public required Base.CodeableConcept AdministrableDoseForm { get; set; }
	public Base.CodeableConcept? UnitOfPresentation { get; set; }
	public Base.ResourceReference[]? Ingredient { get; set; }
	public Base.ResourceReference[]? Device { get; set; }
	public MedicinalProductPharmaceutical_Characteristics[]? Characteristics { get; set; }
	public required MedicinalProductPharmaceutical_RouteOfAdministration[] RouteOfAdministration { get; set; }
}