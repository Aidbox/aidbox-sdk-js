using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class InsurancePlan_Coverage_Benefit_Limit : BackboneElement
{
	public Base.Quantity? Value { get; set; }
	public Base.CodeableConcept? Code { get; set; }
}

public class InsurancePlan_Coverage_Benefit : BackboneElement
{
	public required Base.CodeableConcept Type { get; set; }
	public string? Requirement { get; set; }
	public InsurancePlan_Coverage_Benefit_Limit[]? Limit { get; set; }
}

public class InsurancePlan_Coverage : BackboneElement
{
	public required Base.CodeableConcept Type { get; set; }
	public Base.ResourceReference[]? Network { get; set; }
	public required InsurancePlan_Coverage_Benefit[] Benefit { get; set; }
}

public class InsurancePlan_Plan_GeneralCost : BackboneElement
{
	public Base.CodeableConcept? Type { get; set; }
	public string? GroupSize { get; set; }
	public Base.Money? Cost { get; set; }
	public string? Comment { get; set; }
}

public class InsurancePlan_Plan_SpecificCost_Benefit_Cost : BackboneElement
{
	public required Base.CodeableConcept Type { get; set; }
	public Base.CodeableConcept? Applicability { get; set; }
	public Base.CodeableConcept[]? Qualifiers { get; set; }
	public Base.Quantity? Value { get; set; }
}

public class InsurancePlan_Plan_SpecificCost_Benefit : BackboneElement
{
	public required Base.CodeableConcept Type { get; set; }
	public InsurancePlan_Plan_SpecificCost_Benefit_Cost[]? Cost { get; set; }
}

public class InsurancePlan_Plan_SpecificCost : BackboneElement
{
	public required Base.CodeableConcept Category { get; set; }
	public InsurancePlan_Plan_SpecificCost_Benefit[]? Benefit { get; set; }
}

public class InsurancePlan_Plan : BackboneElement
{
	public Base.Identifier[]? Identifier { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public Base.ResourceReference[]? CoverageArea { get; set; }
	public Base.ResourceReference[]? Network { get; set; }
	public InsurancePlan_Plan_GeneralCost[]? GeneralCost { get; set; }
	public InsurancePlan_Plan_SpecificCost[]? SpecificCost { get; set; }
}

public class InsurancePlan_Contact : BackboneElement
{
	public Base.CodeableConcept? Purpose { get; set; }
	public Base.HumanName? Name { get; set; }
	public Base.ContactPoint[]? Telecom { get; set; }
	public Base.Address? Address { get; set; }
}

public class InsurancePlan : DomainResource
{
	public Base.ResourceReference[]? CoverageArea { get; set; }
	public string? Name { get; set; }
	public InsurancePlan_Coverage[]? Coverage { get; set; }
	public Base.CodeableConcept[]? Type { get; set; }
	public string[]? Alias { get; set; }
	public string? Status { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.ResourceReference? AdministeredBy { get; set; }
	public Base.ResourceReference? OwnedBy { get; set; }
	public Base.ResourceReference[]? Network { get; set; }
	public Base.Period? Period { get; set; }
	public InsurancePlan_Plan[]? Plan { get; set; }
	public Base.ResourceReference[]? Endpoint { get; set; }
	public InsurancePlan_Contact[]? Contact { get; set; }
}