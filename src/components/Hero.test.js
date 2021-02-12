import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Hero from './Hero'

describe(`Hero component`, () => {
  it('renders a .Hero by default', () => {
    const wrapper = shallow(<Hero />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})