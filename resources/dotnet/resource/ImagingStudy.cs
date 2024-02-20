using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class ImagingStudy_Series_Instance : BackboneElement
{
	public required string Uid { get; set; }
	public required Base.Coding SopClass { get; set; }
	public string? Number { get; set; }
	public string? Title { get; set; }
}

public class ImagingStudy_Series_Performer : BackboneElement
{
	public Base.CodeableConcept? Function { get; set; }
	public required Base.ResourceReference Actor { get; set; }
}

public class ImagingStudy_Series : BackboneElement
{
	public string? Description { get; set; }
	public string? Started { get; set; }
	public Base.Coding? Laterality { get; set; }
	public ImagingStudy_Series_Instance[]? Instance { get; set; }
	public string? Number { get; set; }
	public required string Uid { get; set; }
	public Base.ResourceReference[]? Specimen { get; set; }
	public required Base.Coding Modality { get; set; }
	public Base.Coding? BodySite { get; set; }
	public Base.ResourceReference[]? Endpoint { get; set; }
	public string? NumberOfInstances { get; set; }
	public ImagingStudy_Series_Performer[]? Performer { get; set; }
}

public class ImagingStudy : DomainResource
{
	public string? Description { get; set; }
	public string? Started { get; set; }
	public string? NumberOfSeries { get; set; }
	public Base.ResourceReference[]? Interpreter { get; set; }
	public ImagingStudy_Series[]? Series { get; set; }
	public Base.ResourceReference? ProcedureReference { get; set; }
	public Base.ResourceReference? Encounter { get; set; }
	public Base.CodeableConcept[]? ReasonCode { get; set; }
	public Base.Coding[]? Modality { get; set; }
	public Base.Annotation[]? Note { get; set; }
	public Base.ResourceReference? Referrer { get; set; }
	public required string Status { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.ResourceReference[]? BasedOn { get; set; }
	public Base.ResourceReference? Location { get; set; }
	public Base.ResourceReference[]? Endpoint { get; set; }
	public required Base.ResourceReference Subject { get; set; }
	public string? NumberOfInstances { get; set; }
	public Base.ResourceReference[]? ReasonReference { get; set; }
	public Base.CodeableConcept[]? ProcedureCode { get; set; }
}