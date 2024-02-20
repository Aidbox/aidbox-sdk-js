using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class MedicinalProduct_ManufacturingBusinessOperation : BackboneElement
{
	public Base.CodeableConcept? OperationType { get; set; }
	public Base.Identifier? AuthorisationReferenceNumber { get; set; }
	public string? EffectiveDate { get; set; }
	public Base.CodeableConcept? ConfidentialityIndicator { get; set; }
	public Base.ResourceReference[]? Manufacturer { get; set; }
	public Base.ResourceReference? Regulator { get; set; }
}

public class MedicinalProduct_Name_NamePart : BackboneElement
{
	public required string Part { get; set; }
	public required Base.Coding Type { get; set; }
}

public class MedicinalProduct_Name_CountryLanguage : BackboneElement
{
	public required Base.CodeableConcept Country { get; set; }
	public Base.CodeableConcept? Jurisdiction { get; set; }
	public required Base.CodeableConcept Language { get; set; }
}

public class MedicinalProduct_Name : BackboneElement
{
	public required string ProductName { get; set; }
	public MedicinalProduct_Name_NamePart[]? NamePart { get; set; }
	public MedicinalProduct_Name_CountryLanguage[]? CountryLanguage { get; set; }
}

public class MedicinalProduct_SpecialDesignation : BackboneElement
{
	public string? Date { get; set; }
	public Base.CodeableConcept? Species { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public Base.CodeableConcept? IntendedUse { get; set; }
	public Base.CodeableConcept? Status { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.CodeableConcept? IndicationCodeableConcept { get; set; }
	public Base.ResourceReference? IndicationReference { get; set; }
}

public class MedicinalProduct : DomainResource
{
	public Base.CodeableConcept? AdditionalMonitoringIndicator { get; set; }
	public MedicinalProduct_ManufacturingBusinessOperation[]? ManufacturingBusinessOperation { get; set; }
	public Base.CodeableConcept? CombinedPharmaceuticalDoseForm { get; set; }
	public Base.ResourceReference[]? ClinicalTrial { get; set; }
	public Base.CodeableConcept[]? ProductClassification { get; set; }
	public required MedicinalProduct_Name[] Name { get; set; }
	public Base.ResourceReference[]? MasterFile { get; set; }
	public Base.ResourceReference[]? PharmaceuticalProduct { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public Base.MarketingStatus[]? MarketingStatus { get; set; }
	public string[]? SpecialMeasures { get; set; }
	public MedicinalProduct_SpecialDesignation[]? SpecialDesignation { get; set; }
	public Base.ResourceReference[]? PackagedMedicinalProduct { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.Identifier[]? CrossReference { get; set; }
	public Base.ResourceReference[]? AttachedDocument { get; set; }
	public Base.Coding? Domain { get; set; }
	public Base.CodeableConcept? LegalStatusOfSupply { get; set; }
	public Base.CodeableConcept? PaediatricUseIndicator { get; set; }
	public Base.ResourceReference[]? Contact { get; set; }
}