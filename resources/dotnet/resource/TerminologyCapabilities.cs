using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class TerminologyCapabilities_Expansion_Parameter : BackboneElement
{
	public required string Name { get; set; }
	public string? Documentation { get; set; }
}

public class TerminologyCapabilities_Expansion : BackboneElement
{
	public bool? Hierarchical { get; set; }
	public bool? Paging { get; set; }
	public bool? Incomplete { get; set; }
	public TerminologyCapabilities_Expansion_Parameter[]? Parameter { get; set; }
	public string? TextFilter { get; set; }
}

public class TerminologyCapabilities_ValidateCode : BackboneElement
{
	public required bool Translations { get; set; }
}

public class TerminologyCapabilities_Translation : BackboneElement
{
	public required bool NeedsMap { get; set; }
}

public class TerminologyCapabilities_CodeSystem_Version_Filter : BackboneElement
{
	public required string Code { get; set; }
	public required string[] Op { get; set; }
}

public class TerminologyCapabilities_CodeSystem_Version : BackboneElement
{
	public string? Code { get; set; }
	public bool? IsDefault { get; set; }
	public bool? Compositional { get; set; }
	public string[]? Language { get; set; }
	public TerminologyCapabilities_CodeSystem_Version_Filter[]? Filter { get; set; }
	public string[]? Property { get; set; }
}

public class TerminologyCapabilities_CodeSystem : BackboneElement
{
	public string? Uri { get; set; }
	public TerminologyCapabilities_CodeSystem_Version[]? Version { get; set; }
	public bool? Subsumption { get; set; }
}

public class TerminologyCapabilities_Software : BackboneElement
{
	public required string Name { get; set; }
	public string? Version { get; set; }
}

public class TerminologyCapabilities_Implementation : BackboneElement
{
	public required string Description { get; set; }
	public string? Url { get; set; }
}

public class TerminologyCapabilities_Closure : BackboneElement
{
	public bool? Translation { get; set; }
}

public class TerminologyCapabilities : DomainResource
{
	public string? Description { get; set; }
	public required string Date { get; set; }
	public string? Publisher { get; set; }
	public Base.CodeableConcept[]? Jurisdiction { get; set; }
	public string? Purpose { get; set; }
	public string? Name { get; set; }
	public Base.UsageContext[]? UseContext { get; set; }
	public string? Copyright { get; set; }
	public bool? Experimental { get; set; }
	public TerminologyCapabilities_Expansion? Expansion { get; set; }
	public string? Title { get; set; }
	public required string Status { get; set; }
	public TerminologyCapabilities_ValidateCode? ValidateCode { get; set; }
	public required string Kind { get; set; }
	public TerminologyCapabilities_Translation? Translation { get; set; }
	public string? Url { get; set; }
	public TerminologyCapabilities_CodeSystem[]? CodeSystem { get; set; }
	public TerminologyCapabilities_Software? Software { get; set; }
	public string? Version { get; set; }
	public Base.ContactDetail[]? Contact { get; set; }
	public TerminologyCapabilities_Implementation? Implementation { get; set; }
	public string? CodeSearch { get; set; }
	public bool? LockedDate { get; set; }
	public TerminologyCapabilities_Closure? Closure { get; set; }
}