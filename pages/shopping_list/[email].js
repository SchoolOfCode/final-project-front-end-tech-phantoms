import React from "react";
import NavBar from "../../Components/NavBar";
import ShoppingItem from "../../Components/ShoppingItem";
import { useUser } from "@auth0/nextjs-auth0";

function ShoppingList({data}) {
  // const [user] = useUser()
  console.log(data)
  return (
    <div>
      <NavBar />
      <h2>Shopping List</h2>
      <div>
        {data.map((item, index) => {
          return (
            <>
              <ShoppingItem key={index} data={item} />
            </>
          );
        }
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const email = encodeURI(context.params.email)
  const fetchURL = `http://localhost:3002/shopping/${email}`;
  const res = await fetch(fetchURL);
  const data = await res.json()
  return {props: {data: data.payload[0].shoppingList}}
}

export default ShoppingList;
