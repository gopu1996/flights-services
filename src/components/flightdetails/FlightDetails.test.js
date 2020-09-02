import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import UpdatePassengerDetails from "./updatePassenger/UpdatePassengerDetails";
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import AddPassenger from "./AddPassenger/AddPassenger";
import SeatTypes from "./SeatType/SeatType";
import FlightDetails from './FlightDetails'
import AdditionalServices from './AdditionalServices/AdditionalServices'

configure({ adapter: new Adapter() });
const mockStore = configureMockStore()
let wrapper
describe("<FlightDetails /> is show ", () => {
let component;
  let store;
  let value;

  beforeEach(() => {
    const initialState = {
        authReducer: { isAuthenticated: value , flight : value , userType: value , seatList: value}
    };
   
    store = mockStore(initialState);
    component = shallow(<Provider store={store}><FlightDetails/></Provider>);
  });

it('renders correctly', () => {
    expect(component).toMatchSnapshot();
   });
   
it("should receiving a props is Authenticated , flight , UserType  , seatList from mapStateToProps", () => {

        expect(component.props().isAuthenticated).toBe(value);
        expect(component.props().flight).toBe(value);
        expect(component.props().userType).toBe(value);
        expect(component.props().seatList).toBe(value);
    });
    
    
  it('check UpdatePassengerDetails Componenet with isUserName props', () => { 
    const wrapper =shallow(<Provider store={store}><UpdatePassengerDetails  /></Provider>)
    wrapper.setProps({flightId:"6e"});
    expect(wrapper.find(UpdatePassengerDetails)).toHaveLength(1);
  });

  it('check UpdatePassengerDetails Componenet with passenger props', () => { 
    const wrapper =shallow(<Provider store={store}><UpdatePassengerDetails  /></Provider>)
    wrapper.setProps({passenger:"Airstaff"});
    expect(wrapper.find(UpdatePassengerDetails)).toHaveLength(1);
  });



it('check UpdatePassengerDetails compnent exist or not', () => { 
        const wrapper =shallow(<Provider store={store}><UpdatePassengerDetails  /></Provider>)
        expect(wrapper.exists()).toBe(true)
  });

  
it('check AddPassenger compnent exist or not', () => { 
    const wrapper =shallow(<Provider store={store}><AddPassenger  /></Provider>)
    expect(wrapper.exists()).toBe(true)
});

it('check SeatTypes compnent exist or not', () => { 
    const wrapper =shallow(<Provider store={store}><SeatTypes  /></Provider>)
    expect(wrapper.exists()).toBe(true)
});

it('check AdditionalServices compnent exist or not', () => { 
    const wrapper =shallow(<AdditionalServices />)
    expect(wrapper.exists()).toBe(true)
});

})