import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';


configure({ adapter: new Adapter() });
const mockStore = configureMockStore()
let wrapper
describe("<Toolbar /> is show ", () => {
let component;
  let store;
  let value;

  beforeEach(() => {
    const initialState = {
        authReducer: { isAuthenticated: value , firstName : value , userType: value , expiredIn: value}
    };
    store = mockStore(initialState);
    component = shallow(<Provider store={store}><Toolbar/></Provider>);
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
});

it("should receiving a props is Authenticated , firstName , UserType from mapStateToProps", () => {
   
        expect(component.props().isAuthenticated).toBe(value);
        expect(component.props().firstName).toBe(value);
        expect(component.props().userType).toBe(value);
        expect(component.props().expiredIn).toBe(value);
    });
    
    
it('check toolbar Componenet with isAuth props', () => { 
    component.setProps({isAuth:true});
    expect(component.find(Toolbar)).toHaveLength(1);

  });

  it('check toolbar Componenet with isUserName props', () => { 
    component.setProps({isUserName:"Gopu"});
    expect(component.find(Toolbar)).toHaveLength(1);
  });

  it('check toolbar Componenet with isUserType props', () => { 
    component.setProps({isUserType:"Airstaff"});
    expect(component.find(Toolbar)).toHaveLength(1);
  });



it('check toolbar compnent exist or not', () => { 
        const wrapper =shallow(<Toolbar />)
        expect(wrapper.exists()).toBe(true)
  });


})