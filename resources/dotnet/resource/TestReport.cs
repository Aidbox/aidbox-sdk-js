using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class TestReport_Participant : BackboneElement
{
	public required string Type { get; set; }
	public required string Uri { get; set; }
	public string? Display { get; set; }
}

public class TestReport_Setup_Action_Operation : BackboneElement
{
	public required string Result { get; set; }
	public string? Message { get; set; }
	public string? Detail { get; set; }
}

public class TestReport_Setup_Action_Assert : BackboneElement
{
	public required string Result { get; set; }
	public string? Message { get; set; }
	public string? Detail { get; set; }
}

public class TestReport_Setup_Action : BackboneElement
{
	public TestReport_Setup_Action_Operation? Operation { get; set; }
	public TestReport_Setup_Action_Assert? Assert_ { get; set; }
}

public class TestReport_Setup : BackboneElement
{
	public required TestReport_Setup_Action[] Action { get; set; }
}

public class TestReport_Teardown_Action : BackboneElement
{
	public required string Operation { get; set; }
}

public class TestReport_Teardown : BackboneElement
{
	public required TestReport_Teardown_Action[] Action { get; set; }
}

public class TestReport_Test_Action : BackboneElement
{
	public string? Operation { get; set; }
	public string? Assert_ { get; set; }
}

public class TestReport_Test : BackboneElement
{
	public string? Name { get; set; }
	public string? Description { get; set; }
	public required TestReport_Test_Action[] Action { get; set; }
}

public class TestReport : DomainResource
{
	public string? Tester { get; set; }
	public string? Name { get; set; }
	public required Base.ResourceReference TestScript { get; set; }
	public TestReport_Participant[]? Participant { get; set; }
	public TestReport_Setup? Setup { get; set; }
	public required string Status { get; set; }
	public required string Result { get; set; }
	public string? Score { get; set; }
	public Base.Identifier? Identifier { get; set; }
	public string? Issued { get; set; }
	public TestReport_Teardown? Teardown { get; set; }
	public TestReport_Test[]? Test { get; set; }
}