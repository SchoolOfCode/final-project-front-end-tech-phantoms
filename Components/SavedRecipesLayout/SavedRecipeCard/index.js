import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import UnSaveRecipeButton from "../../UnSaveRecipe";

function SavedRecipeCard({ recipeID }) {
  const [recipeData, setRecipeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getRecipeData() {
      setIsLoading(true);
      const fetchURL = `https://api.edamam.com/api/recipes/v2/${recipeID}?type=public&app_id=${process.env.NEXT_PUBLIC_EDAMAM_APP_ID}&app_key=${process.env.NEXT_PUBLIC_EDAMAM_APP_KEY}`;
      const res = await fetch(fetchURL);
      const data = await res.json();
      setRecipeData(data.recipe);
      setIsLoading(false);
    }
    getRecipeData();
  }, [recipeID]);

  //Seem to be able be hitting the limit on API calls here, need to look into
  return isLoading ? (
    <h1>Loading......</h1>
  ) : (
    <>
      <Image
        width={150}
        height={150}
        src={recipeData.image}
        alt={"Recipe Image"}
      ></Image>
      <h1>{recipeData.label}</h1>
      <Link href={"/recipe_info/" + recipeID} passHref>
        <Button auto>More Info</Button>
      </Link>
      <UnSaveRecipeButton recipeID={recipeID}></UnSaveRecipeButton>
      <br />
      <div className="cookingTimeDiv">
        <Image
          height={25}
          width={25}
          alt="Recipe Time"
          src="https://cdn.icon-icons.com/icons2/2098/PNG/512/clock_icon_128908.png"
        />
        {recipeData.totalTime > 0 ? (
          <p>{recipeData.totalTime + "'"} </p>
        ) : (
          <p>{"20'"}</p>
        )}
      </div>
      <br />
      {recipeData.healthLabels.includes("Vegetarian") && (
        <Image
          height={50}
          width={50}
          alt="Health Label"
          src="https://cdn.icon-icons.com/icons2/2108/PNG/512/vegetarian_icon_130798.png"
        />
      )}
      <br />
    </>
  );
}

export default SavedRecipeCard;
