import React from "react";

export async function getServerSideProps(context) {
  // const fetchURL =
  //   "https://api.edamam.com/api/recipes/v2/" +
  //   encodeURI(context.params.data[0]) +
  //   "?type=public&app_id=" +
  //   process.env.EDAMAM_APP_ID +
  //   "&app_key=" +
  //   process.env.EDAMAM_APP_KEY;

  const res = await fetch(
    "https://api.edamam.com/api/recipes/v2/ee6092cb5ff8b4d6c46482ca1e5d4ca7?type=public&app_id=9c05887d&app_key=0bb927a239eeaacb5919ba8f44ce11e9"
  );
  const data = await res.json();
  console.log(data);
  return {
    props: { recipe: data },
  };
}

function AddMealModal({ data, recipe }) {
  console.log(recipe);
  return <div>{recipe.recipe.label}</div>;
}

export default AddMealModal;
