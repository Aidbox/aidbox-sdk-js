using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class ExplanationOfBenefit_Insurance : BackboneElement
{
	public required bool Focal { get; set; }
	public required Base.ResourceReference Coverage { get; set; }
	public string[]? PreAuthRef { get; set; }
}

public class ExplanationOfBenefit_BenefitBalance_Financial : BackboneElement
{
	public required Base.CodeableConcept Type { get; set; }
	public string? AllowedUnsignedInt { get; set; }
	public string? AllowedString { get; set; }
	public Base.Money? AllowedMoney { get; set; }
	public string? UsedUnsignedInt { get; set; }
	public Base.Money? UsedMoney { get; set; }
}

public class ExplanationOfBenefit_BenefitBalance : BackboneElement
{
	public required Base.CodeableConcept Category { get; set; }
	public bool? Excluded { get; set; }
	public string? Name { get; set; }
	public string? Description { get; set; }
	public Base.CodeableConcept? Network { get; set; }
	public Base.CodeableConcept? Unit { get; set; }
	public Base.CodeableConcept? Term { get; set; }
	public ExplanationOfBenefit_BenefitBalance_Financial[]? Financial { get; set; }
}

public class ExplanationOfBenefit_ProcessNote : BackboneElement
{
	public string? Number { get; set; }
	public string? Type { get; set; }
	public string? Text { get; set; }
	public Base.CodeableConcept? Language { get; set; }
}

public class ExplanationOfBenefit_Diagnosis : BackboneElement
{
	public required string Sequence { get; set; }
	public Base.CodeableConcept? DiagnosisCodeableConcept { get; set; }
	public Base.ResourceReference? DiagnosisReference { get; set; }
	public Base.CodeableConcept[]? Type { get; set; }
	public Base.CodeableConcept? OnAdmission { get; set; }
	public Base.CodeableConcept? PackageCode { get; set; }
}

public class ExplanationOfBenefit_SupportingInfo : BackboneElement
{
	public required Base.CodeableConcept Category { get; set; }
	public Base.ResourceReference? ValueReference { get; set; }
	public Base.Quantity? ValueQuantity { get; set; }
	public Base.Period? TimingPeriod { get; set; }
	public string? ValueString { get; set; }
	public bool? ValueBoolean { get; set; }
	public Base.Coding? Reason { get; set; }
	public required string Sequence { get; set; }
	public Base.CodeableConcept? Code { get; set; }
	public string? TimingDate { get; set; }
	public Base.Attachment? ValueAttachment { get; set; }
}

public class ExplanationOfBenefit_Payment : BackboneElement
{
	public Base.CodeableConcept? Type { get; set; }
	public Base.Money? Adjustment { get; set; }
	public Base.CodeableConcept? AdjustmentReason { get; set; }
	public string? Date { get; set; }
	public Base.Money? Amount { get; set; }
	public Base.Identifier? Identifier { get; set; }
}

public class ExplanationOfBenefit_Item_Adjudication : BackboneElement
{
	public required Base.CodeableConcept Category { get; set; }
	public Base.CodeableConcept? Reason { get; set; }
	public Base.Money? Amount { get; set; }
	public string? Value { get; set; }
}

public class ExplanationOfBenefit_Item_Detail_SubDetail : BackboneElement
{
	public Base.CodeableConcept? Category { get; set; }
	public Base.CodeableConcept[]? Modifier { get; set; }
	public Base.CodeableConcept? Revenue { get; set; }
	public string[]? Adjudication { get; set; }
	public Base.Money? Net { get; set; }
	public required Base.CodeableConcept ProductOrService { get; set; }
	public Base.ResourceReference[]? Udi { get; set; }
	public Base.CodeableConcept[]? ProgramCode { get; set; }
	public string? Factor { get; set; }
	public required string Sequence { get; set; }
	public Base.Quantity? Quantity { get; set; }
	public string[]? NoteNumber { get; set; }
	public Base.Money? UnitPrice { get; set; }
}

public class ExplanationOfBenefit_Item_Detail : BackboneElement
{
	public Base.CodeableConcept? Category { get; set; }
	public Base.CodeableConcept[]? Modifier { get; set; }
	public Base.CodeableConcept? Revenue { get; set; }
	public string[]? Adjudication { get; set; }
	public Base.Money? Net { get; set; }
	public required Base.CodeableConcept ProductOrService { get; set; }
	public Base.ResourceReference[]? Udi { get; set; }
	public Base.CodeableConcept[]? ProgramCode { get; set; }
	public string? Factor { get; set; }
	public required string Sequence { get; set; }
	public ExplanationOfBenefit_Item_Detail_SubDetail[]? SubDetail { get; set; }
	public Base.Quantity? Quantity { get; set; }
	public string[]? NoteNumber { get; set; }
	public Base.Money? UnitPrice { get; set; }
}

public class ExplanationOfBenefit_Item : BackboneElement
{
	public Base.CodeableConcept? Category { get; set; }
	public string[]? DiagnosisSequence { get; set; }
	public string[]? ProcedureSequence { get; set; }
	public Base.Address? LocationAddress { get; set; }
	public Base.CodeableConcept[]? Modifier { get; set; }
	public Base.CodeableConcept? Revenue { get; set; }
	public ExplanationOfBenefit_Item_Adjudication[]? Adjudication { get; set; }
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
	public string[]? NoteNumber { get; set; }
	public Base.Money? UnitPrice { get; set; }
	public Base.Period? ServicedPeriod { get; set; }
	public ExplanationOfBenefit_Item_Detail[]? Detail { get; set; }
}

public class ExplanationOfBenefit_Procedure : BackboneElement
{
	public required string Sequence { get; set; }
	public Base.CodeableConcept[]? Type { get; set; }
	public string? Date { get; set; }
	public Base.CodeableConcept? ProcedureCodeableConcept { get; set; }
	public Base.ResourceReference? ProcedureReference { get; set; }
	public Base.ResourceReference[]? Udi { get; set; }
}

public class ExplanationOfBenefit_Related : BackboneElement
{
	public Base.ResourceReference? Claim { get; set; }
	public Base.CodeableConcept? Relationship { get; set; }
	public Base.Identifier? Reference { get; set; }
}

public class ExplanationOfBenefit_Total : BackboneElement
{
	public required Base.CodeableConcept Category { get; set; }
	public required Base.Money Amount { get; set; }
}

public class ExplanationOfBenefit_Accident : BackboneElement
{
	public string? Date { get; set; }
	public Base.CodeableConcept? Type { get; set; }
	public Base.Address? LocationAddress { get; set; }
	public Base.ResourceReference? LocationReference { get; set; }
}

public class ExplanationOfBenefit_Payee : BackboneElement
{
	public Base.CodeableConcept? Type { get; set; }
	public Base.ResourceReference? Party { get; set; }
}

public class ExplanationOfBenefit_AddItem_Detail_SubDetail : BackboneElement
{
	public required Base.CodeableConcept ProductOrService { get; set; }
	public Base.CodeableConcept[]? Modifier { get; set; }
	public Base.Quantity? Quantity { get; set; }
	public Base.Money? UnitPrice { get; set; }
	public string? Factor { get; set; }
	public Base.Money? Net { get; set; }
	public string[]? NoteNumber { get; set; }
	public string[]? Adjudication { get; set; }
}

public class ExplanationOfBenefit_AddItem_Detail : BackboneElement
{
	public Base.CodeableConcept[]? Modifier { get; set; }
	public string[]? Adjudication { get; set; }
	public Base.Money? Net { get; set; }
	public required Base.CodeableConcept ProductOrService { get; set; }
	public string? Factor { get; set; }
	public ExplanationOfBenefit_AddItem_Detail_SubDetail[]? SubDetail { get; set; }
	public Base.Quantity? Quantity { get; set; }
	public string[]? NoteNumber { get; set; }
	public Base.Money? UnitPrice { get; set; }
}

public class ExplanationOfBenefit_AddItem : BackboneElement
{
	public Base.Address? LocationAddress { get; set; }
	public Base.CodeableConcept[]? Modifier { get; set; }
	public string[]? Adjudication { get; set; }
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
	public string[]? SubDetailSequence { get; set; }
	public Base.CodeableConcept? BodySite { get; set; }
	public Base.Quantity? Quantity { get; set; }
	public Base.ResourceReference[]? Provider { get; set; }
	public string[]? NoteNumber { get; set; }
	public Base.Money? UnitPrice { get; set; }
	public Base.Period? ServicedPeriod { get; set; }
	public ExplanationOfBenefit_AddItem_Detail[]? Detail { get; set; }
}

public class ExplanationOfBenefit_CareTeam : BackboneElement
{
	public required string Sequence { get; set; }
	public required Base.ResourceReference Provider { get; set; }
	public bool? Responsible { get; set; }
	public Base.CodeableConcept? Role { get; set; }
	public Base.CodeableConcept? Qualification { get; set; }
}

public class ExplanationOfBenefit : DomainResource
{
	public required Base.ResourceReference Patient { get; set; }
	public Base.ResourceReference? ClaimResponse { get; set; }
	public required ExplanationOfBenefit_Insurance[] Insurance { get; set; }
	public ExplanationOfBenefit_BenefitBalance[]? BenefitBalance { get; set; }
	public Base.ResourceReference? Facility { get; set; }
	public ExplanationOfBenefit_ProcessNote[]? ProcessNote { get; set; }
	public ExplanationOfBenefit_Diagnosis[]? Diagnosis { get; set; }
	public string[]? PreAuthRef { get; set; }
	public string[]? Adjudication { get; set; }
	public Base.ResourceReference? Enterer { get; set; }
	public ExplanationOfBenefit_SupportingInfo[]? SupportingInfo { get; set; }
	public required string Use { get; set; }
	public ExplanationOfBenefit_Payment? Payment { get; set; }
	public ExplanationOfBenefit_Item[]? Item { get; set; }
	public required Base.CodeableConcept Type { get; set; }
	public required string Created { get; set; }
	public ExplanationOfBenefit_Procedure[]? Procedure { get; set; }
	public required string Outcome { get; set; }
	public ExplanationOfBenefit_Related[]? Related { get; set; }
	public string? Disposition { get; set; }
	public Base.ResourceReference? Referral { get; set; }
	public Base.Period[]? PreAuthRefPeriod { get; set; }
	public ExplanationOfBenefit_Total[]? Total { get; set; }
	public required Base.ResourceReference Insurer { get; set; }
	public Base.CodeableConcept? FundsReserve { get; set; }
	public Base.CodeableConcept? Priority { get; set; }
	public ExplanationOfBenefit_Accident? Accident { get; set; }
	public required string Status { get; set; }
	public ExplanationOfBenefit_Payee? Payee { get; set; }
	public Base.ResourceReference? Prescription { get; set; }
	public Base.Period? BillablePeriod { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Base.Attachment? Form { get; set; }
	public Base.CodeableConcept? SubType { get; set; }
	public Base.CodeableConcept? FundsReserveRequested { get; set; }
	public Base.Period? BenefitPeriod { get; set; }
	public string? Precedence { get; set; }
	public Base.CodeableConcept? FormCode { get; set; }
	public required Base.ResourceReference Provider { get; set; }
	public ExplanationOfBenefit_AddItem[]? AddItem { get; set; }
	public Base.ResourceReference? OriginalPrescription { get; set; }
	public ExplanationOfBenefit_CareTeam[]? CareTeam { get; set; }
	public Base.ResourceReference? Claim { get; set; }
}