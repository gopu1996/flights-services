import React from 'react';
import { shallow, mount ,configure } from 'enzyme';
import { spy } from 'sinon';
configure({ adapter: new Adapter() });
import Adapter from "enzyme-adapter-react-16";
import AdditionServices from './AdditionalServices';

describe('AdditionServices Component', () => {
 
  it('renders correctly', () => {
    expect(shallow(<AdditionServices />)).toMatchSnapshot();
    });

    it('should render open dialog button', () => {
      expect(shallow(<AdditionServices />).find('#btn-dialog').exists()).toBe(true)
    })

  it('should call mock function when button is clicked', () => {
    const wrapper = shallow(<AdditionServices />);
    wrapper.find('form').simulate('click', { preventDefault() {} });
   })

})
  
   