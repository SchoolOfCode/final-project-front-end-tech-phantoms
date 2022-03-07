import React from "react";
import SavedRecipeCard from "./SavedRecipeCard";

function SavedRecipesLayout({ savedRecipesData }) {
  console.log(savedRecipesData);
  return (
    <div>
      {savedRecipesData.map((item, index) => {
        <>
          return <SavedRecipeCard recipeID={item} key={index} />
        </>;
      })}
    </div>
  );
}

export default SavedRecipesLayout;