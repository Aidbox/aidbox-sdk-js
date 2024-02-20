using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class SubstanceProtein_Subunit : BackboneElement
{
	public int? Subunit { get; set; }
	public string? Sequence { get; set; }
	public int? Length { get; set; }
	public Base.Attachment? SequenceAttachment { get; set; }
	public Base.Identifier? NTerminalModificationId { get; set; }
	public string? NTerminalModification { get; set; }
	public Base.Identifier? CTerminalModificationId { get; set; }
	public string? CTerminalModification { get; set; }
}

public class SubstanceProtein : DomainResource
{
	public Base.CodeableConcept? SequenceType { get; set; }
	public int? NumberOfSubunits { get; set; }
	public string[]? DisulfideLinkage { get; set; }
	public SubstanceProtein_Subunit[]? Subunit { get; set; }
}