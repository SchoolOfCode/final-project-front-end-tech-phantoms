import React from "react";
import SavedRecipeCard from "./SavedRecipeCard";
import { Container, Card } from "@nextui-org/react";

function SavedRecipesLayout({ savedRecipesData }) {
  return (
    <div>
      {savedRecipesData.map((item, index) => {
        return (
          <>
            <Container>
              <Card bordered shadow={false} hoverable css={{ mw: "400px" }}>
                <SavedRecipeCard recipeID={item} key={index} />
              </Card>
            </Container>
          </>
        );
      })}
    </div>
  );
}

export default SavedRecipesLayout;
