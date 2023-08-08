import { mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { email, minLength, object, type Output, parse, string } from 'valibot';
import { homedir } from 'node:os';
import { CacheManager, createCacheManager } from '../../cache-manager';


export interface StructureDefinition {
  kind: "complex-type" | string
  name: string,
  url: string,
  description?: string,
  baseDefinition?: string
  differential: {
    element: Record<string, any> & {
      path: string
      definition?: string,
      min: number,
      max: "*" | string
      type: any[]
      binding: {
        strength: "required" | string
        extension?: any[]
        description?: string
        valueSet: string
      }
    }[]
  }
}
const baseDir = resolve('output', 'hl7.fhir.r4.core')
const sourceFiles = (await readdir(baseDir)).filter(fileName => fileName !== '.index.json' && fileName !== 'package.json' && fileName.endsWith(".json"))

// export const main = async () => {

//   const files = sourceFiles.filter(fileName => {
//     return fileName !== '.index.json' && fileName !== 'package.json' && fileName.startsWith('StructureDefinition')
//   },

//   )

//   const content: StructureDefinition = JSON.parse((await readFile(resolve(baseDir, 'StructureDefinition-HumanName.json'))).toString())




//   const getType = (source: any[]) => {
//     if (source.length === 1) {
//       const { code } = source[0]
//       return code
//     }
//     return "unknown"
//   }

//   for (const element of content.differential.element) {
//     if (element.path.includes(".")) {
//       const path = element.path.split(".").slice(1)
//       if (path.length === 1) {
//         if (element.binding) {
//           console.log("need find value from valueset")
//         }
//         const type = getType(element.type)
//         if (element.max === '0') {
//           console.log("forbidden", element)
//           process.exit(1)
//         }
//         const elementDefinition = {
//           required: element.min !== 0,
//           array: element.max === "*" || element.max !== "1",
//           type,
//         }

//         console.log(element)
//         console.log(elementDefinition)
//         baseDef.elements[path[0]] = elementDefinition
//       } else {
//         console.log("fsdfsfsdf")
//         process.exit(1)
//       }




//     }
//   }

//   console.log(baseDef)

//   return baseDef

// }

const warmUp = async () => {
  const cacheManager = await createCacheManager(resolve(homedir(), ".aidbox-cli", ".cache"))

  let cache: Record<string, any> = {
    SearchParameter: {},
    ValueSet: {},
    StructureDefinition: {},
    CodeSystem: {},
    ConceptMap: {}
  }
  if (await cacheManager.itemExist("index.json")) {
    console.log("Read from cache")
    cache = await cacheManager.readItem("index.json")
  } else {
    await Promise.all(sourceFiles.map(async (fileName) => {
      const content = JSON.parse((await readFile(resolve(baseDir, fileName))).toString())
      if (["CompartmentDefinition", 'CapabilityStatement', 'NamingSystem', "StructureMap"].includes(content.resourceType)) { return }
      if (["operation"].includes(content.kind)) { return }
      if (!content.resourceType) {
        console.log(content)
      }
      cache[content.resourceType][content.url] = content
      return true
    }))
    await cacheManager.writeItem("index.json", cache)
  }
  return { cacheManager, cache }
}


const introspectName = (cache: Record<string, any>, url: string) => {
  const value = cache["StructureDefinition"][url];
  if (!value) {
    throw Error("Unknown url: " + url)
  }
  return value.name
}


const normalizeElement = (element: any) => {
  return Object.keys(element).reduce((acc, current) => {
    if (['mapping', "short", "alias", "comment", "meaningWhenMissing", "isModifierReason", "requirements"].includes(current)) {
      return acc
    } else {
      let el = element[current];
      if (current === 'binding') {
        delete el.extension
      }
      if (current === 'max') {
        el = el === '*' ? Number.POSITIVE_INFINITY : parseInt(el)
      }
      acc[current] = el
      return acc
    }
  }, {} as Record<string, any>)
}

const setProperty = (obj: Record<string, any>, path: string[], value: any): Record<string, any> => {
  const [head, ...rest] = path
  return {
    ...obj,
    [head]: rest.length
      ? setProperty(obj[head] || {}, rest, value)
      : value
  }
}


const processStructureDefinition = async (cache: Record<string, any>, cacheManager: CacheManager) => {
  const items = cache["StructureDefinition"];

  for (const item of Object.keys(items)) {
    const element = cache["StructureDefinition"][item]
    if (element.name === 'objectClass' || element.name === 'objectClassProperty') { continue }
    let baseDef: Record<string, any> = {
      kind: element.kind,
      package: 'hl7.fhir.r4.core',
      base: {
        name: introspectName(cache, element.baseDefinition),
        package: 'hl7.fhir.r4.core'
      },
      name: element.name,
      elements: {}
    };

    const data = element.differential.element.reduce((acc: any, cur: any) => {
      const { path, ...rest } = cur;
      if (!path.includes('.')) { return acc }
      const basePath = path.split(".").slice(1).join(".")
      acc[basePath] = normalizeElement(rest)
      return acc
    }, {})
    console.log(data)
    const treeResult = Object
      .entries(data)
      .sort(([a], [b]) => a.localeCompare(b))
      .reduce((r, [path, children]) => {
        const
          keys = path.split('.'),
          lastName = keys.pop();

        keys
          .reduce((t, name) => {
            let temp = t.find((o: any) => o.name === name && Array.isArray(o.children));
            if (!temp) {
              temp = { name, children: [] as any }
              t.push(temp);
            }
            return temp.children;
          }, r)
          .push({ name: lastName, children });

        return r;
      }, [] as any[]);

    console.log(treeResult)


    // for (const children of element.differential.element) {
    //   if (!children.path.includes(".")) { continue }
    //   const normalized = normalizeElement(children);
    //   const keyPath = normalized.path.split(".").slice(1)

    //   const resultItem = {
    //     name: keyPath.pop(),
    //     required: normalized.min === 1,
    //     description: normalized.definition
    //   }
    //   const newEL = setProperty(baseDef.elements, keyPath.length ? keyPath : [resultItem.name], resultItem)
    //   console.log(normalized)
    //   console.log(resultItem)
    //   baseDef.elements = newEL
    // }

    // console.log(baseDef)
    process.exit(1)
  }

}

function pick<T, K extends keyof T>(object: T, keys: K[]): Pick<T, K> {
  return Object.assign(
    {},
    ...keys.map(key => {
      if (object && Object.prototype.hasOwnProperty.call(object, key)) {
        return { [key]: object[key] };
      }
    })
  );
};


const goAhead = async () => {
  const { cache, cacheManager } = await warmUp()
  await processStructureDefinition(cache, cacheManager)
}

// main()



goAhead()


