import { createSlice } from "@reduxjs/toolkit";

interface RecipeState {
  recipeOpen: boolean;
}

const initialState: RecipeState = {
  recipeOpen: false,
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    openRecipe: (state) => {
      state;
    },
  },
});
