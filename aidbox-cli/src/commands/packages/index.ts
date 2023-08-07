import { Command, Flags } from '@oclif/core'
import colors from 'ansi-colors'
import inquirer from 'inquirer';
import Fuse from 'fuse.js'
import { stat, mkdir, readdir, readFile, rm } from "node:fs/promises"
import inquirerPrompt from 'inquirer-autocomplete-prompt';
import download from 'download'

import { createRequire } from 'node:module';
import { Listr } from 'listr2'
import { resolve } from 'node:path';
import tar from 'tar'
const require = createRequire(import.meta.url);
const sources = require('./source.json');

inquirer.registerPrompt('autocomplete', inquirerPrompt);


interface Ctx {
  outputDir: string
  url: string,
  packageName: string
  packageVersion: string
  loadDeps?: boolean
  deps?: string[]
}

const unpackTar = async ({ file, cwd, onentry }: { file: string, cwd: string, onentry?: tar.ExtractOptions["onentry"] }) => {
  await tar.x({
    file,
    strip: 1,
    cwd,
    ...(onentry ? { onentry } : {})
  })
}

const findDeps = async (path: string) => {
  const file = await readFile(resolve(path, "package.json")).catch(() => false);
  if (file) {
    return JSON.parse(file.toString())?.dependencies
  }
}



const tasks = new Listr<Ctx>(
  [
    {
      title: 'Creating output directory',
      task: async (ctx, task): Promise<void> => {
        const dir = resolve(ctx.outputDir, ctx.packageName);
        await stat(dir).catch(async (e) => {
          if (e.code === 'ENOENT') {
            task.output = 'Create directory in ' + dir
            await mkdir(dir, { recursive: true })
          } else {
            console.log(e)
          }
        })
        task.title = "Directory ready"
      }
    },
    {
      title: 'Download main package',
      task: async (ctx, task): Promise<void> => {
        task.output = 'Download package from ' + ctx.url
        const exist = await stat(resolve(ctx.outputDir, `${ctx.packageName}#${ctx.packageVersion}.tgz`)).catch(() => false);
        if (!exist) {
          await download(ctx.url, resolve(ctx.outputDir));
        }
        task.title = 'Package downloaded ' + ctx.packageName
      }

    },
    {
      title: 'Unpack package',
      task: async (ctx, task): Promise<Listr<any> | undefined> => {
        task.output = "Start unpacking package"
        const targetFile = resolve(ctx.outputDir, `${ctx.packageName}#${ctx.packageVersion}.tgz`);
        const packageDir = resolve(ctx.outputDir, ctx.packageName)
        await unpackTar({
          file: targetFile,
          cwd: packageDir,
          onentry: entry => {
            task.output = entry.path
          }
        })
        const deps = await findDeps(packageDir)
        if (deps) {
          return task.newListr(
            Object.keys(deps).map((key: string) => {
              const packageNameInner = key;
              const packageVersionInner = deps[key]
              const source = sources.find((s: any) => s.name === packageNameInner)?.versions.find((v: any) => v.version === packageVersionInner)?.url;
              if (!source) {
                task.output = `Unknown package: ${packageNameInner}@${packageVersionInner}`
              }
              return {
                title: `Process package: ${packageNameInner}@${packageVersionInner}`,
                task: async (_ctxx, taskInner) => {
                  const targetFileInner = resolve(ctx.outputDir, `${packageNameInner}#${packageVersionInner}.tgz`);
                  const packageDirInner = resolve(ctx.outputDir, packageNameInner)

                  await stat(packageDirInner).catch(async (e) => {
                    if (e.code === 'ENOENT') {
                      taskInner.output = 'Create directory in ' + packageDirInner
                      await mkdir(packageDirInner, { recursive: true })
                    } else {
                      console.log('Error: ', e)
                    }
                  })
                  await download(source, ctx.outputDir)
                  taskInner.title = 'Package downloaded ' + packageNameInner
                  await unpackTar({
                    file: targetFileInner,
                    cwd: packageDirInner,
                    onentry: entry => {
                      taskInner.output = entry.path
                    }
                  })
                }
              }
            }), {
            collectErrors: false,
            concurrent: true,
            rendererOptions: { collapseSubtasks: false }
          }
          )
        }
      }
    },
    {
      title: 'Unpack package',
      enabled: (ctx) => Boolean(ctx.loadDeps),
      task: async (ctx, task): Promise<void> => {
        task.output = "Start unpacking package"
        const targetFile = resolve(ctx.outputDir, `${ctx.packageName}#${ctx.packageVersion}.tgz`);
        await tar.x({
          file: targetFile,
          strip: 1,
          cwd: resolve(ctx.outputDir, ctx.packageName),
          onentry: entry => {
            task.output = entry.path
          }
        })
      }
    },
    {
      title: "Cleanup downloads",
      task: async (ctx, task) => {
        const files = await readdir(ctx.outputDir)

        for (const file of files) {
          if (file.endsWith(".tgz")) {
            task.output = `Delete file: ${file}`
            await rm(resolve(ctx.outputDir, file))
          }
        }
        task.title = 'Clean successfully'


      }
    }

  ],
  {
    concurrent: false
  }
)


export default class Packages extends Command {

  static description = 'FHIR Packages'

  static examples = [
    '<%= config.bin %> <%= command.id %>',
  ]

  static flags = {
    packageName: Flags.string({ aliases: ['n'] }),
    packageVersion: Flags.string(),
    outputDir: Flags.directory()
  }

  public async run(): Promise<void> {
    const fuse = new Fuse(sources, { keys: ["name", "fhirVersion", "description"] });

    const { flags } = await this.parse(Packages)

    let { packageName, packageVersion, outputDir } = flags

    if (!packageName) {
      const response = await inquirer.prompt<{ packageName: string }>([{
        type: "autocomplete",
        message: 'FHIR Package',
        emptyText: "Type package name for search",
        scroll: true,
        source: (answers: unknown, input = '') => {
          return fuse.search(input).map(r => {
            return r.item
          })
        },

        name: 'packageName',
      }])
      packageName = response.packageName
    }
    if (!packageVersion) {
      const response = await inquirer.prompt<{ version: string }>([{
        name: 'version',
        message: 'Choose version',
        type: 'list',
        choices: sources.find((s: any) => s.name === packageName).versions.map((s: { version: string }) => ({ name: s.version })),
      }])
      packageVersion = response.version
    }

    if (!packageVersion) {
      const response = await inquirer.prompt<{ version: string }>([{
        name: 'version',
        message: 'Choose version',
        type: 'list',
        choices: sources.find((s: any) => s.name === packageName).versions.map((s: { version: string }) => ({ name: s.version })),
      }])
      packageVersion = response.version
    }
    if (!outputDir) {
      const response = await inquirer.prompt<{ outputDir: string }>([{
        name: 'outputDir',
        message: 'Output dir',
        type: 'input',
        validate: (input: string) => {
          if (input.trim() === "") {
            throw Error("Empty value not allowed")
          }
          return true
        }
      }])
      outputDir = response.outputDir
    }


    const packageUrl = sources.find((s: any) => s.name === packageName)?.versions.find((p: { version: string }) => p.version === packageVersion)?.url;

    if (!packageUrl) {
      this.log(colors.red(`Unknown package: ${packageName}@${packageVersion}`))
      this.exit(1)
    }
    const output = resolve(outputDir);

    try {
      await tasks.run({ outputDir: output, url: packageUrl, packageName, packageVersion })
    } catch (e) {
      console.error(e)
    }
  }
}
