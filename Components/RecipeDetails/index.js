import React from "react";
import Image from "next/image";
import Link from "next/link";

const RecipeDetails = ({ onClick, data }) => {
  return (
    <div>
      <Image
        alt="Recipe banner"
        src={data.image}
        width="100%"
        height="100%"
        layout="responsive"
        objectFit="contain"
      ></Image>
      <h1>{data.label}</h1>
      <hr />
      <h2>Nutrition</h2>
      <p>
        <span>{Math.round(data.calories)}</span> calories per serving
        <br />
        <br />
        <span>{Math.round(data.totalDaily.ENERC_KCAL.quantity)}%</span> daily
        calorie value
        <Link
          href="https://www.nhs.uk/common-health-questions/food-and-diet/what-should-my-daily-intake-of-calories-be/"
          passHref
        >
          <a target="_blank"> &#9432;</a>
        </Link>
        <br />
        <br />
        <span>{data.healthLabels.join(", ")}</span>
        <br />
        <br />
        {data.healthLabels.includes("Vegetarian") && (
          <Image
            height={30}
            width={30}
            alt="Health Label"
            src="https://cdn.icon-icons.com/icons2/2108/PNG/512/vegetarian_icon_130798.png"
          />
        )}
      </p>
      <h2>Ingredients</h2>
      <ul>
        {data.ingredients.map((item) => {
          return <li key={item.food}>{item.text}</li>;
        })}
      </ul>
      <h2>Preparation</h2>
      <Link href={data.url} passHref>
        <a target="_blank">
          <button>Read Instructions</button>
        </a>
      </Link>
      <p>on {data.source}</p>
      <hr />
      <button onClick={onClick}>Save recipe</button>
    </div>
  );
};

export default RecipeDetails;
