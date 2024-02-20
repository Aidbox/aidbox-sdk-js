using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class CoverageEligibilityResponse_Insurance_Item_Benefit : BackboneElement
{
	public string? UsedString { get; set; }
	public Base.Money? AllowedMoney { get; set; }
	public required Base.CodeableConcept Type { get; set; }
	public string? AllowedUnsignedInt { get; set; }
	public string? UsedUnsignedInt { get; set; }
	public string? AllowedString { get; set; }
	public Base.Money? UsedMoney { get; set; }
}

public class CoverageEligibilityResponse_Insurance_Item : BackboneElement
{
	public string? Description { get; set; }
	public Base.CodeableConcept? Category { get; set; }
	public bool? AuthorizationRequired { get; set; }
	public Base.CodeableConcept[]? Modifier { get; set; }
	public Base.CodeableConcept[]? AuthorizationSupporting { get; set; }
	public Base.CodeableConcept? Unit { get; set; }
	public bool? Excluded { get; set; }
	public string? Name { get; set; }
	public Base.CodeableConcept? ProductOrService { get; set; }
	public Base.CodeableConcept? Term { get; set; }
	public CoverageEligibilityResponse_Insurance_Item_Benefit[]? Benefit { get; set; }
	public string? AuthorizationUrl { get; set; }
	public Base.CodeableConcept? Network { get; set; }
	public Base.ResourceReference? Provider { get; set; }
}

public class CoverageEligibilityResponse_Insurance : BackboneElement
{
	public required Base.ResourceReference Coverage { get; set; }
	public bool? Inforce { get; set; }
	public Base.Period? BenefitPeriod { get; set; }
	public CoverageEligibilityResponse_Insurance_Item[]? Item { get; set; }
}

public class CoverageEligibilityResponse_Error : BackboneElement
{
	public required Base.CodeableConcept Code { get; set; }
}

public class CoverageEligibilityResponse : DomainResource
{
	public required Base.ResourceReference Patient { get; set; }
	public Base.ResourceReference? Requestor { get; set; }
	public CoverageEligibilityResponse_Insurance[]? Insurance { get; set; }
	public required Base.ResourceReference Request { get; set; }
	public string? PreAuthRef { get; set; }
	public required string[] Purpose { get; set; }
	public required string Created { get; set; }
	public required string Outcome { get; set; }
	public string? Disposition { get; set; }
	public required Base.ResourceReference Insurer { get; set; }
	public required string Status { get; set; }
	public string? ServicedDate { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public CoverageEligibilityResponse_Error[]? Error { get; set; }
	public Base.CodeableConcept? Form { get; set; }
	public Base.Period? ServicedPeriod { get; set; }
}