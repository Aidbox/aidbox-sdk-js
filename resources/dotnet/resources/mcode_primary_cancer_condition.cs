using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Constraint;

public class McodePrimaryCancerCondition
{
	public Meta Meta { get; } = new() { Profile = ["http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-primary-cancer-condition"] };
	public required Base.CodeableConcept[] Category { get; set; }
	public Base.CodeableConcept? ClinicalStatus { get; set; }
	public string? AbatementAge { get; set; }
	public Base.Range? OnsetRange { get; set; }
	public string? OnsetAge { get; set; }
	public Condition_Stage[]? Stage { get; set; }
	public Base.ResourceReference? Encounter { get; set; }
	public Condition_Evidence[]? Evidence { get; set; }
	public Base.Period? OnsetPeriod { get; set; }
	public Base.Period? AbatementPeriod { get; set; }
	public Base.ResourceReference? Asserter { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public string? AbatementString { get; set; }
	public Base.Range? AbatementRange { get; set; }
	public string? RecordedDate { get; set; }
	public string? OnsetString { get; set; }
	public Base.ResourceReference? Recorder { get; set; }
	public Base.CodeableConcept? Severity { get; set; }
	public required Base.CodeableConcept Code { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public string? OnsetDateTime { get; set; }
	public Base.CodeableConcept[]? BodySite { get; set; }
	public string? AbatementDateTime { get; set; }
	public Base.CodeableConcept? VerificationStatus { get; set; }
	public required Base.ResourceReference Subject { get; set; }
	public Base.Narrative? Text { get; set; }
	public Base.Resource[]? Contained { get; set; }
	public Base.Extension[]? Extension { get; set; }
	public Base.Extension[]? ModifierExtension { get; set; }
	public string? Id { get; set; }
	public string? ImplicitRules { get; set; }
	public string? Language { get; set; }

public class Condition_Stage : BackboneElement
{
	public Base.CodeableConcept? Summary { get; set; }
	public Base.ResourceReference[]? Assessment { get; set; }
	public Base.CodeableConcept? Type { get; set; }
}

public class Condition_Evidence : BackboneElement
{
	public Base.CodeableConcept[]? Code { get; set; }
	public Base.ResourceReference[]? Detail { get; set; }
}
}