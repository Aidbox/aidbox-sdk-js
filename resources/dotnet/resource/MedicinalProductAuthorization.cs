using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class MedicinalProductAuthorization_JurisdictionalAuthorization : BackboneElement
{
	public Base.Identifier[]? Identifier { get; set; }
	public Base.CodeableConcept? Country { get; set; }
	public Base.CodeableConcept[]? Jurisdiction { get; set; }
	public Base.CodeableConcept? LegalStatusOfSupply { get; set; }
	public Base.Period? ValidityPeriod { get; set; }
}

public class MedicinalProductAuthorization_Procedure : BackboneElement
{
	public Base.Identifier? Identifier { get; set; }
	public required Base.CodeableConcept Type { get; set; }
	public Base.Period? DatePeriod { get; set; }
	public string? DateDateTime { get; set; }
	public string[]? Application { get; set; }
}

public class MedicinalProductAuthorization : DomainResource
{
	public Base.Period? DataExclusivityPeriod { get; set; }
	public string? RestoreDate { get; set; }
	public Base.CodeableConcept[]? Jurisdiction { get; set; }
	public MedicinalProductAuthorization_JurisdictionalAuthorization[]? JurisdictionalAuthorization { get; set; }
	public MedicinalProductAuthorization_Procedure? Procedure { get; set; }
	public Base.CodeableConcept? LegalBasis { get; set; }
	public Base.Period? ValidityPeriod { get; set; }
	public Base.ResourceReference? Regulator { get; set; }
	public Base.CodeableConcept? Status { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public string? StatusDate { get; set; }
	public string? DateOfFirstAuthorization { get; set; }
	public string? InternationalBirthDate { get; set; }
	public Base.ResourceReference? Holder { get; set; }
	public Base.CodeableConcept[]? Country { get; set; }
	public Base.ResourceReference? Subject { get; set; }
}