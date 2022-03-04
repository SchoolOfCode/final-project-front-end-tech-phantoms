import React from "react";
import RecipeDayCard from "../RecipeDayCard";

function AddMealModal({ data }) {
  return (
    <div>
      {data.map((id) => { 
        return <RecipeDayCard id={id} key={id} />;
      })}
    </div>
  );
}

export default AddMealModal;
