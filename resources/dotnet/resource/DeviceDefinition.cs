using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class DeviceDefinition_DeviceName : BackboneElement
{
	public required string Name { get; set; }
	public required string Type { get; set; }
}

public class DeviceDefinition_Property : BackboneElement
{
	public required Base.CodeableConcept Type { get; set; }
	public Base.Quantity[]? ValueQuantity { get; set; }
	public Base.CodeableConcept[]? ValueCode { get; set; }
}

public class DeviceDefinition_UdiDeviceIdentifier : BackboneElement
{
	public required string DeviceIdentifier { get; set; }
	public required string Issuer { get; set; }
	public required string Jurisdiction { get; set; }
}

public class DeviceDefinition_Capability : BackboneElement
{
	public required Base.CodeableConcept Type { get; set; }
	public Base.CodeableConcept[]? Description { get; set; }
}

public class DeviceDefinition_Specialization : BackboneElement
{
	public required string SystemType { get; set; }
	public string? Version { get; set; }
}

public class DeviceDefinition_Material : BackboneElement
{
	public required Base.CodeableConcept Substance { get; set; }
	public bool? Alternate { get; set; }
	public bool? AllergenicIndicator { get; set; }
}

public class DeviceDefinition : DomainResource
{
	public DeviceDefinition_DeviceName[]? DeviceName { get; set; }
	public Base.ProductShelfLife[]? ShelfLifeStorage { get; set; }
	public DeviceDefinition_Property[]? Property { get; set; }
	public string? ManufacturerString { get; set; }
	public string? ModelNumber { get; set; }
	public DeviceDefinition_UdiDeviceIdentifier[]? UdiDeviceIdentifier { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public Base.ResourceReference? ManufacturerReference { get; set; }
	public DeviceDefinition_Capability[]? Capability { get; set; }
	public DeviceDefinition_Specialization[]? Specialization { get; set; }
	public Base.ResourceReference? ParentDevice { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public Base.CodeableConcept[]? LanguageCode { get; set; }
	public Base.CodeableConcept[]? Safety { get; set; }
	public DeviceDefinition_Material[]? Material { get; set; }
	public string? Url { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.Quantity? Quantity { get; set; }
	public string[]? Version { get; set; }
	public Base.ContactPoint[]? Contact { get; set; }
	public Base.ResourceReference? Owner { get; set; }
	public string? OnlineInformation { get; set; }
	public Base.ProdCharacteristic? PhysicalCharacteristics { get; set; }
}