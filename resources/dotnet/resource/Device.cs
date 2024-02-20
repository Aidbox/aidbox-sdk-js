using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class Device_DeviceName : BackboneElement
{
	public required string Name { get; set; }
	public required string Type { get; set; }
}

public class Device_Property : BackboneElement
{
	public required Base.CodeableConcept Type { get; set; }
	public Base.Quantity[]? ValueQuantity { get; set; }
	public Base.CodeableConcept[]? ValueCode { get; set; }
}

public class Device_Specialization : BackboneElement
{
	public required Base.CodeableConcept SystemType { get; set; }
	public string? Version { get; set; }
}

public class Device_Version : BackboneElement
{
	public Base.CodeableConcept? Type { get; set; }
	public Base.Identifier? Component { get; set; }
	public required string Value { get; set; }
}

public class Device_UdiCarrier : BackboneElement
{
	public string? DeviceIdentifier { get; set; }
	public string? Issuer { get; set; }
	public string? Jurisdiction { get; set; }
	public string? CarrierAIDC { get; set; }
	public string? CarrierHRF { get; set; }
	public string? EntryType { get; set; }
}

public class Device : DomainResource
{
	public Base.ResourceReference? Patient { get; set; }
	public Base.ResourceReference? Definition { get; set; }
	public string? SerialNumber { get; set; }
	public Base.ResourceReference? Parent { get; set; }
	public Device_DeviceName[]? DeviceName { get; set; }
	public Device_Property[]? Property { get; set; }
	public string? PartNumber { get; set; }
	public string? ModelNumber { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public Base.CodeableConcept[]? StatusReason { get; set; }
	public Device_Specialization[]? Specialization { get; set; }
	public string? DistinctIdentifier { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public string? Status { get; set; }
	public Base.CodeableConcept[]? Safety { get; set; }
	public string? LotNumber { get; set; }
	public string? Url { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public string? Manufacturer { get; set; }
	public Device_Version[]? Version { get; set; }
	public Base.ResourceReference? Location { get; set; }
	public Base.ContactPoint[]? Contact { get; set; }
	public string? ManufactureDate { get; set; }
	public Base.ResourceReference? Owner { get; set; }
	public string? ExpirationDate { get; set; }
	public Device_UdiCarrier[]? UdiCarrier { get; set; }
}