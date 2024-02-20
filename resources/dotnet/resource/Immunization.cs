using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class Immunization_ProtocolApplied : BackboneElement
{
	public string? SeriesDosesPositiveInt { get; set; }
	public string? DoseNumberPositiveInt { get; set; }
	public string? Series { get; set; }
	public Base.ResourceReference? Authority { get; set; }
	public string? DoseNumberString { get; set; }
	public string? SeriesDosesString { get; set; }
	public Base.CodeableConcept[]? TargetDisease { get; set; }
}

public class Immunization_Education : BackboneElement
{
	public string? DocumentType { get; set; }
	public string? Reference { get; set; }
	public string? PublicationDate { get; set; }
	public string? PresentationDate { get; set; }
}

public class Immunization_Reaction : BackboneElement
{
	public string? Date { get; set; }
	public Base.ResourceReference? Detail { get; set; }
	public bool? Reported { get; set; }
}

public class Immunization_Performer : BackboneElement
{
	public Base.CodeableConcept? Function { get; set; }
	public required Base.ResourceReference Actor { get; set; }
}

public class Immunization : DomainResource
{
	public required Base.ResourceReference Patient { get; set; }
	public bool? IsSubpotent { get; set; }
	public Base.CodeableConcept? ReportOrigin { get; set; }
	public Immunization_ProtocolApplied[]? ProtocolApplied { get; set; }
	public Base.CodeableConcept? Site { get; set; }
	public Base.ResourceReference? Encounter { get; set; }
	public required Base.CodeableConcept VaccineCode { get; set; }
	public Base.Quantity? DoseQuantity { get; set; }
	public Base.CodeableConcept[]? ReasonCode { get; set; }
	public Base.CodeableConcept? StatusReason { get; set; }
	public Base.CodeableConcept? Route { get; set; }
	public string? Recorded { get; set; }
	public Base.CodeableConcept[]? ProgramEligibility { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public bool? PrimarySource { get; set; }
	public required string Status { get; set; }
	public string? LotNumber { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.ResourceReference? Manufacturer { get; set; }
	public Immunization_Education[]? Education { get; set; }
	public string? OccurrenceString { get; set; }
	public Immunization_Reaction[]? Reaction { get; set; }
	public Base.ResourceReference? Location { get; set; }
	public string? OccurrenceDateTime { get; set; }
	public Base.CodeableConcept? FundingSource { get; set; }
	public Base.CodeableConcept[]? SubpotentReason { get; set; }
	public string? ExpirationDate { get; set; }
	public Immunization_Performer[]? Performer { get; set; }
	public Base.ResourceReference[]? ReasonReference { get; set; }
}