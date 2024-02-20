using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class Claim_Insurance : BackboneElement
{
	public required string Sequence { get; set; }
	public required bool Focal { get; set; }
	public Base.Identifier? Identifier { get; set; }
	public required Base.ResourceReference Coverage { get; set; }
	public string? BusinessArrangement { get; set; }
	public string[]? PreAuthRef { get; set; }
	public Base.ResourceReference? ClaimResponse { get; set; }
}

public class Claim_Diagnosis : BackboneElement
{
	public required string Sequence { get; set; }
	public Base.CodeableConcept? DiagnosisCodeableConcept { get; set; }
	public Base.ResourceReference? DiagnosisReference { get; set; }
	public Base.CodeableConcept[]? Type { get; set; }
	public Base.CodeableConcept? OnAdmission { get; set; }
	public Base.CodeableConcept? PackageCode { get; set; }
}

public class Claim_SupportingInfo : BackboneElement
{
	public required Base.CodeableConcept Category { get; set; }
	public Base.ResourceReference? ValueReference { get; set; }
	public Base.Quantity? ValueQuantity { get; set; }
	public Base.Period? TimingPeriod { get; set; }
	public string? ValueString { get; set; }
	public bool? ValueBoolean { get; set; }
	public Base.CodeableConcept? Reason { get; set; }
	public required string Sequence { get; set; }
	public Base.CodeableConcept? Code { get; set; }
	public string? TimingDate { get; set; }
	public Base.Attachment? ValueAttachment { get; set; }
}

public class Claim_Item_Detail_SubDetail : BackboneElement
{
	public Base.CodeableConcept? Category { get; set; }
	public Base.CodeableConcept[]? Modifier { get; set; }
	public Base.CodeableConcept? Revenue { get; set; }
	public Base.Money? Net { get; set; }
	public required Base.CodeableConcept ProductOrService { get; set; }
	public Base.ResourceReference[]? Udi { get; set; }
	public Base.CodeableConcept[]? ProgramCode { get; set; }
	public string? Factor { get; set; }
	public required string Sequence { get; set; }
	public Base.Quantity? Quantity { get; set; }
	public Base.Money? UnitPrice { get; set; }
}

public class Claim_Item_Detail : BackboneElement
{
	public Base.CodeableConcept? Category { get; set; }
	public Base.CodeableConcept[]? Modifier { get; set; }
	public Base.CodeableConcept? Revenue { get; set; }
	public Base.Money? Net { get; set; }
	public required Base.CodeableConcept ProductOrService { get; set; }
	public Base.ResourceReference[]? Udi { get; set; }
	public Base.CodeableConcept[]? ProgramCode { get; set; }
	public string? Factor { get; set; }
	public required string Sequence { get; set; }
	public Claim_Item_Detail_SubDetail[]? SubDetail { get; set; }
	public Base.Quantity? Quantity { get; set; }
	public Base.Money? UnitPrice { get; set; }
}

public class Claim_Item : BackboneElement
{
	public Base.CodeableConcept? Category { get; set; }
	public string[]? DiagnosisSequence { get; set; }
	public string[]? ProcedureSequence { get; set; }
	public Base.Address? LocationAddress { get; set; }
	public Base.CodeableConcept[]? Modifier { get; set; }
	public Base.CodeableConcept? Revenue { get; set; }
	public Base.ResourceReference[]? Encounter { get; set; }
	public Base.CodeableConcept? LocationCodeableConcept { get; set; }
	public Base.Money? Net { get; set; }
	public Base.CodeableConcept[]? SubSite { get; set; }
	public string[]? CareTeamSequence { get; set; }
	public required Base.CodeableConcept ProductOrService { get; set; }
	public Base.ResourceReference? LocationReference { get; set; }
	public Base.ResourceReference[]? Udi { get; set; }
	public string[]? InformationSequence { get; set; }
	public Base.CodeableConcept[]? ProgramCode { get; set; }
	public string? Factor { get; set; }
	public string? ServicedDate { get; set; }
	public required string Sequence { get; set; }
	public Base.CodeableConcept? BodySite { get; set; }
	public Base.Quantity? Quantity { get; set; }
	public Base.Money? UnitPrice { get; set; }
	public Base.Period? ServicedPeriod { get; set; }
	public Claim_Item_Detail[]? Detail { get; set; }
}

public class Claim_Procedure : BackboneElement
{
	public required string Sequence { get; set; }
	public Base.CodeableConcept[]? Type { get; set; }
	public string? Date { get; set; }
	public Base.CodeableConcept? ProcedureCodeableConcept { get; set; }
	public Base.ResourceReference? ProcedureReference { get; set; }
	public Base.ResourceReference[]? Udi { get; set; }
}

public class Claim_Related : BackboneElement
{
	public Base.ResourceReference? Claim { get; set; }
	public Base.CodeableConcept? Relationship { get; set; }
	public Base.Identifier? Reference { get; set; }
}

public class Claim_Accident : BackboneElement
{
	public required string Date { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public Base.Address? LocationAddress { get; set; }
	public Base.ResourceReference? LocationReference { get; set; }
}

public class Claim_Payee : BackboneElement
{
	public required Base.CodeableConcept Type { get; set; }
	public Base.ResourceReference? Party { get; set; }
}

public class Claim_CareTeam : BackboneElement
{
	public required string Sequence { get; set; }
	public required Base.ResourceReference Provider { get; set; }
	public bool? Responsible { get; set; }
	public Base.CodeableConcept? Role { get; set; }
	public Base.CodeableConcept? Qualification { get; set; }
}

public class Claim : DomainResource
{
	public required Base.ResourceReference Patient { get; set; }
	public required Claim_Insurance[] Insurance { get; set; }
	public Base.ResourceReference? Facility { get; set; }
	public Claim_Diagnosis[]? Diagnosis { get; set; }
	public Base.ResourceReference? Enterer { get; set; }
	public Claim_SupportingInfo[]? SupportingInfo { get; set; }
	public required string Use { get; set; }
	public Claim_Item[]? Item { get; set; }
	public required Base.CodeableConcept Type { get; set; }
	public required string Created { get; set; }
	public Claim_Procedure[]? Procedure { get; set; }
	public Claim_Related[]? Related { get; set; }
	public Base.ResourceReference? Referral { get; set; }
	public Base.Money? Total { get; set; }
	public Base.ResourceReference? Insurer { get; set; }
	public Base.CodeableConcept? FundsReserve { get; set; }
	public required Base.CodeableConcept Priority { get; set; }
	public Claim_Accident? Accident { get; set; }
	public required string Status { get; set; }
	public Claim_Payee? Payee { get; set; }
	public Base.ResourceReference? Prescription { get; set; }
	public Base.Period? BillablePeriod { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.CodeableConcept? SubType { get; set; }
	public required Base.ResourceReference Provider { get; set; }
	public Base.ResourceReference? OriginalPrescription { get; set; }
	public Claim_CareTeam[]? CareTeam { get; set; }
}