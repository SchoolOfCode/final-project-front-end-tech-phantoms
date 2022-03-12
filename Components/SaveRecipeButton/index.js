import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import { Button } from "@nextui-org/react";

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
    const content = await message.json();
    console.log(content);
  }

  async function handleClick() {
    await postSavedRecipe();
  }

  if (user) {
    return (
      <Button auto onClick={handleClick}>
        Save recipe
      </Button>
    );
  }

  return (
    <>
      <Link href="/api/auth/[...auth0]" as="/api/auth/login">
        <a>
          <Button auto>Login to save</Button>
        </a>
      </Link>
    </>
  );
}

export default SaveRecipeButton;
