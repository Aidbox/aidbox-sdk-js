import { Client } from "@aidbox/sdk-r4";

const data = [
  {
    resourceType: "Encounter",
    url: "https://storage.googleapis.com/aidbox-public/synthea/100/Encounter.ndjson.gz",
  },
  {
    resourceType: "Organization",
    url: "https://storage.googleapis.com/aidbox-public/synthea/100/Organization.ndjson.gz",
  },
  {
    resourceType: "Patient",
    url: "https://storage.googleapis.com/aidbox-public/synthea/100/Patient.ndjson.gz",
  },
  {
    resourceType: "Condition",
    url: "https://storage.googleapis.com/aidbox-public/synthea/100/Condition.ndjson.gz",
  },
  {
    resourceType: "Immunization",
    url: "https://storage.googleapis.com/aidbox-public/synthea/100/Immunization.ndjson.gz",
  },
  {
    resourceType: "Observation",
    url: "https://storage.googleapis.com/aidbox-public/synthea/100/Observation.ndjson.gz",
  },
];

export const client = new Client(import.meta.env.VITE_APP_AIDBOX_URL, {
  username: import.meta.env.VITE_APP_CLIENT,
  password: import.meta.env.VITE_APP_SECRET,
});

Promise.all(
  data.map((item, index) =>
    client.client.post("/fhir/$import", {
      id: "synthea_" + index,
      contentEncoding: "gzip",
      inputs: [item],
    })
  )
);
