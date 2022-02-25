// import React from "react";
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
        {recipe.healthLabels.includes("Vegetarian") && (
          <Image
            height={50}
            width={50}
            alt="Health Label"
            src="https://cdn.icon-icons.com/icons2/2108/PNG/512/vegetarian_icon_130798.png"
          />
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
