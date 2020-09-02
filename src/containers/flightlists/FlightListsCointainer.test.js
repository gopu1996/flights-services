import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import FlightListsCointainer from './FlightListsCointainer'
import FlightLists from "../../components/flightList/FlightList";
configure({ adapter: new Adapter() });
const mockStore = configureMockStore()
let wrapper
describe("<FlightListsCointainer /> is show ", () => {
let component;
  let store;
  let value;

  beforeEach(() => {
    const initialState = {
        authReducer: { isAuthenticated: value , error : value , loading: value , flightLists: value}
    };
     store = mockStore(initialState);
    component = shallow(<Provider store={store}><FlightListsCointainer /></Provider>);
  });
  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
});

it("should receiving a props is Authenticated , error , loading , flightLists from mapStateToProps", () => {
   
        expect(component.props().isAuthenticated).toBe(value);
        expect(component.props().error).toBe(value);
        expect(component.props().loading).toBe(value);
        expect(component.props().flightLists).toBe(value);
    });

    it('check FlightLists Componenet with isAuth props', () => { 
        const wrapper = shallow(<Provider store={store}><FlightLists /></Provider>)
        wrapper.setProps({isAuth:true});
        expect(wrapper.find(FlightLists)).toHaveLength(1);
    
      });
    
      it('check FlightLists Componenet with flightLists props', () => { 
        const wrapper = shallow(<Provider store={store}><FlightLists /></Provider>)
        wrapper.setProps({flightLists:"Gopu"});
        expect(wrapper.find(FlightLists)).toHaveLength(1);
      });

      it('check FlightLists Componenet with handleUpdateServicesMeal ', () => { 
        const wrapper = shallow(<Provider store={store}><FlightLists /></Provider>)
        wrapper.setProps({handleUpdateServicesMeal: true});
        expect(wrapper.find(FlightLists)).toHaveLength(1);
      });
    

      it('check FlightLists Componenet with handleUpdateServicesAncillary ', () => { 
        const wrapper = shallow(<Provider store={store}><FlightLists /></Provider>)
        wrapper.setProps({handleUpdateServicesAncillary: true});
        expect(wrapper.find(FlightLists)).toHaveLength(1);
      });

      it('check FlightLists Componenet with handleUpdateServicesShop ', () => { 
        const wrapper = shallow(<Provider store={store}><FlightLists /></Provider>)
        wrapper.setProps({handleUpdateServicesShop: true});
        expect(wrapper.find(FlightLists)).toHaveLength(1);
      });
    
})