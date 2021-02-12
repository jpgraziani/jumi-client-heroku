import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import NavBar from  './NavBar/NavBar'
import HomePage from './pages/HomePage'
import RecipeListMain from './RecipeListMain/RecipeListMain'
import RecipePageMain from './pages/RecipePageMain'
import AddRecipe from './AddRecipe/AddRecipe'
import Footer from './components/Footer'
import ApiContext from './ApiContext'
import config from './config'
import './App.css'

class App extends Component {
  state = {
    recipes: [],
  };

  componentDidMount() {
    
      fetch(`${config.API_ENDPOINT}/recipes`)
      .then(recipesRes => {
        if (!recipesRes.ok)
          return recipesRes.json().then(e => Promise.reject(e))
          return recipesRes.json()
      })
      .then(recipes => {
        this.setState({ recipes })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  handleAddRecipe = recipe => {
    this.setState({
      recipes: [
        ...this.state.recipes,
        recipe
      ]
    })
  }

  handleDeleteRecipe = recipeId => {
    this.setState({
      recipes: this.state.recipes.filter(recipe => recipe.id !== recipeId)
    })
  }

  renderMainRoutes() {
    return (
      <>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/' component={RecipeListMain} />
        <Route excat path='/recipes' component={RecipeListMain} />
        <Route path='/recipe/:recipeId' component={RecipePageMain} />
        <Route path='/add-recipe' component={AddRecipe} />
      </>
    )
  }

  render() {
    const value = {
      recipes: this.state.recipes,
      addRecipe: this.handleAddRecipe,
      deleteRecipe: this.handleDeleteRecipe,
    }
    console.log(value.recipes)
    return (
      <main className='App'>
        <NavBar />
        <ApiContext.Provider value={value}>
            {this.renderMainRoutes()}
        </ApiContext.Provider>
        <Footer />
      </main>
      
    )
  }
}

export default App
