using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Constraint;

public class SimpleQuantity
{
	public Meta Meta { get; } = new() { Profile = ["http://hl7.org/fhir/StructureDefinition/SimpleQuantity"] };
	public string? Value { get; set; }
	public string? Unit { get; set; }
	public string? System { get; set; }
	public string? Code { get; set; }
	public string? Id { get; set; }
	public Base.Extension[]? Extension { get; set; }
}