import React, { useState, useEffect } from "react";
import SavedRecipeCard from "./SavedRecipeCard";
import { Container, Card } from "@nextui-org/react";
import css from "./style.module.css";

function SavedRecipesLayout({ recipeIDs, data }) {
  const [recipesData, setData] = useState(data);
  console.log("SavedRecipesLayout - data", recipesData !== undefined);
  console.log("SavedRecipesLayout - recipeIDs", recipeIDs);

  function deleteSavedRecipe(recipeID) {
    // const index = recipeIDs.indexOf(recipeID);
    // const newState = [
    //   ...recipeIDs.slice(0, index),
    //   ...recipeIDs.slice(index + 1, recipeIDs.length),
    // ];
    // setRecipeIDs(newState);
    console.log("deleteSavedRecipe() clicked, for:", recipeID);
  }
  return (
    <div>
      <div>
        <h3 className={css.title}>Saved Recipes</h3>
        <hr></hr>
      </div>
      {recipesData.map((item, index) => {
        return (
          <div /* key={recipeIDs[index]} */>
            <Container className={css.container}>
              <Card
                className={css.card}
                shadow={true}
                clickable
                bordered
                hoverable
                css={{ mw: "375px" }}
              >
                <SavedRecipeCard
                  deleteSavedRecipe={deleteSavedRecipe}
                  // recipeID={recipeIDs[index]}
                  // key={recipeIDs[index]}
                />
              </Card>
            </Container>
          </div>
        );
      })}
    </div>
  );
}

export default SavedRecipesLayout;
