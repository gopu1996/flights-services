import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import FlightDetailsCointainer from './FlightDetailsCointainer'
import FlightDetailsComponent from "../../components/flightdetails/FlightDetails";
configure({ adapter: new Adapter() });
const mockStore = configureMockStore()
let wrapper
describe("<FlightDetailsCointer /> is show ", () => {
let component;
  let store;
  let value;

  beforeEach(() => {
    const initialState = {
        authReducer: { isAuthenticated: value , error : value , userType: value , seatLists: value , passengerDetails:value , flight:value}
    };
     store = mockStore(initialState);
    component = shallow(<Provider store={store}><FlightDetailsCointainer /></Provider>);
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
});

it("should receiving a props is Authenticated , error , UserType , seatLists , passengerDetails , flight from mapStateToProps", () => {
   
        expect(component.props().isAuthenticated).toBe(value);
        expect(component.props().error).toBe(value);
        expect(component.props().userType).toBe(value);
        expect(component.props().seatLists).toBe(value);
        expect(component.props().passengerDetails).toBe(value);
        expect(component.props().flight).toBe(value);
    });
   
it('check FlightDetailsComponent Componenet with isAuth props', () => { 
    const wrapper = shallow(<Provider store={store}><FlightDetailsComponent /></Provider>)
    wrapper.setProps({isAuth:true});
    expect(wrapper.find(FlightDetailsComponent)).toHaveLength(1);

  });

  it('check FlightDetailsComponent Componenet with passengerDetails props', () => { 
    const wrapper = shallow(<Provider store={store}><FlightDetailsComponent /></Provider>)
    wrapper.setProps({passengerDetails:"Gopu"});
    expect(wrapper.find(FlightDetailsComponent)).toHaveLength(1);
  });

  it('check FlightDetailsComponent Componenet with isSeatMapEnabled props', () => { 
    const wrapper = shallow(<Provider store={store}><FlightDetailsComponent /></Provider>)
    wrapper.setProps({isSeatMapEnabled:true});
    expect(wrapper.find(FlightDetailsComponent)).toHaveLength(1);
  });

  it('check FlightDetailsComponent Componenet with filterPassengerHandler props', () => { 
    const wrapper = shallow(<Provider store={store}><FlightDetailsComponent /></Provider>)
    wrapper.setProps({filterPassengerHandler:"Gopu"});
    expect(wrapper.find(FlightDetailsComponent)).toHaveLength(1);
  });

  it('check FlightDetailsComponent Componenet with checkedInPassengerDetails props', () => { 
    const wrapper = shallow(<Provider store={store}><FlightDetailsComponent /></Provider>)
    wrapper.setProps({checkedInPassengerDetails:true});
    expect(wrapper.find(FlightDetailsComponent)).toHaveLength(1);
  });

  it('check FlightDetailsComponent Componenet with inFlightPassengerDetails props', () => { 
    const wrapper = shallow(<Provider store={store}><FlightDetailsComponent /></Provider>)
    wrapper.setProps({inFlightPassengerDetails:true});
    expect(wrapper.find(FlightDetailsComponent)).toHaveLength(1);
  });

  
  it('check FlightDetailsComponent Componenet with passengerFlightId props', () => { 
    const wrapper = shallow(<Provider store={store}><FlightDetailsComponent /></Provider>)
    wrapper.setProps({passengerFlightId:"6e"});
    expect(wrapper.find(FlightDetailsComponent)).toHaveLength(1);
  });

   
  it('check FlightDetailsComponent Componenet with checkedInPassengerDetailsHandler props', () => { 
    const wrapper = shallow(<Provider store={store}><FlightDetailsComponent /></Provider>)
    wrapper.setProps({checkedInPassengerDetailsHandler:"6e"});
    expect(wrapper.find(FlightDetailsComponent)).toHaveLength(1);
  });

  it('check FlightDetailsComponent Componenet with inFlightPassengerDetailsHandler props', () => { 
    const wrapper = shallow(<Provider store={store}><FlightDetailsComponent /></Provider>)
    wrapper.setProps({inFlightPassengerDetailsHandler: true});
    expect(wrapper.find(FlightDetailsComponent)).toHaveLength(1);
  });

  it('check FlightDetailsComponent Componenet with checkInPassengerHandler props', () => { 
    const wrapper = shallow(<Provider store={store}><FlightDetailsComponent /></Provider>)
    wrapper.setProps({checkInPassengerHandler:true});
    expect(wrapper.find(FlightDetailsComponent)).toHaveLength(1);
  });

  it('check FlightDetailsComponent Componenet with offloadPassengerHandler props', () => { 
    const wrapper = shallow(<Provider store={store}><FlightDetailsComponent /></Provider>)
    wrapper.setProps({offloadPassengerHandler: true});
    expect(wrapper.find(FlightDetailsComponent)).toHaveLength(1);
  });

  it('check FlightDetailsComponent Componenet with seatHandler props', () => { 
    const wrapper = shallow(<Provider store={store}><FlightDetailsComponent /></Provider>)
    wrapper.setProps({seatHandler: true});
    expect(wrapper.find(FlightDetailsComponent)).toHaveLength(1);
  });

  it('check FlightDetailsComponent Componenet with handleUpdateServicesMeal props', () => { 
    const wrapper = shallow(<Provider store={store}><FlightDetailsComponent /></Provider>)
    wrapper.setProps({handleUpdateServicesMeal: true});
    expect(wrapper.find(FlightDetailsComponent)).toHaveLength(1);
  });

  it('check FlightDetailsComponent Componenet with handleUpdateServicesAncillary props', () => { 
    const wrapper = shallow(<Provider store={store}><FlightDetailsComponent /></Provider>)
    wrapper.setProps({handleUpdateServicesAncillary: true});
    expect(wrapper.find(FlightDetailsComponent)).toHaveLength(1);
  });

  
  it('check FlightDetailsComponent Componenet with handleUpdateServicesShop props', () => { 
    const wrapper = shallow(<Provider store={store}><FlightDetailsComponent /></Provider>)
    wrapper.setProps({handleUpdateServicesShop: true});
    expect(wrapper.find(FlightDetailsComponent)).toHaveLength(1);
  });

  it('check FlightDetailsComponent Componenet with handleUpdatePassengerPersonalInfo props', () => { 
    const wrapper = shallow(<Provider store={store}><FlightDetailsComponent /></Provider>)
    wrapper.setProps({handleUpdatePassengerPersonalInfo: true});
    expect(wrapper.find(FlightDetailsComponent)).toHaveLength(1);
  });

  it('check FlightDetailsComponent Componenet with handleAddPassengerInfo props', () => { 
    const wrapper = shallow(<Provider store={store}><FlightDetailsComponent /></Provider>)
    wrapper.setProps({handleAddPassengerInfo: true});
    expect(wrapper.find(FlightDetailsComponent)).toHaveLength(1);
  });

it('check toolbar compnent exist or not', () => { 
        const wrapper =shallow(<Provider store={store}><FlightDetailsComponent /></Provider>)
        expect(wrapper.exists()).toBe(true)
  });


})