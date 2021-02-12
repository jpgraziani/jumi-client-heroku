import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import RecipeForm from './RecipeForm'


describe(`RecipeForm component`, () => {
  const props = {
    className: 'test-class-name',
    children: <p>test children</p>,
    'data-other': 'test-other-prop'
  }

  it('renders a form.RecipeForm by default', () => {
    const wrapper = shallow(<RecipeForm />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the RecipeForm given props', () => {
    const wrapper = shallow(<RecipeForm {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})