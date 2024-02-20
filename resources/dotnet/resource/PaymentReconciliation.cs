using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class PaymentReconciliation_ProcessNote : BackboneElement
{
	public string? Type { get; set; }
	public string? Text { get; set; }
}

public class PaymentReconciliation_Detail : BackboneElement
{
	public Base.ResourceReference? Response { get; set; }
	public Base.Money? Amount { get; set; }
	public string? Date { get; set; }
	public Base.ResourceReference? Request { get; set; }
	public required Base.CodeableConcept Type { get; set; }
	public Base.ResourceReference? Responsible { get; set; }
	public Base.ResourceReference? Payee { get; set; }
	public Base.Identifier? Predecessor { get; set; }
	public Base.Identifier? Identifier { get; set; }
	public Base.ResourceReference? Submitter { get; set; }
}

public class PaymentReconciliation : DomainResource
{
	public Base.ResourceReference? Requestor { get; set; }
	public Base.ResourceReference? Request { get; set; }
	public required Base.Money PaymentAmount { get; set; }
	public PaymentReconciliation_ProcessNote[]? ProcessNote { get; set; }
	public required string Created { get; set; }
	public string? Outcome { get; set; }
	public string? Disposition { get; set; }
	public Base.Identifier? PaymentIdentifier { get; set; }
	public required string Status { get; set; }
	public required string PaymentDate { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.Period? Period { get; set; }
	public Base.ResourceReference? PaymentIssuer { get; set; }
	public Base.CodeableConcept? FormCode { get; set; }
	public PaymentReconciliation_Detail[]? Detail { get; set; }
}