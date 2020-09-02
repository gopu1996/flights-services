import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LoginComponent from "../../../components/Auth/Login/Login";
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import {Login} from './Login'
import { stub } from 'sinon';
configure({ adapter: new Adapter() });
const mockStore = configureMockStore()
let wrapper
describe("<Login /> Container ", () => {
let component;
  let store;
  let value;
  let props, wrapper
  beforeEach(() => {
    const initialState = {
        authReducer: { isAuthenticated: value , loading : value , error: value}
    };
    store = mockStore(initialState);
    component = shallow(<Provider store={store}><LoginComponent/></Provider>);

    wrapper = shallow(<LoginComponent {...props} />);
  });

it("should receiving a props from redux store is Authenticated , loading , error from mapStateToProps", () => {
        expect(component.props().isAuthenticated).toBe(value);
        expect(component.props().loading).toBe(value);
        expect(component.props().error).toBe(value);
    });
    
    it('check Login Componenet with email props', () => { 
        component.setProps({email:"emial"});
        expect(component.find(LoginComponent)).toHaveLength(1);
      });   

      it('check Login Componenet with password props', () => { 
        component.setProps({password:"password"});
        expect(component.find(LoginComponent)).toHaveLength(1);
      });    
      it('check Login Componenet with error props', () => { 
        component.setProps({error:"error"});
        expect(component.find(LoginComponent)).toHaveLength(1);
      });   
      it('check Login Componenet with serverError props', () => { 
        component.setProps({serverError:"serverError"});
        expect(component.find(LoginComponent)).toHaveLength(1);
      });  
      
      it('onSubmit attribute should be of className `base-container`', () => {
        expect( wrapper.props().children.props.className  ).toBe('base-container');
      });
    it('check Login component exist or not', () => { 
        expect(wrapper.exists()).toBe(true)
  });
})
