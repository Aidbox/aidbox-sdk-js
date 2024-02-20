using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class CommunicationRequest_Payload : BackboneElement
{
	public string? ContentString { get; set; }
	public Base.Attachment? ContentAttachment { get; set; }
	public Base.ResourceReference? ContentReference { get; set; }
}

public class CommunicationRequest : DomainResource
{
	public Base.CodeableConcept[]? Category { get; set; }
	public CommunicationRequest_Payload[]? Payload { get; set; }
	public Base.ResourceReference? Encounter { get; set; }
	public Base.CodeableConcept[]? Medium { get; set; }
	public Base.ResourceReference[]? Recipient { get; set; }
	public Base.CodeableConcept[]? ReasonCode { get; set; }
	public Base.CodeableConcept? StatusReason { get; set; }
	public string? AuthoredOn { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public Base.ResourceReference? Requester { get; set; }
	public string? Priority { get; set; }
	public Base.Period? OccurrencePeriod { get; set; }
	public required string Status { get; set; }
	public Base.Identifier? GroupIdentifier { get; set; }
	public Base.ResourceReference? Sender { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public bool? DoNotPerform { get; set; }
	public Base.ResourceReference[]? Replaces { get; set; }
	public Base.ResourceReference[]? BasedOn { get; set; }
	public string? OccurrenceDateTime { get; set; }
	public Base.ResourceReference? Subject { get; set; }
	public Base.ResourceReference[]? About { get; set; }
	public Base.ResourceReference[]? ReasonReference { get; set; }
}