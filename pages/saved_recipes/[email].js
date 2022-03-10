import React from "react";
import NavBar from "../../Components/NavBar";
import SavedRecipesLayout from "../../Components/SavedRecipesLayout";

function savedRecipes({ savedRecipesData }) {
  return (
    <>
      <NavBar />
      <SavedRecipesLayout savedRecipesData={savedRecipesData} />
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

  return { props: { savedRecipesData: data.payload[0].saved_recipes } };
}

export default savedRecipes;
