using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Constraint;

public class UsCoreAllergyintolerance
{
	public Meta Meta { get; } = new() { Profile = ["http://hl7.org/fhir/us/core/StructureDefinition/us-core-allergyintolerance"] };
	public required Base.ResourceReference Patient { get; set; }
	public string[]? Category { get; set; }
	public string? Criticality { get; set; }
	public Base.CodeableConcept? ClinicalStatus { get; set; }
	public Base.Range? OnsetRange { get; set; }
	public string? OnsetAge { get; set; }
	public Base.ResourceReference? Encounter { get; set; }
	public Base.Period? OnsetPeriod { get; set; }
	public string? Type { get; set; }
	public Base.ResourceReference? Asserter { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public string? RecordedDate { get; set; }
	public string? OnsetString { get; set; }
	public Base.ResourceReference? Recorder { get; set; }
	public required Base.CodeableConcept Code { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public string? OnsetDateTime { get; set; }
	public string? LastOccurrence { get; set; }
	public Base.CodeableConcept? VerificationStatus { get; set; }
	public AllergyIntolerance_Reaction[]? Reaction { get; set; }
	public Base.Narrative? Text { get; set; }
	public Base.Resource[]? Contained { get; set; }
	public Base.Extension[]? Extension { get; set; }
	public Base.Extension[]? ModifierExtension { get; set; }
	public string? Id { get; set; }
	public string? ImplicitRules { get; set; }
	public string? Language { get; set; }

public class AllergyIntolerance_Reaction : BackboneElement
{
	public Base.CodeableConcept? Substance { get; set; }
	public required Base.CodeableConcept[] Manifestation { get; set; }
	public string? Description { get; set; }
	public string? Onset { get; set; }
	public string? Severity { get; set; }
	public Base.CodeableConcept? ExposureRoute { get; set; }
	public Base.Annotation[]? Note { get; set; }
}
}