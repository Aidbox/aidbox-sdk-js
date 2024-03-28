using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Constraint;

public class CodexrtRadiotherapyAdverseEvent
{
	public Meta Meta { get; } = new() { Profile = ["http://hl7.org/fhir/us/codex-radiation-therapy/StructureDefinition/codexrt-radiotherapy-adverse-event"] };
	public Base.CodeableConcept[]? Category { get; set; }
	public required string Actuality { get; set; }
	public string? Date { get; set; }
	public Base.ResourceReference[]? Study { get; set; }
	public Base.ResourceReference? Encounter { get; set; }
	public AdverseEvent_SuspectEntity[]? SuspectEntity { get; set; }
	public Base.ResourceReference[]? ReferenceDocument { get; set; }
	public Base.CodeableConcept? Outcome { get; set; }
	public string? RecordedDate { get; set; }
	public required Base.CodeableConcept Event { get; set; }
	public Base.ResourceReference[]? Contributor { get; set; }
	public Base.ResourceReference[]? SubjectMedicalHistory { get; set; }
	public Base.ResourceReference? Recorder { get; set; }
	public Base.CodeableConcept? Seriousness { get; set; }
	public Base.CodeableConcept? Severity { get; set; }
	public Base.Identifier? Identifier { get; set; }
	public string? Detected { get; set; }
	public Base.ResourceReference? Location { get; set; }
	public required Base.ResourceReference Subject { get; set; }
	public Base.ResourceReference[]? ResultingCondition { get; set; }
	public Base.Narrative? Text { get; set; }
	public Base.Resource[]? Contained { get; set; }
	public Base.Extension[]? Extension { get; set; }
	public Base.Extension[]? ModifierExtension { get; set; }
	public string? Id { get; set; }
	public string? ImplicitRules { get; set; }
	public string? Language { get; set; }

public class AdverseEvent_SuspectEntity_Causality : BackboneElement
{
	public Base.CodeableConcept? Assessment { get; set; }
	public string? ProductRelatedness { get; set; }
	public Base.ResourceReference? Author { get; set; }
	public Base.CodeableConcept? Method { get; set; }
}

public class AdverseEvent_SuspectEntity : BackboneElement
{
	public required Base.ResourceReference Instance { get; set; }
	public AdverseEvent_SuspectEntity_Causality[]? Causality { get; set; }
}
}