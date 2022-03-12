import { Checkbox, Button, Spacer } from "@nextui-org/react";

const ShoppingItem = ({ data, deleteItem, checkItem }) => {
  return (
    <li
      style={{ display: "flex", alignItems: "center", listStyleType: "none" }}
    >
      <Checkbox
        onClick={() => {
          checkItem(data.ingredient);
        }}
        line
        checked={!data.needToBuy}
      >
        {" "}
        {/*this is negated so correct info displays*/}
        {data.quantity} {data.ingredient}
      </Checkbox>
      <Spacer x={0.5} />
      <Button
        onClick={() => {
          deleteItem(data.ingredient);
        }}
        size="xs"
        color="error"
        ghost
        auto
      >
        X
      </Button>
    </li>
  );
};

export default ShoppingItem;
