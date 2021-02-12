import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Banner from './Banner'

describe(`Banner component`, () => {
  it('renders a .Banner by default', () => {
    const wrapper = shallow(<Banner />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})