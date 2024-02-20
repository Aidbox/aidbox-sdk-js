using System.Net;
using System.Text;
using System.IO.Pipes;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Net.Http.Headers;
using API;

internal class Program
{
  private static void Main(string[] args)
  {
    // MainAsync(args).GetAwaiter().GetResult();
  }

  private static async Task MainAsync(string[] args)
  {
    Client client = new Client
    (
      "https://aidbox.zabelin.hz.aidbox.dev",
      new Auth()
      {
        Method = AuthMethods.BASIC,
        Credentials = new() { Username = "basic", Password = "secret" }
      }
    );
  }
}


