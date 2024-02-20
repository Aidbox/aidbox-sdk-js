using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class DeviceMetric_Calibration : BackboneElement
{
	public string? Type { get; set; }
	public string? State { get; set; }
	public string? Time { get; set; }
}

public class DeviceMetric : DomainResource
{
	public required string Category { get; set; }
	public string? MeasurementPeriod { get; set; }
	public string? Color { get; set; }
	public Base.ResourceReference? Parent { get; set; }
	public Base.CodeableConcept? Unit { get; set; }
	public required Base.CodeableConcept Type { get; set; }
	public Base.ResourceReference? Source { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public DeviceMetric_Calibration[]? Calibration { get; set; }
	public string? OperationalStatus { get; set; }
}