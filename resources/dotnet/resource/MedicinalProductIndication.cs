using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class MedicinalProductIndication_OtherTherapy : BackboneElement
{
	public required Base.CodeableConcept TherapyRelationshipType { get; set; }
	public Base.CodeableConcept? MedicationCodeableConcept { get; set; }
	public Base.ResourceReference? MedicationReference { get; set; }
}

public class MedicinalProductIndication : DomainResource
{
	public Base.CodeableConcept? DiseaseSymptomProcedure { get; set; }
	public Base.ResourceReference[]? UndesirableEffect { get; set; }
	public Base.Quantity? Duration { get; set; }
	public MedicinalProductIndication_OtherTherapy[]? OtherTherapy { get; set; }
	public Base.CodeableConcept[]? Comorbidity { get; set; }
	public Base.CodeableConcept? IntendedEffect { get; set; }
	public Base.Population[]? Population { get; set; }
	public Base.CodeableConcept? DiseaseStatus { get; set; }
	public Base.ResourceReference[]? Subject { get; set; }
}