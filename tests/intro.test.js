import { describe, test, it, expect } from "vitest";

import { calculateAverage, factorial, fizzBuzz, max } from "../src/intro";

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

describe("calculateAverage", () => {
  it("should return NaN if given an empty array", () => {
    expect(calculateAverage([])).toBe(NaN);
  });

  it("should calculate the average of an array with a single element", () => {
    expect(calculateAverage([1])).toBe(1);
  });

  it("should calculate the average of an array with two elements", () => {
    expect(calculateAverage([1, 2])).toBe(1.5);
  });

  it("should calculate the average of an array with three elements", () => {
    expect(calculateAverage([1, 2, 3])).toBe(2);
  });
});

describe("factorial", () => {
  it("should return 1 if given 0", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return 1 if given 1", () => {
    expect(factorial(1)).toBe(1);
  });

  it("should return 2 if given 2", () => {
    expect(factorial(2)).toBe(2);
  });

  it("should return 6 if given 3", () => {
    expect(factorial(3)).toBe(6);
  });

  it("should return 24 if given 4", () => {
    expect(factorial(4)).toBe(24);
  });

  it("should return undefined if given a negative number", () => {
    expect(factorial(-1)).toBeUndefined();
  });
});
