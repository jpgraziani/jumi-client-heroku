import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import RecipeCard from './RecipeCard'

describe(`RecipeCard component`, () => {
  it('renders a .RecipeCard by default', () => {
    const wrapper = shallow(<RecipeCard />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})