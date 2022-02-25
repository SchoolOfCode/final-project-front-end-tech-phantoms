import React from "react";
import Image from "next/image";

const RecipeCard = ({ recipe }) => {
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
      </div>
    </div>
  );
};

export default RecipeCard;
