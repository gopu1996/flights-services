import React from 'react';
import { shallow, mount ,configure } from 'enzyme';
import { spy } from 'sinon';
configure({ adapter: new Adapter() });
import Adapter from "enzyme-adapter-react-16";
import LoginForm from './Login';

describe('Login Component', () => {

  it('renders correctly', () => {
    expect(shallow(<LoginForm />)).toMatchSnapshot();
    });

 
    it('should render without throwing an error', () => {
      expect(shallow(<LoginForm />).find('.form').exists()).toBe(true)
    })

    it('renders a email input', () => {
        expect(shallow(<LoginForm />).find('#email').length).toEqual(1)
       })

    it('renders a password input', () => {
        expect(shallow(<LoginForm />).find('#password').length).toEqual(1)
       })
       
   })

  
   