import React from "react";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

// pass recipe id as an object for our database
// write a patch request to our api

function SaveRecipeButton({ recipeID }) {
  const { user } = useUser();

  function handleClick() {
    console.log(`clicked, id is: ${recipeID}`); //DEBUG LOG REFACTOR AFTER
  }

  

  if (user) {
    return <button onClick={handleClick}>Save recipe</button>;
  }

  return (<>
      <Link href="/api/auth/[...auth0]" as="/api/auth/login">
        <a><button>Login to save</button></a>
      </Link>
  </>)
}

export default SaveRecipeButton;
