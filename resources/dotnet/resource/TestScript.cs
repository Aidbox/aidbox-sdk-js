using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class TestScript_Variable : BackboneElement
{
	public required string Name { get; set; }
	public string? DefaultValue { get; set; }
	public string? Description { get; set; }
	public string? Expression { get; set; }
	public string? HeaderField { get; set; }
	public string? Hint { get; set; }
	public string? Path { get; set; }
	public string? SourceId { get; set; }
}

public class TestScript_Setup_Action_Operation_RequestHeader : BackboneElement
{
	public required string Field { get; set; }
	public required string Value { get; set; }
}

public class TestScript_Setup_Action_Operation : BackboneElement
{
	public string? Description { get; set; }
	public string? Method { get; set; }
	public string? TargetId { get; set; }
	public TestScript_Setup_Action_Operation_RequestHeader[]? RequestHeader { get; set; }
	public string? Params { get; set; }
	public Base.Coding? Type { get; set; }
	public string? RequestId { get; set; }
	public required bool EncodeRequestUrl { get; set; }
	public string? Label { get; set; }
	public string? Resource { get; set; }
	public string? Url { get; set; }
	public int? Origin { get; set; }
	public string? ContentType { get; set; }
	public string? SourceId { get; set; }
	public string? ResponseId { get; set; }
	public int? Destination { get; set; }
	public string? Accept { get; set; }
}

public class TestScript_Setup_Action_Assert : BackboneElement
{
	public string? Response { get; set; }
	public string? Description { get; set; }
	public string? Path { get; set; }
	public string? HeaderField { get; set; }
	public string? CompareToSourceId { get; set; }
	public string? Expression { get; set; }
	public string? Value { get; set; }
	public required bool WarningOnly { get; set; }
	public string? CompareToSourceExpression { get; set; }
	public string? Label { get; set; }
	public string? Resource { get; set; }
	public string? ResponseCode { get; set; }
	public string? MinimumId { get; set; }
	public string? Operator { get; set; }
	public string? ContentType { get; set; }
	public string? CompareToSourcePath { get; set; }
	public string? ValidateProfileId { get; set; }
	public string? SourceId { get; set; }
	public string? RequestMethod { get; set; }
	public string? RequestURL { get; set; }
	public string? Direction { get; set; }
	public bool? NavigationLinks { get; set; }
}

public class TestScript_Setup_Action : BackboneElement
{
	public TestScript_Setup_Action_Operation? Operation { get; set; }
	public TestScript_Setup_Action_Assert? Assert_ { get; set; }
}

public class TestScript_Setup : BackboneElement
{
	public required TestScript_Setup_Action[] Action { get; set; }
}

public class TestScript_Origin : BackboneElement
{
	public required int Index { get; set; }
	public required Base.Coding Profile { get; set; }
}

public class TestScript_Fixture : BackboneElement
{
	public required bool Autocreate { get; set; }
	public required bool Autodelete { get; set; }
	public Base.ResourceReference? Resource { get; set; }
}

public class TestScript_Teardown_Action : BackboneElement
{
	public required string Operation { get; set; }
}

public class TestScript_Teardown : BackboneElement
{
	public required TestScript_Teardown_Action[] Action { get; set; }
}

public class TestScript_Metadata_Link : BackboneElement
{
	public required string Url { get; set; }
	public string? Description { get; set; }
}

public class TestScript_Metadata_Capability : BackboneElement
{
	public required bool Required { get; set; }
	public required bool Validated { get; set; }
	public string? Description { get; set; }
	public int[]? Origin { get; set; }
	public int? Destination { get; set; }
	public string[]? Link { get; set; }
	public required string Capabilities { get; set; }
}

public class TestScript_Metadata : BackboneElement
{
	public TestScript_Metadata_Link[]? Link { get; set; }
	public required TestScript_Metadata_Capability[] Capability { get; set; }
}

public class TestScript_Destination : BackboneElement
{
	public required int Index { get; set; }
	public required Base.Coding Profile { get; set; }
}

public class TestScript_Test_Action : BackboneElement
{
	public string? Operation { get; set; }
	public string? Assert_ { get; set; }
}

public class TestScript_Test : BackboneElement
{
	public string? Name { get; set; }
	public string? Description { get; set; }
	public required TestScript_Test_Action[] Action { get; set; }
}

public class TestScript : DomainResource
{
	public string? Description { get; set; }
	public string? Date { get; set; }
	public TestScript_Variable[]? Variable { get; set; }
	public string? Publisher { get; set; }
	public Base.CodeableConcept[]? Jurisdiction { get; set; }
	public string? Purpose { get; set; }
	public required string Name { get; set; }
	public Base.UsageContext[]? UseContext { get; set; }
	public string? Copyright { get; set; }
	public bool? Experimental { get; set; }
	public string? Title { get; set; }
	public TestScript_Setup? Setup { get; set; }
	public required string Status { get; set; }
	public required string Url { get; set; }
	public Base.Identifier? Identifier { get; set; }
	public TestScript_Origin[]? Origin { get; set; }
	public TestScript_Fixture[]? Fixture { get; set; }
	public string? Version { get; set; }
	public TestScript_Teardown? Teardown { get; set; }
	public Base.ContactDetail[]? Contact { get; set; }
	public TestScript_Metadata? Metadata { get; set; }
	public TestScript_Destination[]? Destination { get; set; }
	public TestScript_Test[]? Test { get; set; }
	public Base.ResourceReference[]? Profile { get; set; }
}