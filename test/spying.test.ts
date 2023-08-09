import { test, expect, vi } from "vitest";
import { greeting } from "../src/greeting";

test("greeting - with mock.calls", () => {
  const spy = vi.spyOn(console, "log");

  greeting("Murilo");
  greeting("Alves");

  expect(spy).toBeCalledTimes(2);
  expect(spy.mock.calls[0][0]).toBe("Hello, Murilo!");
  expect(spy.mock.calls[1][0]).toBe("Hello, Alves!");
});

test("greeting - with mockReset", () => {
  const spy = vi.spyOn(console, "log");

  greeting("Murilo");
  expect(spy).toBeCalledTimes(1);
  expect(spy).toBeCalledWith("Hello, Murilo!");
  expect(spy).toMatchInlineSnapshot(`
    [MockFunction log] {
      "calls": [
        [
          "Hello, Murilo!",
        ],
      ],
      "results": [
        {
          "type": "return",
          "value": undefined,
        },
      ],
    }
  `);

  spy.mockReset();

  greeting("Alves");
  expect(spy).toBeCalledTimes(1);
  expect(spy).toBeCalledWith("Hello, Alves!");

  expect(spy).toMatchInlineSnapshot(`
    [MockFunction log] {
      "calls": [
        [
          "Hello, Alves!",
        ],
      ],
      "results": [
        {
          "type": "return",
          "value": undefined,
        },
      ],
    }
  `);
});
