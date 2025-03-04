export type VersionType = 'major' | 'minor' | 'patch' | 'none';

export type AccessType = 'public' | 'restricted';

export type FunctionalModule = {
  /** Name of the package or path to file */
  uses: string;
  /** Parameters for the generator function */
  with: string;
};

export type Config = {
  /** Version of the configuration file */
  version?: string;
  /** Defines how the changelog would be created */
  changelog: boolean | string | FunctionalModule;
  /** Defines how the commit message would be created */
  commit: boolean | string | FunctionalModule;
  /** Sets how the packages are published */
  access: AccessType;
  /** Packages to ignore during versioning or release */
  ignore?: readonly string[] | undefined;
  /** Maps between branches and release tag */
  branches: Record<string, string>;
};

export {};
