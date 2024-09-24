import { describe, test, it, expect } from "vitest";

import { fizzBuzz, max } from "../src/intro";

// Example of testing pattern:
// describe("max", () => {
//   it("should return the first argument if it's greater", () => {
//     AAA pattern:
//     Arrange:
//     const a = 2;
//     const b = 1;

//     Act:
//     const result = max(a, b);

//     Assert:
//     expect(result).toBe(2);
//   });
// });

describe("max", () => {
  it("should return the first argument if it's greater", () => {
    expect(max(2, 1)).toBe(2);
  });

  it("should return the second argument if it's greater", () => {
    expect(max(1, 2)).toBe(2);
  });

  it("should return the first argument if arguments are equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe("fizzbuzz", () => {
  it("should return FizzBuzz if argument is divisible by three and five", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return fizz if argument is divisible by three", () => {
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it("should return buzz if argument is divisible by five", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  });

  it("should return a string version of the argument if it's not divisible by either three or five", () => {
    expect(fizzBuzz(1)).toBe("1");
  });
});
