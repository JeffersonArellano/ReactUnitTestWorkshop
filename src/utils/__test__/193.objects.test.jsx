import { createStore } from "../193.objects";

describe("Testing Objects", () => {
  test("Test Add object", () => {
    const store = createStore();

    store.add({
      name: "Jhoan",
      id: 1,
      country: "spain",
    });

    expect(store.get()[0]).toEqual({
      name: "Jhoan",
      id: 1,
      country: "spain",
    });
  });

  test("Test GetById object", () => {
    const store = createStore();

    store.add({
      name: "Jhoan",
      id: 1,
      country: "spain",
    });

    expect(store.getById(1)).toEqual({
      name: "Jhoan",
      id: 1,
      country: "spain",
    });

    expect(store.getById(1)).toMatchObject({
      name: "Jhoan",
      id: 1,
    });

    expect(store.getById(1)).toHaveProperty("name", "Jhoan");
  });
});
