using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class SubstanceSpecification_Property : BackboneElement
{
	public Base.CodeableConcept? Category { get; set; }
	public Base.CodeableConcept? DefiningSubstanceCodeableConcept { get; set; }
	public Base.ResourceReference? DefiningSubstanceReference { get; set; }
	public Base.Quantity? AmountQuantity { get; set; }
	public string? AmountString { get; set; }
	public Base.CodeableConcept? Code { get; set; }
	public string? Parameters { get; set; }
}

public class SubstanceSpecification_Name_Official : BackboneElement
{
	public Base.CodeableConcept? Authority { get; set; }
	public Base.CodeableConcept? Status { get; set; }
	public string? Date { get; set; }
}

public class SubstanceSpecification_Name : BackboneElement
{
	public SubstanceSpecification_Name_Official[]? Official { get; set; }
	public Base.CodeableConcept[]? Jurisdiction { get; set; }
	public required string Name { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public Base.ResourceReference[]? Source { get; set; }
	public Base.CodeableConcept? Status { get; set; }
	public Base.CodeableConcept[]? Language { get; set; }
	public string[]? Synonym { get; set; }
	public string[]? Translation { get; set; }
	public bool? Preferred { get; set; }
	public Base.CodeableConcept[]? Domain { get; set; }
}

public class SubstanceSpecification_Relationship : BackboneElement
{
	public Base.CodeableConcept? SubstanceCodeableConcept { get; set; }
	public Base.Ratio? AmountRatioLowLimit { get; set; }
	public Base.CodeableConcept? AmountType { get; set; }
	public Base.CodeableConcept? Relationship { get; set; }
	public Base.ResourceReference[]? Source { get; set; }
	public Base.ResourceReference? SubstanceReference { get; set; }
	public Base.Ratio? AmountRatio { get; set; }
	public Base.Quantity? AmountQuantity { get; set; }
	public string? AmountString { get; set; }
	public bool? IsDefining { get; set; }
	public Base.Range? AmountRange { get; set; }
}

public class SubstanceSpecification_Moiety : BackboneElement
{
	public Base.CodeableConcept? Role { get; set; }
	public string? Name { get; set; }
	public string? MolecularFormula { get; set; }
	public Base.Quantity? AmountQuantity { get; set; }
	public string? AmountString { get; set; }
	public Base.CodeableConcept? OpticalActivity { get; set; }
	public Base.Identifier? Identifier { get; set; }
	public Base.CodeableConcept? Stereochemistry { get; set; }
}

public class SubstanceSpecification_Structure_Isotope_MolecularWeight : BackboneElement
{
	public Base.CodeableConcept? Method { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public Base.Quantity? Amount { get; set; }
}

public class SubstanceSpecification_Structure_Isotope : BackboneElement
{
	public Base.Identifier? Identifier { get; set; }
	public Base.CodeableConcept? Name { get; set; }
	public Base.CodeableConcept? Substitution { get; set; }
	public Base.Quantity? HalfLife { get; set; }
	public SubstanceSpecification_Structure_Isotope_MolecularWeight? MolecularWeight { get; set; }
}

public class SubstanceSpecification_Structure_Representation : BackboneElement
{
	public Base.CodeableConcept? Type { get; set; }
	public string? Representation { get; set; }
	public Base.Attachment? Attachment { get; set; }
}

public class SubstanceSpecification_Structure : BackboneElement
{
	public Base.CodeableConcept? Stereochemistry { get; set; }
	public Base.CodeableConcept? OpticalActivity { get; set; }
	public string? MolecularFormula { get; set; }
	public string? MolecularFormulaByMoiety { get; set; }
	public SubstanceSpecification_Structure_Isotope[]? Isotope { get; set; }
	public string? MolecularWeight { get; set; }
	public Base.ResourceReference[]? Source { get; set; }
	public SubstanceSpecification_Structure_Representation[]? Representation { get; set; }
}

public class SubstanceSpecification_Code : BackboneElement
{
	public Base.CodeableConcept? Code { get; set; }
	public Base.CodeableConcept? Status { get; set; }
	public string? StatusDate { get; set; }
	public string? Comment { get; set; }
	public Base.ResourceReference[]? Source { get; set; }
}

public class SubstanceSpecification : DomainResource
{
	public string? Description { get; set; }
	public SubstanceSpecification_Property[]? Property { get; set; }
	public SubstanceSpecification_Name[]? Name { get; set; }
	public Base.ResourceReference? ReferenceInformation { get; set; }
	public SubstanceSpecification_Relationship[]? Relationship { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public SubstanceSpecification_Moiety[]? Moiety { get; set; }
	public Base.ResourceReference[]? Source { get; set; }
	public Base.ResourceReference? NucleicAcid { get; set; }
	public SubstanceSpecification_Structure? Structure { get; set; }
	public Base.CodeableConcept? Status { get; set; }
	public string? Comment { get; set; }
	public SubstanceSpecification_Code[]? Code { get; set; }
	public Base.Identifier? Identifier { get; set; }
	public string[]? MolecularWeight { get; set; }
	public Base.ResourceReference? Polymer { get; set; }
	public Base.ResourceReference? Protein { get; set; }
	public Base.CodeableConcept? Domain { get; set; }
	public Base.ResourceReference? SourceMaterial { get; set; }
}