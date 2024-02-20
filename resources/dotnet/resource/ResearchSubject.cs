using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class ResearchSubject : DomainResource
{
	public Base.Identifier[]? Identifier { get; set; }
	public required string Status { get; set; }
	public Base.Period? Period { get; set; }
	public required Base.ResourceReference Study { get; set; }
	public required Base.ResourceReference Individual { get; set; }
	public string? AssignedArm { get; set; }
	public string? ActualArm { get; set; }
	public Base.ResourceReference? Consent { get; set; }
}