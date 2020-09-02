import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationIteams from "./NavigationIteams";
import NavigationIteam from "./NavigationIteam/NavigationIteam";

configure({ adapter: new Adapter() });
let wrapper;
describe("<NavigationIteams />", () => {
  it('renders correctly', () => {
    wrapper = shallow(<NavigationIteams />);
    expect(wrapper).toMatchSnapshot();
});
  it("should render one <NavigationItem /> elements if not authenticated", () => {
    wrapper = shallow(<NavigationIteams />);
    expect(wrapper.find(NavigationIteam)).toHaveLength(1);
  });
  it("should render one <NavigationItem /> elements if authenticated", () => {
    // wrapper = shallow(<NavigationItems isAuthenticated />);
    wrapper.setProps({ isAuth: true });
    expect(wrapper.find(NavigationIteam)).toHaveLength(1);
  });

  it("should render one <NavigationItem /> element with Logout label if authenticated", () => {
    wrapper.setProps({ isAuth: true });
    expect(
      wrapper.contains(<NavigationIteam link="/logout">LOGOUT</NavigationIteam>)
    ).toEqual(true);
  });
});
