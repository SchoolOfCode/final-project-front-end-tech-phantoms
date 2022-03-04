import RecipeDetails from "../../Components/RecipeDetails";
import React from "react";

const RecipeInfoLayout = (props) => {
  return (
    <div>
      <RecipeDetails data={props.data} recipeID={props.recipeID}/>
    </div>
  );
};

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
    props: { data: data.recipe, recipeID: context.params.recipeID },
  };
}

export default RecipeInfoLayout;
