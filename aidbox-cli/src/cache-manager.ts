import { mkdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
type JSONValue =
  | string
  | number
  | boolean
  | { [x: string]: JSONValue }
  | Array<JSONValue>;


export class CacheManager {
  baseDir: string
  constructor(baseDir: string) {
    this.baseDir = baseDir
  }
  async rootExist() {
    return await stat(this.baseDir).then(() => true).catch(() => false)
  }

  async writeItem(name: string, content: JSONValue) {
    await writeFile(resolve(this.baseDir, name), JSON.stringify(content))
  }
  async readItem<T>(name: string): Promise<T> {
    return JSON.parse(((await readFile(resolve(this.baseDir, name))).toString()))
  }
  async itemExist(name: string) {
    return await stat(resolve(this.baseDir, name)).then(() => true).catch(() => false)
  }

  async init() {
    if (!await stat(this.baseDir).catch(() => false)) {
      await mkdir(this.baseDir, { recursive: true })
    }
  }
  async reset() {
    await rm(this.baseDir, { recursive: true })
    await this.init()
  }
}


export const createCacheManager = async (baseDir: string) => {
  const cacheManager = new CacheManager(baseDir);
  await cacheManager.init()
  return cacheManager
}
