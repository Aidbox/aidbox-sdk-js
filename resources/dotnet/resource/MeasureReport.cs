using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Resource;

public class MeasureReport_Group_Population : BackboneElement
{
	public Base.CodeableConcept? Code { get; set; }
	public int? Count { get; set; }
	public Base.ResourceReference? SubjectResults { get; set; }
}

public class MeasureReport_Group_Stratifier_Stratum_Component : BackboneElement
{
	public required Base.CodeableConcept Code { get; set; }
	public required Base.CodeableConcept Value { get; set; }
}

public class MeasureReport_Group_Stratifier_Stratum_Population : BackboneElement
{
	public Base.CodeableConcept? Code { get; set; }
	public int? Count { get; set; }
	public Base.ResourceReference? SubjectResults { get; set; }
}

public class MeasureReport_Group_Stratifier_Stratum : BackboneElement
{
	public Base.CodeableConcept? Value { get; set; }
	public MeasureReport_Group_Stratifier_Stratum_Component[]? Component { get; set; }
	public MeasureReport_Group_Stratifier_Stratum_Population[]? Population { get; set; }
	public Base.Quantity? MeasureScore { get; set; }
}

public class MeasureReport_Group_Stratifier : BackboneElement
{
	public Base.CodeableConcept[]? Code { get; set; }
	public MeasureReport_Group_Stratifier_Stratum[]? Stratum { get; set; }
}

public class MeasureReport_Group : BackboneElement
{
	public Base.CodeableConcept? Code { get; set; }
	public MeasureReport_Group_Population[]? Population { get; set; }
	public Base.Quantity? MeasureScore { get; set; }
	public MeasureReport_Group_Stratifier[]? Stratifier { get; set; }
}

public class MeasureReport : DomainResource
{
	public Base.ResourceReference[]? EvaluatedResource { get; set; }
	public string? Date { get; set; }
	public MeasureReport_Group[]? Group { get; set; }
	public required string Type { get; set; }
	public required string Measure { get; set; }
	public Base.ResourceReference? Reporter { get; set; }
	public required string Status { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public required Base.Period Period { get; set; }
	public Base.CodeableConcept? ImprovementNotation { get; set; }
	public Base.ResourceReference? Subject { get; set; }
}