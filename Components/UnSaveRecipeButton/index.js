import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { Button } from "@nextui-org/react";

function UnSaveRecipeButton({ recipeID, deleteSavedRecipe }) {
  const { user } = useUser();

  async function postDeleteSavedRecipe() {
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
  }

  async function handleClick() {
    await postDeleteSavedRecipe();
    deleteSavedRecipe(recipeID);
  }

  return (
    <Button color="error" size="xs" onClick={handleClick}>
      Delete Recipe
    </Button>
  );
}

export default UnSaveRecipeButton;
