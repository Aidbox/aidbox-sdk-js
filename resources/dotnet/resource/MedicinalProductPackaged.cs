using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class MedicinalProductPackaged_BatchIdentifier : BackboneElement
{
	public required Base.Identifier OuterPackaging { get; set; }
	public Base.Identifier? ImmediatePackaging { get; set; }
}

public class MedicinalProductPackaged_PackageItem : BackboneElement
{
	public Base.ResourceReference[]? ManufacturedItem { get; set; }
	public Base.CodeableConcept[]? OtherCharacteristics { get; set; }
	public Base.ProductShelfLife[]? ShelfLifeStorage { get; set; }
	public Base.CodeableConcept[]? AlternateMaterial { get; set; }
	public required Base.CodeableConcept Type { get; set; }
	public Base.CodeableConcept[]? Material { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.ResourceReference[]? Manufacturer { get; set; }
	public Base.ResourceReference[]? Device { get; set; }
	public required Base.Quantity Quantity { get; set; }
	public Base.ProdCharacteristic? PhysicalCharacteristics { get; set; }
	public string[]? PackageItem { get; set; }
}

public class MedicinalProductPackaged : DomainResource
{
	public string? Description { get; set; }
	public Base.MarketingStatus[]? MarketingStatus { get; set; }
	public Base.ResourceReference? MarketingAuthorization { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.ResourceReference[]? Manufacturer { get; set; }
	public Base.CodeableConcept? LegalStatusOfSupply { get; set; }
	public MedicinalProductPackaged_BatchIdentifier[]? BatchIdentifier { get; set; }
	public Base.ResourceReference[]? Subject { get; set; }
	public required MedicinalProductPackaged_PackageItem[] PackageItem { get; set; }
}