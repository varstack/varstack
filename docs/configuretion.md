# Configuration

Varstack comes with a minimal config option. Mostly you do not need to change the default configuration as it follows common community standards and patterns. You can configure varstack via one of the following files.

- `.varstack/config.yaml`
- `.github/varstack/config.yaml`
- `.gitlab/varstack/config.yaml`

You can use both `json`, or `yaml` for configuring varstack.

## Default configuration file

By default when you run `varstack init` it will create a configuration file as follows...

```yaml
version: 0.0.1
changelog: true
commit: false
fixed: []
linked: []
ignore: []
access: restricted
branches:
  main: latest
  next: canary
```

> NOTE: the `linked`, `fixed`, and `ignore` options are only for behaviour in monorepos.

## Options

Here is the detailed information about the options

### `version`

> `string` - optional\
> Version fo the configuration file

In future the configuration options may change, by defining a specified version we can resolve the configuration as intended. It follows the version of [@varstack/config]() package. If no version is provided it will follow the latest version of the config.

We recommend that you use the version to avoid any conflict in future.

### `changelog`

> `boolean`, `tuple` [^1], or `module`\
> Defines how the changelog would be created

This option is to set how to changelog for the packages that should be generated. If it is `false` no changelog should be generated.

### `commit`

> `boolean`, `tuple` [^1], or `module`\
> Defines how the commit message would be created

If it is enabled `varstack add` and `varstack version` commands will commit the changed files using git. By default, we do not commit, and leave it at the hands of the user. Here are some examples of the uses ...

```yaml
commit: true
```

It will use the default commit message generator. It is same as defining

```yaml
commit:
  # name of the package or path to the file
  uses: '@changesets/cli/commit'
  # options for the generator function
  opts: { 'skipCI': 'version' }
```

Or, you can only use the package name with default options

```yaml
commit: '@changesets/cli/commit'
```

You can also use your custom commit message generator. Learn more about it [here]().

[^1]: tuple: an array with two entries, first the package/module name, and second the options
