import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AdditionalServices from "./AdditionalServices/AdditionalServices";
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import FlightList from './FlightList'


configure({ adapter: new Adapter() });
const mockStore = configureMockStore()
let wrapper
describe("<FlightList /> is show ", () => {
let component;
  let store;
  let value;

  beforeEach(() => {
    const initialState = {
        authReducer: { flight: value , loading : value , userType: value , error: value , seatList:value}
    };
    store = mockStore(initialState);
    component = shallow(<Provider store={store}><FlightList/></Provider>);
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
});
it("should receiving a props is flight , loading , UserType , error , seatList from mapStateToProps", () => {
        expect(component.props().flight).toBe(value);
        expect(component.props().loading).toBe(value);
        expect(component.props().userType).toBe(value);
        expect(component.props().error).toBe(value);
        expect(component.props().seatList).toBe(value);
    });
    
        
it('check AdditionalServices Component with passenger props', () => { 
  const wrapper =shallow(<Provider store={store}><AdditionalServices /></Provider>) 
  wrapper.setProps({passenger:"gopu"});
    expect(wrapper.find(AdditionalServices)).toHaveLength(1);

  });

  it('check AdditionalServices Componenet with serviceName props', () => { 
    const wrapper =shallow(<Provider store={store}><AdditionalServices /></Provider>)
    wrapper.setProps({serviceName:"shop"});
    expect(wrapper.find(AdditionalServices)).toHaveLength(1);
  });

  it('check AdditionalServices Componenet with flightId props', () => { 
    const wrapper =shallow(<Provider store={store}><AdditionalServices /></Provider>)
    wrapper.setProps({flightId:"Airstaff"});
    expect(wrapper.find(AdditionalServices)).toHaveLength(1);
  });

  it('check AdditionalServices compnent exist or not', () => { 
    const wrapper =shallow(<AdditionalServices />)
    expect(wrapper.exists()).toBe(true)
});

}) 