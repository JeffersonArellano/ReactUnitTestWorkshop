import {
  getDataCallback,
  getDataPromise,
  getDataPromiseError,
  getUsers,
} from "../196.async";

describe("Testing asynchronics calls", () => {
  test("Callback test", (done) => {
    getDataCallback((name) => {
      expect(name).toBe("Lupe");
      done();
    });
  });

  test("Promise test", (done) => {
    getDataPromise()
      .then((name) => {
        expect(name).toBe("Lupita");
        done();
      })
      .catch(() => {});
  });

  test("Promise test with expect", () => {
    return expect(getDataPromise()).resolves.toBe("Lupita");
  });

  test("Promise test reject", (done) => {
    getDataPromiseError()
      .then((name) => {})
      .catch((error) => {
        expect(error).toBe("Error");
        done();
      });
  });

  test("Promise test reject with expect", () => {
    return expect(getDataPromiseError()).rejects.toBe("Error");
  });

  test("Promise test resolve async Await", async () => {
    const name = await getDataPromise();
    expect(name).toBe("Lupita");
  });

  test("Promise test reject async Await", async () => {
    try {
      const name = await getDataPromiseError();
      expect(name).toBe("Lupita");
    } catch (error) {
      expect(error).toBe("Error");
    }
  });

  test("Testing promise with HTTP ", async () => {
    const users = await getUsers();

    expect(users).toHaveProperty("username");
    expect(users).toHaveProperty("id");
    expect(users).toHaveProperty("email");
  });
});
