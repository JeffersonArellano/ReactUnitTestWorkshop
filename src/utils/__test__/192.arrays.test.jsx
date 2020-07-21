import { createStore } from "../192.arrays";

describe("Arrays Test", () => {
  test("Arrays Add Fruit", () => {
    const store = createStore();

    store.addFruit("Apple");

    expect(store.getFruits()).toStrictEqual(["Apple"]);
  });

  test("Arrays Add 2 Fruit", () => {
    const store = createStore();

    store.addFruit("Apple");
    store.addFruit("Mango");

    expect(store.getFruits()).toStrictEqual(["Apple", "Mango"]);
  });

  test("Arrays Contains Expecific Fruit", () => {
    const store = createStore();

    store.addFruit("Orange");
    store.addFruit("Pineapple");

    expect(store.getFruits()).toContain("Pineapple");
    expect(store.getFruits()).not.toContain("Apple");
  });

  test("Arrays length Fruit", () => {
    const store = createStore();

    store.addFruit("Orange");
    store.addFruit("Pineapple");

    expect(store.getFruits()).toHaveLength(2);
  });

  test("Arrays Adding Fruit object", () => {
    const store = createStore();

    store.addFruit({ name: "Orange", price: 10 });

    expect(store.getFruits()).toContainEqual({ name: "Orange", price: 10 });
  });
});
