using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class ImplementationGuide_Definition_Grouping : BackboneElement
{
	public required string Name { get; set; }
	public string? Description { get; set; }
}

public class ImplementationGuide_Definition_Resource : BackboneElement
{
	public required Base.ResourceReference Reference { get; set; }
	public string[]? FhirVersion { get; set; }
	public string? Name { get; set; }
	public string? Description { get; set; }
	public bool? ExampleBoolean { get; set; }
	public string? ExampleCanonical { get; set; }
	public string? GroupingId { get; set; }
}

public class ImplementationGuide_Definition_Page : BackboneElement
{
	public string? NameUrl { get; set; }
	public Base.ResourceReference? NameReference { get; set; }
	public required string Title { get; set; }
	public required string Generation { get; set; }
	public string[]? Page { get; set; }
}

public class ImplementationGuide_Definition_Parameter : BackboneElement
{
	public required string Code { get; set; }
	public required string Value { get; set; }
}

public class ImplementationGuide_Definition_Template : BackboneElement
{
	public required string Code { get; set; }
	public required string Source { get; set; }
	public string? Scope { get; set; }
}

public class ImplementationGuide_Definition : BackboneElement
{
	public ImplementationGuide_Definition_Grouping[]? Grouping { get; set; }
	public required ImplementationGuide_Definition_Resource[] Resource { get; set; }
	public ImplementationGuide_Definition_Page? Page { get; set; }
	public ImplementationGuide_Definition_Parameter[]? Parameter { get; set; }
	public ImplementationGuide_Definition_Template[]? Template { get; set; }
}

public class ImplementationGuide_Global : BackboneElement
{
	public required string Type { get; set; }
	public required string Profile { get; set; }
}

public class ImplementationGuide_DependsOn : BackboneElement
{
	public required string Uri { get; set; }
	public string? PackageId { get; set; }
	public string? Version { get; set; }
}

public class ImplementationGuide_Manifest_Resource : BackboneElement
{
	public required Base.ResourceReference Reference { get; set; }
	public bool? ExampleBoolean { get; set; }
	public string? ExampleCanonical { get; set; }
	public string? RelativePath { get; set; }
}

public class ImplementationGuide_Manifest_Page : BackboneElement
{
	public required string Name { get; set; }
	public string? Title { get; set; }
	public string[]? Anchor { get; set; }
}

public class ImplementationGuide_Manifest : BackboneElement
{
	public string? Rendering { get; set; }
	public required ImplementationGuide_Manifest_Resource[] Resource { get; set; }
	public ImplementationGuide_Manifest_Page[]? Page { get; set; }
	public string[]? Image { get; set; }
	public string[]? Other { get; set; }
}

public class ImplementationGuide : DomainResource
{
	public string? Description { get; set; }
	public ImplementationGuide_Definition? Definition { get; set; }
	public string? Date { get; set; }
	public string? Publisher { get; set; }
	public required string[] FhirVersion { get; set; }
	public string? License { get; set; }
	public Base.CodeableConcept[]? Jurisdiction { get; set; }
	public ImplementationGuide_Global[]? Global_ { get; set; }
	public ImplementationGuide_DependsOn[]? DependsOn { get; set; }
	public required string Name { get; set; }
	public Base.UsageContext[]? UseContext { get; set; }
	public string? Copyright { get; set; }
	public bool? Experimental { get; set; }
	public ImplementationGuide_Manifest? Manifest { get; set; }
	public string? Title { get; set; }
	public required string Status { get; set; }
	public required string Url { get; set; }
	public string? Version { get; set; }
	public required string PackageId { get; set; }
	public Base.ContactDetail[]? Contact { get; set; }
}