import React from "react";
import Image from "next/image";

//TODO: get data from edamam api to replace mock data
const RecipeDetails = () => {
  return (
    <div>
      {/* <Image alt="Recipe banner"></Image> */}
      <h1>Recipe Name</h1>
      <hr />
      <h2>Nutrition</h2>
      <p>
        <span>123</span> calories per serving
        <br />
        <span>4%</span> daily value
        <br />
        Low-Carb, Low-Sodium, Vegetarian, Paleo, Dairy-Free, Gluten-Free,
        Egg-Free, Peanut-Free, Tree-Nut-Free, Soy-Free, Fish-Free,
        Shellfish-Free
      </p>
      <h2>Ingredients</h2>
      <ol>
        <li>1 tbsp ingredient 1</li>
        <li>Pinch of Ingredient 2</li>
        <li>4 tbsp Ingredient 3</li>
        <li>Small bunch finely chopped ingredient 4</li>
      </ol>
      <h2>Preparation</h2>
      <button>Read Instructions</button>
      <p>on Website Name</p>
      <hr />
      <button>Save recipe</button>
    </div>
  );
};

export default RecipeDetails;
