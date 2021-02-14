import React from 'react'
import { Link } from 'react-router-dom'
import RecipeCard from '../Recipe/RecipeCard'
import Hero from '../components/Hero'
import Banner from '../components/Banner'

import './RecipeListFeatured.css'

import ApiContext from '../ApiContext'

export default class RecipeListMain extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext;

  render() {
    const { recipes=[] } = this.context
    return (
      <section className='container-recipe'>
          <Hero hero='recipesHero'>
            <Banner title='recipes are my jam'>
              <Link to='./add-recipe' className='btn-primary'>add recipes</Link>
            </Banner>
          </Hero>
          <div className='RecipeList'>
          <ul className='recipe-card'>
            {recipes.map(recipe =>
              <li key={recipe.id} className='recipe-container'>
                <div className='recipe-card-wrapper'>
                  <RecipeCard
                    id={recipe.id}
                    name={recipe.name}
                    main_protein={recipe.main_protein}
                    created={recipe.created}
                    onDeleteRecipe={this.handleDeleteRecipe}
                  />
                </div>
              </li>
            )}
          </ul>
        </div>
      </section>
    )
  }
}
