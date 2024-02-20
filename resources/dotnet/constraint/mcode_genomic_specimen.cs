using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Constraint;

public class McodeGenomicSpecimen
{
	public Meta Meta { get; } = new() { Profile = ["http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-genomic-specimen"] };
	public Base.ResourceReference[]? Request { get; set; }
	public string? ReceivedTime { get; set; }
	public Specimen_Processing[]? Processing { get; set; }
	public Base.ResourceReference[]? Parent { get; set; }
	public required Base.CodeableConcept Type { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public string? Status { get; set; }
	public Base.CodeableConcept[]? Condition { get; set; }
	public Specimen_Container[]? Container { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.Identifier? AccessionIdentifier { get; set; }
	public Specimen_Collection? Collection { get; set; }
	public Base.ResourceReference? Subject { get; set; }
	public Base.Narrative? Text { get; set; }
	public Base.Resource[]? Contained { get; set; }
	public Base.Extension[]? Extension { get; set; }
	public Base.Extension[]? ModifierExtension { get; set; }
	public string? Id { get; set; }
	public string? ImplicitRules { get; set; }
	public string? Language { get; set; }

public class Specimen_Processing : BackboneElement
{
	public string? Description { get; set; }
	public Base.CodeableConcept? Procedure { get; set; }
	public Base.ResourceReference[]? Additive { get; set; }
	public string? TimeDateTime { get; set; }
	public Base.Period? TimePeriod { get; set; }
}

public class Specimen_Container : BackboneElement
{
	public Base.Identifier[]? Identifier { get; set; }
	public string? Description { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public Base.Quantity? Capacity { get; set; }
	public Base.Quantity? SpecimenQuantity { get; set; }
	public Base.CodeableConcept? AdditiveCodeableConcept { get; set; }
	public Base.ResourceReference? AdditiveReference { get; set; }
}

public class Specimen_Collection : BackboneElement
{
	public string? CollectedDateTime { get; set; }
	public Base.CodeableConcept? FastingStatusCodeableConcept { get; set; }
	public Base.CodeableConcept? Method { get; set; }
	public string? FastingStatusDuration { get; set; }
	public string? Duration { get; set; }
	public Base.ResourceReference? Collector { get; set; }
	public Base.CodeableConcept? BodySite { get; set; }
	public Base.Quantity? Quantity { get; set; }
	public Base.Period? CollectedPeriod { get; set; }
}
}