import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import UnSaveRecipeButton from "../../UnSaveRecipeButton";
import { Grid, Card } from "@nextui-org/react";

function SavedRecipeCard({ recipeID }) {
  const [recipeData, setRecipeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(true);

  useEffect(() => {
    async function getRecipeData() {
      try {
        setIsLoading(true);
        const fetchURL = `https://api.edamam.com/api/recipes/v2/${recipeID}?type=public&app_id=${process.env.NEXT_PUBLIC_EDAMAM_APP_ID}&app_key=${process.env.NEXT_PUBLIC_EDAMAM_APP_KEY}`;
        const res = await fetch(fetchURL);
        const data = await res.json();
        setRecipeData(data.recipe);
        setIsLoading(false);
      } catch (err) {
        console.log("Error 429 Too many requests to API");
        setTimeout(getRecipeData, 15000);
      }
    }
    getRecipeData();
  }, [recipeID]);

  return isLoading ? (
    <h1>Loading......</h1>
  ) : show ? (
    <Grid.Container>
      <Grid>
        <Image
          width={120}
          height={120}
          src={recipeData.image}
          alt={"Recipe Image"}
        ></Image>
      </Grid>
      <Grid>
        <Grid>
          <h4>{recipeData.label}</h4>
        </Grid>

        <Grid.Container>
          <Grid>
            <div className="cookingTimeDiv">
              <Grid>
                <Image
                  height={20}
                  width={20}
                  alt="Recipe Time"
                  src="https://cdn.icon-icons.com/icons2/2098/PNG/512/clock_icon_128908.png"
                />
              </Grid>
              <Grid>
                {recipeData.totalTime > 0 ? (
                  <p>{recipeData.totalTime + "'"} </p>
                ) : (
                  <p>{"20'"}</p>
                )}
              </Grid>
            </div>
          </Grid>
        </Grid.Container>
        <Grid>
          {recipeData.healthLabels.includes("Vegetarian") && (
            <Image
              height={20}
              width={15}
              alt="Health Label"
              src="https://cdn.icon-icons.com/icons2/2108/PNG/512/vegetarian_icon_130798.png"
            />
          )}
        </Grid>
        <Grid>
          <a>
            <Link href={"/recipe_info/" + recipeID} passHref>
              <Button size="xs">More Info</Button>
            </Link>
          </a>
          <UnSaveRecipeButton
            setShow={setShow}
            recipeID={recipeID}
          ></UnSaveRecipeButton>
        </Grid>
      </Grid>
    </Grid.Container>
  ) : (
    <h1>Recipe deleted</h1>
  );
}

export default SavedRecipeCard;
