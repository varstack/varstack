import fs from "node:fs/promises";
import path from "node:path";
import { toJSONSchema } from "zod";
import { zUserConfig } from "@/features/config";

export async function generateSchemaJson(cwd: string) {
  try {
    const schema = toJSONSchema(zUserConfig);
    const schemaJsonPath = path.join(cwd, "schema.json");
    await fs.writeFile(schemaJsonPath, JSON.stringify(schema));
  } catch {}
}
