using Aidbox.FHIR.Base;

namespace Aidbox.FHIR.Constraint;

public class UsCoreLocation
{
	public Meta Meta { get; } = new() { Profile = ["http://hl7.org/fhir/us/core/StructureDefinition/us-core-location"] };
	public string? Description { get; set; }
	public Base.Address? Address { get; set; }
	public Base.ResourceReference? ManagingOrganization { get; set; }
	public required string Name { get; set; }
	public string? Mode { get; set; }
	public Base.CodeableConcept[]? Type { get; set; }
	public string[]? Alias { get; set; }
	public string? Status { get; set; }
	public Base.Identifier[]? Identifier { get; set; }
	public Location_HoursOfOperation[]? HoursOfOperation { get; set; }
	public string? AvailabilityExceptions { get; set; }
	public Location_Position? Position { get; set; }
	public Base.ContactPoint[]? Telecom { get; set; }
	public Base.Coding? OperationalStatus { get; set; }
	public Base.ResourceReference? PartOf { get; set; }
	public Base.CodeableConcept? PhysicalType { get; set; }
	public Base.ResourceReference[]? Endpoint { get; set; }
	public Base.Narrative? Text { get; set; }
	public Base.Resource[]? Contained { get; set; }
	public Base.Extension[]? Extension { get; set; }
	public Base.Extension[]? ModifierExtension { get; set; }
	public string? Id { get; set; }
	public string? ImplicitRules { get; set; }
	public string? Language { get; set; }

public class Location_HoursOfOperation : BackboneElement
{
	public string[]? DaysOfWeek { get; set; }
	public bool? AllDay { get; set; }
	public string? OpeningTime { get; set; }
	public string? ClosingTime { get; set; }
}

public class Location_Position : BackboneElement
{
	public required string Longitude { get; set; }
	public required string Latitude { get; set; }
	public string? Altitude { get; set; }
}
}