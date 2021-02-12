import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddRecipe from './AddRecipe'

describe(`AddRecipe component`, () => {
  const newAddRecipe = [
    {
      "id": "1",
      "name": "Test recipe name",
      "created": "2019-01-03T00:00:00.000Z",
      "directions": "Test description",
      "ingredients": "Test ingredients",
      "main_protein": "Test main_protein",
      "calories": "Test calories",
      "protein": "Test protein"
    },
    {
      "id": "2",
      "name": "Test recipe name",
      "created": "2019-01-03T00:00:00.000Z",
      "directions": "Test description",
      "ingredients": "Test ingredients",
      "main_protein": "Test main_protein",
      "calories": "Test calories",
      "protein": "Test protein"
    },
    {
      "id": "3",
      "name": "Test recipe name",
      "created": "2019-01-03T00:00:00.000Z",
      "directions": "Test description",
      "ingredients": "Test ingredients",
      "main_protein": "Test main_protein",
      "calories": "Test calories",
      "protein": "Test protein"
    },
  ]

  it('renders the complete form', () => {
    const context = { recipes: newAddRecipe}
    const wrapper = shallow(<AddRecipe />, context)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})