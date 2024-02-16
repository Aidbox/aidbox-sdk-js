using System.Net.Http.Headers;
using System.Text.Json;
using UTILS;
using HL7.FHIR.R4.RESOURCE;
using HL7.FHIR.R4.BASE;
using HL7.MCODE;

using System.Text.Json;
using System.Text.Json.Serialization;

namespace API;

public class ClientResponse<T>
{
  public bool Success { get; set; }
  public Entry<T>[]? Data { get; set; }
  public HttpRequestException? Error { get; set; }
}

public class Client
{
  public required string Url { get; set; }
  public required string AuthorizationType { get; set; }
  public required string AuthorizationValue { get; set; }

  private readonly Dictionary<Type, string> ResourceMap = new() {
    { typeof(Patient), "Patient" },
    { typeof(Appointment), "Appointment" },
    { typeof(Observation), "Observation" },
    { typeof(McodeCancerPatient), "Patient" }
  };

  public static readonly JsonSerializerOptions options = new()
  {
    DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
    PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
    Converters = { new JsonStringEnumConverter(new LowercaseNamingPolicy()) },
    WriteIndented = true
  };

  public async Task<(T? result, string? error)> Read<T>(string id) where T : IResource
  {
    UriBuilder resourcePath = new(this.Url) { Path = ResourceMap[typeof(T)] };

    using var httpClient = new HttpClient();

    httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue(this.AuthorizationType, this.AuthorizationValue);

    try
    {
      var response = await httpClient.GetAsync(resourcePath.Uri + "/" + id);

      if (!response.IsSuccessStatusCode)
      {
        throw new HttpRequestException($"Server returned error: {response.StatusCode}");
      }

      var content = await response.Content.ReadAsStringAsync();

      T parsedContent = JsonSerializer.Deserialize<T>(content, new JsonSerializerOptions { PropertyNameCaseInsensitive = true }) ?? throw new InvalidOperationException("asdf");

      return (parsedContent, default);
    }

    catch (HttpRequestException error)
    {
      return (default, error.Message);
    }
  }

  public async Task<(T? result, string? error)> Create<T>(string id, T data) where T : IResource
  {
    UriBuilder resourcePath = new(this.Url) { Path = ResourceMap[typeof(T)] };

    using var httpClient = new HttpClient();

    httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue(this.AuthorizationType, this.AuthorizationValue);

    try
    {
      // var json = JsonSerializer.Serialize(data, Settings.options) ?? throw new Exception("");
      var response = await httpClient.GetAsync(resourcePath.Uri + "/" + id);

      if (!response.IsSuccessStatusCode)
      {
        throw new HttpRequestException($"Server returned error: {response.StatusCode}");
      }

      var content = await response.Content.ReadAsStringAsync();

      T parsedContent = JsonSerializer.Deserialize<T>(content, new JsonSerializerOptions { PropertyNameCaseInsensitive = true }) ?? throw new InvalidOperationException("asdf");

      return (parsedContent, default);
    }

    catch (HttpRequestException error)
    {
      return (default, error.Message);
    }
  }

  public async Task<ClientResponse<T>> GetResources<T>() where T : IResource
  {
    UriBuilder resourcePath = new(this.Url) { Path = ResourceMap[typeof(T)] };

    using var httpClient = new HttpClient();

    httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue(this.AuthorizationType, this.AuthorizationValue);

    try
    {
      var response = await httpClient.GetAsync(resourcePath.Uri);

      if (!response.IsSuccessStatusCode)
      {
        throw new HttpRequestException($"Server returned error: {response.StatusCode}");
      }

      var content = await response.Content.ReadAsStringAsync();

      ApiResourcesResponse<T> parsedContent = JsonSerializer.Deserialize<ApiResourcesResponse<T>>(content, new JsonSerializerOptions
      {
        PropertyNameCaseInsensitive = true
      }) ?? throw new InvalidOperationException("asdf");

      //Console.WriteLine(JsonSerializer.Serialize(parsedContent));

      return new ClientResponse<T>() { Success = true, Data = parsedContent.Entry };
    }

    catch (HttpRequestException error)
    {
      return new ClientResponse<T>() { Success = false, Error = error };
    }
  }
}
