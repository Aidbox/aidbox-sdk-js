using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Constraint;

public class Shareablecodesystem
{
	public Meta Meta { get; } = new() { Profile = ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"] };
	public required string Description { get; set; }
	public string? Date { get; set; }
	public bool? VersionNeeded { get; set; }
	public required string Publisher { get; set; }
	public Base.CodeableConcept[]? Jurisdiction { get; set; }
	public string? Purpose { get; set; }
	public required string Content { get; set; }
	public CodeSystem_Property[]? Property { get; set; }
	public required string Name { get; set; }
	public Base.UsageContext[]? UseContext { get; set; }
	public string? Copyright { get; set; }
	public required bool Experimental { get; set; }
	public string? Title { get; set; }
	public CodeSystem_Filter[]? Filter { get; set; }
	public string? Supplements { get; set; }
	public bool? Compositional { get; set; }
	public required string Status { get; set; }
	public string? HierarchyMeaning { get; set; }
	public string? ValueSet { get; set; }
	public string? Count { get; set; }
	public required string Url { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public required CodeSystem_Concept[] Concept { get; set; }
	public bool? CaseSensitive { get; set; }
	public required string Version { get; set; }
	public Base.ContactDetail[]? Contact { get; set; }
	public Base.Narrative? Text { get; set; }
	public Base.Resource[]? Contained { get; set; }
	public Base.Extension[]? Extension { get; set; }
	public Base.Extension[]? ModifierExtension { get; set; }
	public string? Id { get; set; }
	public string? ImplicitRules { get; set; }
	public string? Language { get; set; }

public class CodeSystem_Property : BackboneElement
{
	public required string Code { get; set; }
	public string? Uri { get; set; }
	public string? Description { get; set; }
	public required string Type { get; set; }
}

public class CodeSystem_Filter : BackboneElement
{
	public required string Code { get; set; }
	public string? Description { get; set; }
	public required string[] Operator { get; set; }
	public required string Value { get; set; }
}

public class CodeSystem_Concept_Designation : BackboneElement
{
	public string? Language { get; set; }
	public Base.Coding? Use { get; set; }
	public required string Value { get; set; }
}

public class CodeSystem_Concept_Property : BackboneElement
{
	public string? ValueCode { get; set; }
	public string? ValueDecimal { get; set; }
	public string? ValueString { get; set; }
	public bool? ValueBoolean { get; set; }
	public string? ValueDateTime { get; set; }
	public Base.Coding? ValueCoding { get; set; }
	public required string Code { get; set; }
	public int? ValueInteger { get; set; }
}

public class CodeSystem_Concept : BackboneElement
{
	public required string Code { get; set; }
	public string? Display { get; set; }
	public string? Definition { get; set; }
	public CodeSystem_Concept_Designation[]? Designation { get; set; }
	public CodeSystem_Concept_Property[]? Property { get; set; }
	public string[]? Concept { get; set; }
}
}