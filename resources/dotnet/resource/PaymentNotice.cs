using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class PaymentNotice : DomainResource
{
	public Base.ResourceReference? Response { get; set; }
	public required Base.Money Amount { get; set; }
	public Base.ResourceReference? Request { get; set; }
	public required Base.ResourceReference Payment { get; set; }
	public required Base.ResourceReference Recipient { get; set; }
	public required string Created { get; set; }
	public Base.CodeableConcept? PaymentStatus { get; set; }
	public required string Status { get; set; }
	public Base.ResourceReference? Payee { get; set; }
	public string? PaymentDate { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.ResourceReference? Provider { get; set; }
}