using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class Encounter_Diagnosis : BackboneElement
{
	public required Base.ResourceReference Condition { get; set; }
	public Base.CodeableConcept? Use { get; set; }
	public string? Rank { get; set; }
}

public class Encounter_Participant : BackboneElement
{
	public Base.CodeableConcept[]? Type { get; set; }
	public Base.Period? Period { get; set; }
	public Base.ResourceReference? Individual { get; set; }
}

public class Encounter_ClassHistory : BackboneElement
{
	public required Base.Coding Class_ { get; set; }
	public required Base.Period Period { get; set; }
}

public class Encounter_Hospitalization : BackboneElement
{
	public Base.CodeableConcept? DischargeDisposition { get; set; }
	public Base.Identifier? PreAdmissionIdentifier { get; set; }
	public Base.CodeableConcept[]? SpecialArrangement { get; set; }
	public Base.CodeableConcept[]? DietPreference { get; set; }
	public Base.CodeableConcept? AdmitSource { get; set; }
	public Base.CodeableConcept[]? SpecialCourtesy { get; set; }
	public Base.CodeableConcept? ReAdmission { get; set; }
	public Base.ResourceReference? Origin { get; set; }
	public Base.ResourceReference? Destination { get; set; }
}

public class Encounter_Location : BackboneElement
{
	public required Base.ResourceReference Location { get; set; }
	public string? Status { get; set; }
	public Base.CodeableConcept? PhysicalType { get; set; }
	public Base.Period? Period { get; set; }
}

public class Encounter_StatusHistory : BackboneElement
{
	public required string Status { get; set; }
	public required Base.Period Period { get; set; }
}

public class Encounter : DomainResource
{
	public Base.ResourceReference[]? Appointment { get; set; }
	public Encounter_Diagnosis[]? Diagnosis { get; set; }
	public Base.ResourceReference? ServiceProvider { get; set; }
	public Base.ResourceReference[]? EpisodeOfCare { get; set; }
	public Base.CodeableConcept[]? ReasonCode { get; set; }
	public Base.CodeableConcept[]? Type { get; set; }
	public Encounter_Participant[]? Participant { get; set; }
	public Base.CodeableConcept? ServiceType { get; set; }
	public Base.ResourceReference[]? Account { get; set; }
	public Encounter_ClassHistory[]? ClassHistory { get; set; }
	public Base.CodeableConcept? Priority { get; set; }
	public required string Status { get; set; }
	public required Base.Coding Class_ { get; set; }
	public string? Length { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Encounter_Hospitalization? Hospitalization { get; set; }
	public Base.Period? Period { get; set; }
	public Base.ResourceReference[]? BasedOn { get; set; }
	public Base.ResourceReference? PartOf { get; set; }
	public Encounter_Location[]? Location { get; set; }
	public Base.ResourceReference? Subject { get; set; }
	public Encounter_StatusHistory[]? StatusHistory { get; set; }
	public Base.ResourceReference[]? ReasonReference { get; set; }
}