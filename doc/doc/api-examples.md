---
outline: [2, 3]
---
# API
Description Intro

Что в этой секции должно быть

Input params in the general case depends on Resource that we want to create

[resource type](http://hl7.org/fhir/resourcelist.html),
[FHIR version](http://hl7.org/fhir/directory.html),

## Auth
Section Description
### Basic
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel maximus arcu. Aliquam consequat erat ut leo rutrum, vel vulputate tortor vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vestibulum mi sodales ullamcorper vestibulum. Duis a turpis turpis. Praesent augue lectus, iaculis at ante sodales, pellentesque efficitur neque. Sed tempor in ligula in dictum. Cras eu velit in augue finibus dictum.
### Client Credentials
Vivamus euismod sit amet massa eu interdum. Praesent egestas tellus id arcu placerat, vel luctus tellus laoreet. Sed lacinia ante quis maximus scelerisque. Integer euismod, lectus vitae malesuada aliquam, massa massa pellentesque risus, sed faucibus purus libero at lectus. Quisque ultrices vestibulum elit non egestas. Curabitur et sem justo. Maecenas condimentum nisi porttitor justo iaculis, sit amet accumsan quam pellentesque.
### Resource Owner
Pellentesque nisl est, auctor non porttitor nec, volutpat eu sapien. Suspendisse ac nisl vel quam vehicula vulputate at vel justo. Cras ullamcorper luctus ante, sed accumsan velit imperdiet at. Cras dictum, ante a ultrices rhoncus, dolor velit congue justo, eget pulvinar odio nunc non leo. Integer nisl mi, pretium sit amet arcu nec, sagittis molestie velit. Aenean tempus eros nec felis condimentum congue. In commodo tortor felis, nec ullamcorper mauris commodo in. Duis ultrices lorem eget magna lacinia, sit amet dapibus tellus lobortis. Mauris in vestibulum diam. Integer tristique at magna id ultrices. Proin efficitur nunc imperdiet, iaculis enim id, ultrices mauris. Vivamus erat magna, interdum nec pellentesque sed, dictum id urna. Quisque sit amet varius lorem, eget placerat lectus.
### Authorization Code
Curabitur et tortor ac purus efficitur imperdiet ac a orci. Praesent eu vestibulum augue, sed molestie orci. Vivamus vitae turpis consectetur, semper arcu quis, interdum est. Mauris ut mauris enim. Duis suscipit dolor sit amet turpis facilisis, accumsan vehicula nisi mollis. Proin ac pellentesque turpis. Duis faucibus, tortor vel consequat dapibus, orci libero egestas sem, eleifend gravida enim sem non magna. Fusce libero lorem, mollis quis viverra at, pharetra ut dui. Quisque a vehicula urna, ut ornare diam. Sed eleifend tellus sed tellus malesuada, vitae ultrices augue tempus. Vestibulum tincidunt nisi in turpis condimentum lacinia. Etiam lacus lectus, tincidunt ut magna et, tincidunt euismod mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
### Implicit
Suspendisse placerat facilisis lacus ut pellentesque. Morbi finibus felis eu molestie venenatis. Fusce bibendum elementum dui, eu ullamcorper velit molestie luctus. Maecenas eros ipsum, tempus eu leo non, eleifend consequat urna. Nunc in metus et orci porta dignissim vel nec neque. Vivamus gravida semper dui, ac pharetra metus. Aliquam mollis pharetra nulla id tempus. Maecenas mauris sem, pellentesque vitae ligula vitae, pulvinar euismod turpis. Sed sollicitudin, magna non porta volutpat, velit risus imperdiet magna, vitae iaculis quam eros et sapien. Cras vitae aliquam sapien, nec elementum magna. Mauris viverra euismod lorem, nec finibus turpis condimentum non. Nulla cursus mi eros, et vehicula sem iaculis ac. Nunc eleifend nec odio id suscipit. Praesent neque orci, mattis a condimentum eget, lobortis ut ipsum.
### SMART on FHIR
Suspendisse placerat facilisis lacus ut pellentesque. Morbi finibus felis eu molestie venenatis. Fusce bibendum elementum dui, eu ullamcorper velit molestie luctus. Maecenas eros ipsum, tempus eu leo non, eleifend consequat urna. Nunc in metus et orci porta dignissim vel nec neque. Vivamus gravida semper dui, ac pharetra metus. Aliquam mollis pharetra nulla id tempus. Maecenas mauris sem, pellentesque vitae ligula vitae, pulvinar euismod turpis. Sed sollicitudin, magna non porta volutpat, velit risus imperdiet magna, vitae iaculis quam eros et sapien. Cras vitae aliquam sapien, nec elementum magna. Mauris viverra euismod lorem, nec finibus turpis condimentum non. Nulla cursus mi eros, et vehicula sem iaculis ac. Nunc eleifend nec odio id suscipit. Praesent neque orci, mattis a condimentum eget, lobortis ut ipsum.

## CRUD for Single FHIR Resource

### Create Resource
Some text here

<div style="display: flex; flex-direction: row;">
<div style="display: flex; flex-direction: column; width: fit-content; margin-right: 24px">
  <div style="height: 0px; border-top: 1px solid rgba(82, 82, 89, 0.32)"/>  
  <div style="padding: 6px 45px 6px 6px">
    <div><span style="color: white; font-family: Consolas, monospace">type</span> <span style="padding: 2px 6px; margin: 0 6px; border: 1px solid orange; border-radius: 10px; font-size: 10px; color: #ffb224; background-color: #341c00">REQUIRED</span> <span style="font-size: 12px; opacity: .7">string</span></div>
    <div style="font-size: 12px; opacity: .7">FHIR resource name Patient, Observation etc.</div>
  </div>
  <div style="height: 0px; border-top: 1px solid rgba(82, 82, 89, 0.32)"/>
  <div style="padding: 6px 45px 6px 6px">
    <div><span style="color: white; font-family: Consolas, monospace">id</span> <span style="padding: 2px 6px; margin: 0 6px; border: 1px solid orange; border-radius: 10px; font-size: 10px; color: #ffb224; background-color: #341c00">REQUIRED</span> <span style="font-size: 12px; opacity: .7">string</span></div>
    <div style="font-size: 12px; opacity: .7">Unique identifier of a resource</div>
  </div>
  <div style="height: 0px; border-top: 1px solid rgba(82, 82, 89, 0.32)"/> 
</div>

<div style="display: flex; flex-direction: column; width: fit-content;">
  <div style="height: 0px; border-top: 1px solid rgba(82, 82, 89, 0.32)"/>  
  <div style="padding: 6px 45px 6px 6px">
    <div><span style="color: white; font-family: Consolas, monospace">type</span> <span style="padding: 2px 6px; margin: 0 6px; border: 1px solid orange; border-radius: 10px; font-size: 10px; color: #ffb224; background-color: #341c00">REQUIRED</span> <span style="font-size: 12px; opacity: .7">string</span></div>
    <div style="font-size: 12px; opacity: .7">FHIR resource name Patient, Observation etc.</div>
  </div>
  <div style="height: 0px; border-top: 1px solid rgba(82, 82, 89, 0.32)"/>
  <div style="padding: 6px 45px 6px 6px">
    <div><span style="color: white; font-family: Consolas, monospace">id</span> <span style="padding: 2px 6px; margin: 0 6px; border: 1px solid orange; border-radius: 10px; font-size: 10px; color: #ffb224; background-color: #341c00">REQUIRED</span> <span style="font-size: 12px; opacity: .7">string</span></div>
    <div style="font-size: 12px; opacity: .7">Unique identifier of a resource</div>
  </div>
  <div style="height: 0px; border-top: 1px solid rgba(82, 82, 89, 0.32)"/> 
</div>
</div>

And may be some text here as well
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

1. Type: Ensuring that the data types of elements within the resource are valid and comply with the specified data type constraints
2. Cardinality: Verifying that the required elements are present and that optional elements are either present or absent based on their cardinality defined in the structure definition
3. Terminology: Validating that coded elements (such as codes in terminology systems like SNOMED CT or LOINC) are using valid codes as defined by the associated value sets or code systems
4. Reference: Ensuring that references to other resources are valid and exist in the server

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




### Fetch Resource
Generic method that allows you to retrieve a [FHIR resource](http://hl7.org/fhir/resourcelist.html)
by providing its type and id. 

#### Parameters
resourceType (required) string
resourceId (required) string

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

::: code-group
```TYPESCRIPT jsx [Request]

await aidbox.deleteResource("Patient", "patient-1")
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


## Filter
### Fetch List


- By default, Aidbox return a maximum of 1,000 rows. This setting can be changed in your project's API settings. It's recommended that you keep it low to limit the payload size of accidental or malicious requests. You can use `.count(10)` and `.page(1)` to paginate through your data.
- select() can be combined with Filters
  select() can be combined with Modifiers
  apikey is a reserved keyword if you're using the Supabase Platform and should be avoided as a column name.


```typescript jsx
await aidbox.getResources("Patient")
```

### Limit
```typescript jsx
await aidbox.getResources("Patient")
  .count(10)
```

### Pagination
```typescript jsx
await aidbox.getResources("Patient")
  .count(10)
  .page(3)
```

### Order by
```typescript jsx
await aidbox.getResources("Patient")
  .order('birthDate', 'acs')
```

### Selective attributes
```typescript jsx
await aidbox.getResources("Patient")
  .elements(['active', 'name', 'address'])
```

### Profiles
```typescript jsx
await aidbox.getResources("Patient")
```

### Fulltext search
```typescript jsx
await aidbox.getResources("Patient")
```

## Access Control
### Provide access to ...
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel maximus arcu. Aliquam consequat erat ut leo rutrum, vel vulputate tortor vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vestibulum mi sodales ullamcorper vestibulum. Duis a turpis turpis. Praesent augue lectus, iaculis at ante sodales, pellentesque efficitur neque. Sed tempor in ligula in dictum. Cras eu velit in augue finibus dictum.

# SEARCH
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel maximus arcu. Aliquam consequat erat ut leo rutrum, vel vulputate tortor vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur vestibulum mi sodales ullamcorper vestibulum. Duis a turpis turpis. Praesent augue lectus, iaculis at ante sodales, pellentesque efficitur neque. Sed tempor in ligula in dictum. Cras eu velit in augue finibus dictum.

Vivamus euismod sit amet massa eu interdum. Praesent egestas tellus id arcu placerat, vel luctus tellus laoreet. Sed lacinia ante quis maximus scelerisque. Integer euismod, lectus vitae malesuada aliquam, massa massa pellentesque risus, sed faucibus purus libero at lectus. Quisque ultrices vestibulum elit non egestas. Curabitur et sem justo. Maecenas condimentum nisi porttitor justo iaculis, sit amet accumsan quam pellentesque.

Pellentesque nisl est, auctor non porttitor nec, volutpat eu sapien. Suspendisse ac nisl vel quam vehicula vulputate at vel justo. Cras ullamcorper luctus ante, sed accumsan velit imperdiet at. Cras dictum, ante a ultrices rhoncus, dolor velit congue justo, eget pulvinar odio nunc non leo. Integer nisl mi, pretium sit amet arcu nec, sagittis molestie velit. Aenean tempus eros nec felis condimentum congue. In commodo tortor felis, nec ullamcorper mauris commodo in. Duis ultrices lorem eget magna lacinia, sit amet dapibus tellus lobortis. Mauris in vestibulum diam. Integer tristique at magna id ultrices. Proin efficitur nunc imperdiet, iaculis enim id, ultrices mauris. Vivamus erat magna, interdum nec pellentesque sed, dictum id urna. Quisque sit amet varius lorem, eget placerat lectus.

Curabitur et tortor ac purus efficitur imperdiet ac a orci. Praesent eu vestibulum augue, sed molestie orci. Vivamus vitae turpis consectetur, semper arcu quis, interdum est. Mauris ut mauris enim. Duis suscipit dolor sit amet turpis facilisis, accumsan vehicula nisi mollis. Proin ac pellentesque turpis. Duis faucibus, tortor vel consequat dapibus, orci libero egestas sem, eleifend gravida enim sem non magna. Fusce libero lorem, mollis quis viverra at, pharetra ut dui. Quisque a vehicula urna, ut ornare diam. Sed eleifend tellus sed tellus malesuada, vitae ultrices augue tempus. Vestibulum tincidunt nisi in turpis condimentum lacinia. Etiam lacus lectus, tincidunt ut magna et, tincidunt euismod mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

Suspendisse placerat facilisis lacus ut pellentesque. Morbi finibus felis eu molestie venenatis. Fusce bibendum elementum dui, eu ullamcorper velit molestie luctus. Maecenas eros ipsum, tempus eu leo non, eleifend consequat urna. Nunc in metus et orci porta dignissim vel nec neque. Vivamus gravida semper dui, ac pharetra metus. Aliquam mollis pharetra nulla id tempus. Maecenas mauris sem, pellentesque vitae ligula vitae, pulvinar euismod turpis. Sed sollicitudin, magna non porta volutpat, velit risus imperdiet magna, vitae iaculis quam eros et sapien. Cras vitae aliquam sapien, nec elementum magna. Mauris viverra euismod lorem, nec finibus turpis condimentum non. Nulla cursus mi eros, et vehicula sem iaculis ac. Nunc eleifend nec odio id suscipit. Praesent neque orci, mattis a condimentum eget, lobortis ut ipsum.