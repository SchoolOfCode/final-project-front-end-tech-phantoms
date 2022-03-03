import React, { useEffect, useState } from "react";

function RecipeDayCard({ id }) {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    async function getRecipeByID() {
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=9c05887d&app_key=0bb927a239eeaacb5919ba8f44ce11e9`
      );
      const data = await res.json();
      console.log(data);
      setRecipe(data.recipe);
    }
    getRecipeByID();
  }, []);
  return <div>{recipe.label}</div>;
}

export default RecipeDayCard;
