import React from "react";
import Image from "next/image";
import Link from "next/link";
import SaveRecipeButton from "../SaveRecipeButton";
import { useUser } from "@auth0/nextjs-auth0";

const RecipeDetails = ({ data, recipeID }) => {
  const { user } = useUser();

  async function addToShoppingList() {
    const newItems = data.ingredients.map((ingredient) => {
      return {
        ingredient: ingredient.food,
        quantity: Math.max(1, Math.round(ingredient.quantity)),
        needToBuy: true,
      };
    });
    console.log("Ingredients to Add", newItems);

    //post body of data to API to add to shopping list
    const URI =
      `https://dev-backend-phantom-kitchen.herokuapp.com/shopping/` +
      user.email;
    const response = await fetch(URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newItems),
    });
    const data = await response.json();
  }

  return (
    <div>
      <Image
        alt="Recipe banner"
        src={data.image}
        width="100"
        height="100"
        layout="responsive"
        objectFit="contain"
      ></Image>
      <h1>{data.label}</h1>
      <hr />
      <h2>Nutrition</h2>
      <p>
        <span>{Math.round(data.calories)}</span> calories per serving
        <br />
        <br />
        <span>{Math.round(data.totalDaily.ENERC_KCAL.quantity)}%</span> daily
        calorie value
        <Link
          href="https://www.nhs.uk/common-health-questions/food-and-diet/what-should-my-daily-intake-of-calories-be/"
          passHref
        >
          <a target="_blank"> &#9432;</a>
        </Link>
        <br />
        <br />
        <span>{data.healthLabels.join(", ")}</span>
        <br />
        <br />
        {data.healthLabels.includes("Vegetarian") && (
          <Image
            height={30}
            width={30}
            alt="Health Label"
            src="https://cdn.icon-icons.com/icons2/2108/PNG/512/vegetarian_icon_130798.png"
          />
        )}
      </p>
      <h2>Ingredients</h2>
      {user ? (
        <button onClick={addToShoppingList}>Add to 🛒 </button>
      ) : (
        <button onClick={addToShoppingList}>Login to Add to 🛒 </button>
      )}
      <ul>
        {data.ingredients.map((item) => {
          return <li key={item.food}>{item.text}</li>;
        })}
      </ul>
      <h2>Preparation</h2>
      <Link href={data.url} passHref>
        <a target="_blank">
          <button>Read Instructions</button>
        </a>
      </Link>
      <p>on {data.source}</p>
      <hr />
      <SaveRecipeButton recipeID={recipeID} />
    </div>
  );
};

export default RecipeDetails;
