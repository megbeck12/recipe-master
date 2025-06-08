import { RecipeArray } from "../../types/recipeType/recipeType";

export const generateRecipes = (
  recipes: RecipeArray,
  days: number
): RecipeArray => {
  const availableRecipes = [...recipes];
  const selectedRecipes: RecipeArray = [];

  for (let i = 0; i < days && availableRecipes.length > 0; i++) {
    const index = Math.floor(Math.random() * availableRecipes.length);
    selectedRecipes.push(availableRecipes[index]);
    availableRecipes.splice(index, 1);
  }

  return selectedRecipes;
};
