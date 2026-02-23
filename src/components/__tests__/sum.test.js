import { Sum } from "../Sum";

test("Sum function should calculate sum of two numbers", () => {
  const result = Sum(5, 6);

  // Assertion
  expect(result).toBe(11);
});
