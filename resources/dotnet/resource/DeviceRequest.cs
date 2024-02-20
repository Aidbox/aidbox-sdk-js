using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class DeviceRequest_Parameter : BackboneElement
{
	public Base.CodeableConcept? Code { get; set; }
	public Base.CodeableConcept? ValueCodeableConcept { get; set; }
	public Base.Quantity? ValueQuantity { get; set; }
	public Base.Range? ValueRange { get; set; }
	public bool? ValueBoolean { get; set; }
}

public class DeviceRequest : DomainResource
{
	public Base.CodeableConcept? PerformerType { get; set; }
	public Base.ResourceReference[]? Insurance { get; set; }
	public string[]? InstantiatesCanonical { get; set; }
	public string[]? InstantiatesUri { get; set; }
	public Base.ResourceReference[]? RelevantHistory { get; set; }
	public Base.ResourceReference[]? SupportingInfo { get; set; }
	public Base.ResourceReference? Encounter { get; set; }
	public Base.ResourceReference[]? PriorRequest { get; set; }
	public Base.CodeableConcept[]? ReasonCode { get; set; }
	public string? AuthoredOn { get; set; }
	public string? OccurrenceTiming { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public Base.ResourceReference? CodeReference { get; set; }
	public Base.ResourceReference? Requester { get; set; }
	public string? Priority { get; set; }
	public Base.Period? OccurrencePeriod { get; set; }
	public string? Status { get; set; }
	public Base.CodeableConcept? CodeCodeableConcept { get; set; }
	public Base.Identifier? GroupIdentifier { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public required string Intent { get; set; }
	public Base.ResourceReference[]? BasedOn { get; set; }
	public string? OccurrenceDateTime { get; set; }
	public required Base.ResourceReference Subject { get; set; }
	public DeviceRequest_Parameter[]? Parameter { get; set; }
	public Base.ResourceReference? Performer { get; set; }
	public Base.ResourceReference[]? ReasonReference { get; set; }
}