oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g aidbox-cli
$ aidbox-cli COMMAND
running command...
$ aidbox-cli (--version)
aidbox-cli/0.0.1 darwin-arm64 node-v18.7.0
$ aidbox-cli --help [COMMAND]
USAGE
  $ aidbox-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`aidbox-cli autocomplete [SHELL]`](#aidbox-cli-autocomplete-shell)
* [`aidbox-cli commands`](#aidbox-cli-commands)
* [`aidbox-cli hello PERSON`](#aidbox-cli-hello-person)
* [`aidbox-cli hello world`](#aidbox-cli-hello-world)
* [`aidbox-cli help [COMMANDS]`](#aidbox-cli-help-commands)
* [`aidbox-cli packages [FILE]`](#aidbox-cli-packages-file)
* [`aidbox-cli plugins`](#aidbox-cli-plugins)
* [`aidbox-cli plugins:install PLUGIN...`](#aidbox-cli-pluginsinstall-plugin)
* [`aidbox-cli plugins:inspect PLUGIN...`](#aidbox-cli-pluginsinspect-plugin)
* [`aidbox-cli plugins:install PLUGIN...`](#aidbox-cli-pluginsinstall-plugin-1)
* [`aidbox-cli plugins:link PLUGIN`](#aidbox-cli-pluginslink-plugin)
* [`aidbox-cli plugins:uninstall PLUGIN...`](#aidbox-cli-pluginsuninstall-plugin)
* [`aidbox-cli plugins:uninstall PLUGIN...`](#aidbox-cli-pluginsuninstall-plugin-1)
* [`aidbox-cli plugins:uninstall PLUGIN...`](#aidbox-cli-pluginsuninstall-plugin-2)
* [`aidbox-cli plugins update`](#aidbox-cli-plugins-update)
* [`aidbox-cli update [CHANNEL]`](#aidbox-cli-update-channel)

## `aidbox-cli autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ aidbox-cli autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  (zsh|bash|powershell) Shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  display autocomplete installation instructions

EXAMPLES
  $ aidbox-cli autocomplete

  $ aidbox-cli autocomplete bash

  $ aidbox-cli autocomplete zsh

  $ aidbox-cli autocomplete powershell

  $ aidbox-cli autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v2.3.4/src/commands/autocomplete/index.ts)_

## `aidbox-cli commands`

list all the commands

```
USAGE
  $ aidbox-cli commands [--json] [-h] [--hidden] [--tree] [--columns <value> | -x] [--sort <value>] [--filter
    <value>] [--output csv|json|yaml |  | [--csv | --no-truncate]] [--no-header | ]

FLAGS
  -h, --help         Show CLI help.
  -x, --extended     show extra columns
  --columns=<value>  only show provided columns (comma-separated)
  --csv              output is csv format [alias: --output=csv]
  --filter=<value>   filter property by partial string matching, ex: name=foo
  --hidden           show hidden commands
  --no-header        hide table header from output
  --no-truncate      do not truncate output to fit screen
  --output=<option>  output in a more machine friendly format
                     <options: csv|json|yaml>
  --sort=<value>     property to sort by (prepend '-' for descending)
  --tree             show tree of commands

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  list all the commands
```

_See code: [@oclif/plugin-commands](https://github.com/oclif/plugin-commands/blob/v2.2.21/src/commands/commands.ts)_

## `aidbox-cli hello PERSON`

Say hello

```
USAGE
  $ aidbox-cli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/Aidbox/aidbox-sdk-js/blob/v0.0.1/dist/commands/hello/index.ts)_

## `aidbox-cli hello world`

Say hello world

```
USAGE
  $ aidbox-cli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ aidbox-cli hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [dist/commands/hello/world.ts](https://github.com/Aidbox/aidbox-sdk-js/blob/v0.0.1/dist/commands/hello/world.ts)_

## `aidbox-cli help [COMMANDS]`

Display help for aidbox-cli.

```
USAGE
  $ aidbox-cli help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for aidbox-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.15/src/commands/help.ts)_

## `aidbox-cli packages [FILE]`

Work with fhir packages

```
USAGE
  $ aidbox-cli packages [FILE] [-n <value>] [-f]

ARGUMENTS
  FILE  file to read

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  Work with fhir packages

EXAMPLES
  $ aidbox-cli packages
```

_See code: [dist/commands/packages/index.ts](https://github.com/Aidbox/aidbox-sdk-js/blob/v0.0.1/dist/commands/packages/index.ts)_

## `aidbox-cli plugins`

List installed plugins.

```
USAGE
  $ aidbox-cli plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ aidbox-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.1.8/src/commands/plugins/index.ts)_

## `aidbox-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ aidbox-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ aidbox-cli plugins add

EXAMPLES
  $ aidbox-cli plugins:install myplugin 

  $ aidbox-cli plugins:install https://github.com/someuser/someplugin

  $ aidbox-cli plugins:install someuser/someplugin
```

## `aidbox-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ aidbox-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ aidbox-cli plugins:inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.1.8/src/commands/plugins/inspect.ts)_

## `aidbox-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ aidbox-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ aidbox-cli plugins add

EXAMPLES
  $ aidbox-cli plugins:install myplugin 

  $ aidbox-cli plugins:install https://github.com/someuser/someplugin

  $ aidbox-cli plugins:install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.1.8/src/commands/plugins/install.ts)_

## `aidbox-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ aidbox-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ aidbox-cli plugins:link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.1.8/src/commands/plugins/link.ts)_

## `aidbox-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ aidbox-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ aidbox-cli plugins unlink
  $ aidbox-cli plugins remove
```

## `aidbox-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ aidbox-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ aidbox-cli plugins unlink
  $ aidbox-cli plugins remove
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.1.8/src/commands/plugins/uninstall.ts)_

## `aidbox-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ aidbox-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ aidbox-cli plugins unlink
  $ aidbox-cli plugins remove
```

## `aidbox-cli plugins update`

Update installed plugins.

```
USAGE
  $ aidbox-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v3.1.8/src/commands/plugins/update.ts)_

## `aidbox-cli update [CHANNEL]`

update the aidbox-cli CLI

```
USAGE
  $ aidbox-cli update [CHANNEL] [-a] [-v <value> | -i] [--force]

FLAGS
  -a, --available        Install a specific version.
  -i, --interactive      Interactively select version to install. This is ignored if a channel is provided.
  -v, --version=<value>  Install a specific version.
  --force                Force a re-download of the requested version.

DESCRIPTION
  update the aidbox-cli CLI

EXAMPLES
  Update to the stable channel:

    $ aidbox-cli update stable

  Update to a specific version:

    $ aidbox-cli update --version 1.0.0

  Interactively select version:

    $ aidbox-cli update --interactive

  See available versions:

    $ aidbox-cli update --available
```

_See code: [@oclif/plugin-update](https://github.com/oclif/plugin-update/blob/v3.1.28/src/commands/update.ts)_
<!-- commandsstop -->
