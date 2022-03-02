import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SaveRecipeButton from "../SaveRecipeButton";

const RecipeCard = ({ recipe, uri }) => {
  let recipeID = uri.substr(-32);

  return (
    <div>
      <div>
        <Image
          height={150}
          width={150}
          alt="Recipe Image"
          src={recipe.image}
        ></Image>
      </div>

      <div>
        <h2>{recipe.label}</h2>
        <Link href={"/recipe_info/" + recipeID} passHref>
          <button>More Info</button>
        </Link>
        <br />
        <div className="cookingTimeDiv">
          <Image
            height={25}
            width={25}
            alt="Recipe Time"
            src="https://cdn.icon-icons.com/icons2/2098/PNG/512/clock_icon_128908.png"
          />
          {recipe.totalTime > 0 ? (
            <p>{recipe.totalTime + "'"} </p>
          ) : (
            <p>{"20'"}</p>
          )}
        </div>
        <br />
        {recipe.healthLabels.includes("Vegetarian") && (
          <Image
            height={50}
            width={50}
            alt="Health Label"
            src="https://cdn.icon-icons.com/icons2/2108/PNG/512/vegetarian_icon_130798.png"
          />
        )}
        <br />
        <SaveRecipeButton recipeID={recipeID}/>
      </div>
    </div>
  );
};

export default RecipeCard;
