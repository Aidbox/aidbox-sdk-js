using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class DocumentManifest_Related : BackboneElement
{
	public Base.Identifier? Identifier { get; set; }
	public Base.ResourceReference? Ref { get; set; }
}

public class DocumentManifest : DomainResource
{
	public string? Description { get; set; }
	public required Base.ResourceReference[] Content { get; set; }
	public Base.ResourceReference[]? Recipient { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public string? Created { get; set; }
	public DocumentManifest_Related[]? Related { get; set; }
	public string? Source { get; set; }
	public Base.ResourceReference[]? Author { get; set; }
	public Base.Identifier? MasterIdentifier { get; set; }
	public required string Status { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.ResourceReference? Subject { get; set; }
}