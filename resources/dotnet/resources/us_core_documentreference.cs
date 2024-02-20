using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Constraint;

public class UsCoreDocumentreference
{
	public Meta Meta { get; } = new() { Profile = ["http://hl7.org/fhir/us/core/StructureDefinition/us-core-documentreference"] };
	public string? Description { get; set; }
	public required Base.CodeableConcept[] Category { get; set; }
	public string? Date { get; set; }
	public string? DocStatus { get; set; }
	public required DocumentReference_Content[] Content { get; set; }
	public required Base.CodeableConcept Type { get; set; }
	public Base.ResourceReference[]? Author { get; set; }
	public Base.Identifier? MasterIdentifier { get; set; }
	public Base.ResourceReference? Custodian { get; set; }
	public required string Status { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public DocumentReference_RelatesTo[]? RelatesTo { get; set; }
	public DocumentReference_Context? Context { get; set; }
	public Base.CodeableConcept[]? SecurityLabel { get; set; }
	public required Base.ResourceReference Subject { get; set; }
	public Base.ResourceReference? Authenticator { get; set; }
	public Base.Narrative? Text { get; set; }
	public Base.Resource[]? Contained { get; set; }
	public Base.Extension[]? Extension { get; set; }
	public Base.Extension[]? ModifierExtension { get; set; }
	public string? Id { get; set; }
	public string? ImplicitRules { get; set; }
	public string? Language { get; set; }

public class DocumentReference_Content : BackboneElement
{
	public required Base.Attachment Attachment { get; set; }
	public Base.Coding? Format { get; set; }
}

public class DocumentReference_RelatesTo : BackboneElement
{
	public required string Code { get; set; }
	public required Base.ResourceReference Target { get; set; }
}

public class DocumentReference_Context : BackboneElement
{
	public Base.ResourceReference[]? Encounter { get; set; }
	public Base.CodeableConcept[]? Event { get; set; }
	public Base.Period? Period { get; set; }
	public Base.CodeableConcept? FacilityType { get; set; }
	public Base.CodeableConcept? PracticeSetting { get; set; }
	public Base.ResourceReference? SourcePatientInfo { get; set; }
	public Base.ResourceReference[]? Related { get; set; }
}
}