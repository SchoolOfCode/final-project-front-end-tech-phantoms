import React from "react";
import RecipeCard from "../RecipeCard";

const Recipes = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <RecipeCard key={index} uri={item.recipe.uri} recipe={item.recipe} />
        );
      })}
    </div>
  );
};

export default Recipes;
