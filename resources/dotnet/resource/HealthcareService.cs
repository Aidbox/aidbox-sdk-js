using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class HealthcareService_AvailableTime : BackboneElement
{
	public string[]? DaysOfWeek { get; set; }
	public bool? AllDay { get; set; }
	public string? AvailableStartTime { get; set; }
	public string? AvailableEndTime { get; set; }
}

public class HealthcareService_NotAvailable : BackboneElement
{
	public required string Description { get; set; }
	public Base.Period? During { get; set; }
}

public class HealthcareService_Eligibility : BackboneElement
{
	public Base.CodeableConcept? Code { get; set; }
	public string? Comment { get; set; }
}

public class HealthcareService : DomainResource
{
	public Base.ResourceReference[]? CoverageArea { get; set; }
	public Base.CodeableConcept[]? Category { get; set; }
	public HealthcareService_AvailableTime[]? AvailableTime { get; set; }
	public Base.CodeableConcept[]? Specialty { get; set; }
	public string? Name { get; set; }
	public HealthcareService_NotAvailable[]? NotAvailable { get; set; }
	public Base.ResourceReference? ProvidedBy { get; set; }
	public Base.CodeableConcept[]? Type { get; set; }
	public HealthcareService_Eligibility[]? Eligibility { get; set; }
	public string? ExtraDetails { get; set; }
	public Base.CodeableConcept[]? Characteristic { get; set; }
	public Base.Attachment? Photo { get; set; }
	public bool? Active { get; set; }
	public Base.CodeableConcept[]? Communication { get; set; }
	public string? Comment { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.CodeableConcept[]? ServiceProvisionCode { get; set; }
	public string? AvailabilityExceptions { get; set; }
	public bool? AppointmentRequired { get; set; }
	public Base.CodeableConcept[]? ReferralMethod { get; set; }
	public Base.ContactPoint[]? Telecom { get; set; }
	public Base.ResourceReference[]? Location { get; set; }
	public Base.CodeableConcept[]? Program { get; set; }
	public Base.ResourceReference[]? Endpoint { get; set; }
}