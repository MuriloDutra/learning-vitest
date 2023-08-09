import { expect, test } from "vitest";
import { deepMerge } from "../src";

test("Shallow merge", () => {
  const merged = deepMerge({ name: "Murilo Dutra" }, { github: "murilodutra" });
  expect(merged).toEqual({ name: "Murilo Dutra", github: "murilodutra" });
});

test("Shallow merge with overlaps", () => {
  const merged = deepMerge(
    { name: "Murilo Dutra", github: "unknown" },
    { github: "murilodutra", twitter: "murilex" }
  );
  expect(merged).toEqual({
    name: "Murilo Dutra",
    github: "murilodutra",
    twitter: "murilex",
  });
});

test("Shallow merge with arrays", () => {
  const merged = deepMerge(["vue", "react"], ["svelte", "solid"]);
  expect(merged).toEqual(["vue", "react", "svelte", "solid"]);
});

test("Deep merge with overlaps", () => {
  const merged = deepMerge(
    {
      name: "Murilo Dutra",
      accounts: { github: "unknown" },
      languages: ["javascript"],
    },
    {
      accounts: { twitter: "murilex" },
      languages: ["typescript", "vue", "react"],
    }
  );
  expect(merged).toMatchSnapshot();
});

test("Deep merge - inlineSnapshot", () => {
  const merged = deepMerge(
    {
      name: "Murilo Dutra",
      accounts: { github: "unknown" },
      languages: ["javascript"],
    },
    {
      accounts: { twitter: "murilex" },
      languages: ["angular", "vue", "react"],
    }
  );
  expect(merged).toMatchInlineSnapshot(`
    {
      "accounts": {
        "github": "unknown",
        "twitter": "murilex",
      },
      "languages": [
        "javascript",
        "angular",
        "vue",
        "react",
      ],
      "name": "Murilo Dutra",
    }
  `);
});

test("Throws errors on merging two different types", () => {
  expect(() => deepMerge(["foo", "bar"], { foo: "bar" })).toThrowError(
    "Error: Can not merge two different types"
  );
});
