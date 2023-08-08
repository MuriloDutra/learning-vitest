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
    { name: "Murilo Dutra", accounts: { github: "unknown" } },
    { accounts: { twitter: "murilex" } }
  );
  // expect(merged).toEqual({
  //   name: "Murilo Dutra",
  //   accounts: {
  //     github: "unknown",
  //     twitter: "murilex",
  //   },
  // });
  expect(merged).toMatchSnapshot();
});

test("Throws errors on merging two different types", () => {
  expect(() => deepMerge(["foo", "bar"], { foo: "bar" })).toThrowError(
    "Error: Can not merge two different types"
  );
});
