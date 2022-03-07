import React, { useEffect, useState } from "react";
import Image from "next/image";

function SavedRecipeCard({ recipeID }) {
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    async function getRecipeData() {
      const fetchURL = `https://api.edamam.com/api/recipes/v2/${recipeID}?type=public&app_id=${process.env.NEXT_PUBLIC_EDAMAM_APP_ID}&app_key=${process.env.NEXT_PUBLIC_EDAMAM_APP_KEY}`;
      console.log(fetchURL);
      const res = await fetch(fetchURL);
      const data = await res.json();
      setRecipeData(data.recipe.label);
    }
    getRecipeData();
  }, [recipeID]);
  console.log(recipeData);

  //Seem to be able be hitting the limit on API calls here, need to look into

  return (
    <>
      {/* <Image
        width={50}
        height={50}
        src={recipeData.image}
        alt={"Recipe Image"}
      ></Image> */}
      <h1>{recipeData}</h1>
    </>
  );
}

export default SavedRecipeCard;
