using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class Group_Member : BackboneElement
{
	public required Base.ResourceReference Entity { get; set; }
	public Base.Period? Period { get; set; }
	public bool? Inactive { get; set; }
}

public class Group_Characteristic : BackboneElement
{
	public required bool Exclude { get; set; }
	public Base.ResourceReference? ValueReference { get; set; }
	public Base.Quantity? ValueQuantity { get; set; }
	public bool? ValueBoolean { get; set; }
	public required Base.CodeableConcept Code { get; set; }
	public Base.CodeableConcept? ValueCodeableConcept { get; set; }
	public Base.Period? Period { get; set; }
	public Base.Range? ValueRange { get; set; }
}

public class Group : DomainResource
{
	public string? Name { get; set; }
	public required string Type { get; set; }
	public Group_Member[]? Member { get; set; }
	public Group_Characteristic[]? Characteristic { get; set; }
	public bool? Active { get; set; }
	public Base.CodeableConcept? Code { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public string? Quantity { get; set; }
	public Base.ResourceReference? ManagingEntity { get; set; }
	public required bool Actual { get; set; }
}