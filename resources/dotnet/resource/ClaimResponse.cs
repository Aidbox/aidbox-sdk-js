using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class ClaimResponse_Insurance : BackboneElement
{
	public required string Sequence { get; set; }
	public required bool Focal { get; set; }
	public required Base.ResourceReference Coverage { get; set; }
	public string? BusinessArrangement { get; set; }
	public Base.ResourceReference? ClaimResponse { get; set; }
}

public class ClaimResponse_ProcessNote : BackboneElement
{
	public string? Number { get; set; }
	public string? Type { get; set; }
	public required string Text { get; set; }
	public Base.CodeableConcept? Language { get; set; }
}

public class ClaimResponse_Payment : BackboneElement
{
	public required Base.CodeableConcept Type { get; set; }
	public Base.Money? Adjustment { get; set; }
	public Base.CodeableConcept? AdjustmentReason { get; set; }
	public string? Date { get; set; }
	public required Base.Money Amount { get; set; }
	public Base.Identifier? Identifier { get; set; }
}

public class ClaimResponse_Item_Adjudication : BackboneElement
{
	public required Base.CodeableConcept Category { get; set; }
	public Base.CodeableConcept? Reason { get; set; }
	public Base.Money? Amount { get; set; }
	public string? Value { get; set; }
}

public class ClaimResponse_Item_Detail_SubDetail : BackboneElement
{
	public required string SubDetailSequence { get; set; }
	public string[]? NoteNumber { get; set; }
	public string[]? Adjudication { get; set; }
}

public class ClaimResponse_Item_Detail : BackboneElement
{
	public required string DetailSequence { get; set; }
	public string[]? NoteNumber { get; set; }
	public required string[] Adjudication { get; set; }
	public ClaimResponse_Item_Detail_SubDetail[]? SubDetail { get; set; }
}

public class ClaimResponse_Item : BackboneElement
{
	public required string ItemSequence { get; set; }
	public string[]? NoteNumber { get; set; }
	public required ClaimResponse_Item_Adjudication[] Adjudication { get; set; }
	public ClaimResponse_Item_Detail[]? Detail { get; set; }
}

public class ClaimResponse_Total : BackboneElement
{
	public required Base.CodeableConcept Category { get; set; }
	public required Base.Money Amount { get; set; }
}

public class ClaimResponse_Error : BackboneElement
{
	public string? ItemSequence { get; set; }
	public string? DetailSequence { get; set; }
	public string? SubDetailSequence { get; set; }
	public required Base.CodeableConcept Code { get; set; }
}

public class ClaimResponse_AddItem_Detail_SubDetail : BackboneElement
{
	public required Base.CodeableConcept ProductOrService { get; set; }
	public Base.CodeableConcept[]? Modifier { get; set; }
	public Base.Quantity? Quantity { get; set; }
	public Base.Money? UnitPrice { get; set; }
	public string? Factor { get; set; }
	public Base.Money? Net { get; set; }
	public string[]? NoteNumber { get; set; }
	public required string[] Adjudication { get; set; }
}

public class ClaimResponse_AddItem_Detail : BackboneElement
{
	public Base.CodeableConcept[]? Modifier { get; set; }
	public required string[] Adjudication { get; set; }
	public Base.Money? Net { get; set; }
	public required Base.CodeableConcept ProductOrService { get; set; }
	public string? Factor { get; set; }
	public ClaimResponse_AddItem_Detail_SubDetail[]? SubDetail { get; set; }
	public Base.Quantity? Quantity { get; set; }
	public string[]? NoteNumber { get; set; }
	public Base.Money? UnitPrice { get; set; }
}

public class ClaimResponse_AddItem : BackboneElement
{
	public Base.Address? LocationAddress { get; set; }
	public Base.CodeableConcept[]? Modifier { get; set; }
	public required string[] Adjudication { get; set; }
	public string[]? SubdetailSequence { get; set; }
	public Base.CodeableConcept? LocationCodeableConcept { get; set; }
	public string[]? ItemSequence { get; set; }
	public Base.Money? Net { get; set; }
	public string[]? DetailSequence { get; set; }
	public Base.CodeableConcept[]? SubSite { get; set; }
	public required Base.CodeableConcept ProductOrService { get; set; }
	public Base.ResourceReference? LocationReference { get; set; }
	public Base.CodeableConcept[]? ProgramCode { get; set; }
	public string? Factor { get; set; }
	public string? ServicedDate { get; set; }
	public Base.CodeableConcept? BodySite { get; set; }
	public Base.Quantity? Quantity { get; set; }
	public Base.ResourceReference[]? Provider { get; set; }
	public string[]? NoteNumber { get; set; }
	public Base.Money? UnitPrice { get; set; }
	public Base.Period? ServicedPeriod { get; set; }
	public ClaimResponse_AddItem_Detail[]? Detail { get; set; }
}

public class ClaimResponse : DomainResource
{
	public required Base.ResourceReference Patient { get; set; }
	public Base.ResourceReference? Requestor { get; set; }
	public Base.CodeableConcept? PayeeType { get; set; }
	public ClaimResponse_Insurance[]? Insurance { get; set; }
	public Base.ResourceReference? Request { get; set; }
	public ClaimResponse_ProcessNote[]? ProcessNote { get; set; }
	public string? PreAuthRef { get; set; }
	public string[]? Adjudication { get; set; }
	public required string Use { get; set; }
	public ClaimResponse_Payment? Payment { get; set; }
	public ClaimResponse_Item[]? Item { get; set; }
	public required Base.CodeableConcept Type { get; set; }
	public required string Created { get; set; }
	public Base.Period? PreAuthPeriod { get; set; }
	public required string Outcome { get; set; }
	public string? Disposition { get; set; }
	public Base.ResourceReference[]? CommunicationRequest { get; set; }
	public ClaimResponse_Total[]? Total { get; set; }
	public required Base.ResourceReference Insurer { get; set; }
	public Base.CodeableConcept? FundsReserve { get; set; }
	public required string Status { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public ClaimResponse_Error[]? Error { get; set; }
	public Base.Attachment? Form { get; set; }
	public Base.CodeableConcept? SubType { get; set; }
	public Base.CodeableConcept? FormCode { get; set; }
	public ClaimResponse_AddItem[]? AddItem { get; set; }
}