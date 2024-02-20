using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class OperationOutcome_Issue : BackboneElement
{
	public required string Severity { get; set; }
	public required string Code { get; set; }
	public Base.CodeableConcept? Details { get; set; }
	public string? Diagnostics { get; set; }
	public string[]? Location { get; set; }
	public string[]? Expression { get; set; }
}

public class OperationOutcome : DomainResource
{
	public required OperationOutcome_Issue[] Issue { get; set; }
}