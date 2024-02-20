using System.Net;
using System.Text;
using System.ComponentModel;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Text.Json.Serialization;
using Utils;


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
    UriBuilder resourcePath = new(this.Url) { Path = Config.ResourceMap[typeof(T)] };

    var httpClient = this.HttpClient;

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
    UriBuilder resourcePath = new(this.Url) { Path = Config.ResourceMap[typeof(T)] };

    string jsonBody = JsonSerializer.Serialize<T>(data, Client.JsonSerializerOptions);

    HttpContent requestData = new StringContent(jsonBody, Encoding.UTF8, "application/json");

    var httpClient = this.HttpClient;

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
    UriBuilder resourcePath = new(this.Url) { Path = Config.ResourceMap[typeof(T)] };

    var httpClient = this.HttpClient;

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

  public async Task<(T? result, string? error)> Update<T>(T resource) where T : IResource
  {
    UriBuilder resourcePath = new(this.Url) { Path = Config.ResourceMap[typeof(T)] };

    string jsonBody = JsonSerializer.Serialize<T>(resource, Client.JsonSerializerOptions);

    HttpContent requestData = new StringContent(jsonBody, Encoding.UTF8, "application/json");

    var httpClient = this.HttpClient;

    // TODO: Versioned Update
    // httpClient.DefaultRequestHeaders.Add("If-Match", resource.Meta?.VersionId);

    try
    {
      var response = await httpClient.PutAsync($"{resourcePath.Uri}/{resource.Id}", requestData);

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

  public static readonly JsonSerializerOptions JsonSerializerOptions = new() // private
  {
    PropertyNameCaseInsensitive = true,
    DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
    PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
    Converters = { new JsonStringEnumConverter(new LowercaseNamingPolicy()) },
    WriteIndented = true
  };

  private string EncodeCredentials(AuthCredentials credentials)
  {
    byte[] credentialsBytes = System.Text.Encoding.UTF8.GetBytes($"{credentials.Username}:{credentials.Password}");

    return Convert.ToBase64String(credentialsBytes);
  }

  private string GetMethodValue(AuthMethods method)
  {
    var fieldInfo = method.GetType().GetField(method.ToString());

    if (fieldInfo == null)
    {
      return method.ToString();
    }

    var attributes = (DescriptionAttribute[])fieldInfo.GetCustomAttributes(typeof(DescriptionAttribute), false);

    return attributes.Length > 0 ? attributes[0].Description : method.ToString();
  }
}
