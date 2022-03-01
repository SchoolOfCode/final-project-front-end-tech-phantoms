import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const RecipeCard = ({ recipe }) => {
  const [recipeID, setRecipeID] = useState("");

  function getRecipeID() {
    let uri = recipe.uri;
    let stringID = uri.substr(-32);
    console.log(stringID);
    setRecipeID(stringID);
  }
  //trying to save the ID in a state to pass it down through the route so we can use it in getServerSideProps in [recipeID].
  //At the moment the state is blank and not the actual id, the id flashes in the console for a second but we get error 404. TRy useEffect on page render
  return (
    <div>
      <div>
        <Image
          height={150}
          width={150}
          alt="Recipe Image"
          src={recipe.image}
        ></Image>
      </div>

      <div>
        <h2>{recipe.label}</h2>
        <Link href={"/recipe_info/" + recipeID} passHref>
          <button onClick={getRecipeID}>More Info</button>
        </Link>

        <Image
          height={50}
          width={50}
          alt="Recipe Time"
          src="https://cdn.icon-icons.com/icons2/2098/PNG/512/clock_icon_128908.png"
        />
        {recipe.totalTime > 0 ? (
          <p>{recipe.totalTime + "'"} </p>
        ) : (
          <p>{"20'"}</p>
        )}
        {recipe.healthLabels.includes("Vegetarian") && (
          <Image
            height={50}
            width={50}
            alt="Health Label"
            src="https://cdn.icon-icons.com/icons2/2108/PNG/512/vegetarian_icon_130798.png"
          />
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
