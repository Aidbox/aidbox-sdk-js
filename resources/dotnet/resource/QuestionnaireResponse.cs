using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class QuestionnaireResponse_Item_Answer : BackboneElement
{
	public Base.ResourceReference? ValueReference { get; set; }
	public string? ValueUri { get; set; }
	public string? ValueTime { get; set; }
	public string? ValueDecimal { get; set; }
	public Base.Quantity? ValueQuantity { get; set; }
	public string[]? Item { get; set; }
	public string? ValueString { get; set; }
	public bool? ValueBoolean { get; set; }
	public string? ValueDateTime { get; set; }
	public string? ValueDate { get; set; }
	public Base.Coding? ValueCoding { get; set; }
	public int? ValueInteger { get; set; }
	public Base.Attachment? ValueAttachment { get; set; }
}

public class QuestionnaireResponse_Item : BackboneElement
{
	public required string LinkId { get; set; }
	public string? Definition { get; set; }
	public string? Text { get; set; }
	public QuestionnaireResponse_Item_Answer[]? Answer { get; set; }
	public string[]? Item { get; set; }
}

public class QuestionnaireResponse : DomainResource
{
	public string? Questionnaire { get; set; }
	public Base.ResourceReference? Encounter { get; set; }
	public QuestionnaireResponse_Item[]? Item { get; set; }
	public Base.ResourceReference? Source { get; set; }
	public Base.ResourceReference? Author { get; set; }
	public required string Status { get; set; }
	public Base.Identifier? Identifier { get; set; }
	public Base.ResourceReference[]? BasedOn { get; set; }
	public string? Authored { get; set; }
	public Base.ResourceReference[]? PartOf { get; set; }
	public Base.ResourceReference? Subject { get; set; }
}