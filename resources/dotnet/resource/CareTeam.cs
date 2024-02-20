using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class CareTeam_Participant : BackboneElement
{
	public Base.CodeableConcept[]? Role { get; set; }
	public Base.ResourceReference? Member { get; set; }
	public Base.ResourceReference? OnBehalfOf { get; set; }
	public Base.Period? Period { get; set; }
}

public class CareTeam : DomainResource
{
	public Base.CodeableConcept[]? Category { get; set; }
	public Base.ResourceReference[]? ManagingOrganization { get; set; }
	public Base.ResourceReference? Encounter { get; set; }
	public string? Name { get; set; }
	public Base.CodeableConcept[]? ReasonCode { get; set; }
	public CareTeam_Participant[]? Participant { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public string? Status { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.ContactPoint[]? Telecom { get; set; }
	public Base.Period? Period { get; set; }
	public Base.ResourceReference? Subject { get; set; }
	public Base.ResourceReference[]? ReasonReference { get; set; }
}