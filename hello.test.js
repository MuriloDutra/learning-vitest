import { test, expect } from "vitest";

function sumValues(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

test("sumValues returns 2", () => {
  expect(sumValues(1, 1)).toEqual(2);
});

test("sumValues doesn't return 2", () => {
  expect(sumValues(1, 2)).not.toEqual(2);
});

test("sumValues returns 6", () => {
  expect(sumValues(1, 2, 3)).toEqual(6);
});

test("10 numbers", () => {
  expect(sumValues(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toEqual(55);
});

test("1 number", () => {
  expect(sumValues(100)).toEqual(100);
});

test("0 number", () => {
  expect(sumValues(0)).toEqual(0);
});
