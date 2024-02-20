using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class CapabilityStatement_Document : BackboneElement
{
	public required string Mode { get; set; }
	public string? Documentation { get; set; }
	public required string Profile { get; set; }
}

public class CapabilityStatement_Messaging_Endpoint : BackboneElement
{
	public required Base.Coding Protocol { get; set; }
	public required string Address { get; set; }
}

public class CapabilityStatement_Messaging_SupportedMessage : BackboneElement
{
	public required string Mode { get; set; }
	public required string Definition { get; set; }
}

public class CapabilityStatement_Messaging : BackboneElement
{
	public CapabilityStatement_Messaging_Endpoint[]? Endpoint { get; set; }
	public string? ReliableCache { get; set; }
	public string? Documentation { get; set; }
	public CapabilityStatement_Messaging_SupportedMessage[]? SupportedMessage { get; set; }
}

public class CapabilityStatement_Software : BackboneElement
{
	public required string Name { get; set; }
	public string? Version { get; set; }
	public string? ReleaseDate { get; set; }
}

public class CapabilityStatement_Implementation : BackboneElement
{
	public required string Description { get; set; }
	public string? Url { get; set; }
	public Base.ResourceReference? Custodian { get; set; }
}

public class CapabilityStatement_Rest_Security : BackboneElement
{
	public bool? Cors { get; set; }
	public Base.CodeableConcept[]? Service { get; set; }
	public string? Description { get; set; }
}

public class CapabilityStatement_Rest_Resource_SearchParam : BackboneElement
{
	public required string Name { get; set; }
	public string? Definition { get; set; }
	public required string Type { get; set; }
	public string? Documentation { get; set; }
}

public class CapabilityStatement_Rest_Resource_Operation : BackboneElement
{
	public required string Name { get; set; }
	public required string Definition { get; set; }
	public string? Documentation { get; set; }
}

public class CapabilityStatement_Rest_Resource_Interaction : BackboneElement
{
	public required string Code { get; set; }
	public string? Documentation { get; set; }
}

public class CapabilityStatement_Rest_Resource : BackboneElement
{
	public string[]? SearchRevInclude { get; set; }
	public CapabilityStatement_Rest_Resource_SearchParam[]? SearchParam { get; set; }
	public bool? ConditionalUpdate { get; set; }
	public string? ConditionalRead { get; set; }
	public CapabilityStatement_Rest_Resource_Operation[]? Operation { get; set; }
	public string[]? ReferencePolicy { get; set; }
	public bool? ReadHistory { get; set; }
	public required string Type { get; set; }
	public CapabilityStatement_Rest_Resource_Interaction[]? Interaction { get; set; }
	public string? Documentation { get; set; }
	public bool? UpdateCreate { get; set; }
	public bool? ConditionalCreate { get; set; }
	public string[]? SupportedProfile { get; set; }
	public string[]? SearchInclude { get; set; }
	public string? Versioning { get; set; }
	public string? Profile { get; set; }
	public string? ConditionalDelete { get; set; }
}

public class CapabilityStatement_Rest_Interaction : BackboneElement
{
	public required string Code { get; set; }
	public string? Documentation { get; set; }
}

public class CapabilityStatement_Rest : BackboneElement
{
	public required string Mode { get; set; }
	public string? Documentation { get; set; }
	public CapabilityStatement_Rest_Security? Security { get; set; }
	public CapabilityStatement_Rest_Resource[]? Resource { get; set; }
	public CapabilityStatement_Rest_Interaction[]? Interaction { get; set; }
	public string[]? SearchParam { get; set; }
	public string[]? Operation { get; set; }
	public string[]? Compartment { get; set; }
}

public class CapabilityStatement : DomainResource
{
	public string? Description { get; set; }
	public required string[] Format { get; set; }
	public required string Date { get; set; }
	public string? Publisher { get; set; }
	public string[]? PatchFormat { get; set; }
	public required string FhirVersion { get; set; }
	public Base.CodeableConcept[]? Jurisdiction { get; set; }
	public string[]? Instantiates { get; set; }
	public string? Purpose { get; set; }
	public string? Name { get; set; }
	public Base.UsageContext[]? UseContext { get; set; }
	public string? Copyright { get; set; }
	public bool? Experimental { get; set; }
	public string[]? Imports { get; set; }
	public string? Title { get; set; }
	public CapabilityStatement_Document[]? Document { get; set; }
	public required string Status { get; set; }
	public CapabilityStatement_Messaging[]? Messaging { get; set; }
	public required string Kind { get; set; }
	public string[]? ImplementationGuide { get; set; }
	public string? Url { get; set; }
	public CapabilityStatement_Software? Software { get; set; }
	public string? Version { get; set; }
	public Base.ContactDetail[]? Contact { get; set; }
	public CapabilityStatement_Implementation? Implementation { get; set; }
	public CapabilityStatement_Rest[]? Rest { get; set; }
}