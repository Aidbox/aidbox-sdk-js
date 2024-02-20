using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class Endpoint : DomainResource
{
	public required Base.Coding ConnectionType { get; set; }
	public required string Address { get; set; }
	public Base.ResourceReference? ManagingOrganization { get; set; }
	public string? Name { get; set; }
	public string[]? PayloadMimeType { get; set; }
	public required Base.CodeableConcept[] PayloadType { get; set; }
	public string[]? Header { get; set; }
	public required string Status { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.Period? Period { get; set; }
	public Base.ContactPoint[]? Contact { get; set; }
}