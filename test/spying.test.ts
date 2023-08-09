import { test, expect, vi } from "vitest";
import { greeting } from "../src/greeting";

test("greeting", () => {
  const spy = vi.spyOn(console, "log");
  greeting("Murilo");

  expect(spy).toBeCalledWith("Hello, Murilo!");
  expect(spy).toBeCalledTimes(1);
});
