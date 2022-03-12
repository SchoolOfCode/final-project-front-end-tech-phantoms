import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import UnSaveRecipeButton from "../../UnSaveRecipeButton";
import { Grid, Card } from "@nextui-org/react";
import css from "./style.module.css";

function SavedRecipeCard({ recipeID, data, deleteSavedRecipe }) {
  return (
    <Grid.Container>
      <Grid>
        <div className={css.imageContainer}>
          <div className={css.image}>
            <Card.Image
              layout="fill"
              width={120}
              height={120}
              src={data.image}
              alt={"Recipe Image"}
            />
          </div>
        </div>
      </Grid>
      <Grid>
        <Grid className={css.infoContainer}>
          <Grid>
            <div className={css.titleContainer}>
              <h3>{data.label.substr(0, 16)}</h3>
            </div>
          </Grid>
          <Grid>
            <div className={css.cookingContainer}>
              <Grid>
                <Image
                  height={25}
                  width={25}
                  alt="Recipe Time"
                  src="https://cdn.icon-icons.com/icons2/2098/PNG/512/clock_icon_128908.png"
                />
              </Grid>
              <Grid>
                {data.totalTime > 0 ? (
                  <p>{data.totalTime + "'"} </p>
                ) : (
                  <p>{"20'"}</p>
                )}
              </Grid>
            </div>
          </Grid>
          <Grid>
            {data.healthLabels.includes("Vegetarian") && (
              <Image
                height={25}
                width={25}
                alt="Health Label"
                src="https://cdn.icon-icons.com/icons2/2108/PNG/512/vegetarian_icon_130798.png"
              />
            )}
          </Grid>
          <Grid>
            <div className={css.buttonContainer}>
              <a>
                <Link href={"/recipe_info/" + recipeID} passHref>
                  <Button size="xs">More Info</Button>
                </Link>
              </a>
              <UnSaveRecipeButton
                deleteSavedRecipe={deleteSavedRecipe}
                recipeID={recipeID}
              ></UnSaveRecipeButton>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid.Container>
  );
}

export default SavedRecipeCard;
