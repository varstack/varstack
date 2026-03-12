#!/usr/bin/env node

import { program } from "commander";
import { CLI } from "@/const.js";
import { logger } from "@/lib/logger.js";
import { pc } from "@/lib/picocolors.js";

program
  .name(CLI.name)
  .description(CLI.description)
  .version(CLI.version)
  .helpCommand(false);

program.parse(process.argv);

// exit process on termination
for (const signal of ["SIGINT", "SIGTERM", "SIGQUIT", "SIGKILL"]) {
  process.on(signal, () => {
    logger.log(pc.yellow`exiting ...`);
    process.stdout.write("\x1B[?25h");
    process.exit();
  });
}
