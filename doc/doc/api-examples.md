---
outline: [2, 3]
---
# Fundamentals
This section contains essential and the most fundamental terms and features that you will face during learning FHIR servers.
We're simply trying to answer to these basic questions:   
* how to get the access to Aidbox FHIR data from my JavaScript application?   
* how to manage healthcare FHIR data from my application?

## Auth
Healthcare data is sensitive and confidential, containing personal health information of patients,
authentication helps ensure that only authorized and authenticated users or applications can access this data.
Aidbox supports multiple approaches including Client Credentials, Resource Owner, SMART on FHIR etc. 

### Basic Access
Is a way of providing credentials (username and password) to access a web service. 
It is one of the simplest and oldest methods of authentication on the internet. These credentials 
are sent to the server in an encoded format (base64) as a part of the HTTP request header

##### Parameters
<ParamsComponent :items="[
  { name: 'aidboxURL', required: true, type: 'string', description: `URL of Aidbox instance, you can simply create one <a target='_blank' href='https://aidbox.app'>here</a>` },
  { name: 'username and password', required: true, type: 'string', description: `Username and password from client that <a target='_blank' href='https://docs.aidbox.app/modules-1/security-and-access-control/auth/basic-auth#register-client'>you registred</a> in Aidbox` }
]"/>

```typescript jsx
const aidbox = new Client(
  'https://example.aidbox.app',
  { username: '<client-name>', password: '<client-secret>' }
)
```

### OAuth 2.0 Client Credentials Grant


## FHIR REST
The CRUD features in a FHIR server provides a standard way
for interacting with healthcare data and resources, 
supports data exchange between different healthcare systems and applications, 
facilitates data integration and data sharing.

### Create Resource
This operation allows healthcare data to be added to the FHIR server. For example, when a new patient record, observation, or medication needs to be added to the system, the Create operation is used. It ensures that new resources can be stored and made available for future retrieval and processing

##### Parameters

<script setup>
  import ParamsComponent from './ParamsComponent.vue'
</script>

<ParamsComponent :items="[
  { name: 'resourceType', required: true, type: 'string', description: `Unique identifier given to each specific type of <a target='_blank' href='https://hl7.org/fhir/R4/resourcelist.html'>resource</a> defined in the FHIR specification` },
  { name: 'body', required: true, type: 'object', description: `Each FHIR resource type has its own set of attributes, which define the structure and content of <a target='_blank' href='https://hl7.org/fhir/R4/observation.html'>that resource</a>` }
]"/>

::: code-group
```TYPESCRIPT jsx [Request]
await aidbox.createResource("Observation", {
  "code": {
    "coding": [{
      "system": "http://loinc.org",
      "code": "55233-1"
    }]
  },
  "status": "registered",
  "component": [
    {
      "code": {
        "coding": [{
          "system": "http://loinc.org", 
          "code": "51967-8",  
          "display": "Genetic disease assessed"
        }]
      },
      "valueCodeableConcept": {
        "coding": [{ 
          "system": "http://snomed.info/sct",
          "code": "363358000", 
          "display": "Malignant tumor of lung (disorder)"
        }]
      }
    }
  ],
  "issued": "2013-04-03T15:30:10+01:00",
  "subject": { "reference": "Patient/patient-1" },
  "performer": [{ "reference": "Practitioner/practitioner-1" }],
  "encounter": { "reference": "Encounter/encounter-1" }
})
```

```JSON [Response]
{
  "code": {
    "coding": [{
      "system": "http://loinc.org",
      "code": "55233-1"
    }]
  },
  "status": "registered",
  "component": [
    {
      "code": {
        "coding": [{
          "system": "http://loinc.org",
          "code": "51967-8",
          "display": "Genetic disease assessed"
        }]
      },
      "valueCodeableConcept": {
        "coding": [{
          "system": "http://snomed.info/sct",
          "code": "363358000",
          "display": "Malignant tumor of lung (disorder)"
        }]
      }
    }
  ],
  "issued": "2013-04-03T15:30:10+01:00",
  "subject": { "reference": "Patient/patient-1" },
  "performer": [{ "reference": "Practitioner/practitioner-1" }],
  "encounter": { "reference": "Encounter/encounter-1" },
  "id": "090a5975-ad8e-48d7-a777-cbb2d910d395", // [!code ++]
  "resourceType": "Observation", // [!code ++]
  "meta": { // [!code ++]
    "lastUpdated": "2023-07-17T11:07:59.511505Z", // [!code ++]
    "versionId": "147", // [!code ++]
    "extension": [{ "url": "ex:createdAt", "valueInstant": "2023-07-17T11:07:59.511505Z"}] // [!code ++]
  } // [!code ++]
}
```
:::

In the context of a FHIR (Fast Healthcare Interoperability Resources) server, structure definition validation refers to the process of verifying that the resources conform to the rules and constraints defined in the FHIR structure definitions.
There are basic FHIR Server validation layers:

1. **Type**: Ensuring that the data types of elements within the resource are valid and comply with the specified data type constraints
2. **Cardinality**: Verifying that the required elements are present and that optional elements are either present or absent based on their cardinality defined in the structure definition
3. **Terminology**: Validating that coded elements (such as codes in terminology systems like SNOMED CT or LOINC) are using valid codes as defined by the associated value sets or code systems
4. **Reference**: Ensuring that references to other resources are valid and exist in the server

::: warning [FHIR 4.0.1] Observation constraints
Let's consider the validation layers on the [`Observation`](https://hl7.org/fhir/R4/observation.html#resource) resource type.

::: code-group
```TYPESCRIPT jsx [Request]
await aidbox.createResource("Observation", {
  "issued": true,
  "status": "in-progress",
  "subject": { "reference": "Patient/patient-1" },
})
```

```JSON [Error / Type]
{
  "resourceType": "OperationOutcome",
  "text": {
    "status": "generated",
    "div": "Invalid resource"
  },
  "issue": [{
    "severity": "fatal",
    "code": "invalid",
    "expression": ["Observation.issued"],
    "diagnostics": "Expected type of 'string, got 'boolean"
  }]
}
```

```JSON [Error / Cardinality]
{
  "resourceType": "OperationOutcome",
  "text": {
    "status": "generated",
    "div": "Invalid resource"
  },
  "issue": [{
    "severity": "fatal",
    "code": "invalid",
    "expression": ["Observation."],
    "diagnostics": "Property code is required"
  }]
}
```

```JSON [Error / Terminology]
{
  "resourceType": "OperationOutcome",
  "text": {
    "status": "generated",
    "div": "Invalid resource"
  },
  "issue": [{
    "severity": "fatal",
    "code": "invalid",
    "expression": ["Observation.status"],
    "diagnostics": "Expected '\"in-progress\"' to be in the value set hl7-fhir-r4-core.value-set.observation-status/value-set"
  }]
}
```

```JSON [Error / Reference]
{
  "resourceType": "OperationOutcome",
  "text": {
    "status": "generated",
    "div": "Invalid resource"
  },
  "issue": [{
    "severity": "fatal",
    "code": "invalid",
    "expression": ["Observation.subject"],
    "diagnostics": "Referenced resource Patient/patient-1 does not exist"
  }]
}
```
relevant for FHIR version 4.0.1
:::

### Read Resource
The Read operation allows users and applications to retrieve healthcare data from the FHIR server. It enables querying and fetching specific resources or sets of resources based on criteria like patient ID, date range, or other relevant attributes. This operation is crucial for accessing patient records, lab results, medications, and more 

##### Parameters
<ParamsComponent :items="[
  { name: 'resourceName', required: true, type: 'string', description: `Unique identifier given to each specific type of <a target='_blank' href='https://hl7.org/fhir/R4/resourcelist.html'>resource</a> defined in the FHIR specification` },
  { name: 'id', required: true, type: 'object', description: `Unique identifier of the resource across all resources of the same type in a FHIR server` }
]"/>

::: code-group
```TYPESCRIPT jsx [Request]
await aidbox.getResource("Observation", "090a5975-ad8e-48d7-a777-cbb2d910d395")
```

```JSON [Response]
{
  "code": {
    "coding": [{
      "system": "http://loinc.org",
      "code": "55233-1"
    }]
  },
  "status": "registered",
  "component": [
    {
      "code": {
        "coding": [{
          "system": "http://loinc.org",
          "code": "51967-8",
          "display": "Genetic disease assessed"
        }]
      },
      "valueCodeableConcept": {
        "coding": [{
          "system": "http://snomed.info/sct",
          "code": "363358000",
          "display": "Malignant tumor of lung (disorder)"
        }]
      }
    }
  ],
  "issued": "2013-04-03T15:30:10+01:00",
  "subject": { "reference": "Patient/patient-1" },
  "performer": [{ "reference": "Practitioner/practitioner-1" }],
  "encounter": { "reference": "Encounter/encounter-1" },
  "id": "090a5975-ad8e-48d7-a777-cbb2d910d395",
  "resourceType": "Observation",
  "meta": {
    "lastUpdated": "2023-07-17T11:07:59.511505Z",
    "versionId": "147",
    "extension": [{ "url": "ex:createdAt", "valueInstant": "2023-07-17T11:07:59.511505Z"}]
  }
}
```
:::



### Update Resource
The Update operation allows modifications to existing healthcare data stored in the FHIR server. When changes are made to a patient's information, an observation, or any other resource, the Update operation ensures that the modified data is stored and reflected in subsequent requests for that resource

##### Parameters
<ParamsComponent :items="[
  { name: 'resourceName', required: true, type: 'string', description: `Unique identifier given to each specific type of <a target='_blank' href='https://hl7.org/fhir/R4/resourcelist.html'>resource</a> defined in the FHIR specification` },
  { name: 'id', required: true, type: 'string', description: `Unique identifier of the resource across all resources of the same type in a FHIR server` },
  { name: 'body', required: true, type: 'object', description: `Each FHIR resource type has its own set of attributes, which define the structure and content of <a target='_blank' href='https://hl7.org/fhir/R4/observation.html'>that resource</a>` }
]"/>


::: code-group
```TYPESCRIPT jsx [Request]
await aidbox.patchResource("Observation", "090a5975-ad8e-48d7-a777-cbb2d910d395", {
  "status": "final",
  "valueCodeableConcept": {
    "coding": [{
      "system": "http://snomed.info/sct",
      "code": "10828004",
      "display": "Positive"
    }]
  },
  "note": [{ "text": "The EGFR p.L858R mutation has been associated with response to anti-EGFR therapy" }]
})
```

```JSON [Response]
{
  "code": {
    "coding": [{
      "system": "http://loinc.org",
      "code": "55233-1"
    }]
  },
  "status": "registered", // [!code --]
  "status": "final", // [!code ++]
  "valueCodeableConcept": { // [!code ++]
    "coding": [{ // [!code ++]
      "system": "http://snomed.info/sct", // [!code ++]
      "code": "10828004", // [!code ++]
      "display": "Positive" // [!code ++]
    }] // [!code ++]
  }, // [!code ++]
  "note": [{ "text": "The EGFR p.L858R mutation has been associated with response to anti-EGFR therapy" }], // [!code ++]
  "component": [
    {
      "code": {
        "coding": [{
          "system": "http://loinc.org",
          "code": "51967-8",
          "display": "Genetic disease assessed"
        }]
      },
      "valueCodeableConcept": {
        "coding": [{
          "system": "http://snomed.info/sct",
          "code": "363358000",
          "display": "Malignant tumor of lung (disorder)"
        }]
      }
    }
  ],
  "issued": "2013-04-03T15:30:10+01:00",
  "subject": { "reference": "Patient/patient-1" },
  "performer": [{ "reference": "Practitioner/practitioner-1" }],
  "encounter": { "reference": "Encounter/encounter-1" },
  "id": "090a5975-ad8e-48d7-a777-cbb2d910d395",
  "resourceType": "Observation",
  "meta": {
    "lastUpdated": "2023-07-17T12:58:37.965242Z",
    "versionId": "186",
    "extension": [{ "url": "ex:createdAt", "valueInstant": "2023-07-17T12:52:02.697004Z" }]
  }
}
```
:::

### Delete Resource
The Delete operation enables the removal of healthcare data from the FHIR server when it is no longer needed or becomes obsolete. This is important for maintaining data hygiene and adhering to data retention policies

##### Parameters
<ParamsComponent :items="[
  { name: 'resourceName', required: true, type: 'string', description: `Unique identifier given to each specific type of <a target='_blank' href='https://hl7.org/fhir/R4/resourcelist.html'>resource</a> defined in the FHIR specification` },
  { name: 'id', required: true, type: 'string', description: `Unique identifier of the resource across all resources of the same type in a FHIR server` }
]"/>

::: code-group
```TYPESCRIPT jsx [Request]
await aidbox.deleteResource("Observation", "090a5975-ad8e-48d7-a777-cbb2d910d395")
```

```JSON [Response]
{
  "code": {
    "coding": [{
      "system": "http://loinc.org",
      "code": "55233-1"
    }]
  },
  "status": "registered",
  "component": [
    {
      "code": {
        "coding": [{
          "system": "http://loinc.org",
          "code": "51967-8",
          "display": "Genetic disease assessed"
        }]
      },
      "valueCodeableConcept": {
        "coding": [{
          "system": "http://snomed.info/sct",
          "code": "363358000",
          "display": "Malignant tumor of lung (disorder)"
        }]
      }
    }
  ],
  "issued": "2013-04-03T15:30:10+01:00",
  "subject": { "reference": "Patient/patient-1" },
  "performer": [{ "reference": "Practitioner/practitioner-1" }],
  "encounter": { "reference": "Encounter/encounter-1" },
  "id": "090a5975-ad8e-48d7-a777-cbb2d910d395",
  "resourceType": "Observation",
  "meta": {
    "lastUpdated": "2023-07-17T11:07:59.511505Z",
    "versionId": "147",
    "extension": [{ "url": "ex:createdAt", "valueInstant": "2023-07-17T11:07:59.511505Z"}]
  }
}
```
:::

## Search

### Where
Each [FHIR resource](https://hl7.org/fhir/R4/resourcelist.html) includes the default [search parameters](https://hl7.org/fhir/R4/patient.html#search)
that you can use for resource searching by certain attribute even in the case when attribute places deep
in the resource. The example shows usage flow of search parameter `.where('address-city', 'PleasantVille')` that defined on [Patient](https://hl7.org/fhir/R4/patient.html#search) resource
and getting one patient record that lives in PleasantVille city as a result

##### Parameters
<ParamsComponent :items="[
  { name: 'name', required: true, type: 'number', description: `The search parameter name` },
  { name: 'value', required: true, type: 'depends on search parameter', description: `The value we want to find resource with` }
]"/>

::: code-group

```typescript jsx [Request]
await aidbox.getResources("Patient")
  .where('address-city', 'PleasantVille')
  .count(1)
```

```JSON [Response]
{
  "resourceType": "Bundle",
  "total": 134,
  "entry": [
    {
      "resource": {
        "address": [{
          "use": "home",
          "city": "PleasantVille", // [!code hl]
          "type": "physical",
          "state": "Vic",
          "line": ["534 Erewhon St"],
          "postalCode": "3999",
          "period": { "start": "1974-12-25" },
          "district": "Rainbow",
          "text": "534 Erewhon St PeasantVille, Rainbow, Vic  3999"
        }],
        "managingOrganization": {
          "reference": "Organization/organization-1"
        },
        "name": [{
          "use": "official",
          "given": ["Peter", "James"],
          "family": "Chalmers"
        }],
        "birthDate": "1974-12-25",
        "resourceType": "Patient",
        "id": "patient-1",
        "gender": "male",
        "meta": {
          "lastUpdated": "2023-07-17T13:53:23.791113Z",
          "versionId": "197",
          "extension": [{ "url": "ex:createdAt", "valueInstant": "2023-07-17T13:53:23.791113Z" }]
        }
      },
      "search": { "mode": "match" },
      "fullUrl": "https://aidbox.app/Patient/patient-1",
      "link": [{ "relation": "self", "url": "https://aidbox.app/Patient/patient-1" }]
    }
  ],
  "link": [
    { "relation": "first", "url": "/fhir/Patient?_count=1&_page=1"   },
    { "relation": "self",  "url": "/fhir/Patient?_count=1&_page=1"   },
    { "relation": "next",  "url": "/fhir/Patient?_count=1&_page=2"   },
    { "relation": "last",  "url": "/fhir/Patient?_count=1&_page=134" }
  ],
  "type": "searchset",
  "meta": { "versionId": "0" }
}
```
:::

### Limit
Allows you to restrict the number of rows returned by a query, fetching all matching records at once can be resource-intensive and slow.
Example shows that `.count(1)` returns just a single record of 134

##### Parameters
<ParamsComponent :items="[
  { name: 'arg1', required: true, type: 'number', description: `The number of resourses that return with single request. By default, Aidbox returns a maximum of 100 rows.` },
]"/>

::: code-group

```typescript jsx [Request]
await aidbox.getResources("Patient")
  .count(1)
```

```JSON [Response]
{
  "resourceType": "Bundle",
  "total": 134,
  "entry": [
    {
      "resource": {
        "address": [{
          "use": "home",
          "city": "PleasantVille",
          "type": "physical",
          "state": "Vic",
          "line": ["534 Erewhon St"],
          "postalCode": "3999",
          "period": { "start": "1974-12-25" },
          "district": "Rainbow",
          "text": "534 Erewhon St PeasantVille, Rainbow, Vic  3999"
        }],
        "managingOrganization": {
          "reference": "Organization/organization-1"
        },
        "name": [{
          "use": "official",
          "given": ["Peter", "James"],
          "family": "Chalmers"
        }],
        "birthDate": "1974-12-25",
        "resourceType": "Patient",
        "id": "patient-1",
        "gender": "male",
        "meta": {
          "lastUpdated": "2023-07-17T13:53:23.791113Z",
          "versionId": "197",
          "extension": [{ "url": "ex:createdAt", "valueInstant": "2023-07-17T13:53:23.791113Z" }]
        }
      },
      "search": { "mode": "match" },
      "fullUrl": "https://aidbox.app/Patient/patient-1",
      "link": [{ "relation": "self", "url": "https://aidbox.app/Patient/patient-1" }]
    }
  ],
  "link": [
    { "relation": "first", "url": "/fhir/Patient?_count=1&_page=1"   },
    { "relation": "self",  "url": "/fhir/Patient?_count=1&_page=1"   },
    { "relation": "next",  "url": "/fhir/Patient?_count=1&_page=2"   },
    { "relation": "last",  "url": "/fhir/Patient?_count=1&_page=134" }
  ],
  "type": "searchset",
  "meta": { "versionId": "0" }
}
```
:::

### Order
To arrange the result set of a query in a specified order based on the values of one or more attributes.
Example shows that `.order('lastUpdate', 'desc')` returns a list of patients sorted from the newest record to the oldest

##### Parameters
<ParamsComponent :items="[
  { name: 'arg1', required: true, type: 'string', description: `The attribute name which list should be sorted by` },
  { name: 'arg2', required: false, type: 'asc | desc', description: `The order in which data should be arranged` },
]"/>

::: code-group
```typescript jsx [Request]
await aidbox.getResources("Patient")
  .order('lastUpdated', 'desc')
  .count(3)
```

```JSON [Response]
{
  "resourceType": "Bundle",
  "total": 134,
  "entry": [
    {
      "resource": {
        "id": "patient-1",
        "resourceType": "Patient",
        "meta": {
          "lastUpdated": "2023-07-17T13:53:23.791113Z", // [!code hl]
          "versionId": "197",
          "extension": [{ "url": "ex:createdAt", "valueInstant": "2023-07-17T13:53:23.791113Z" }]
        }
      },
      "search": { "mode": "match" },
      "fullUrl": "https://aidbox.app/Patient/patient-1",
      "link": [{ "relation": "self", "url": "https://aidbox.app/Patient/patient-1" }]
    }, 
    {
      "resource": {
        "id": "patient-4",
        "resourceType": "Patient",
        "meta": {
          "lastUpdated": "2023-07-17T12:30:47.200521Z", // [!code hl]
          "versionId": "197",
          "extension": [{ "url": "ex:createdAt", "valueInstant": "2023-07-17T12:30:47.200521Z" }]
        }
      },
      "search": { "mode": "match" },
      "fullUrl": "https://aidbox.app/Patient/patient-4",
      "link": [{ "relation": "self", "url": "https://aidbox.app/Patient/patient-4" }]
    },
    {
      "resource": {
        "id": "patient-3",
        "resourceType": "Patient",
        "meta": {
          "lastUpdated": "2023-07-17T12:27:52.608092Z", // [!code hl]
          "versionId": "178",
          "extension": [{ "url": "ex:createdAt", "valueInstant": "2023-07-17T12:27:52.608092Z" }]
        }
      },
      "search": { "mode": "match" },
      "fullUrl": "https://aidbox.app/Patient/patient-3",
      "link": [{ "relation": "self", "url": "https://aidbox.app/Patient/patient-3" }]
    }
  ],
  "link": [
    { "relation": "first", "url": "/fhir/Patient?_page=1" },
    { "relation": "self",  "url": "/fhir/Patient?_page=1" },
    { "relation": "next",  "url": "/fhir/Patient?_page=2" },
    { "relation": "last",  "url": "/fhir/Patient?_page=2" }
  ],
  "type": "searchset",
  "meta": { "versionId": "0" }
}
```
:::

### Elements
The ability to pick the included attributes helps you to get rid of irrelevant fields and reduce the overall data size.
Example shows that `.elements(['name'])` return a list of patients that contains only name attribute and skips the rest

##### Parameters
<ParamsComponent :items="[
  { name: 'arg1', required: true, type: 'Array<string>', description: `Resourse's atttibutes that returns in response` },
]"/>


::: code-group
```typescript jsx [Request]
await aidbox.getResources("Patient")
  .elements(['name'])
  .count(3)
```

```JSON [Response]
{
  "resourceType": "Bundle",
  "total": 134,
  "entry": [
    {
      "resource": {
        "name": [{ // [!code hl]
          "use": "official", // [!code hl]
          "given": ["Peter", "James"], // [!code hl]
          "family": "Chalmers" // [!code hl]
        }], // [!code hl]
        "resourceType": "Patient",
        "id": "patient-1"
      },
      "search": { "mode": "match" },
      "fullUrl": "https://aidbox.app/Patient/patient-1",
      "link": [{ "relation": "self", "url": "https://aidbox.app/Patient/patient-1" }]
    },
    {
      "resource": {
        "name": [{ // [!code hl]
          "use": "official", // [!code hl]
          "given": ["Esperanza"], // [!code hl]
          "family": "Hernandes", // [!code hl]
          "prefix": ["Mrs."] // [!code hl]
        }], // [!code hl]
        "id": "patient-2",
        "resourceType": "Patient"
      },
      "search": { "mode": "match" },
      "fullUrl": "https://aidbox.app/Patient/patient-2",
      "link": [{ "relation": "self", "url": "https://aidbox.app/Patient/patient-2" }]
    },
    {
      "resource": {
        "name": [{ // [!code hl]
          "use": "official", // [!code hl]
          "given": ["Josefine"], // [!code hl]
          "family": "Sanford" // [!code hl]
        }], // [!code hl]
        "id": "patient-3",
        "resourceType": "Patient"
      },
      "search": { "mode": "match" },
      "fullUrl": "https://aidbox.app/Patient/patient-3",
      "link": [{ "relation": "self", "url": "https://aidbox.app/Patient/patient-3" }]
    }
  ],
  "link": [
    { "relation": "first", "url": "/fhir/Patient?_count=3&_page=1" },
    { "relation": "self",  "url": "/fhir/Patient?_count=3&_page=1" },
    { "relation": "next",  "url": "/fhir/Patient?_count=3&_page=2" },
    { "relation": "last",  "url": "/fhir/Patient?_count=3&_page=45" }
  ],
  "type": "searchset",
  "meta": { "versionId": "0" }
}
```
:::

### Pagination
To split the data into smaller, more manageable pages, making it easier for users to navigate through the information.
The example shows that `.page(3)` returns patients list that skips ((page - 1) * count) = 6 records

##### Parameters
<ParamsComponent :items="[
  { name: 'arg1', required: true, type: 'number', description: `The page number (offset)` },
]"/>

::: code-group
```typescript jsx [Request]
await aidbox.getResources("Patient")
  .page(3)
  .count(3)
```

```JSON [Response]
{
  "resourceType": "Bundle",
  "total": 134,
  "entry": [
    {
      "resource": {
        ...patient attributes...
        "resourceType": "Patient",
        "id": "patient-7"
      },
      "search": { "mode": "match" },
      "fullUrl": "https://aidbox.app/Patient/patient-7",
      "link": [{ "relation": "self", "url": "https://aidbox.app/Patient/patient-7" }]
    },
    {
      "resource": {
        ...patient attributes...
        "id": "patient-8",
        "resourceType": "Patient"
      },
      "search": { "mode": "match" },
      "fullUrl": "https://aidbox.app/Patient/patient-8",
      "link": [{ "relation": "self", "url": "https://aidbox.app/Patient/patient-8" }]
    },
    {
      "resource": {
        ...patient attributes...
        "id": "patient-9",
        "resourceType": "Patient"
      },
      "search": { "mode": "match" },
      "fullUrl": "https://aidbox.app/Patient/patient-9",
      "link": [{ "relation": "self", "url": "https://aidbox.app/Patient/patient-9" }]
    }
  ],
  "link": [
    { "relation": "first",     "url": "/fhir/Patient?_count=3&_page=1"  },
    { "relation": "self",      "url": "/fhir/Patient?_count=3&_page=3"  }, // [!code hl]
    { "relation": "next",      "url": "/fhir/Patient?_count=3&_page=4"  },
    { "relation": "previous",  "url": "/fhir/Patient?_count=3&_page=2"  },
    { "relation": "last",      "url": "/fhir/Patient?_count=3&_page=45" }  // [!code hl]
  ],
  "type": "searchset",
  "meta": { "versionId": "0" }
}
```
:::
