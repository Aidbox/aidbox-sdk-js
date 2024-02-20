using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class VerificationResult_Validator : BackboneElement
{
	public required Base.ResourceReference Organization { get; set; }
	public string? IdentityCertificate { get; set; }
	public Base.Signature? AttestationSignature { get; set; }
}

public class VerificationResult_PrimarySource : BackboneElement
{
	public Base.ResourceReference? Who { get; set; }
	public Base.CodeableConcept[]? Type { get; set; }
	public Base.CodeableConcept[]? CommunicationMethod { get; set; }
	public Base.CodeableConcept? ValidationStatus { get; set; }
	public string? ValidationDate { get; set; }
	public Base.CodeableConcept? CanPushUpdates { get; set; }
	public Base.CodeableConcept[]? PushTypeAvailable { get; set; }
}

public class VerificationResult_Attestation : BackboneElement
{
	public Base.ResourceReference? Who { get; set; }
	public Base.ResourceReference? OnBehalfOf { get; set; }
	public Base.CodeableConcept? CommunicationMethod { get; set; }
	public string? Date { get; set; }
	public string? SourceIdentityCertificate { get; set; }
	public string? ProxyIdentityCertificate { get; set; }
	public Base.Signature? ProxySignature { get; set; }
	public Base.Signature? SourceSignature { get; set; }
}

public class VerificationResult : DomainResource
{
	public Base.CodeableConcept? FailureAction { get; set; }
	public Base.CodeableConcept? ValidationType { get; set; }
	public string[]? TargetLocation { get; set; }
	public VerificationResult_Validator[]? Validator { get; set; }
	public Base.CodeableConcept? Need { get; set; }
	public string? Frequency { get; set; }
	public string? NextScheduled { get; set; }
	public VerificationResult_PrimarySource[]? PrimarySource { get; set; }
	public VerificationResult_Attestation? Attestation { get; set; }
	public required string Status { get; set; }
	public Base.CodeableConcept[]? ValidationProcess { get; set; }
	public string? StatusDate { get; set; }
	public Base.ResourceReference[]? Target { get; set; }
	public string? LastPerformed { get; set; }
}