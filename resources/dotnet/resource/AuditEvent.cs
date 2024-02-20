using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class AuditEvent_Source : BackboneElement
{
	public string? Site { get; set; }
	public required Base.ResourceReference Observer { get; set; }
	public Base.Coding[]? Type { get; set; }
}

public class AuditEvent_Agent_Network : BackboneElement
{
	public string? Address { get; set; }
	public string? Type { get; set; }
}

public class AuditEvent_Agent : BackboneElement
{
	public Base.CodeableConcept[]? Role { get; set; }
	public required bool Requestor { get; set; }
	public Base.ResourceReference? Who { get; set; }
	public string? AltId { get; set; }
	public string? Name { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public string[]? Policy { get; set; }
	public Base.CodeableConcept[]? PurposeOfUse { get; set; }
	public AuditEvent_Agent_Network? Network { get; set; }
	public Base.ResourceReference? Location { get; set; }
	public Base.Coding? Media { get; set; }
}

public class AuditEvent_Entity_Detail : BackboneElement
{
	public required string Type { get; set; }
	public string? ValueString { get; set; }
	public string? ValueBase64Binary { get; set; }
}

public class AuditEvent_Entity : BackboneElement
{
	public Base.Coding? Role { get; set; }
	public string? Description { get; set; }
	public string? Name { get; set; }
	public Base.Coding? Type { get; set; }
	public Base.Coding? Lifecycle { get; set; }
	public string? Query { get; set; }
	public Base.Coding[]? SecurityLabel { get; set; }
	public Base.ResourceReference? What { get; set; }
	public AuditEvent_Entity_Detail[]? Detail { get; set; }
}

public class AuditEvent : DomainResource
{
	public string? OutcomeDesc { get; set; }
	public required Base.Coding Type { get; set; }
	public string? Outcome { get; set; }
	public required AuditEvent_Source Source { get; set; }
	public required string Recorded { get; set; }
	public required AuditEvent_Agent[] Agent { get; set; }
	public Base.CodeableConcept[]? PurposeOfEvent { get; set; }
	public string? Action { get; set; }
	public Base.Period? Period { get; set; }
	public AuditEvent_Entity[]? Entity { get; set; }
	public Base.Coding[]? Subtype { get; set; }
}