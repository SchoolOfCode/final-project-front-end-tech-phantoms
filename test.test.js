import { getSum } from "./sum.js";

test("Given a number, function should return double the number", () => {
  const actual = getSum(2);
  const expected = 4;

  expect(actual).toEqual(expected);
});
