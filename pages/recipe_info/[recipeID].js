import RecipeDetails from "../../Components/RecipeDetails";
import React from "react";

const RecipeInfoLayout = ({ data }) => {
  return (
    <div>
      <RecipeDetails data={data} />
    </div>
  );
};

//TODO:write a async function getServerSideProps
//Take in the context.params.recipeID
//use it to fetch the recipe by id
//giving it the process.env variables
//return the data to the RecipeDetails as a prop

export async function getServerSideProps(context) {
  const fetchURL =
    "https://api.edamam.com/api/recipes/v2/" +
    encodeURI(context.params.recipeID) +
    "?type=public&app_id=" +
    process.env.EDAMAM_APP_ID +
    "&app_key=" +
    process.env.EDAMAM_APP_KEY;

  const res = await fetch(fetchURL);
  const data = await res.json();

  console.log(fetchURL);
  return {
    props: { data: data.recipe },
  };
}

export default RecipeInfoLayout;
