import { defineConfig } from "tsdown";

export default defineConfig((opts) => ({
  ...opts,
  entry: ["src/bin.ts"],
  clean: true,
  outExtensions: () => ({ js: ".js", dts: ".ts" }),
}));
