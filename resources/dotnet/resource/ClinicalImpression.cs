using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class ClinicalImpression_Investigation : BackboneElement
{
	public required Base.CodeableConcept Code { get; set; }
	public Base.ResourceReference[]? Item { get; set; }
}

public class ClinicalImpression_Finding : BackboneElement
{
	public Base.CodeableConcept? ItemCodeableConcept { get; set; }
	public Base.ResourceReference? ItemReference { get; set; }
	public string? Basis { get; set; }
}

public class ClinicalImpression : DomainResource
{
	public string? Description { get; set; }
	public string? Date { get; set; }
	public ClinicalImpression_Investigation[]? Investigation { get; set; }
	public string[]? Protocol { get; set; }
	public Base.ResourceReference? Assessor { get; set; }
	public Base.ResourceReference[]? SupportingInfo { get; set; }
	public Base.ResourceReference? Encounter { get; set; }
	public Base.ResourceReference[]? Problem { get; set; }
	public Base.CodeableConcept? StatusReason { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public string? Summary { get; set; }
	public string? EffectiveDateTime { get; set; }
	public Base.CodeableConcept[]? PrognosisCodeableConcept { get; set; }
	public required string Status { get; set; }
	public Base.ResourceReference? Previous { get; set; }
	public Base.CodeableConcept? Code { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public ClinicalImpression_Finding[]? Finding { get; set; }
	public Base.ResourceReference[]? PrognosisReference { get; set; }
	public required Base.ResourceReference Subject { get; set; }
	public Base.Period? EffectivePeriod { get; set; }
}