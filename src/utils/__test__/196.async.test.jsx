import { getDataCallback } from "../196.async";

describe("Testing asynchronics calls", () => {
  test("Callback test", (done) => {
    getDataCallback((name) => {
      expect(name).toBe("Lupe");
      done();
    });
  });
});
