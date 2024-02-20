using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class Coverage_CostToBeneficiary_Exception : BackboneElement
{
	public required Base.CodeableConcept Type { get; set; }
	public Base.Period? Period { get; set; }
}

public class Coverage_CostToBeneficiary : BackboneElement
{
	public Base.CodeableConcept? Type { get; set; }
	public Base.Quantity? ValueQuantity { get; set; }
	public Base.Money? ValueMoney { get; set; }
	public Coverage_CostToBeneficiary_Exception[]? Exception { get; set; }
}

public class Coverage_Class : BackboneElement
{
	public required Base.CodeableConcept Type { get; set; }
	public required string Value { get; set; }
	public string? Name { get; set; }
}

public class Coverage : DomainResource
{
	public Base.ResourceReference? PolicyHolder { get; set; }
	public required Base.ResourceReference Beneficiary { get; set; }
	public Base.ResourceReference[]? Contract { get; set; }
	public Base.CodeableConcept? Relationship { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public Coverage_CostToBeneficiary[]? CostToBeneficiary { get; set; }
	public bool? Subrogation { get; set; }
	public Base.ResourceReference? Subscriber { get; set; }
	public required Base.ResourceReference[] Payor { get; set; }
	public required string Status { get; set; }
	public Coverage_Class[]? Class_ { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public string? Order { get; set; }
	public string? Network { get; set; }
	public Base.Period? Period { get; set; }
	public string? Dependent { get; set; }
	public string? SubscriberId { get; set; }
}