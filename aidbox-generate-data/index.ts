import * as fs from 'fs/promises'
import * as path from 'path'

import { aidboxClient } from './aidbox-client'

const keysToRemove = [
  'extension',
  'multipleBirthBoolean',
  'onsetDateTime',
  'effectiveDateTime',
  'abatementDateTime',
  'claim',
  'immunization',
  'explanationOfBenefit',
  'valueQuantity',
  'multipleBirthInteger',
  'valueCodeableConcept',
  'performedPeriod',
  'occurrenceDateTime',
  'itemCodeableConcept',
  'valueString',
  'deceasedDateTime'
]

const resourceTypeToRemove = [
  'Claim',
  'MedicationRequest',
  'ExplanationOfBenefit',
  'Immunization',
  'Provenance',
  'MedicationAdministration'

]

let pull: number[] = []

const directoryPath =
  path.join(__dirname, '/data')

const removeKey = (obj: any) => {
  for (const objKey in obj) {
    if (keysToRemove.includes(objKey)) delete obj[objKey]
    else if (typeof obj[objKey] === 'object') {
      removeKey(obj[objKey])
    }
  }
}

async function generate (file: string, i: number) {
  console.log(`File #${i} started uploading`)
  try {
    const filePath = path.join(directoryPath, file)
    const content = await fs.readFile(filePath, { encoding: 'utf8' })
    const entry = JSON.parse(content).entry

    removeKey(entry)

    const filtredEntry = entry.filter(
      (resource: any) =>
        !resourceTypeToRemove.includes(resource.resource?.resourceType)
    )

    const res = await aidboxClient.bundleRequest(filtredEntry)
    console.log(`\x1b[42mFile #${i} uploaded successfully\x1B[0m`)
    pull.pop()
    return res
  } catch (error: any) {
    console.error(`\x1b[43mFile #${i} uploaded unsuccessfully\x1B[0m`)
    pull.pop()
  }
}

function reRun (i: number) {
  setTimeout(() => {
    if (pull.length > 5) {
      reRun(i)
      return
    }
    main(i)
  }, 50)
}

const main = async (last_index = 0) => {
  const files = await fs.readdir(directoryPath)

  for (let i = last_index; i < files.length; i++) {
    if (pull.length > 5) {
      reRun(i)
      break
    }
    pull.push(i)
    generate(files[i], i)
  }
}

main()
