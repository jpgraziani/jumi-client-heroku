import React, { Component } from 'react'
import { Link } from  'react-router-dom'
import RecipeForm from '../RecipeForm/RecipeForm'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import ApiContext from '../ApiContext'
import config from '../config'

import './AddRecipe.css'

export default class AddRecipe extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }
  static contextType = ApiContext;

  handleSubmit = e => {
    e.preventDefault()
    const newRecipe = {
      name: e.target['recipe-name'].value,
      directions: e.target['recipe-content'].value,
      created: new Date(),
      ingredients: e.target['ingredients'].value,
      main_protein: e.target['main_protein'].value,
      calories: e.target['calories'].value,
      protein: e.target['protein'].value
    }
    console.log(newRecipe)
    fetch(`${config.API_ENDPOINT}/recipes`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newRecipe),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
          return res.json()
      })
      .then(recipe => {
        this.context.addRecipe(recipe)
        this.props.history.push(`/recipe/${recipe.id}`)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    
    return (
      <section className='AddNote'>
        <Hero hero='addHero'>
            <Banner title='create a recipe'>
              <Link to='./' className='btn-primary'>return home</Link>
            </Banner>
          </Hero>
        <RecipeForm onSubmit={this.handleSubmit} className='recipe-form'>
          <section className='field'>
            <label htmlFor='recipe-name-input'>
              <h4>Recipe Name</h4>
            </label>
            <hr />
            <input type='text' id='recipe-name-input' name='recipe-name' />
          </section>
          <section className='field'>
            <label htmlFor='ingredients'>
              <h4>Ingredients</h4>
            </label>
            <hr />
            <textarea id='ingredients' name='ingredients' />
          </section>
          <section className='field'>
            <label htmlFor='recipe-content-input'>
              <h4>Directions</h4>
            </label>
            <hr />
            <textarea id='recipe-content-input' name='recipe-content' />
          </section>
          <section className='field'>
            <label htmlFor='main_protein'>
              <h4>Main Protein</h4>
              <hr />
            </label>
            <input type='text' id='main_proteins' name='main_protein' />
          </section>
          <section className='field'>
            <div className='health-wrapper'>
              <h4>Health Info</h4>
            </div>
            <hr />
            <div className='health-field'>
              <div className='num-field'> 
                <label htmlFor='calories'>
                  calories
                </label>
                <input type='number' id='calories' name='calories' />
              </div>
              <hr className='hrVertical' />
              <div className='num-field'>
                <label htmlFor='protein'>
                  protein
                </label>
                <input type='number' id='protein' name='protein' />
              </div>
            </div>
          </section>
          
          <div className='buttons'>
            <button type='submit' className='btn-primary'>
              Add recipe
            </button>
          </div>
        </RecipeForm>
      </section>
    )
  }
}
