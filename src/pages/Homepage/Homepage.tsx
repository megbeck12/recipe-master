import React, { FC, useState } from "react";
import { generateRecipes } from "../../hooks/generateRecipes/generateRecipes";
import {
  Button,
  FormControl,
  Icon,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { generalRecipes } from "../../data/generalRecipes";
import { summerRecipes } from "../../data/summerRecipes";
import { winterRecipes } from "../../data/winterRecipes";
import { LunchDiningOutlined } from "@mui/icons-material";

export const Homepage: FC = () => {
  const [recipesArray, setRecipesArray] = useState([""]);
  const [days, setDays] = useState(0);
  const [season, setSeason] = useState("");

  const allRecipesArray = [
    ...generalRecipes,
    ...summerRecipes,
    ...winterRecipes,
  ];
  const summerRecipesArray = [...generalRecipes, ...summerRecipes];
  const winterRecipesArray = [...generalRecipes, ...winterRecipes];

  const handleOnClick = () => {
    let selectedRecipes: string[];

    if (season === "Summer") {
      selectedRecipes = summerRecipesArray;
    } else if (season === "Winter") {
      selectedRecipes = winterRecipesArray;
    } else {
      selectedRecipes = allRecipesArray;
    }

    const generatedRecipe = generateRecipes(selectedRecipes, days);

    setRecipesArray(generatedRecipe);
  };

  const handleDayChange = (value: number) => setDays(value);

  const handleSeasonalRecipes = (season?: string) => {
    if (season) setSeason(season);
  };

  return (
    <Stack>
      <Stack width="100%">
        <TextField
          variant="outlined"
          onChange={(e) => handleDayChange(+e.target.value)}
          value={days}
        />
      </Stack>
      <FormControl fullWidth>
        <InputLabel>Seasonal Recipes</InputLabel>
        <Select
          label="Season"
          value={season}
          onChange={(e) => handleSeasonalRecipes(e.target.value)}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Winter">Winter</MenuItem>
          <MenuItem value="Summer">Summer</MenuItem>
        </Select>
      </FormControl>
      <Stack>
        <Button variant="contained" onClick={() => handleOnClick()}>
          Generate Recipe
        </Button>
      </Stack>
      {recipesArray.map((recipe) => (
        <Stack direction="row">
          {recipesArray[0] !== "" && recipesArray.length && (
            <Icon>
              <LunchDiningOutlined />
            </Icon>
          )}
          <Typography>{recipe}</Typography>
        </Stack>
      ))}
    </Stack>
  );
};
