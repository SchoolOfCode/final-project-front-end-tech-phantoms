import React, { useState } from "react";
import SavedRecipeCard from "./SavedRecipeCard";
import { Container, Card } from "@nextui-org/react";
import css from "./style.module.css";

function SavedRecipesLayout({ savedRecipesData }) {
  const [recipeIDs, setRecipeIDs] = useState(savedRecipesData);

  function deleteSavedRecipe(recipeID) {
    const index = recipeIDs.indexOf(recipeID);
    const newState = [
      ...recipeIDs.slice(0, index),
      ...recipeIDs.slice(index + 1, recipeIDs.length),
    ];
    setRecipeIDs(newState);
    console.log("Button has been clicked", recipeID);
  }
  return (
    <div>
      <div>
        <h3 className={css.title}>Saved Recipes</h3>
        <hr></hr>
      </div>
      {recipeIDs.map((item, index) => {
        return (
          <div key={item}>
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
                  recipeID={item}
                  key={index}
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
