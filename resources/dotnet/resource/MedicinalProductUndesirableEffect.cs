using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class MedicinalProductUndesirableEffect : DomainResource
{
	public Base.ResourceReference[]? Subject { get; set; }
	public Base.CodeableConcept? SymptomConditionEffect { get; set; }
	public Base.CodeableConcept? Classification { get; set; }
	public Base.CodeableConcept? FrequencyOfOccurrence { get; set; }
	public Base.Population[]? Population { get; set; }
}