import { AnyAction, configureStore, Dispatch } from "@reduxjs/toolkit";
import { recipeReducer, RecipeState } from "../reducers/recipe-reducer";
import { appReducer, AppState } from "../reducers/app-reducer";

interface MiddlewareAPI<S, E extends AnyAction> {
  dispatch: Dispatch<E>;
  getState(): S;
}

type Middleware<S, E extends AnyAction> = (
  api: MiddlewareAPI<S, E>
) => (next: Dispatch<E>) => (event: E) => ReturnType<Dispatch<E>>;

export interface RootState {
  app: AppState;
  recipe: RecipeState;
}

export const getStore = () =>
  configureStore({
    reducer: {
      app: appReducer,
      recipe: recipeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
