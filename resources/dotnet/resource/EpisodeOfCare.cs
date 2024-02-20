using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class EpisodeOfCare_Diagnosis : BackboneElement
{
	public required Base.ResourceReference Condition { get; set; }
	public Base.CodeableConcept? Role { get; set; }
	public string? Rank { get; set; }
}

public class EpisodeOfCare_StatusHistory : BackboneElement
{
	public required string Status { get; set; }
	public required Base.Period Period { get; set; }
}

public class EpisodeOfCare : DomainResource
{
	public required Base.ResourceReference Patient { get; set; }
	public EpisodeOfCare_Diagnosis[]? Diagnosis { get; set; }
	public Base.ResourceReference? ManagingOrganization { get; set; }
	public Base.CodeableConcept[]? Type { get; set; }
	public Base.ResourceReference[]? Account { get; set; }
	public Base.ResourceReference[]? ReferralRequest { get; set; }
	public Base.ResourceReference[]? Team { get; set; }
	public required string Status { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.Period? Period { get; set; }
	public Base.ResourceReference? CareManager { get; set; }
	public EpisodeOfCare_StatusHistory[]? StatusHistory { get; set; }
}