using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Constraint;

public class McodePatientBundle
{
	public Meta Meta { get; } = new() { Profile = ["http://hl7.org/fhir/us/mcode/StructureDefinition/mcode-patient-bundle"] };
	public Base.Identifier? Identifier { get; set; }
	public required string Type { get; set; }
	public string? Timestamp { get; set; }
	public string? Total { get; set; }
	public Bundle_Link[]? Link { get; set; }
	public required Bundle_Entry[] Entry { get; set; }
	public Base.Signature? Signature { get; set; }
	public string? Id { get; set; }
	public string? ImplicitRules { get; set; }
	public string? Language { get; set; }

public class Bundle_Link : BackboneElement
{
	public required string Relation { get; set; }
	public required string Url { get; set; }
}

public class Bundle_Entry_Search : BackboneElement
{
	public string? Mode { get; set; }
	public string? Score { get; set; }
}

public class Bundle_Entry_Request : BackboneElement
{
	public required string Method { get; set; }
	public required string Url { get; set; }
	public string? IfNoneMatch { get; set; }
	public string? IfModifiedSince { get; set; }
	public string? IfMatch { get; set; }
	public string? IfNoneExist { get; set; }
}

public class Bundle_Entry_Response : BackboneElement
{
	public required string Status { get; set; }
	public string? Location { get; set; }
	public string? Etag { get; set; }
	public string? LastModified { get; set; }
	public Base.Resource? Outcome { get; set; }
}

public class Bundle_Entry : BackboneElement
{
	public string[]? Link { get; set; }
	public string? FullUrl { get; set; }
	public Base.Resource? Resource { get; set; }
	public Bundle_Entry_Search? Search { get; set; }
	public Bundle_Entry_Request? Request { get; set; }
	public Bundle_Entry_Response? Response { get; set; }
}
}