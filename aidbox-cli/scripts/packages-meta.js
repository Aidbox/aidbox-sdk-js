import { writeFile } from "node:fs/promises"
const main = async () => {

  const response = await fetch("https://packages2.fhir.org/packages")
  const items = (await response.json()).filter(item => ["R4", "R4B", "R5"].includes(item.fhirVersion))
  const result = []

  for (const item of items) {
    console.log(item.name)
    const res = await fetch(`https://packages2.fhir.org/packages/${item.name}`)
    const data = await res.json();


    if (!data.versions) {
      console.log(data)
    } else {
      result.push({
        name: item.name,
        fhirVersion: item.fhirVersion,
        description: item.description,
        kind: item.kind,
        versions: Object.keys(data.versions).map((cur) => {
          const version = data.versions[cur];
          return { version: cur, url: version.url, description: version.description }
        })
      })
    }
  }
  await writeFile("./source.json", JSON.stringify(result))
}

main()
