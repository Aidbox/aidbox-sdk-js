using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class Account_Coverage : BackboneElement
{
	public required Base.ResourceReference Coverage { get; set; }
	public string? Priority { get; set; }
}

public class Account_Guarantor : BackboneElement
{
	public required Base.ResourceReference Party { get; set; }
	public bool? OnHold { get; set; }
	public Base.Period? Period { get; set; }
}

public class Account : DomainResource
{
	public string? Description { get; set; }
	public string? Name { get; set; }
	public Base.Period? ServicePeriod { get; set; }
	public Account_Coverage[]? Coverage { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public Account_Guarantor[]? Guarantor { get; set; }
	public required string Status { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.ResourceReference? PartOf { get; set; }
	public Base.ResourceReference[]? Subject { get; set; }
	public Base.ResourceReference? Owner { get; set; }
}