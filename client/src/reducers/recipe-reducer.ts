import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../utilities/setup-store";

export interface RecipeState {
  recipeSelection: boolean;
}

const initialState: RecipeState = {
  recipeSelection: false,
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    setRecipeAction: (state, action: PayloadAction<boolean>) => {
      state.recipeSelection = action.payload;
    },
  },
});

export const recipeReducer = recipeSlice.reducer;

export const { setRecipeAction } = recipeSlice.actions;

export const selectRecipeSelection = (state: RootState): boolean =>
  state.recipe.recipeSelection;
