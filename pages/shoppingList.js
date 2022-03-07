import React from "react";
import NavBar from "../Components/NavBar";
import ShoppingItem from "../Components/ShoppingItem";
import { useUser } from "@auth0/nextjs-auth0";

function ShoppingList() {
  const { user } = useUser();
  return (
    <div>
      <NavBar />
      <h2>Shopping List</h2>
      <div>
        {/* {shoppingListData.map((item, index) => {
          return (
            <>
              <ShoppingItem key={index} data={item.shoppingList} />
            </>
          );
        }
        )} */}
      </div>
    </div>
  );
}

export default ShoppingList;
