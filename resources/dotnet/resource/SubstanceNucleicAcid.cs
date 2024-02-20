using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class SubstanceNucleicAcid_Subunit_Linkage : BackboneElement
{
	public string? Connectivity { get; set; }
	public Base.Identifier? Identifier { get; set; }
	public string? Name { get; set; }
	public string? ResidueSite { get; set; }
}

public class SubstanceNucleicAcid_Subunit_Sugar : BackboneElement
{
	public Base.Identifier? Identifier { get; set; }
	public string? Name { get; set; }
	public string? ResidueSite { get; set; }
}

public class SubstanceNucleicAcid_Subunit : BackboneElement
{
	public int? Subunit { get; set; }
	public string? Sequence { get; set; }
	public int? Length { get; set; }
	public Base.Attachment? SequenceAttachment { get; set; }
	public Base.CodeableConcept? FivePrime { get; set; }
	public Base.CodeableConcept? ThreePrime { get; set; }
	public SubstanceNucleicAcid_Subunit_Linkage[]? Linkage { get; set; }
	public SubstanceNucleicAcid_Subunit_Sugar[]? Sugar { get; set; }
}

public class SubstanceNucleicAcid : DomainResource
{
	public Base.CodeableConcept? SequenceType { get; set; }
	public int? NumberOfSubunits { get; set; }
	public string? AreaOfHybridisation { get; set; }
	public Base.CodeableConcept? OligoNucleotideType { get; set; }
	public SubstanceNucleicAcid_Subunit[]? Subunit { get; set; }
}