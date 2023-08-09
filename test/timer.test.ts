import { test, expect, vi, beforeEach } from "vitest";

function warnLater(message: string) {
  setTimeout(() => {
    console.log(message);
  }, 2000);
}

beforeEach(() => {
  vi.useFakeTimers();
});

test("warnLater", async () => {
  const logSpy = vi.spyOn(console, "log");
  warnLater("2 seconds passed");

  expect(logSpy).to.not.toBeCalled();

  vi.advanceTimersToNextTimer(); //You can use this as well: vi.advanceTimersByTime(2000);

  expect(logSpy).toBeCalledWith("2 seconds passed");
});
