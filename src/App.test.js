import Adapter from "enzyme-adapter-react-16";
import React from 'react';
import { shallow, configure } from 'enzyme';
import App from './App';
import Logout from "./containers/Auth/logout/Logout";
import FlightListCointainer from "./containers/flightlists/FlightListsCointainer";
import { Route } from 'react-router';
import Layout from './hoc/Layout/Layout'
import * as renderer from "react-test-renderer";

configure({ adapter: new Adapter() });
let component;
describe('Validating Router in App', () => {
  beforeEach(() => {
    component = shallow(<App/>);
});
    it('renders correctly', () => {
        expect(component).toMatchSnapshot();
    });
  

    it('should show flightList component for /flightList router', () => {
        const wrapper = shallow(<App />);
        const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
          const routeProps = route.props();
          pathMap[routeProps.path] = routeProps.path;
          return pathMap;

        }, {});  
        expect(pathMap['/flightList']).toBe('/flightList');
      });

it('should show Login component for / router', () => {
    const wrapper = shallow(<App />);
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.path;
      return pathMap;
    }, {});  
    expect(pathMap['/']).toBe('/');
  });

  it('should show logout component for /logout router', () => {
    const wrapper = shallow(<App />);
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});  
    expect(pathMap['/logout']).toBe(Logout);
  });

  it('should show Flightdetails component for /flightdetails/:passFlightId router' , () => {
    const wrapper = shallow(<App />);
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.path;
      return pathMap;
    }, {});  
    expect(pathMap['/flightdetails/:passFlightId']).toBe('/flightdetails/:passFlightId');
  });


})