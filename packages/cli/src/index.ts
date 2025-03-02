#!/usr/bin/env node
'use strict';

import { Command } from 'commander';
import { PKG_DESC, PKG_NAME, PKG_VERSION } from '~/const';

const VarstackCLI = new Command(PKG_NAME)
  .description(PKG_DESC)
  .usage('[command] [options]')
  .version(PKG_VERSION, '-v, --version')
  .helpCommand(false);

// defines init command
VarstackCLI.command('init')
  .description('initiate varstack with default config')
  .action((args, opts) => {
    // TODO
  });

// defines add command
VarstackCLI.command('add')
  .description('add a new varstack instance')
  .action((args, opts) => {
    // TODO
  });

// defines version command
VarstackCLI.command('version')
  .description('update package versions as per varstack')
  .action((args, opts) => {
    // TODO
  });

// defines publish command
VarstackCLI.command('publish')
  .description('publish updated packages')
  .action((args, opts) => {
    // TODO
  });

// parse cli arguments
VarstackCLI.parseAsync().catch(() => {
  // TODO
  process.exit(1);
});

// exit process on termination signal
for (const signal of ['SIGINT', 'SIGTERM', 'SIGQUIT', 'SIGKILL']) {
  process.on(signal, () => {
    console.log('exiting ...');
    process.stdout.write('\x1B[?25h');
    process.exit(0);
  });
}
