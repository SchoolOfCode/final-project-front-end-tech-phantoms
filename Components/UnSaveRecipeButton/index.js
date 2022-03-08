import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { Button } from "@nextui-org/react";

function UnSaveRecipeButton({ recipeID }) {
  const { user } = useUser();

  async function deleteSavedRecipe() {
    const email = user.email;
    const uri =
      `https://dev-backend-phantom-kitchen.herokuapp.com/users/` +
      email +
      `/favourites/` +
      recipeID;
    const message = await fetch(uri, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const content = await message.json();
    console.log(content);
    console.log(user);
  }

  async function handleClick() {
    await deleteSavedRecipe();
  }

  return (
    <Button auto onClick={handleClick}>
      Delete recipe
    </Button>
  );
}

export default UnSaveRecipeButton;
