# 🍀 @varstack/cli ![](https://img.shields.io/badge/WIP-gold)

The core package of varstack. Helps you to manage versioning, changelog entries and release process for your packages; with a focus on managing packages in monorepos.

It is an extended form of [changesets](https://github.com/changesets/changesets) with few tweaks that makes it applicable for more general purpose use on any type of project built on top of node.js ecosystem.

## Getting started

Initialize varstack with default config ...

```bash
npx @varstack/cli init
```

Or, you can do it manually. Install the Varstack CLI tool from your preferred package manager as a dev-dependency, and run the init command.

```bash
pnpm i @varstack/cli -D
pnpm varstack init
```

Now you are all set to use varstack. To add you first varstack, run the command below...

```bash
pnpm varstack
```

It will prompt you to add details about the changes,
