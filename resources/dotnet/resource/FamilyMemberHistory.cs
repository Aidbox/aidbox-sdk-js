using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class FamilyMemberHistory_Condition : BackboneElement
{
	public Base.Range? OnsetRange { get; set; }
	public string? OnsetAge { get; set; }
	public bool? ContributedToDeath { get; set; }
	public Base.Period? OnsetPeriod { get; set; }
	public Base.CodeableConcept? Outcome { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public string? OnsetString { get; set; }
	public required Base.CodeableConcept Code { get; set; }
}

public class FamilyMemberHistory : DomainResource
{
	public string? DeceasedAge { get; set; }
	public required Base.ResourceReference Patient { get; set; }
	public string? Date { get; set; }
	public string[]? InstantiatesCanonical { get; set; }
	public string[]? InstantiatesUri { get; set; }
	public Base.CodeableConcept? Sex { get; set; }
	public Base.Range? AgeRange { get; set; }
	public string? BornString { get; set; }
	public bool? DeceasedBoolean { get; set; }
	public string? Name { get; set; }
	public required Base.CodeableConcept Relationship { get; set; }
	public Base.CodeableConcept[]? ReasonCode { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public required string Status { get; set; }
	public FamilyMemberHistory_Condition[]? Condition { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public string? AgeString { get; set; }
	public Base.Range? DeceasedRange { get; set; }
	public string? DeceasedDate { get; set; }
	public Base.Period? BornPeriod { get; set; }
	public string? DeceasedString { get; set; }
	public string? AgeAge { get; set; }
	public string? BornDate { get; set; }
	public Base.CodeableConcept? DataAbsentReason { get; set; }
	public Base.ResourceReference[]? ReasonReference { get; set; }
	public bool? EstimatedAge { get; set; }
}