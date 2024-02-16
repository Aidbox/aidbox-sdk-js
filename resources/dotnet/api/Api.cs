using System.Text.Json.Serialization;

public class MetaResponse
{
  public string? LastUpdated { get; set; }
  public string? CreatedAt { get; set; }
  public required string VersionId { get; set; }
}

public class Link
{
  public required string Relation { get; set; }
  public required string Url { get; set; }
}

public class Search
{
  public required string Mode { get; set; }
}

public class Entry<T>
{
  public required T Resource { get; set; }
  public required Search Search { get; set; }
  public required string FullUrl { get; set; }
  public required Link[] Link { get; set; }
}

public class ApiResourcesResponse<T>
{
  [JsonPropertyName("query-time")]
  public int? QueryTime { get; set; }

  public MetaResponse? Meta { get; set; }
  public string? Type { get; set; }
  public string? ResourceType { get; set; }
  public int? Total { get; set; }
  public Link[]? Link { get; set; }

  [JsonPropertyName("query-timeout")]
  public int? QueryTimeout { get; set; }
  public Entry<T>[]? Entry { get; set; }

  [JsonPropertyName("query-sql")]
  public object[]? QuerySql { get; set; }
}
