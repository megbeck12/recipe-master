import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { ChangeEventHandler, FC } from "react";

interface Props {
  season: string;
  handleSeasonalRecipes: (e: string) => void;
}

export const SeasonalRecipesDropdown: FC<Props> = ({
  season,
  handleSeasonalRecipes,
}) => {
  return (
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
  );
};
