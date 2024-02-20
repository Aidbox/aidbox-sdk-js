using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

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

public class AllergyIntolerance : DomainResource
{
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
	public Base.CodeableConcept? Code { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public string? OnsetDateTime { get; set; }
	public string? LastOccurrence { get; set; }
	public Base.CodeableConcept? VerificationStatus { get; set; }
	public AllergyIntolerance_Reaction[]? Reaction { get; set; }
}