import React from "react";
import { configure, shallow, mount, render } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import List from "../203.List";

configure({
  adapter: new Adapter(),
});

describe("Testing  list component ", () => {
  const title = "Fruits List";
  const fruits = [
    { id: 1, name: "Orange" },
    { id: 2, name: "Apple" },
    { id: 3, name: "Strawberry" },
    { id: 4, name: "Mango" },
  ];

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<List title={title} list={fruits} />);
  });

  test("nodes validation", () => {
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

    //Validate html content
    expect(wrapper.find("ul").childAt(2).html()).toBe("<li>Strawberry</li>");
  });

  test("Validation on props update", () => {
    //validate items quantity
    expect(wrapper.find("li").length).toBe(4);

    wrapper.setProps({
      list: [{ id: 5, name: "Kiwi" }],
    });

    //validate items quantity
    expect(wrapper.find("li").length).toBe(1);

    wrapper.setProps({
      title: "Title changed",
    });

    expect(wrapper.find(".big").text()).toBe("Title changed");
  });

  test("validate snapshot match", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
