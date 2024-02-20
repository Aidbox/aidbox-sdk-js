using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class ConceptMap_Group_Element_Target_DependsOn : BackboneElement
{
	public required string Property { get; set; }
	public string? System { get; set; }
	public required string Value { get; set; }
	public string? Display { get; set; }
}

public class ConceptMap_Group_Element_Target : BackboneElement
{
	public string? Code { get; set; }
	public string? Display { get; set; }
	public required string Equivalence { get; set; }
	public string? Comment { get; set; }
	public ConceptMap_Group_Element_Target_DependsOn[]? DependsOn { get; set; }
	public string[]? Product { get; set; }
}

public class ConceptMap_Group_Element : BackboneElement
{
	public string? Code { get; set; }
	public string? Display { get; set; }
	public ConceptMap_Group_Element_Target[]? Target { get; set; }
}

public class ConceptMap_Group_Unmapped : BackboneElement
{
	public required string Mode { get; set; }
	public string? Code { get; set; }
	public string? Display { get; set; }
	public string? Url { get; set; }
}

public class ConceptMap_Group : BackboneElement
{
	public string? Source { get; set; }
	public string? SourceVersion { get; set; }
	public string? Target { get; set; }
	public string? TargetVersion { get; set; }
	public required ConceptMap_Group_Element[] Element { get; set; }
	public ConceptMap_Group_Unmapped? Unmapped { get; set; }
}

public class ConceptMap : DomainResource
{
	public string? Description { get; set; }
	public string? SourceCanonical { get; set; }
	public string? Date { get; set; }
	public string? TargetUri { get; set; }
	public ConceptMap_Group[]? Group { get; set; }
	public string? Publisher { get; set; }
	public Base.CodeableConcept[]? Jurisdiction { get; set; }
	public string? Purpose { get; set; }
	public string? Name { get; set; }
	public Base.UsageContext[]? UseContext { get; set; }
	public string? Copyright { get; set; }
	public bool? Experimental { get; set; }
	public string? Title { get; set; }
	public string? TargetCanonical { get; set; }
	public required string Status { get; set; }
	public string? SourceUri { get; set; }
	public string? Url { get; set; }
	public Base.Identifier? Identifier { get; set; }
	public string? Version { get; set; }
	public Base.ContactDetail[]? Contact { get; set; }
}