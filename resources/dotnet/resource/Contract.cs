using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class Contract_Rule : BackboneElement
{
	public Base.Attachment? ContentAttachment { get; set; }
	public Base.ResourceReference? ContentReference { get; set; }
}

public class Contract_Legal : BackboneElement
{
	public Base.Attachment? ContentAttachment { get; set; }
	public Base.ResourceReference? ContentReference { get; set; }
}

public class Contract_ContentDefinition : BackboneElement
{
	public required Base.CodeableConcept Type { get; set; }
	public Base.CodeableConcept? SubType { get; set; }
	public Base.ResourceReference? Publisher { get; set; }
	public string? PublicationDate { get; set; }
	public required string PublicationStatus { get; set; }
	public string? Copyright { get; set; }
}

public class Contract_Signer : BackboneElement
{
	public required Base.Coding Type { get; set; }
	public required Base.ResourceReference Party { get; set; }
	public required Base.Signature[] Signature { get; set; }
}

public class Contract_Term_Offer_Party : BackboneElement
{
	public required Base.ResourceReference[] Reference { get; set; }
	public required Base.CodeableConcept Role { get; set; }
}

public class Contract_Term_Offer_Answer : BackboneElement
{
	public Base.ResourceReference? ValueReference { get; set; }
	public string? ValueUri { get; set; }
	public string? ValueTime { get; set; }
	public string? ValueDecimal { get; set; }
	public Base.Quantity? ValueQuantity { get; set; }
	public string? ValueString { get; set; }
	public bool? ValueBoolean { get; set; }
	public string? ValueDateTime { get; set; }
	public string? ValueDate { get; set; }
	public Base.Coding? ValueCoding { get; set; }
	public int? ValueInteger { get; set; }
	public Base.Attachment? ValueAttachment { get; set; }
}

public class Contract_Term_Offer : BackboneElement
{
	public Contract_Term_Offer_Party[]? Party { get; set; }
	public string[]? LinkId { get; set; }
	public Base.CodeableConcept[]? DecisionMode { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public Base.ResourceReference? Topic { get; set; }
	public string[]? SecurityLabelNumber { get; set; }
	public Contract_Term_Offer_Answer[]? Answer { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.CodeableConcept? Decision { get; set; }
	public string? Text { get; set; }
}

public class Contract_Term_Action_Subject : BackboneElement
{
	public required Base.ResourceReference[] Reference { get; set; }
	public Base.CodeableConcept? Role { get; set; }
}

public class Contract_Term_Action : BackboneElement
{
	public string[]? RequesterLinkId { get; set; }
	public Base.CodeableConcept[]? PerformerType { get; set; }
	public string[]? LinkId { get; set; }
	public Base.CodeableConcept? PerformerRole { get; set; }
	public string[]? ReasonLinkId { get; set; }
	public Base.CodeableConcept[]? ReasonCode { get; set; }
	public required Base.CodeableConcept Type { get; set; }
	public string? OccurrenceTiming { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public string[]? Reason { get; set; }
	public Base.ResourceReference[]? Requester { get; set; }
	public string[]? SecurityLabelNumber { get; set; }
	public Base.Period? OccurrencePeriod { get; set; }
	public required Base.CodeableConcept Status { get; set; }
	public bool? DoNotPerform { get; set; }
	public Base.ResourceReference? Context { get; set; }
	public required Base.CodeableConcept Intent { get; set; }
	public string[]? PerformerLinkId { get; set; }
	public string? OccurrenceDateTime { get; set; }
	public Contract_Term_Action_Subject[]? Subject { get; set; }
	public Base.ResourceReference? Performer { get; set; }
	public string[]? ContextLinkId { get; set; }
	public Base.ResourceReference[]? ReasonReference { get; set; }
}

public class Contract_Term_SecurityLabel : BackboneElement
{
	public string[]? Number { get; set; }
	public required Base.Coding Classification { get; set; }
	public Base.Coding[]? Category { get; set; }
	public Base.Coding[]? Control { get; set; }
}

public class Contract_Term_Asset_Context : BackboneElement
{
	public Base.ResourceReference? Reference { get; set; }
	public Base.CodeableConcept[]? Code { get; set; }
	public string? Text { get; set; }
}

public class Contract_Term_Asset_ValuedItem : BackboneElement
{
	public string[]? LinkId { get; set; }
	public string? Payment { get; set; }
	public Base.ResourceReference? Recipient { get; set; }
	public Base.Money? Net { get; set; }
	public string? Points { get; set; }
	public Base.ResourceReference? Responsible { get; set; }
	public string[]? SecurityLabelNumber { get; set; }
	public string? Factor { get; set; }
	public string? PaymentDate { get; set; }
	public Base.CodeableConcept? EntityCodeableConcept { get; set; }
	public Base.Identifier? Identifier { get; set; }
	public string? EffectiveTime { get; set; }
	public Base.Quantity? Quantity { get; set; }
	public Base.Money? UnitPrice { get; set; }
	public Base.ResourceReference? EntityReference { get; set; }
}

public class Contract_Term_Asset : BackboneElement
{
	public Base.CodeableConcept[]? PeriodType { get; set; }
	public Base.Period[]? UsePeriod { get; set; }
	public string[]? LinkId { get; set; }
	public Base.Coding? Relationship { get; set; }
	public Base.CodeableConcept[]? Type { get; set; }
	public Base.CodeableConcept? Scope { get; set; }
	public string[]? SecurityLabelNumber { get; set; }
	public Base.ResourceReference[]? TypeReference { get; set; }
	public string? Condition { get; set; }
	public string[]? Answer { get; set; }
	public Contract_Term_Asset_Context[]? Context { get; set; }
	public Base.Period[]? Period { get; set; }
	public Contract_Term_Asset_ValuedItem[]? ValuedItem { get; set; }
	public Base.CodeableConcept[]? Subtype { get; set; }
	public string? Text { get; set; }
}

public class Contract_Term : BackboneElement
{
	public string[]? Group { get; set; }
	public Base.Period? Applies { get; set; }
	public required Contract_Term_Offer Offer { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public Base.CodeableConcept? TopicCodeableConcept { get; set; }
	public Base.ResourceReference? TopicReference { get; set; }
	public Base.Identifier? Identifier { get; set; }
	public Contract_Term_Action[]? Action { get; set; }
	public string? Issued { get; set; }
	public Base.CodeableConcept? SubType { get; set; }
	public Contract_Term_SecurityLabel[]? SecurityLabel { get; set; }
	public Contract_Term_Asset[]? Asset { get; set; }
	public string? Text { get; set; }
}

public class Contract_Friendly : BackboneElement
{
	public Base.Attachment? ContentAttachment { get; set; }
	public Base.ResourceReference? ContentReference { get; set; }
}

public class Contract : DomainResource
{
	public Base.Attachment? LegallyBindingAttachment { get; set; }
	public Base.ResourceReference? InstantiatesCanonical { get; set; }
	public string? InstantiatesUri { get; set; }
	public Base.ResourceReference? LegallyBindingReference { get; set; }
	public Base.ResourceReference[]? Site { get; set; }
	public Base.ResourceReference[]? RelevantHistory { get; set; }
	public Base.ResourceReference[]? SupportingInfo { get; set; }
	public Base.Period? Applies { get; set; }
	public string? Name { get; set; }
	public Base.ResourceReference[]? Authority { get; set; }
	public Contract_Rule[]? Rule { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public Contract_Legal[]? Legal { get; set; }
	public Base.CodeableConcept? ContentDerivative { get; set; }
	public Base.CodeableConcept? TopicCodeableConcept { get; set; }
	public Base.CodeableConcept? LegalState { get; set; }
	public Contract_ContentDefinition? ContentDefinition { get; set; }
	public Base.CodeableConcept? Scope { get; set; }
	public string? Title { get; set; }
	public Contract_Signer[]? Signer { get; set; }
	public Base.ResourceReference? Author { get; set; }
	public Contract_Term[]? Term { get; set; }
	public Contract_Friendly[]? Friendly { get; set; }
	public string[]? Alias { get; set; }
	public string? Status { get; set; }
	public string? Subtitle { get; set; }
	public Base.ResourceReference? TopicReference { get; set; }
	public string? Url { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.CodeableConcept? ExpirationType { get; set; }
	public string? Issued { get; set; }
	public Base.ResourceReference[]? Domain { get; set; }
	public Base.CodeableConcept[]? SubType { get; set; }
	public string? Version { get; set; }
	public Base.ResourceReference[]? Subject { get; set; }
}