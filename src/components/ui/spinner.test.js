import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Spinner from './Spinner'
configure({ adapter: new Adapter() });
describe("<Spinner /> is show ", () => {
it('should show correct text', () => {
    const wrapper = shallow(<Spinner />);
    expect(wrapper.text().includes('Loading...')).toBe(true);
  });
})