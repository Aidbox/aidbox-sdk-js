using System.Net;
using System.Text;
using System.ComponentModel;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Text.Json.Serialization;
using UTILS;
using HL7.FHIR.R4.RESOURCE;
using HL7.MCODE;

namespace API;

public enum AuthMethods
{
  [Description("Basic")]
  BASIC,
}

public class AuthCredentials
{
  public required string Username { get; set; }
  public required string Password { get; set; }
}

public class Auth
{
  public required AuthMethods Method { get; set; }
  public required AuthCredentials Credentials { get; set; }
}

public class Client
{
  private HttpClient HttpClient;
  private string Url;

  public Client(string url, Auth auth)
  {
    var httpClient = new HttpClient();

    httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue(GetMethodValue(auth.Method), EncodeCredentials(auth.Credentials));

    this.HttpClient = httpClient;
    this.Url = url;
  }

  public async Task<(T? result, string? error)> Read<T>(string id) where T : IResource
  {
    UriBuilder resourcePath = new(this.Url) { Path = ResourceMap[typeof(T)] };

    using var httpClient = this.HttpClient;

    try
    {
      var response = await httpClient.GetAsync($"{resourcePath.Uri}/{id}");

      if (!response.IsSuccessStatusCode)
      {
        throw new HttpRequestException($"Server returned error: {response.StatusCode}");
      }

      var content = await response.Content.ReadAsStringAsync();

      T? parsedContent = JsonSerializer.Deserialize<T>(content, Client.JsonSerializerOptions);

      return (parsedContent, default);
    }

    catch (HttpRequestException error)
    {
      return (default, error.Message);
    }
  }

  public async Task<(T? result, string? error)> Create<T>(T data) where T : IResource
  {
    UriBuilder resourcePath = new(this.Url) { Path = ResourceMap[typeof(T)] };

    string jsonBody = JsonSerializer.Serialize<T>(data, Settings.options);

    HttpContent requestData = new StringContent(jsonBody, Encoding.UTF8, "application/json");

    using var httpClient = this.HttpClient;

    try
    {
      var response = await this.HttpClient.PostAsync(resourcePath.Uri, requestData);

      if (!response.IsSuccessStatusCode)
      {
        throw new HttpRequestException($"Server returned error: {response.StatusCode}");
      }

      var content = await response.Content.ReadAsStringAsync();

      T? parsedContent = JsonSerializer.Deserialize<T>(content, Client.JsonSerializerOptions);

      return (parsedContent, default);
    }

    catch (HttpRequestException error)
    {
      return (default, error.Message);
    }
  }

  public async Task<(T? result, string? error)> Delete<T>(string id) where T : IResource
  {
    UriBuilder resourcePath = new(this.Url) { Path = ResourceMap[typeof(T)] };

    using var httpClient = this.HttpClient;

    try
    {
      var response = await httpClient.DeleteAsync($"{resourcePath.Uri}/{id}");

      if (!response.IsSuccessStatusCode)
      {
        throw new HttpRequestException($"Server returned error: {response.StatusCode}");
      }

      if (response.StatusCode == HttpStatusCode.NoContent)
      {
        throw new HttpRequestException($"The resource with id \"{id}\" does not exist");
      }

      var content = await response.Content.ReadAsStringAsync();

      T? parsedContent = JsonSerializer.Deserialize<T>(content, Client.JsonSerializerOptions);

      return (parsedContent, default);
    }

    catch (HttpRequestException error)
    {
      return (default, error.Message);
    }
  }

  private static readonly JsonSerializerOptions JsonSerializerOptions = new()
  {
    PropertyNameCaseInsensitive = true,
    DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
    PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
    Converters = { new JsonStringEnumConverter(new LowercaseNamingPolicy()) },
    WriteIndented = true
  };

  private readonly Dictionary<Type, string> ResourceMap = new() {
    { typeof(Patient), "Patient" },
    { typeof(Appointment), "Appointment" },
    { typeof(Observation), "Observation" },
    { typeof(McodeCancerPatient), "Patient" }
  };

  private string EncodeCredentials(AuthCredentials credentials)
  {
    byte[] credentialsBytes = System.Text.Encoding.UTF8.GetBytes($"{credentials.Username}:{credentials.Password}");

    return Convert.ToBase64String(credentialsBytes);
  }

  private string GetMethodValue(AuthMethods method)
  {
    var fieldInfo = method.GetType().GetField(method.ToString());

    if (fieldInfo == null) {
      return method.ToString();
    }

    var attributes = (DescriptionAttribute[])fieldInfo.GetCustomAttributes(typeof(DescriptionAttribute), false);

    return attributes.Length > 0 ? attributes[0].Description : method.ToString();
  }
}
