import { z } from "zod";

export const ACCESS_TYPES = ["public", "restricted"] as const;

export const zUserConfig = z.object({
  access: z
    .enum(ACCESS_TYPES)
    .describe("Whether to publish the package as public or restricted")
    .default("restricted"),
  branches: z
    .record(z.string(), z.string())
    .describe("Define branch based release tags")
    .refine(
      (branches) => "latest" in branches,
      "must include a branch with 'latest' tag",
    ),
  ignore: z
    .array(z.string())
    .describe("List of package or package patterns to ignore")
    .optional()
    .default([]),
});
