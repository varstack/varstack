# Getting started with varstack

Varstack is built to make the release process easier for contributors and maintainers. Each varstack contains two key pieces of information: a version type identifier (follows [semver](https://semver.org/), ie. major, minor, or patch), and the information about the changes made to be added to the changelog.

## Installation

Varstack CLI comes with an initialization command to get you started with a new varstack config...

```bash
npx @varstack/cli init
```

Or, you can do it manually. Install the Varstack CLI tool from your preferred package manager as a dev-dependency, and run the init command.

```bash
pnpm i @varstack/cli -D
pnpm varstack init
```

It will add a varstack configuration file at the 📂 root of the repo, or `.github` directory if available. You can learn more about configuration 📄 [here]()

## Adding a varstack

```bash
pnpm varstack
```

It will prompt you to choose the packages you want to update with version type and change info. For detailed information about the var stack file, visit 📄 [this]() doc.

> Note: you can also run `pnpm varstack add` if you want to, but running changesets without the add command works as well.

## Versioning & publishing

Once you've decided to do a release, you can run the following command

```bash
pnpm varstack version
```

This will go through the varstack files, and update the packages mentioned in that varstack to appropriate semver version. It will also write the information to the changelog files (_if needed_) of respective packages.

Afterwards you are ready to do a release, but before this step make sure all the changelog entries and version changes for the packages are correct and in order. There after run the following command to publish the packages

```bash
pnpm varstack publish
```
