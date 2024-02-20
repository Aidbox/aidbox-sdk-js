using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class MedicinalProductManufactured : DomainResource
{
	public required Base.CodeableConcept ManufacturedDoseForm { get; set; }
	public Base.CodeableConcept? UnitOfPresentation { get; set; }
	public required Base.Quantity Quantity { get; set; }
	public Base.ResourceReference[]? Manufacturer { get; set; }
	public Base.ResourceReference[]? Ingredient { get; set; }
	public Base.ProdCharacteristic? PhysicalCharacteristics { get; set; }
	public Base.CodeableConcept[]? OtherCharacteristics { get; set; }
}