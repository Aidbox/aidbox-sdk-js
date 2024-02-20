using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class VisionPrescription_LensSpecification_Prism : BackboneElement
{
	public required string Amount { get; set; }
	public required string Base { get; set; }
}

public class VisionPrescription_LensSpecification : BackboneElement
{
	public string? Sphere { get; set; }
	public string? Color { get; set; }
	public required string Eye { get; set; }
	public string? Diameter { get; set; }
	public Base.Quantity? Duration { get; set; }
	public string? Brand { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public string? Power { get; set; }
	public required Base.CodeableConcept Product { get; set; }
	public string? Cylinder { get; set; }
	public VisionPrescription_LensSpecification_Prism[]? Prism { get; set; }
	public int? Axis { get; set; }
	public string? Add { get; set; }
	public string? BackCurve { get; set; }
}

public class VisionPrescription : DomainResource
{
	public Base.Identifier[]? Identifier { get; set; }
	public required string Status { get; set; }
	public required string Created { get; set; }
	public required Base.ResourceReference Patient { get; set; }
	public Base.ResourceReference? Encounter { get; set; }
	public required string DateWritten { get; set; }
	public required Base.ResourceReference Prescriber { get; set; }
	public required VisionPrescription_LensSpecification[] LensSpecification { get; set; }
}