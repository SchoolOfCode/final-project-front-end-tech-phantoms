import React from "react";
import { Checkbox } from "@nextui-org/react";

const ShoppingItem = ({ data }) => {
  return (
    <li style={{listStyleType: "none"}}>
      <Checkbox line checked={false}>
        {data.quantity}
        {data.ingredient}
      </Checkbox>
    </li>
  );
};

export default ShoppingItem;
