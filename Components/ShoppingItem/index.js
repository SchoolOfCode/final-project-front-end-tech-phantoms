import React from "react";

const ShoppingItem = ({ data }) => {
  return (
    <div>
      ShoppingItem {data.ingredient}
      {data.quantity}
    </div>
  );
};

export default ShoppingItem;
