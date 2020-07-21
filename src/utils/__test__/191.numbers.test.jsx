import {
  sum,
  subtraction,
  division,
  multiplication,
  getRandomNum,
} from "../191.numbers";

describe("Numbers test", () => {
  const sumResult = sum(1, 2);
  const subResult = subtraction(1, 2);
  const diviResult = division(1, 2);
  const multiResult = multiplication(1, 2);
  const randomResult = getRandomNum(300, 500);

  test("Sum Test", () => {
    expect(sumResult).toBe(3);
  });

  test("Subtraction Test", () => {
    expect(subResult).toBe(-1);
  });

  test("Division Test", () => {
    expect(diviResult).toBe(0.5);
  });

  test("multiplication Test", () => {
    expect(multiResult).toBe(2);
  });

  test("Random Test", () => {
    expect(randomResult).toBeGreaterThanOrEqual(300);
    expect(randomResult).toBeLessThan(600);
    expect(randomResult).toBeLessThanOrEqual(500);
  });
});
