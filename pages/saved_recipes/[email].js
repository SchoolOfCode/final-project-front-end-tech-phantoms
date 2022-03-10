import React from "react";
import NavBar from "../../Components/NavBar";
import SavedRecipesLayout from "../../Components/SavedRecipesLayout";

function SavedRecipes({ recipeIDs, recipesData }) {
  return (
    <>
      <NavBar />
      <SavedRecipesLayout recipeIDs={recipeIDs} data={recipesData} />
    </>
  );
}

export async function getServerSideProps(context) {
  const fetchURL =
    "https://dev-backend-phantom-kitchen.herokuapp.com/users/" +
    context.params.email +
    "/favourites/";
  const res = await fetch(fetchURL);
  const data = await res.json();

  const fetchURLs = data.payload[0].saved_recipes.map((recipeID) => {
    return fetch(
      `https://api.edamam.com/api/recipes/v2/${recipeID}?type=public&app_id=${process.env.NEXT_PUBLIC_EDAMAM_APP_ID}&app_key=${process.env.NEXT_PUBLIC_EDAMAM_APP_KEY}`
    );
  });
  const allPromises = await Promise.all(fetchURLs);

  const recipesData = await Promise.all(
    allPromises.map(async (response) => {
      const recipe = await response.json();
      return recipe;
    })
  );

  const recipeIDs = data.payload[0].saved_recipes.map((recipeID) => recipeID); //no idea why this is undefined if it isnt mapped to a new array before being passed as props
  console.log("props {recipeIDs}", recipeIDs);

  return { props: { recipeIDs, recipesData } };
}

export default SavedRecipes;
