import React from 'react';
import { shallow, mount ,configure } from 'enzyme';
import { spy } from 'sinon';
configure({ adapter: new Adapter() });
import Adapter from "enzyme-adapter-react-16";
import SeatType from './SeatType';

describe('Login Component', () => {
 
   it('renders correctly', () => {
       expect(shallow(<SeatType />)).toMatchSnapshot();
       });

    it('should render without throwing an error', () => {
      expect(shallow(<SeatType />).find('.row').exists()).toBe(true)
    })

    it('renders a email input', () => {
        expect(shallow(<SeatType />).find('.col').length).toEqual(5)
      
       })
   })

  
   