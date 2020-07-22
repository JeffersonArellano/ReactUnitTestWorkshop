import React from "react";
import { configure, shallow, mount, render } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import Counter from "../207.Counter";

configure({
  adapter: new Adapter(),
});

describe("Testing Counter component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Counter />);
  });

  test("Testing increment func", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test("validate buttons func", () => {
    wrapper.find("button").first().simulate("click");
    expect(wrapper.find("h1").text()).toBe("1");

    wrapper.find("button").last().simulate("click");

    expect(wrapper.find("h1").text()).toBe("0");
  });
});
