import { test, expect, vi } from "vitest";
import { loadConfig } from "../src/fs";

//It has to be on the top level because it'll be replaced at build time
vi.mock("fs", async (importOriginal) => {
  /**
   * It's possible to get the original module like this as well:
   * const actual = (await vi.importActual("fs")) as typeof import("fs");
   */
  const actual = (await importOriginal()) as typeof import("fs");
  return {
    ...actual,
    existsSync() {
      return true;
    },
    readFileSync() {
      return ' { "name": "mocked" } ';
    },
  };
});

test("Testing mocked fs module", async () => {
  const result = await loadConfig();
  expect(result).toEqual({ name: "mocked" });
});
