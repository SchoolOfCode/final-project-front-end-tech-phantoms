import React from "react";
import { Checkbox, Button, Spacer } from "@nextui-org/react";

const ShoppingItem = ({ data, onClick }) => {
  return (
    <li style={{display: "flex", alignItems: "center", listStyleType: "none"}}>
      <Checkbox line checked={data.needToBuy}>
        {data.quantity}{" "}
        {data.ingredient}
      </Checkbox>
      <Spacer x={0.5}/>
      <Button onClick={onClick} size="xs" color="error" ghost auto>X</Button>
    </li>
  );
};

export default ShoppingItem
;