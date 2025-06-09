import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { selectRecipeSelection } from "../../reducers/recipe-reducer";

interface Props {
  title: string;
}

export const RecipeCard: FC<Props> = ({ title }) => {
  const recipeOpen = useSelector(selectRecipeSelection);

  return (
    recipeOpen && (
      <Card sx={{ width: 345, height: "100%" }}>
        <CardHeader title={title} sx={{ textAlign: "center" }} />
        <CardContent>
          <Typography variant="body2">Prep Time:</Typography>
          <Typography variant="body2">Cook Time:</Typography>
          <Typography variant="body2">Total Time:</Typography>
          <Typography variant="body2">Ingredients:</Typography>
          <List>
            <ListItem>Cheese</ListItem>
            <ListItem>Milk</ListItem>
            <ListItem>Pasta</ListItem>
          </List>
        </CardContent>
      </Card>
    )
  );
};
