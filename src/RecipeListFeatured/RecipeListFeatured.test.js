import React from 'react';
import toJSON from 'enzyme-to-json';
import RecipeListMain from './RecipeListFeatured';
import renderer from 'react-test-renderer';
import ApiContext from  '../ApiContext';




const context = {
  recipes: [
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
}

// enzyme doesn't yet support React.createContext
describe.skip(`RecipeListMain component`, () => {
  it('renders UI expeacted', () => {
    const tree = renderer
      .create(<ApiContext.Provider value={context}> 
                <RecipeListMain /> 
              </ApiContext.Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })

  it.skip('renders recipes for each in array', () => {
    const props = {
      match: {
        params: {
          id: 'THIS_RECIPE_ID'
        }
      }
    }

    const ul = (<RecipeListMain {...props} />, context)
      .find('ul')
    expect(toJSON(ul)).toMatchSnapshot()
  })
})
