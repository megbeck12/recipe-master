export const generateRecipes = (recipes: string[], days: number): string[] => {
  const availableRecipes = [...recipes];
  const selectedRecipes: string[] = [];

  for (let i = 0; i < days && availableRecipes.length > 0; i++) {
    const index = Math.floor(Math.random() * availableRecipes.length);
    selectedRecipes.push(availableRecipes[index]);
    availableRecipes.splice(index, 1);
  }

  return selectedRecipes;
};
