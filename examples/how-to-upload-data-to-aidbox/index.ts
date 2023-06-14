import * as fs from 'fs/promises'
import * as path from 'path'

import { aidboxClient } from '../shared/client'

let queueSize = 0
let loadedFile = 0
let totalProcessed = 0
let totalFiles = 0
const notLoadedFiles: Array<{ file: string, error: any }> = []

const directoryPath =
  path.join(__dirname, '/data/fhir')

async function upload(file: string) {
  try {
    const content = await fs.readFile(file, { encoding: 'utf8' })
    const entry = JSON.parse(content).entry

    await aidboxClient.bundleRequest(entry, 'transaction')
    loadedFile += 1
    queueSize -= 1
    process.stdout.clearLine(0)
    process.stdout.write(`File #${totalProcessed} of #${totalFiles} processed\n`)
  } catch (error: any) {
    queueSize -= 1
    notLoadedFiles.push({ file, error: error.response.data })
    process.stdout.clearLine(0)
    process.stdout.write(`File #${totalProcessed} of #${totalFiles} processed\n`)
  } finally {
    totalProcessed += 1
  }
}

const main = async (sourcePath: string = directoryPath) => {
  const files = await fs.readdir(sourcePath)
  let count = files.length
  totalFiles = files.length
  let currenFileNumber = 0
  while (count > 0) {
    if (queueSize <= 5) {
      upload(path.join(directoryPath, files[currenFileNumber]))
      queueSize += 1
      currenFileNumber += 1
      count -= 1
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }
  }

  console.log('Success:', loadedFile)
  console.log('Fail:', notLoadedFiles.length)
  console.log(`${notLoadedFiles.length} has no been loaded. Please check error.json file`)
  await fs.writeFile('./error.json', JSON.stringify(notLoadedFiles))
}
process.on('SIGINT', async function () {
  process.stdout.clearLine(0)
  process.stdout.write('\n')
  console.log('Success:', loadedFile)
  console.log('Fail:', notLoadedFiles.length)
  await fs.writeFile('./error.json', JSON.stringify(notLoadedFiles))
  process.exit(1)
})

main()
