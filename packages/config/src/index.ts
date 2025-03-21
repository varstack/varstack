import fs from 'fs';
import path from 'path';
import { Config } from '@varstack/types';
import { version } from '../package.json';

export const baseJsonConfig = {
  $schema: `https://unpkg.com/@varstack/config@${version}/schema.json`,
  version: version,
  changelog: true,
  commit: false,
  ignore: [],
  access: 'restricted',
  branches: {
    main: 'latest',
    next: 'next',
  },
};

export function resolveConfig(cwd?: string) {
  cwd ??= process.cwd();
  const knownConfigRoots = ['.varstack', '.github/varstack'];
  const knownConfigExtensions = ['json', 'yaml', 'yml'];
  let configFilePath: string | undefined;
  let usingYAML = false;
  // locate the config file from known config roots
  for (const root of knownConfigRoots) {
    for (const ext of knownConfigExtensions) {
      const currentPath = path.join(cwd, root, `config.${ext}`);
      if (!fs.existsSync(currentPath)) continue;
      configFilePath = currentPath;
      usingYAML = /ya?ml/.test(ext);
    }
  }
  if (!configFilePath) {
    return null;
  }
}

export function parse(config: Config) {}
