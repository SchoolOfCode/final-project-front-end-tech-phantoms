import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AddToMealPlannerBtn from "../AddToMealPlannerBtn";
import css from "./styles.module.css";
import clock from "../../public/timeclock_tiemp_3924.png";
import veget from "../../public/vegetarian_icon_130798.png";
import vegan from "../../public/vegan.png";

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
      console.log(data.recipe.healthLabels);
    }
    getRecipeByID();
  }, []);
  return (
    <div key={recipe.label} className={css.container}>
      <div>
        <img src={recipe.image} height={100} width={100} alt="Recipe Image" />
      </div>
      <div>
        <h3>{recipe.label}</h3>
        <div className={css.container}>
          <Image src={clock} layout="fixed" alt="Recipe Time" />
          {recipe.totalTime > 0 ? (
            <p>{recipe.totalTime + "'"} </p>
          ) : (
            <p>{"20'"}</p>
          )}
        </div>
        <div>
          {recipe.healthLabels?.includes("Vegetarian") ? (
            <Image layout="fixed" alt="Vegetarian" src={veget} />
          ) : (
            ""
          )}
          {recipe.healthLabels?.includes("Vegan") ? (
            <Image layout="fixed" alt="Vegan" src={vegan} />
          ) : (
            ""
          )}
        </div>

        <AddToMealPlannerBtn
          day={day}
          setData={setData}
          image={recipe.image}
          label={recipe.label}
          url={recipe.url}
        />
      </div>
    </div>
  );
}

export default RecipeDayCard;
