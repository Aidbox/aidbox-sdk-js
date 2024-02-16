using System.Net;
using System.Text;
using System.IO.Pipes;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Net.Http.Headers;
using HL7.MCODE;
using API;
using HL7.FHIR.R4.RESOURCE;
using HL7.FHIR.R4.BASE;


// var typeMap = new Dictionary<string, Type>
// {
//     { "Integer", typeof(int) },
//     { "String", typeof(string) },
//     { "Double", typeof(double) }
// };

// string typeMap["Integer"] typeName = int;

// string GetTypeName<T>()
// {
//     if (typeof(T) == typeof(int))å
//     {
//         return "Integer";
//     }
//     else if (typeof(T) == typeof(string))
//     {
//         return "String";
//     }
//     // Add more checks as needed

//     return "Unknown";
// }

// Usage
// string typeName = GetTypeName<int>(); // "Integer"

// Console.WriteLine(typeName);

// namespace Example;

public enum Color
{
    Red = 0,
    Green = 1,
    Blue = 2
}

internal class Settings
{
    public string? Name { get; set; }
    public int Age { get; set; }
    public bool IsEmployed { get; set; }
    public Color? Color { get; set; }

    public static readonly JsonSerializerOptions options = new()
    {
        DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull,
        PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
        Converters = { new JsonStringEnumConverter(new LowercaseNamingPolicy()) },
        WriteIndented = true
    };
}

public class LowercaseNamingPolicy : JsonNamingPolicy
{
    public override string ConvertName(string name) => name.ToLower();
}

internal class Program
{
    private static void Main(string[] args)
    {
        // var name = new HumanName() { Given = ["John"], Family = "Smith" };

        // var patient = new McodeCancerPatient() { Gender = "male", Name = [name], Identifier = [] };

        // string jsonString = JsonSerializer.Serialize(patient, Person.options);

        // McodeCancerPatient person = JsonSerializer.Deserialize<McodeCancerPatient>(jsonString) ?? ;



        // Console.WriteLine(jsonString);

        // string username = "root";
        // string password = "secret";

        // var httpClient = new HttpClient();
        // var authToken = Encoding.ASCII.GetBytes($"{username}:{password}");

        // httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic", Convert.ToBase64String(authToken));

        MainAsync(args).GetAwaiter().GetResult();
    }

    private static async Task MainAsync(string[] args)
    {
      Client client = new Client
      (
        "https://aidbox.zabelin.hz.aidbox.dev", 
        new Auth()
        {
          Method = AuthMethods.BASIC,
          Credentials = new()
          {
            Username = "basic",
            Password = "secret"
          }
        }
      );

      // READ
      // var (patient, error) = await client.Read<Patient>("pt-1");

      // if (patient != null)
      // {
      //     Console.WriteLine(JsonSerializer.Serialize(patient, Settings.options));
      //     return;
      // }
      // else
      // {
      //     Console.WriteLine(error);
      // }

      // CREATE
      // Patient patientData = new Patient
      // {
      //     Id = "pt-1",
      //     Name = new HumanName[] { new HumanName() { Family = "Smith" } }
      // };

      // var (patient, error) = await client.Create<Patient>(patientData);

      // if (patient != null)
      // {
      //     Console.WriteLine(JsonSerializer.Serialize(patient, Settings.options));
      //     return;
      // }
      // else
      // {
      //     Console.WriteLine(error);
      // }

      // DELETE
      // var (patient, error) = await client.Delete<Patient>("pt-1");

      // if (patient != null)
      // {
      //     Console.WriteLine(JsonSerializer.Serialize(patient, Settings.options));
      //     return;
      // }
      // else
      // {
      //     Console.WriteLine(error);
      // }

      // UPDATE

    }
}


