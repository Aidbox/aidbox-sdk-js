using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class SubstancePolymer_MonomerSet_StartingMaterial : BackboneElement
{
	public Base.CodeableConcept? Material { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public bool? IsDefining { get; set; }
	public Base.SubstanceAmount? Amount { get; set; }
}

public class SubstancePolymer_MonomerSet : BackboneElement
{
	public Base.CodeableConcept? RatioType { get; set; }
	public SubstancePolymer_MonomerSet_StartingMaterial[]? StartingMaterial { get; set; }
}

public class SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisation : BackboneElement
{
	public Base.CodeableConcept? Degree { get; set; }
	public Base.SubstanceAmount? Amount { get; set; }
}

public class SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentation : BackboneElement
{
	public Base.CodeableConcept? Type { get; set; }
	public string? Representation { get; set; }
	public Base.Attachment? Attachment { get; set; }
}

public class SubstancePolymer_Repeat_RepeatUnit : BackboneElement
{
	public Base.CodeableConcept? OrientationOfPolymerisation { get; set; }
	public string? RepeatUnit { get; set; }
	public Base.SubstanceAmount? Amount { get; set; }
	public SubstancePolymer_Repeat_RepeatUnit_DegreeOfPolymerisation[]? DegreeOfPolymerisation { get; set; }
	public SubstancePolymer_Repeat_RepeatUnit_StructuralRepresentation[]? StructuralRepresentation { get; set; }
}

public class SubstancePolymer_Repeat : BackboneElement
{
	public int? NumberOfUnits { get; set; }
	public string? AverageMolecularFormula { get; set; }
	public Base.CodeableConcept? RepeatUnitAmountType { get; set; }
	public SubstancePolymer_Repeat_RepeatUnit[]? RepeatUnit { get; set; }
}

public class SubstancePolymer : DomainResource
{
	public Base.CodeableConcept? Class_ { get; set; }
	public Base.CodeableConcept? Geometry { get; set; }
	public Base.CodeableConcept[]? CopolymerConnectivity { get; set; }
	public string[]? Modification { get; set; }
	public SubstancePolymer_MonomerSet[]? MonomerSet { get; set; }
	public SubstancePolymer_Repeat[]? Repeat { get; set; }
}