using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class Appointment_Participant : BackboneElement
{
	public Base.CodeableConcept[]? Type { get; set; }
	public Base.ResourceReference? Actor { get; set; }
	public string? Required { get; set; }
	public required string Status { get; set; }
	public Base.Period? Period { get; set; }
}

public class Appointment : DomainResource
{
	public string? Description { get; set; }
	public Base.CodeableConcept[]? ServiceCategory { get; set; }
	public Base.ResourceReference[]? Slot { get; set; }
	public Base.CodeableConcept[]? Specialty { get; set; }
	public Base.CodeableConcept? CancelationReason { get; set; }
	public Base.Period[]? RequestedPeriod { get; set; }
	public string? PatientInstruction { get; set; }
	public string? Start { get; set; }
	public Base.CodeableConcept[]? ReasonCode { get; set; }
	public string? Created { get; set; }
	public required Appointment_Participant[] Participant { get; set; }
	public Base.CodeableConcept[]? ServiceType { get; set; }
	public Base.ResourceReference[]? SupportingInformation { get; set; }
	public string? Priority { get; set; }
	public Base.CodeableConcept? AppointmentType { get; set; }
	public required string Status { get; set; }
	public string? Comment { get; set; }
	public string? MinutesDuration { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.ResourceReference[]? BasedOn { get; set; }
	public string? End { get; set; }
	public Base.ResourceReference[]? ReasonReference { get; set; }
}