using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class SpecimenDefinition_TypeTested_Container_Additive : BackboneElement
{
	public Base.CodeableConcept? AdditiveCodeableConcept { get; set; }
	public Base.ResourceReference? AdditiveReference { get; set; }
}

public class SpecimenDefinition_TypeTested_Container : BackboneElement
{
	public string? Description { get; set; }
	public Base.Quantity? Capacity { get; set; }
	public Base.Quantity? MinimumVolumeQuantity { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public Base.CodeableConcept? Cap { get; set; }
	public string? Preparation { get; set; }
	public Base.CodeableConcept? Material { get; set; }
	public SpecimenDefinition_TypeTested_Container_Additive[]? Additive { get; set; }
	public string? MinimumVolumeString { get; set; }
}

public class SpecimenDefinition_TypeTested_Handling : BackboneElement
{
	public Base.CodeableConcept? TemperatureQualifier { get; set; }
	public Base.Range? TemperatureRange { get; set; }
	public string? MaxDuration { get; set; }
	public string? Instruction { get; set; }
}

public class SpecimenDefinition_TypeTested : BackboneElement
{
	public bool? IsDerived { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public required string Preference { get; set; }
	public SpecimenDefinition_TypeTested_Container? Container { get; set; }
	public string? Requirement { get; set; }
	public string? RetentionTime { get; set; }
	public Base.CodeableConcept[]? RejectionCriterion { get; set; }
	public SpecimenDefinition_TypeTested_Handling[]? Handling { get; set; }
}

public class SpecimenDefinition : DomainResource
{
	public Base.Identifier? Identifier { get; set; }
	public Base.CodeableConcept? TypeCollected { get; set; }
	public Base.CodeableConcept[]? PatientPreparation { get; set; }
	public string? TimeAspect { get; set; }
	public Base.CodeableConcept[]? Collection { get; set; }
	public SpecimenDefinition_TypeTested[]? TypeTested { get; set; }
}