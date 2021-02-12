import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import ApiContext from '../ApiContext'
import config from '../config'

import './RecipeCard.css'

export default class RecipeCard extends React.Component {
  static defaultProps ={
    onDeleteRecipe: () => {},
  }
  static contextType = ApiContext;

  handleClickDelete = e => {
    e.preventDefault()
    const recipeId = this.props.id

    fetch(`${config.API_ENDPOINT}/recipes/${recipeId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
          return res.json()
      })
      .then(() => {
        this.context.deleteRecipe(recipeId)
        this.props.onDeleteRecipe(recipeId)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    const { name, id, created, main_protein } = this.props
    return (
      <section>
          <div className='featured-recipes-center'>
            <Link to={`/recipe/${id}`}>
              <h4>{name} | {main_protein}</h4>
              <span>{format(created, 'Do MMM YYYY')}</span>
            </Link>
          </div>
          <button
            className='btn-card'
            type='button'
            onClick={this.handleClickDelete}
          >
            remove
          </button>
        </section>
    )
  }
}
