import React, { useEffect } from "react";
import css from "./styles.module.css";

function AddToMealPlannerBtn({ day, setData, image, label, url }) {
  const fetchURL = `http://localhost:3010/day/${day}`;
  let randomID = Math.floor(
    Math.random() * Math.floor(Math.random() * Date.now())
  );
  const handlePost = async () => {
    const response = await fetch(fetchURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: randomID,
        recipeName: label,
        recipeImage: image,
        linkToInstructions: url,
      }),
    });
    getUpdatedData();
  };
  async function getUpdatedData() {
    const res = await fetch(`http://localhost:3010/day/${day}`);
    const data = await res.json();
    setData(data);
  }

  return (
    <button onClick={handlePost} className={css.btn}>
      Add To Meal Planner
    </button>
  );
}

export default AddToMealPlannerBtn;
