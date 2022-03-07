import React, { useEffect } from "react";

function AddToMealPlannerBtn({ day, setData, image, label, url }) {
  const fetchURL = `http://localhost:3002/${day}`;
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
  };
  async function getUpdatedData() {
    const res = await fetch(`http://localhost:3002/${day}`);
    const data = await res.json();
    setData(data);
  }
  function callBoth() {
    handlePost();
    getUpdatedData();
  }
  return <button onClick={callBoth}>Add</button>;
}

export default AddToMealPlannerBtn;
