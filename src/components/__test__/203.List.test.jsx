import React from "react";
import { configure, shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import List from "../203.List";

configure({
  adapter: new Adapter(),
});

describe("Testing  list component ", () => {
  test("nodes validation", () => {
    const title = "Fruits List";
    const fruits = [
      { id: 1, name: "Orange" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Strawberry" },
      { id: 4, name: "Mango" },
    ];

    const wrapper = shallow(<List title={title} list={fruits} />);

    //Exisst  h1 node
    expect(wrapper.find("h1").exists()).toBe(true);

    //Validate css class
    expect(wrapper.find("h1").hasClass("big")).toBe(true);

    //Validate child nodes length
    expect(wrapper.find("ul").children().length).toBe(4);

    //Validate text inside node
    //console.log(wrapper.find("ul").childAt(2).html());
    expect(wrapper.find("ul").childAt(2).text()).toBe("Strawberry");

    //Validate kind of node/element
    expect(wrapper.find("ul").childAt(2).type()).toBe("li");

    //Validate content
    expect(wrapper.find("ul").childAt(2).html()).toBe("<li>Strawberry</li>");
  });
});
