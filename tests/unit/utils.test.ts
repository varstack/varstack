import { describe, expect, it } from "bun:test";
import { tryCatch } from "@/lib/utils";

describe("utils", () => {
  describe("tryCatch", () => {
    it("should return value for resolved promise", async () => {
      const input = () => Promise.resolve(42);
      const [value, error] = await tryCatch(input);
      expect(value).toBe(42);
      expect(error).toBeUndefined();
    });
    it("should return error for rejected promise", async () => {
      const failure = new Error("failure");
      const input = () => Promise.reject(failure);
      const [value, error] = await tryCatch(input);
      expect(value).toBeNull();
      expect(error).toBe(failure);
    });
    it("should handle sync function", async () => {
      const [value, error] = await tryCatch(() => 7);
      expect(value).toBe(7);
      expect(error).toBeUndefined();
    });
    it("should handle async function", async () => {
      const fn = async () => {
        const val = await Promise.resolve(99);
        return val;
      };
      const [value, error] = await tryCatch(fn);
      expect(value).toBe(99);
      expect(error).toBeUndefined();
    });
    it("should handle thrown error", async () => {
      const failure = new Error("boom");
      const [value, error] = await tryCatch(() => {
        throw failure;
      });
      expect(value).toBeNull();
      expect(error).toBe(failure);
    });
  });
});
