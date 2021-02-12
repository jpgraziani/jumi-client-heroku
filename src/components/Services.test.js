import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Services from './Services'

describe(`Services component`, () => {
  it('renders a .Services by default', () => {
    const wrapper = shallow(<Services />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})