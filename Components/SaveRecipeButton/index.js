import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

// pass recipe id as an object for our database
// write a patch request to our api

function SaveRecipeButton({ recipeID }) {
  const { user } = useUser();

  async function postSavedRecipe() {
    const email = user.email;
    const uri =
      `https://dev-backend-phantom-kitchen.herokuapp.com/users/` +
      email +
      `/favourites/` +
      recipeID;
    const message = await fetch(uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    // const content = await message.json();
    // console.log(content);
  }

  async function handleClick() {
    await postSavedRecipe();
  }

  if (user) {
    return <button onClick={handleClick}>Save recipe</button>;
  }

  return (
    <>
      <Link href="/api/auth/[...auth0]" as="/api/auth/login">
        <a>
          <button>Login to save</button>
        </a>
      </Link>
    </>
  );
}

export default SaveRecipeButton;
