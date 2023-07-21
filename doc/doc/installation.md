

## Install as a package
You can install @aidbox/sdk-r4 via the terminal

::: code-group
```shell [npm]
npm install -D @aidbox/sdk-r4
```

```shell [pnpm]
pnpm add -D @aidbox/sdk-r4
```

```shell [yarn]
yarn add -D @aidbox/sdk-r4
```
:::

## Advanced: Generation from the Configuration Project

### Step 1: Install Aidbox CLI
To generate SDK by your zen-project config you have to install zen-cli. This command will install the latest version of the zen-cli on your system. The -g flag tells npm to install the package globally, making it available to all projects on your system.

```shell
npm install -g @aidbox/zen-cli
```

### Step 2: Install Zen dependencies
In the case you do not have zen-project configured - follow the documentation.

After configuration of zen-package you have to install dependencies (e.g hl7-fhir-r4-core) by typing the following into a terminal window

```shell
zen-cli zen pull-deps
```

This command will download FHIR Definitions All the value sets, profiles, etc. defined as part of the FHIR specification, and the included implementation guides depends on added packages.

### Step 3: Generate SDK package
In terminal move to your zen-project folder and generate SDK by run the following

```shell
zen-cli sdk
```

After running the zen-cli get-sdk command, you should be able to find the aidbox-javascript-sdk.tgz npm package in the root directory of your project. This archive is generated based on your zen-project and includes all types of resources.
