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
> Version of the configuration file

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

It will use the default commit message generator. It is the same as defining

```yaml
commit:
  # name of the package or path to the file
  uses: '@varstack/cli/commit'
  # options for the generator function
  with: { 'skipCI': 'version' }
```

Or, you can only use the package name with default options

```yaml
commit: '@varstack/cli/commit'
```

You can also use your custom commit message generator. Learn more about it [here]().

## `ignore`

> `string []` - array of packages - optional\
> Packages to ignore during versioning or release

This option allows you to specify some packages that will not be published, even if they are referenced in varstack. Instead, those varstack will be skipped until they are removed from this array. It also supports glob pattern matching ie: `pkg-*`, `@example/*`

### `access`

> `restricted` | `public` - optional\
> Sets how the packages are published\
> default: `restricted`

This determines how the packages will be published as private or public package to the registry. In case of `access:public` all packages should be published with public access.

By default, npm publishes scoped npm packages as restricted - so to ensure you do not accidentally publish code publicly, we default to restricted. For most cases you will want to set this to public.

You can _override_ the behaviour from `package.json` - publishConfig option.

```json
"publishConfig": {
  "registry": "https://registry.npmjs.org/",
  "access": "public"
}
```

> Note: publishing as a private [package](https://docs.npmjs.com/creating-and-publishing-private-packages) requires paid subscription. If you do not have a subscription it will throw an error during publishing.

You can remove this option for packages that do not require publishing to any package registry.

### `branches`

> `object`\
> Maps between branches and release tag

It sets up the relation between branch names and release tags. The `varstack version` and `varstack publish` commands determines the release tag from this map and creates a pre-release version, or latest release version depending on it.

```yaml
branches:
  main: latest
  branch-name: release-tag
  canary: canary
```

> Note: one of the branches must have the tag of _latest_

[^1]: tuple: an array with two entries, first the package/module name, and second the options
