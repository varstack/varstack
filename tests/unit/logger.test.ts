import { afterEach, beforeEach, describe, expect, it, mock } from "bun:test";
import { logger } from "@/lib/logger";

type ConsoleMethod = "log" | "error" | "warn" | "info";

describe("logger", () => {
  const msgOne = "Message One";
  const msgTwo = "Second Message";
  const reOutput = new RegExp(`${msgOne}\\s${msgTwo}$`);
  const reStringMatching = expect.stringMatching(reOutput);
  const useMockConsole = (method: ConsoleMethod) => {
    const original = console[method];
    beforeEach(() => {
      console[method] = mock(() => void 0);
    });
    afterEach(() => {
      console[method] = original;
    });
  };
  describe("log", () => {
    useMockConsole("log");
    it("should call console.log", () => {
      logger.log(msgOne, msgTwo);
      expect(console.log).toHaveBeenCalledWith(reStringMatching);
    });
  });
  describe("error", () => {
    useMockConsole("error");
    it("should call console.error", () => {
      logger.error(msgOne, msgTwo);
      expect(console.error).toHaveBeenCalledWith(reStringMatching);
    });
  });
  describe("warn", () => {
    useMockConsole("warn");
    it("should call console.warn", () => {
      logger.warn(msgOne, msgTwo);
      expect(console.warn).toHaveBeenCalledWith(reStringMatching);
    });
  });
  describe("info", () => {
    useMockConsole("info");
    it("should call console.info", () => {
      logger.info(msgOne, msgTwo);
      expect(console.info).toHaveBeenCalledWith(reStringMatching);
    });
  });
  describe("success", () => {
    useMockConsole("info");
    it("should call console.info", () => {
      logger.success(msgOne, msgTwo);
      expect(console.info).toHaveBeenCalledWith(reStringMatching);
    });
  });
});
