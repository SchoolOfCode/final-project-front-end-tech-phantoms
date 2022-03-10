import React from "react";
import SavedRecipeCard from "./SavedRecipeCard";
import { Container, Card } from "@nextui-org/react";
import css from "./style.module.css";

function SavedRecipesLayout({ savedRecipesData }) {
  return (
    <div>
      <div>
        <h3 className={css.title}>Saved Recipes</h3>
        <hr></hr>
      </div>
      {savedRecipesData.map((item, index) => {
        return (
          <>
            <Container className={css.container}>
              {/* <div> */}
              <Card
                className={css.card}
                shadow={true}
                clickable
                bordered
                hoverable
                css={{ mw: "375px" }}
              >
                <SavedRecipeCard recipeID={item} key={index} />
              </Card>
              {/* </div> */}
            </Container>
          </>
        );
      })}
    </div>
  );
}

export default SavedRecipesLayout;
