using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class CoverageEligibilityRequest_Insurance : BackboneElement
{
	public bool? Focal { get; set; }
	public required Base.ResourceReference Coverage { get; set; }
	public string? BusinessArrangement { get; set; }
}

public class CoverageEligibilityRequest_SupportingInfo : BackboneElement
{
	public required string Sequence { get; set; }
	public required Base.ResourceReference Information { get; set; }
	public bool? AppliesToAll { get; set; }
}

public class CoverageEligibilityRequest_Item_Diagnosis : BackboneElement
{
	public Base.CodeableConcept? DiagnosisCodeableConcept { get; set; }
	public Base.ResourceReference? DiagnosisReference { get; set; }
}

public class CoverageEligibilityRequest_Item : BackboneElement
{
	public Base.CodeableConcept? Category { get; set; }
	public Base.ResourceReference? Facility { get; set; }
	public CoverageEligibilityRequest_Item_Diagnosis[]? Diagnosis { get; set; }
	public Base.CodeableConcept[]? Modifier { get; set; }
	public Base.CodeableConcept? ProductOrService { get; set; }
	public Base.Quantity? Quantity { get; set; }
	public Base.ResourceReference? Provider { get; set; }
	public string[]? SupportingInfoSequence { get; set; }
	public Base.Money? UnitPrice { get; set; }
	public Base.ResourceReference[]? Detail { get; set; }
}

public class CoverageEligibilityRequest : DomainResource
{
	public required Base.ResourceReference Patient { get; set; }
	public CoverageEligibilityRequest_Insurance[]? Insurance { get; set; }
	public Base.ResourceReference? Facility { get; set; }
	public Base.ResourceReference? Enterer { get; set; }
	public CoverageEligibilityRequest_SupportingInfo[]? SupportingInfo { get; set; }
	public required string[] Purpose { get; set; }
	public CoverageEligibilityRequest_Item[]? Item { get; set; }
	public required string Created { get; set; }
	public required Base.ResourceReference Insurer { get; set; }
	public Base.CodeableConcept? Priority { get; set; }
	public required string Status { get; set; }
	public string? ServicedDate { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.ResourceReference? Provider { get; set; }
	public Base.Period? ServicedPeriod { get; set; }
}