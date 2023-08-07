import tar from 'tar';
import path from "node:path"

const getEntryFilenames = async tarballFilename => {
  const filenames = []
  await tar.x({
    strip: 1,
    file: tarballFilename,
    cwd: path.resolve("fff", "fhir"),
    onentry: entry => filenames.push(entry.path),
  })
  return filenames
}
console.log(await getEntryFilenames(path.resolve("fff", "fhir.test.data.r4.tgz")))

