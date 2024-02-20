using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class DetectedIssue_Evidence : BackboneElement
{
	public Base.CodeableConcept[]? Code { get; set; }
	public Base.ResourceReference[]? Detail { get; set; }
}

public class DetectedIssue_Mitigation : BackboneElement
{
	public required Base.CodeableConcept Action { get; set; }
	public string? Date { get; set; }
	public Base.ResourceReference? Author { get; set; }
}

public class DetectedIssue : DomainResource
{
	public Base.ResourceReference? Patient { get; set; }
	public DetectedIssue_Evidence[]? Evidence { get; set; }
	public DetectedIssue_Mitigation[]? Mitigation { get; set; }
	public Base.ResourceReference? Author { get; set; }
	public string? IdentifiedDateTime { get; set; }
	public string? Reference { get; set; }
	public required string Status { get; set; }
	public string? Severity { get; set; }
	public Base.CodeableConcept? Code { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.ResourceReference[]? Implicated { get; set; }
	public Base.Period? IdentifiedPeriod { get; set; }
	public string? Detail { get; set; }
}