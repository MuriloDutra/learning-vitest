import { test, expect } from "vitest";
import { getPostBody } from "../src/network";

test("should fetch", async () => {
  const result = await getPostBody(1);
  expect(result).toMatchInlineSnapshot('"Mocked! Request id: 1"');
});
