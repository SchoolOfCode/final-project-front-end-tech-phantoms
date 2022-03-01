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

export default RecipeInfoLayout;
