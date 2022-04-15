import React from "react";
import RecipeCard from "../RecipeCard";
import { Grid } from "@nextui-org/react";

const Recipes = ({ data }) => {
  return (
    <Grid.Container gap={2} justify="center">
      {data.map((item, index) => {
        return (
          
          <RecipeCard key={index} uri={item.recipe.uri} recipe={item.recipe} />
        );
      })}
    </Grid.Container>
  );
};

export default Recipes;
