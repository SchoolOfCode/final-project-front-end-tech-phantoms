import React, { useEffect, useState } from 'react'

function SavedRecipeCard({recipeID}) {
  console.log(recipeID)

  const [recipeData, setRecipeData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    async function getRecipeData() {
      const fetchURL = "https://api.edamam.com/api/recipes/v2/" +
      recipeID +
      "?type=public&app_id=" +
      process.env.EDAMAM_APP_ID +
      "&app_key=" +
      process.env.EDAMAM_APP_KEY;

      const res = await fetch(fetchURL);
      const data = await res.json();
    }
  })

  return (
    <h1>???</h1>
  )
}

export default SavedRecipeCard