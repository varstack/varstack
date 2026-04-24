export type Pretty<T> = { [K in keyof T]: T[K] } & {};

export type Awaitable<T> = T | Promise<T>;

export type Dictionary<T = string> = Record<string, T>;

// package info ----------------------------------------------------------------

export type AccessType = "public" | "restricted";

export type RegistryInfo = {
  [registry: `${string}:registry`]: string;
};

export type PublishConfig = {
  access?: AccessType;
  directory?: string;
  registry?: string;
} & RegistryInfo;

export type PackageJSON = {
  name: string;
  version: string;
  dependencies?: Dictionary<string>;
  peerDependencies?: Dictionary<string>;
  devDependencies?: Dictionary<string>;
  optionalDependencies?: Dictionary<string>;
  resolutions?: Dictionary<string>;
  private?: boolean;
  publishConfig?: PublishConfig;
};

// varstack types --------------------------------------------------------------

export type BranchConfig = {
  latest: string;
  [branch: string]: string;
};

export type ModuleConfig = {
  /** Module name or path relative to root */
  using: string;
  /** Arguments to pass to the module function */
  with?: unknown;
};

export type UserConfig = {
  /**
   * Module configuration to generate the changelog file
   * @default null
   */
  changelog?: ModuleConfig | null | false;
  /**
   * Module configuration to generate the changelog file
   * @default null
   */
  commit?: ModuleConfig | null | false;
  /**
   * Whether to publish the package as public or restricted. Defaults to "public".*
   * @default "restricted"
   */
  access: AccessType;
  /**
   * Define branch based release tags
   *
   * The key corresponds to branch name, and value to the publish tag.\
   * It must include a branch with `latest` tag.
   */
  branches: BranchConfig;
  /**
   * List of package or package patterns to ignore.\
   *
   * Supports glob patterns, e.g. `@repo/*`, `@repo/internal-*`.
   */
  ignore?: readonly string[];
};
