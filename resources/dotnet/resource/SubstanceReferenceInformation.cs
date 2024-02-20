using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class SubstanceReferenceInformation_Gene : BackboneElement
{
	public Base.CodeableConcept? GeneSequenceOrigin { get; set; }
	public Base.CodeableConcept? Gene { get; set; }
	public Base.ResourceReference[]? Source { get; set; }
}

public class SubstanceReferenceInformation_GeneElement : BackboneElement
{
	public Base.CodeableConcept? Type { get; set; }
	public Base.Identifier? Element { get; set; }
	public Base.ResourceReference[]? Source { get; set; }
}

public class SubstanceReferenceInformation_Classification : BackboneElement
{
	public Base.CodeableConcept? Domain { get; set; }
	public Base.CodeableConcept? Classification { get; set; }
	public Base.CodeableConcept[]? Subtype { get; set; }
	public Base.ResourceReference[]? Source { get; set; }
}

public class SubstanceReferenceInformation_Target : BackboneElement
{
	public Base.CodeableConcept? Organism { get; set; }
	public Base.CodeableConcept? OrganismType { get; set; }
	public Base.CodeableConcept? AmountType { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public Base.CodeableConcept? Interaction { get; set; }
	public Base.ResourceReference[]? Source { get; set; }
	public Base.Quantity? AmountQuantity { get; set; }
	public string? AmountString { get; set; }
	public Base.Identifier? Target { get; set; }
	public Base.Range? AmountRange { get; set; }
}

public class SubstanceReferenceInformation : DomainResource
{
	public string? Comment { get; set; }
	public SubstanceReferenceInformation_Gene[]? Gene { get; set; }
	public SubstanceReferenceInformation_GeneElement[]? GeneElement { get; set; }
	public SubstanceReferenceInformation_Classification[]? Classification { get; set; }
	public SubstanceReferenceInformation_Target[]? Target { get; set; }
}