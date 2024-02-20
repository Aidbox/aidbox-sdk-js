using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Constraint;

public class Cdshooksrequestgroup
{
	public Meta Meta { get; } = new() { Profile = ["http://hl7.org/fhir/StructureDefinition/cdshooksrequestgroup"] };
	public string[]? InstantiatesCanonical { get; set; }
	public required string[] InstantiatesUri { get; set; }
	public Base.ResourceReference? Encounter { get; set; }
	public Base.CodeableConcept[]? ReasonCode { get; set; }
	public string? AuthoredOn { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public Base.ResourceReference? Author { get; set; }
	public string? Priority { get; set; }
	public required string Status { get; set; }
	public Base.Identifier? GroupIdentifier { get; set; }
	public Base.CodeableConcept? Code { get; set; }
	public required Base.Identifier[] Identifier { get; set; }
	public required string Intent { get; set; }
	public RequestGroup_Action[]? Action { get; set; }
	public Base.ResourceReference[]? Replaces { get; set; }
	public Base.ResourceReference[]? BasedOn { get; set; }
	public Base.ResourceReference? Subject { get; set; }
	public Base.ResourceReference[]? ReasonReference { get; set; }
	public Base.Narrative? Text { get; set; }
	public Base.Resource[]? Contained { get; set; }
	public Base.Extension[]? Extension { get; set; }
	public Base.Extension[]? ModifierExtension { get; set; }
	public string? Id { get; set; }
	public string? ImplicitRules { get; set; }
	public string? Language { get; set; }

public class RequestGroup_Action_RelatedAction : BackboneElement
{
	public required string ActionId { get; set; }
	public required string Relationship { get; set; }
	public string? OffsetDuration { get; set; }
	public Base.Range? OffsetRange { get; set; }
}

public class RequestGroup_Action_Condition : BackboneElement
{
	public required string Kind { get; set; }
	public Base.ResourceExpression? Expression { get; set; }
}

public class RequestGroup_Action : BackboneElement
{
	public Base.Range? TimingRange { get; set; }
	public string? Description { get; set; }
	public string? TextEquivalent { get; set; }
	public Base.Period? TimingPeriod { get; set; }
	public RequestGroup_Action_RelatedAction[]? RelatedAction { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public Base.ResourceReference[]? Participant { get; set; }
	public string? Title { get; set; }
	public Base.RelatedArtifact[]? Documentation { get; set; }
	public string? Prefix { get; set; }
	public string? SelectionBehavior { get; set; }
	public string? TimingDateTime { get; set; }
	public string? TimingTiming { get; set; }
	public string? TimingDuration { get; set; }
	public string? Priority { get; set; }
	public string? RequiredBehavior { get; set; }
	public RequestGroup_Action_Condition[]? Condition { get; set; }
	public Base.ResourceReference? Resource { get; set; }
	public string? GroupingBehavior { get; set; }
	public Base.CodeableConcept[]? Code { get; set; }
	public string? TimingAge { get; set; }
	public string[]? Action { get; set; }
	public string? PrecheckBehavior { get; set; }
	public string? CardinalityBehavior { get; set; }
}
}