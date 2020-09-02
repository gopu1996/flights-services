import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from './App'

configure({ adapter: new Adapter() });

let wrapper
describe("Rendring <App /> without crashing", () => {
it('check toolbar app.js exist or not', () => { 
  const wrapper =shallow(<App />)
  expect(wrapper.exists()).toBe(true)
  });
})