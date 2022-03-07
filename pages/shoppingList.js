import React from "react";
import NavBar from "../Components/NavBar";
import { shoppingListData } from "../shoppingListDb";

function shoppingList() {
  return (
    <div>
      <h2>Shopping List</h2>
      <NavBar />
    </div>
  );
}

export default shoppingList;
