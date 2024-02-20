using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Constraint;

public class Shareableactivitydefinition
{
	public Meta Meta { get; } = new() { Profile = ["http://hl7.org/fhir/StructureDefinition/shareableactivitydefinition"] };
	public Base.ResourceReference[]? ObservationResultRequirement { get; set; }
	public Base.Range? TimingRange { get; set; }
	public required string Description { get; set; }
	public string? Date { get; set; }
	public string? Transform { get; set; }
	public Base.ContactDetail[]? Endorser { get; set; }
	public required string Publisher { get; set; }
	public string? ApprovalDate { get; set; }
	public Base.CodeableConcept[]? Jurisdiction { get; set; }
	public string[]? Dosage { get; set; }
	public Base.ResourceReference[]? ObservationRequirement { get; set; }
	public string? Purpose { get; set; }
	public Base.CodeableConcept? SubjectCodeableConcept { get; set; }
	public Base.CodeableConcept? ProductCodeableConcept { get; set; }
	public required string Name { get; set; }
	public Base.ResourceReference? ProductReference { get; set; }
	public Base.Period? TimingPeriod { get; set; }
	public Base.UsageContext[]? UseContext { get; set; }
	public string? Copyright { get; set; }
	public required bool Experimental { get; set; }
	public Base.CodeableConcept[]? Topic { get; set; }
	public ActivityDefinition_Participant[]? Participant { get; set; }
	public string? Title { get; set; }
	public string[]? Library { get; set; }
	public Base.ContactDetail[]? Author { get; set; }
	public string? TimingDateTime { get; set; }
	public string? TimingTiming { get; set; }
	public string? Usage { get; set; }
	public string? TimingDuration { get; set; }
	public string? Priority { get; set; }
	public required string Status { get; set; }
	public string? Subtitle { get; set; }
	public string? Kind { get; set; }
	public ActivityDefinition_DynamicValue[]? DynamicValue { get; set; }
	public required string Url { get; set; }
	public Base.CodeableConcept? Code { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public string? LastReviewDate { get; set; }
	public Base.ContactDetail[]? Editor { get; set; }
	public bool? DoNotPerform { get; set; }
	public Base.CodeableConcept[]? BodySite { get; set; }
	public string? TimingAge { get; set; }
	public string? Intent { get; set; }
	public Base.ResourceReference[]? SpecimenRequirement { get; set; }
	public Base.ContactDetail[]? Reviewer { get; set; }
	public Base.Quantity? Quantity { get; set; }
	public required string Version { get; set; }
	public Base.RelatedArtifact[]? RelatedArtifact { get; set; }
	public Base.ResourceReference? Location { get; set; }
	public Base.ContactDetail[]? Contact { get; set; }
	public Base.ResourceReference? SubjectReference { get; set; }
	public string? Profile { get; set; }
	public Base.Period? EffectivePeriod { get; set; }
	public Base.Narrative? Text { get; set; }
	public Base.Resource[]? Contained { get; set; }
	public Base.Extension[]? Extension { get; set; }
	public Base.Extension[]? ModifierExtension { get; set; }
	public string? Id { get; set; }
	public string? ImplicitRules { get; set; }
	public string? Language { get; set; }

public class ActivityDefinition_Participant : BackboneElement
{
	public required string Type { get; set; }
	public Base.CodeableConcept? Role { get; set; }
}

public class ActivityDefinition_DynamicValue : BackboneElement
{
	public required string Path { get; set; }
	public required Base.ResourceExpression Expression { get; set; }
}
}