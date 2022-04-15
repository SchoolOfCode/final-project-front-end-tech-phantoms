import React from "react";
import Image from "next/image";
import Link from "next/link";
import SaveRecipeButton from "../SaveRecipeButton";
import { Button, Grid, Card, Spacer } from "@nextui-org/react";
import clock from "../../public/timeclock_tiemp_3924.png";

const RecipeCard = ({ recipe, uri }) => {
  let recipeID = uri.substr(-32);

  return (
    <Grid>
      <Card hoverable>
        <div style={{ display: "flex" }}>
          <div>
            <Card.Image
              objectFit="cover"
              height={150}
              width={150}
              alt="Recipe Image"
              src={recipe.image}
            />
          </div>
          <Spacer y={0.5} />
          <div>
            <h4>{recipe.label}</h4>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image height={25} width={25} alt="Recipe Time" src={clock} />
              {recipe.totalTime > 0 ? (
                <p>{recipe.totalTime + "'"} </p>
              ) : (
                <p>{"20'"}</p>
              )}
            </div>
            {recipe.healthLabels.includes("Vegetarian") && (
              <Image
                height={25}
                width={25}
                alt="Health Label"
                src="https://cdn.icon-icons.com/icons2/2108/PNG/512/vegetarian_icon_130798.png"
              />
            )}
            <div style={{ display: "flex" }}>
              <Link href={"/recipe_info/" + recipeID} passHref>
                <Button auto>More Info</Button>
              </Link>
              <Spacer y={0.2} />
              <SaveRecipeButton recipeID={recipeID} />
            </div>
          </div>
        </div>
      </Card>
    </Grid>
  );
};

export default RecipeCard;
