import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './App';  


describe('<App />', () => {

    it('App has one Books component inside it', () => {
        const wrapper = shallow(<App />)
        expect(wrapper.find('Books'));
    })


    it('should contains a submit button', () => {
        const btn = shallow(<App />)
        expect(btn.contains(<button type="submit" id="search">Search</button>)).to.equal(true);
    })
    
})