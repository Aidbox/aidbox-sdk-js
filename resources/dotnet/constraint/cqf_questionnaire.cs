using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Constraint;

public class CqfQuestionnaire
{
	public Meta Meta { get; } = new() { Profile = ["http://hl7.org/fhir/StructureDefinition/cqf-questionnaire"] };
	public string? Description { get; set; }
	public string[]? SubjectType { get; set; }
	public string? Date { get; set; }
	public string? Publisher { get; set; }
	public string? ApprovalDate { get; set; }
	public Base.CodeableConcept[]? Jurisdiction { get; set; }
	public string[]? DerivedFrom { get; set; }
	public string? Purpose { get; set; }
	public string? Name { get; set; }
	public Questionnaire_Item[]? Item { get; set; }
	public Base.UsageContext[]? UseContext { get; set; }
	public string? Copyright { get; set; }
	public bool? Experimental { get; set; }
	public string? Title { get; set; }
	public required string Status { get; set; }
	public string? Url { get; set; }
	public Base.Coding[]? Code { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public string? LastReviewDate { get; set; }
	public string? Version { get; set; }
	public Base.ContactDetail[]? Contact { get; set; }
	public Base.Period? EffectivePeriod { get; set; }
	public Base.Narrative? Text { get; set; }
	public Base.Resource[]? Contained { get; set; }
	public Base.Extension[]? Extension { get; set; }
	public Base.Extension[]? ModifierExtension { get; set; }
	public string? Id { get; set; }
	public string? ImplicitRules { get; set; }
	public string? Language { get; set; }

public class Questionnaire_Item_EnableWhen : BackboneElement
{
	public Base.Quantity? AnswerQuantity { get; set; }
	public string? AnswerDecimal { get; set; }
	public string? AnswerDate { get; set; }
	public Base.ResourceReference? AnswerReference { get; set; }
	public int? AnswerInteger { get; set; }
	public required string Question { get; set; }
	public string? AnswerDateTime { get; set; }
	public string? AnswerString { get; set; }
	public required string Operator { get; set; }
	public bool? AnswerBoolean { get; set; }
	public Base.Coding? AnswerCoding { get; set; }
	public string? AnswerTime { get; set; }
}

public class Questionnaire_Item_AnswerOption : BackboneElement
{
	public int? ValueInteger { get; set; }
	public string? ValueDate { get; set; }
	public string? ValueTime { get; set; }
	public string? ValueString { get; set; }
	public Base.Coding? ValueCoding { get; set; }
	public Base.ResourceReference? ValueReference { get; set; }
	public bool? InitialSelected { get; set; }
}

public class Questionnaire_Item_Initial : BackboneElement
{
	public Base.ResourceReference? ValueReference { get; set; }
	public string? ValueUri { get; set; }
	public string? ValueTime { get; set; }
	public string? ValueDecimal { get; set; }
	public Base.Quantity? ValueQuantity { get; set; }
	public string? ValueString { get; set; }
	public bool? ValueBoolean { get; set; }
	public string? ValueDateTime { get; set; }
	public string? ValueDate { get; set; }
	public Base.Coding? ValueCoding { get; set; }
	public int? ValueInteger { get; set; }
	public Base.Attachment? ValueAttachment { get; set; }
}

public class Questionnaire_Item : BackboneElement
{
	public string? EnableBehavior { get; set; }
	public string? Definition { get; set; }
	public required string LinkId { get; set; }
	public bool? Repeats { get; set; }
	public string[]? Item { get; set; }
	public required string Type { get; set; }
	public Questionnaire_Item_EnableWhen[]? EnableWhen { get; set; }
	public Questionnaire_Item_AnswerOption[]? AnswerOption { get; set; }
	public string? Prefix { get; set; }
	public bool? ReadOnly { get; set; }
	public string? AnswerValueSet { get; set; }
	public Base.Coding[]? Code { get; set; }
	public Questionnaire_Item_Initial[]? Initial { get; set; }
	public int? MaxLength { get; set; }
	public bool? Required { get; set; }
	public string? Text { get; set; }
}
}