using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Constraint;

public class UsCoreGoal
{
	public Meta Meta { get; } = new() { Profile = ["http://hl7.org/fhir/us/core/StructureDefinition/us-core-goal"] };
	public required Base.CodeableConcept Description { get; set; }
	public Base.CodeableConcept[]? Category { get; set; }
	public Base.ResourceReference[]? Addresses { get; set; }
	public Base.ResourceReference? ExpressedBy { get; set; }
	public string? StartDate { get; set; }
	public Base.CodeableConcept? AchievementStatus { get; set; }
	public string? StatusReason { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public Base.CodeableConcept? StartCodeableConcept { get; set; }
	public Base.CodeableConcept? Priority { get; set; }
	public Base.CodeableConcept[]? OutcomeCode { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public string? StatusDate { get; set; }
	public Goal_Target[]? Target { get; set; }
	public Base.ResourceReference[]? OutcomeReference { get; set; }
	public required Base.ResourceReference Subject { get; set; }
	public required string LifecycleStatus { get; set; }
	public Base.Narrative? Text { get; set; }
	public Base.Resource[]? Contained { get; set; }
	public Base.Extension[]? Extension { get; set; }
	public Base.Extension[]? ModifierExtension { get; set; }
	public string? Id { get; set; }
	public string? ImplicitRules { get; set; }
	public string? Language { get; set; }

public class Goal_Target : BackboneElement
{
	public Base.Range? DetailRange { get; set; }
	public Base.Quantity? DetailQuantity { get; set; }
	public int? DetailInteger { get; set; }
	public string? DetailString { get; set; }
	public Base.CodeableConcept? Measure { get; set; }
	public Base.Ratio? DetailRatio { get; set; }
	public Base.CodeableConcept? DetailCodeableConcept { get; set; }
	public string? DueDate { get; set; }
	public bool? DetailBoolean { get; set; }
	public string? DueDuration { get; set; }
}
}