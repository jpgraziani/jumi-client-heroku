export const findRecipe = (recipes=[], recipeId) =>
  recipes.find(recipe => recipe.id+'' === recipeId)
