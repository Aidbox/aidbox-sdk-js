using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class SupplyRequest_Parameter : BackboneElement
{
	public Base.CodeableConcept? Code { get; set; }
	public Base.CodeableConcept? ValueCodeableConcept { get; set; }
	public Base.Quantity? ValueQuantity { get; set; }
	public Base.Range? ValueRange { get; set; }
	public bool? ValueBoolean { get; set; }
}

public class SupplyRequest : DomainResource
{
	public Base.CodeableConcept? Category { get; set; }
	public Base.ResourceReference[]? Supplier { get; set; }
	public Base.ResourceReference? DeliverTo { get; set; }
	public Base.ResourceReference? ItemReference { get; set; }
	public Base.CodeableConcept[]? ReasonCode { get; set; }
	public string? AuthoredOn { get; set; }
	public string? OccurrenceTiming { get; set; }
	public Base.ResourceReference? DeliverFrom { get; set; }
	public Base.ResourceReference? Requester { get; set; }
	public string? Priority { get; set; }
	public Base.Period? OccurrencePeriod { get; set; }
	public string? Status { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.CodeableConcept? ItemCodeableConcept { get; set; }
	public required Base.Quantity Quantity { get; set; }
	public string? OccurrenceDateTime { get; set; }
	public SupplyRequest_Parameter[]? Parameter { get; set; }
	public Base.ResourceReference[]? ReasonReference { get; set; }
}