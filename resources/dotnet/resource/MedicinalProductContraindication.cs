using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class MedicinalProductContraindication_OtherTherapy : BackboneElement
{
	public required Base.CodeableConcept TherapyRelationshipType { get; set; }
	public Base.CodeableConcept? MedicationCodeableConcept { get; set; }
	public Base.ResourceReference? MedicationReference { get; set; }
}

public class MedicinalProductContraindication : DomainResource
{
	public Base.ResourceReference[]? Subject { get; set; }
	public Base.CodeableConcept? Disease { get; set; }
	public Base.CodeableConcept? DiseaseStatus { get; set; }
	public Base.CodeableConcept[]? Comorbidity { get; set; }
	public Base.ResourceReference[]? TherapeuticIndication { get; set; }
	public MedicinalProductContraindication_OtherTherapy[]? OtherTherapy { get; set; }
	public Base.Population[]? Population { get; set; }
}