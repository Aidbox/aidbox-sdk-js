using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Constraint;

public class UsCoreCareplan
{
	public Meta Meta { get; } = new() { Profile = ["http://hl7.org/fhir/us/core/StructureDefinition/us-core-careplan"] };
	public string? Description { get; set; }
	public required Base.CodeableConcept[] Category { get; set; }
	public Base.ResourceReference[]? Addresses { get; set; }
	public string[]? InstantiatesCanonical { get; set; }
	public string[]? InstantiatesUri { get; set; }
	public Base.ResourceReference[]? SupportingInfo { get; set; }
	public Base.ResourceReference? Encounter { get; set; }
	public Base.ResourceReference[]? Goal { get; set; }
	public string? Created { get; set; }
	public string? Title { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public Base.ResourceReference? Author { get; set; }
	public CarePlan_Activity[]? Activity { get; set; }
	public Base.ResourceReference[]? Contributor { get; set; }
	public required string Status { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public required string Intent { get; set; }
	public Base.ResourceReference[]? Replaces { get; set; }
	public Base.Period? Period { get; set; }
	public Base.ResourceReference[]? BasedOn { get; set; }
	public Base.ResourceReference[]? PartOf { get; set; }
	public required Base.ResourceReference Subject { get; set; }
	public Base.ResourceReference[]? CareTeam { get; set; }
	public required Base.Narrative Text { get; set; }
	public Base.Resource[]? Contained { get; set; }
	public Base.Extension[]? Extension { get; set; }
	public Base.Extension[]? ModifierExtension { get; set; }
	public string? Id { get; set; }
	public string? ImplicitRules { get; set; }
	public string? Language { get; set; }

public class CarePlan_Activity_Detail : BackboneElement
{
	public string? Description { get; set; }
	public string[]? InstantiatesCanonical { get; set; }
	public string[]? InstantiatesUri { get; set; }
	public Base.CodeableConcept? ProductCodeableConcept { get; set; }
	public Base.ResourceReference? ProductReference { get; set; }
	public Base.Period? ScheduledPeriod { get; set; }
	public Base.ResourceReference[]? Goal { get; set; }
	public Base.CodeableConcept[]? ReasonCode { get; set; }
	public Base.CodeableConcept? StatusReason { get; set; }
	public string? ScheduledTiming { get; set; }
	public Base.Quantity? DailyAmount { get; set; }
	public string? ScheduledString { get; set; }
	public required string Status { get; set; }
	public string? Kind { get; set; }
	public Base.CodeableConcept? Code { get; set; }
	public bool? DoNotPerform { get; set; }
	public Base.Quantity? Quantity { get; set; }
	public Base.ResourceReference? Location { get; set; }
	public Base.ResourceReference[]? Performer { get; set; }
	public Base.ResourceReference[]? ReasonReference { get; set; }
}

public class CarePlan_Activity : BackboneElement
{
	public Base.CodeableConcept[]? OutcomeCodeableConcept { get; set; }
	public Base.ResourceReference[]? OutcomeReference { get; set; }
	public Base.Annotation[]? Progress { get; set; }
	public Base.ResourceReference? Reference { get; set; }
	public CarePlan_Activity_Detail? Detail { get; set; }
}
}