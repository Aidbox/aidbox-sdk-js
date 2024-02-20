using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class Communication_Payload : BackboneElement
{
	public string? ContentString { get; set; }
	public Base.Attachment? ContentAttachment { get; set; }
	public Base.ResourceReference? ContentReference { get; set; }
}

public class Communication : DomainResource
{
	public Base.CodeableConcept[]? Category { get; set; }
	public string? Received { get; set; }
	public string[]? InstantiatesCanonical { get; set; }
	public Communication_Payload[]? Payload { get; set; }
	public string[]? InstantiatesUri { get; set; }
	public Base.ResourceReference? Encounter { get; set; }
	public Base.CodeableConcept[]? Medium { get; set; }
	public Base.ResourceReference[]? Recipient { get; set; }
	public Base.CodeableConcept[]? ReasonCode { get; set; }
	public Base.CodeableConcept? StatusReason { get; set; }
	public Base.CodeableConcept? Topic { get; set; }
	public string? Sent { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public string? Priority { get; set; }
	public required string Status { get; set; }
	public Base.ResourceReference? Sender { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.ResourceReference[]? InResponseTo { get; set; }
	public Base.ResourceReference[]? BasedOn { get; set; }
	public Base.ResourceReference[]? PartOf { get; set; }
	public Base.ResourceReference? Subject { get; set; }
	public Base.ResourceReference[]? About { get; set; }
	public Base.ResourceReference[]? ReasonReference { get; set; }
}