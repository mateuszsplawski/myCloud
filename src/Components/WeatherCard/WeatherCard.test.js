import React from "react";
import { shallow } from "enzyme";
import WeatherCard from "./WeatherCard";
import { expect } from "chai";

describe("<WeatherCard/>", () => {
  it("renders text", () => {
    const wrapper = shallow(
      <WeatherCard list={undefined} cityData={undefined} />
    );
    expect(wrapper.find("h1").text()).to.be(undefined);
  });
});
