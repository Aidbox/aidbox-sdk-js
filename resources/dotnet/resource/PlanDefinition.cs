using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class PlanDefinition_Goal_Target : BackboneElement
{
	public Base.CodeableConcept? Measure { get; set; }
	public Base.Quantity? DetailQuantity { get; set; }
	public Base.Range? DetailRange { get; set; }
	public Base.CodeableConcept? DetailCodeableConcept { get; set; }
	public string? Due { get; set; }
}

public class PlanDefinition_Goal : BackboneElement
{
	public Base.CodeableConcept? Category { get; set; }
	public required Base.CodeableConcept Description { get; set; }
	public Base.CodeableConcept? Priority { get; set; }
	public Base.CodeableConcept? Start { get; set; }
	public Base.CodeableConcept[]? Addresses { get; set; }
	public Base.RelatedArtifact[]? Documentation { get; set; }
	public PlanDefinition_Goal_Target[]? Target { get; set; }
}

public class PlanDefinition_Action_RelatedAction : BackboneElement
{
	public required string ActionId { get; set; }
	public required string Relationship { get; set; }
	public string? OffsetDuration { get; set; }
	public Base.Range? OffsetRange { get; set; }
}

public class PlanDefinition_Action_Participant : BackboneElement
{
	public required string Type { get; set; }
	public Base.CodeableConcept? Role { get; set; }
}

public class PlanDefinition_Action_Condition : BackboneElement
{
	public required string Kind { get; set; }
	public Base.ResourceExpression? Expression { get; set; }
}

public class PlanDefinition_Action_DynamicValue : BackboneElement
{
	public string? Path { get; set; }
	public Base.ResourceExpression? Expression { get; set; }
}

public class PlanDefinition_Action : BackboneElement
{
	public Base.Range? TimingRange { get; set; }
	public string? Description { get; set; }
	public string? Transform { get; set; }
	public string? TextEquivalent { get; set; }
	public string? DefinitionUri { get; set; }
	public string[]? GoalId { get; set; }
	public Base.CodeableConcept? SubjectCodeableConcept { get; set; }
	public Base.Period? TimingPeriod { get; set; }
	public string? DefinitionCanonical { get; set; }
	public PlanDefinition_Action_RelatedAction[]? RelatedAction { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public PlanDefinition_Action_Participant[]? Participant { get; set; }
	public Base.DataRequirement[]? Output { get; set; }
	public string? Title { get; set; }
	public Base.RelatedArtifact[]? Documentation { get; set; }
	public string? Prefix { get; set; }
	public string? SelectionBehavior { get; set; }
	public Base.CodeableConcept[]? Reason { get; set; }
	public string? TimingDateTime { get; set; }
	public string? TimingTiming { get; set; }
	public string? TimingDuration { get; set; }
	public string? Priority { get; set; }
	public string? RequiredBehavior { get; set; }
	public PlanDefinition_Action_Condition[]? Condition { get; set; }
	public string? GroupingBehavior { get; set; }
	public PlanDefinition_Action_DynamicValue[]? DynamicValue { get; set; }
	public Base.CodeableConcept[]? Code { get; set; }
	public string? TimingAge { get; set; }
	public string[]? Action { get; set; }
	public string? PrecheckBehavior { get; set; }
	public Base.DataRequirement[]? Input { get; set; }
	public Base.TriggerDefinition[]? Trigger { get; set; }
	public Base.ResourceReference? SubjectReference { get; set; }
	public string? CardinalityBehavior { get; set; }
}

public class PlanDefinition : DomainResource
{
	public string? Description { get; set; }
	public string? Date { get; set; }
	public Base.ContactDetail[]? Endorser { get; set; }
	public string? Publisher { get; set; }
	public string? ApprovalDate { get; set; }
	public Base.CodeableConcept[]? Jurisdiction { get; set; }
	public string? Purpose { get; set; }
	public Base.CodeableConcept? SubjectCodeableConcept { get; set; }
	public string? Name { get; set; }
	public Base.UsageContext[]? UseContext { get; set; }
	public PlanDefinition_Goal[]? Goal { get; set; }
	public string? Copyright { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public bool? Experimental { get; set; }
	public Base.CodeableConcept[]? Topic { get; set; }
	public string? Title { get; set; }
	public string[]? Library { get; set; }
	public Base.ContactDetail[]? Author { get; set; }
	public string? Usage { get; set; }
	public required string Status { get; set; }
	public string? Subtitle { get; set; }
	public string? Url { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public string? LastReviewDate { get; set; }
	public Base.ContactDetail[]? Editor { get; set; }
	public PlanDefinition_Action[]? Action { get; set; }
	public Base.ContactDetail[]? Reviewer { get; set; }
	public string? Version { get; set; }
	public Base.RelatedArtifact[]? RelatedArtifact { get; set; }
	public Base.ContactDetail[]? Contact { get; set; }
	public Base.ResourceReference? SubjectReference { get; set; }
	public Base.Period? EffectivePeriod { get; set; }
}