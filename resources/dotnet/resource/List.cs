using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class List_Entry : BackboneElement
{
	public Base.CodeableConcept? Flag { get; set; }
	public bool? Deleted { get; set; }
	public string? Date { get; set; }
	public required Base.ResourceReference Item { get; set; }
}

public class List : DomainResource
{
	public string? Date { get; set; }
	public Base.ResourceReference? Encounter { get; set; }
	public Base.CodeableConcept? OrderedBy { get; set; }
	public required string Mode { get; set; }
	public Base.ResourceReference? Source { get; set; }
	public string? Title { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public Base.CodeableConcept? EmptyReason { get; set; }
	public required string Status { get; set; }
	public Base.CodeableConcept? Code { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public List_Entry[]? Entry { get; set; }
	public Base.ResourceReference? Subject { get; set; }
}