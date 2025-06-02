import React, { FC, useState } from "react";
import { generateRecipes } from "../../functions/generateRecipes/generateRecipes";
import { Box, Button, Icon, Stack, Typography } from "@mui/material";
import { generalRecipes } from "../../data/generalRecipes";
import { summerRecipes } from "../../data/summerRecipes";
import { winterRecipes } from "../../data/winterRecipes";
import { LunchDiningOutlined } from "@mui/icons-material";
import { SeasonalRecipesDropdown } from "../../molecules/SeasonalRecipesDropdown/SeasonalRecipesDropdown";
import { DaysField } from "../../molecules/DaysField/DaysField";
import { RandomizerContainer } from "../../molecules/RandomizerContainer/RandomizerContainer";
import { RecipeIcon } from "../../atoms/RecipeIcon/RecipeIcon";
import { RecipeArray } from "../../types/recipeType/recipeType";

export const RecipeRandomizer: FC = () => {
  const [recipesArray, setRecipesArray] = useState<RecipeArray>([]);
  const [days, setDays] = useState(1);
  const [season, setSeason] = useState("");

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
          {icon}
          <Typography variant="body1">{recipe}</Typography>
        </Stack>
      ))}
    </RandomizerContainer>
  );
};
