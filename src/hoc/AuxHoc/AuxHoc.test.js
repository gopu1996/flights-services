import Adapter from "enzyme-adapter-react-16";
import React from 'react';
import { shallow, configure } from 'enzyme';
import Auxs from './Auxs'

configure({ adapter: new Adapter() });


describe('AUx', () => {
    it('rendering Aux component', () => {
        const wrapper = shallow(<Auxs/>); 
        expect(wrapper.prop('children')).toBe()
    })
})