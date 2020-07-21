const getValue = (exp) => {
  switch (exp) {
    case "defined":
      return {};

    case "undefined":
      return undefined;

    case "true":
      return true;

    case "false":
      return false;

    default:
      return null;
  }
};

describe("Testing null,  undefined, booleans values", () => {
  test("Validate existing and validad value", () => {
    expect(getValue("defined")).toBeDefined();
  });

  test("Validate null value", () => {
    expect(getValue()).toBeNull();
  });

  test("Validate true value", () => {
    expect(getValue("true")).toBeTruthy();
  });

  test("Validate false value", () => {
    expect(getValue("false")).toBeFalsy();
  });

  test("Validate Nan value", () => {
    expect(NaN).toBeNaN();
  });
});
