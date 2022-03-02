import React from "react";
import Image from "next/image";
import Link from "next/link";

//TODO: Once the data has been fetched get it as a prop
// access the data to replace our mock data
//TODO: Create save recipe button, that calls a function to do a patch request.

const RecipeDetails = ({ onClick, data }) => {
  console.log(data);
  return (
    <div>
      {/* <Image alt="Recipe banner"></Image> */}
      <h1>{data.label}</h1>
      <hr />
      <h2>Nutrition</h2>
      <p>
        <span>{Math.round(data.calories)}</span> calories per serving
        <br />
        <br />
        <span>{Math.round(data.totalDaily.ENERC_KCAL.quantity)}%</span> daily
        value
        <br />
        <br />
        <span>{data.healthLabels.join(", ")}</span>
      </p>
      <h2>Ingredients</h2>
      <ul>
        {data.ingredients.map((item) => {
          return <li key={item.food}>{item.text}</li>;
        })}
      </ul>
      <h2>Preparation</h2>
      <Link href={data.url} passHref>
        <button>Read Instructions</button>
      </Link>
      <p>on {data.source}</p>
      <hr />
      <button onClick={onClick}>Save recipe</button>
    </div>
  );
};

export default RecipeDetails;
