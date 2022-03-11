import React, { useState, useEffect } from "react";
import SavedRecipeCard from "./SavedRecipeCard";
import { Container, Card } from "@nextui-org/react";
import css from "./style.module.css";

function SavedRecipesLayout({ recipeIDs, data }) {
  const [recipesData, setData] = useState(data);
  console.log("recipesData state:", recipesData);

  function deleteSavedRecipe(recipeID) {
    const index = recipeIDs.indexOf(recipeID);

    const newState = [
      ...recipesData.slice(0, index),
      ...recipesData.slice(index + 1, recipesData.length),
    ];
    setData(newState);
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
          <div key={recipeIDs[index]}>
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
                  recipeID={recipeIDs[index]}
                  data={item.recipe}
                  key={recipeIDs[index] + Math.round(Math.random(50000))}
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
