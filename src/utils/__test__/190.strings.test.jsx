import { greeting, getId, goodbye } from "../190.strings";

describe("Strings Test", () => {
  const greetingResult = greeting("michael");
  const id = getId();
  const bye = goodbye();

  test("Testing Geeting Function", () => {
    expect(greetingResult).toMatch("Hello I'm");
  });

  test("Testing Goodbye Function", () => {
    expect(bye).toMatch("Bye");
  });

  test("Testing GetId Function", () => {
    expect(id).toMatch(/\d{2}-\d{3}/);
  });
});
