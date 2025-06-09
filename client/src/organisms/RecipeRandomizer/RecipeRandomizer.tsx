import React, { FC, useState } from "react";
import { generateRecipes } from "../../functions/generateRecipes/generateRecipes";
import { Box, Button, Icon, Stack, Typography } from "@mui/material";
import { generalRecipes } from "../../data/generalRecipes";
import { summerRecipes } from "../../data/summerRecipes";
import { winterRecipes } from "../../data/winterRecipes";
import { SeasonalRecipesDropdown } from "../../molecules/SeasonalRecipesDropdown/SeasonalRecipesDropdown";
import { DaysField } from "../../molecules/DaysField/DaysField";
import { RandomizerContainer } from "../../molecules/RandomizerContainer/RandomizerContainer";
import { RecipeArray } from "../../types/recipeType/recipeType";
import { RecipeCard } from "../../molecules/RecipeCard/RecipeCard";
import {
  selectRecipeSelection,
  setRecipeAction,
} from "../../reducers/recipe-reducer";
import { useDispatch, useSelector } from "react-redux";

export const RecipeRandomizer: FC = () => {
  const dispatch = useDispatch();
  const [recipesArray, setRecipesArray] = useState<RecipeArray>([]);
  const [days, setDays] = useState(1);
  const [season, setSeason] = useState("");
  const recipeCardState = useSelector(selectRecipeSelection);

  const handleOnClick = () => {
    let selectedRecipes: RecipeArray;

    if (season === "Summer") {
      selectedRecipes = [...generalRecipes, ...summerRecipes];
    } else if (season === "Winter") {
      selectedRecipes = [...generalRecipes, ...winterRecipes];
    } else {
      selectedRecipes = [...generalRecipes, ...summerRecipes, ...winterRecipes];
    }

    const generatedRecipe = generateRecipes(selectedRecipes, days);

    setRecipesArray(generatedRecipe);
  };

  const handleDayChange = (value: number) => setDays(value);

  const handleSeasonalRecipes = (season?: string) => {
    if (season) setSeason(season);
  };

  const handleRecipeClick = () => dispatch(setRecipeAction(!recipeCardState));

  return (
    <RandomizerContainer>
      <Box display="flex" justifyContent="center" paddingBottom={5}>
        <Typography variant="h3">Recipe Master</Typography>
      </Box>
      <DaysField days={days} handleDayChange={handleDayChange} />
      <SeasonalRecipesDropdown
        season={season}
        handleSeasonalRecipes={handleSeasonalRecipes}
      />
      <Box display="flex" justifyContent="center" paddingTop={3}>
        <Button variant="contained" onClick={() => handleOnClick()}>
          Generate Recipes
        </Button>
      </Box>
      {recipesArray.map(({ recipe, icon }) => (
        <Stack direction="row" paddingTop={5}>
          <Stack paddingRight={1}>{icon}</Stack>
          <Typography
            component="span"
            onClick={() => handleRecipeClick}
            variant="body1"
          >
            {recipe}
          </Typography>
          <RecipeCard title={recipe} />
        </Stack>
      ))}
    </RandomizerContainer>
  );
};
