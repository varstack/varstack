import { z } from "zod";

export const accessTypes = ["public", "restricted"] as const;

export const zModuleConfig = z.object({
  using: z
    .string("Must use a valid module name or path")
    .trim()
    .min(1, "Module path is required")
    .describe("Module name or path relative to root"),
  with: z
    .unknown()
    .describe("Arguments to pass to the module function")
    .optional(),
});

export const zUserConfig = z.object({
  changelog: zModuleConfig
    .describe("Module configuration to generate the changelog file")
    .or(z.null())
    .or(z.literal(false))
    .default(null),
  commit: zModuleConfig
    .describe("Module configuration to create commit after versioning")
    .or(z.null())
    .or(z.literal(false))
    .default(false),
  access: z
    .enum(accessTypes)
    .describe("Whether to publish the package as public or restricted")
    .default("restricted"),
  branches: z
    .record(z.string(), z.string())
    .describe("Define branch based release tags")
    .refine((b) => "latest" in b, "must include a branch with 'latest' tag"),
  ignore: z
    .array(z.string())
    .describe("List of package or package patterns to ignore")
    .optional()
    .default([]),
});
