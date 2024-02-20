using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class Flag : DomainResource
{
	public Base.Identifier[]? Identifier { get; set; }
	public required string Status { get; set; }
	public Base.CodeableConcept[]? Category { get; set; }
	public required Base.CodeableConcept Code { get; set; }
	public required Base.ResourceReference Subject { get; set; }
	public Base.Period? Period { get; set; }
	public Base.ResourceReference? Encounter { get; set; }
	public Base.ResourceReference? Author { get; set; }
}