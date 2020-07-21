import React from "react";
import { configure, shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({
  adapter: new Adapter(),
});

describe("Testing for App component", () => {
  test("Testing component rendering", () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.html());

    expect(wrapper.find("h1").html()).toBe("<h1>Working</h1>");
    expect(wrapper.find("h1")).toHaveLength(1);
    //expect(wrapper.html()).toBe('<div class="App">working</div>');
  });
});
