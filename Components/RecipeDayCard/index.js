import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AddToMealPlannerBtn from "../AddToMealPlannerBtn";

function RecipeDayCard({ id, setData, day }) {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    async function getRecipeByID() {
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=9c05887d&app_key=0bb927a239eeaacb5919ba8f44ce11e9`
      );
      const data = await res.json();
      console.log(data.recipe);
      setRecipe(data.recipe);
    }
    getRecipeByID();
  }, []);
  return (
    <div key={recipe.label}>
      <img src={recipe.image} height={100} width={100} alt="Recipe Image" />
      <h3>{recipe.label}</h3>
      <a href={recipe.url}>
        <button>Method</button>
      </a>
      <AddToMealPlannerBtn
        day={day}
        setData={setData}
        image={recipe.image}
        label={recipe.label}
        url={recipe.url}
      />
    </div>
  );
}

export default RecipeDayCard;
