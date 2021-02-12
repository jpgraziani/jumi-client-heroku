import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import RecipePageMain from './RecipePageMain'


describe(`RecipePageMain component`, () => {
  it('renders a .RecipePageMain by default', () => {
    const wrapper = shallow(<RecipePageMain />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})