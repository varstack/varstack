import { defineConfig } from "tsdown";
import { generateSchemaJson } from "@/scripts/generate-schema-json";

export default defineConfig((opts) => ({
  ...opts,
  entry: ["src/bin.ts"],
  clean: true,
  outExtensions: () => ({ js: ".js", dts: ".ts" }),
  onSuccess: async (bundle) => {
    generateSchemaJson(bundle.cwd);
  },
}));
