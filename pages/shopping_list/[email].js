import { useState } from "react";
import NavBar from "../../Components/NavBar";
import ShoppingItem from "../../Components/ShoppingItem";

function ShoppingList({ data, email }) {
  const [listData, setListData] = useState(data);

  async function postDeleteItem(ingredientName) {
    const fetchURL = `${process.env.NEXT_PUBLIC_API_URL}shopping/${email}/delete/${ingredientName}`;

    const res = await fetch(fetchURL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const updatedShoppingList = await res.json();
  }

  async function deleteItem(ingredientName) {
    let itemToDelete;

    const newList = listData.filter((listItem) => {
      if (listItem.ingredient === ingredientName) {
        //if the items match, we want to send delete to API
        itemToDelete = listItem.ingredient;
      }
      return listItem.ingredient !== ingredientName;
    });
    console.log("newList that updates state", newList);
    setListData(newList);
    await postDeleteItem(itemToDelete);
  }

  async function postCheckItem(ingredientName) {
    const fetchURL = `${process.env.NEXT_PUBLIC_API_URL}shopping/${email}/checkOff/${ingredientName}`;

    const res = await fetch(fetchURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const updatedShoppingList = await res.json();
  }

  async function checkItem(ingredientName) {
    let itemToCheck;
    const newList = listData.map((listItem) => {
      if (listItem.ingredient === ingredientName) {
        //find the ingredient in the shopping list
        itemToCheck = listItem.ingredient;
        listItem = { ...listItem, needToBuy: !listItem.needToBuy }; //toggle boolean value
        return listItem; //return changed item
      }
      return listItem; //return unchanged items
    });
    await postCheckItem(itemToCheck);
    setListData(newList);
  }

  return (
    <div>
      <NavBar />
      <h3 style={{ textAlign: "center" }}>Shopping List</h3>
      <hr />
      <div style={{ paddingLeft: "4vw" }}>
        {listData.map((item, index) => {
          return (
            <ShoppingItem
              checkItem={checkItem}
              deleteItem={deleteItem}
              key={Math.floor(Math.random() * 50000)}
              data={item}
            />
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const email = encodeURI(context.params.email);
  const fetchURL = `${process.env.NEXT_PUBLIC_API_URL}shopping/${email}`;
  const res = await fetch(fetchURL);
  const data = await res.json();
  return { props: { email: email, data: data.payload[0].shoppingList } };
}

export default ShoppingList;
