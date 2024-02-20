using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class ExampleScenario_Instance_Version : BackboneElement
{
	public required string VersionId { get; set; }
	public required string Description { get; set; }
}

public class ExampleScenario_Instance_ContainedInstance : BackboneElement
{
	public required string ResourceId { get; set; }
	public string? VersionId { get; set; }
}

public class ExampleScenario_Instance : BackboneElement
{
	public required string ResourceId { get; set; }
	public required string ResourceType { get; set; }
	public string? Name { get; set; }
	public string? Description { get; set; }
	public ExampleScenario_Instance_Version[]? Version { get; set; }
	public ExampleScenario_Instance_ContainedInstance[]? ContainedInstance { get; set; }
}

public class ExampleScenario_Process_Step_Operation : BackboneElement
{
	public string? Response { get; set; }
	public string? Description { get; set; }
	public string? Request { get; set; }
	public required string Number { get; set; }
	public string? Name { get; set; }
	public string? Initiator { get; set; }
	public string? Type { get; set; }
	public bool? ReceiverActive { get; set; }
	public bool? InitiatorActive { get; set; }
	public string? Receiver { get; set; }
}

public class ExampleScenario_Process_Step_Alternative : BackboneElement
{
	public required string Title { get; set; }
	public string? Description { get; set; }
	public string[]? Step { get; set; }
}

public class ExampleScenario_Process_Step : BackboneElement
{
	public string[]? Process { get; set; }
	public bool? Pause { get; set; }
	public ExampleScenario_Process_Step_Operation? Operation { get; set; }
	public ExampleScenario_Process_Step_Alternative[]? Alternative { get; set; }
}

public class ExampleScenario_Process : BackboneElement
{
	public required string Title { get; set; }
	public string? Description { get; set; }
	public string? PreConditions { get; set; }
	public string? PostConditions { get; set; }
	public ExampleScenario_Process_Step[]? Step { get; set; }
}

public class ExampleScenario_Actor : BackboneElement
{
	public required string ActorId { get; set; }
	public required string Type { get; set; }
	public string? Name { get; set; }
	public string? Description { get; set; }
}

public class ExampleScenario : DomainResource
{
	public string? Date { get; set; }
	public string? Publisher { get; set; }
	public ExampleScenario_Instance[]? Instance { get; set; }
	public Base.CodeableConcept[]? Jurisdiction { get; set; }
	public string? Purpose { get; set; }
	public string? Name { get; set; }
	public ExampleScenario_Process[]? Process { get; set; }
	public Base.UsageContext[]? UseContext { get; set; }
	public string? Copyright { get; set; }
	public bool? Experimental { get; set; }
	public string[]? Workflow { get; set; }
	public required string Status { get; set; }
	public string? Url { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public string? Version { get; set; }
	public Base.ContactDetail[]? Contact { get; set; }
	public ExampleScenario_Actor[]? Actor { get; set; }
}