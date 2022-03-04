import {
  monday as m,
  tuesday as t,
  wednesday as w,
  thursday as th,
  friday as f,
  saturday as s,
  sunday as su,
} from "../../days";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function RecipePlannerCard() {
  const [monday, setMonday] = useState(m);
  const [tuesday, setTuesday] = useState(t);
  const [wednesday, setWednesday] = useState(w);
  const [thursday, setThursday] = useState(th);
  const [friday, setFriday] = useState(f);
  const [saturday, setSaturday] = useState(s);
  const [sunday, setSunday] = useState(su);

  function handleDelete(itemToDelete, day) {
    const newData = day.filter((item) => {
      return item.linkToInstructions !== itemToDelete;
    });
    if ((day = "monday")) {
      setMonday(newData);
    } 
     if ((day = "tuesday")) {
      setTuesday(newData);
    } 
     if ((day = "wednesday")) {
      setWednesday(newData);
    } 
     if ((day = "thursday")) {
      setThursday(newData);
    } 
     if ((day = "friday")) {
      setFriday(newData);
    } 
     if ((day = "saturday")) {
      setSaturday(newData);
    } 
     if ((day = "sunday")) {
      setSunday(newData);
    }
  }
  return (
    <>
      <h1>monday</h1>
      {monday.map((recipe) => {
        return (
          <div key={recipe.linkToInstructions}>
            <Image
              src={recipe.recipeImage}
              alt={recipe.recipeName}
              height={100}
              width={100}
            />
            <h3 key={recipe}>{recipe.recipeName}</h3>
            <Link href={recipe.linkToInstructions} passHref>
              <button>method</button>
            </Link>
            <button
              onClick={() => {
                handleDelete(recipe.linkToInstructions, monday);
              }}
            >Delete</button>
          </div>
        );
      })}
      <h1>tuesday</h1>
      {tuesday.map((recipe) => {
        return (
          <div key={recipe.linkToInstructions}>
            <Image
              src={recipe.recipeImage}
              alt={recipe.recipeName}
              height={100}
              width={100}
            />
            <h3 key={recipe}>{recipe.recipeName}</h3>
            <Link href={recipe.linkToInstructions} passHref>
              <button>method</button>
            </Link>
            <button
              onClick={() => {
                handleDelete(recipe.linkToInstructions, tuesday);
              }}
            >Delete</button>
          </div>
        );
      })}
      <h1>wednesday</h1>
      {wednesday.map((recipe) => {
        return (
          <div key={recipe.linkToInstructions}>
            <Image
              src={recipe.recipeImage}
              alt={recipe.recipeName}
              height={100}
              width={100}
            />
            <h3 key={recipe}>{recipe.recipeName}</h3>
            <Link href={recipe.linkToInstructions} passHref>
              <button>method</button>
            </Link>
            <button
              onClick={() => {
                handleDelete(recipe.linkToInstructions, wednesday);
              }}
            >Delete</button>
          </div>
        );
      })}
      <h1>thursday</h1>
      {thursday.map((recipe) => {
        return (
          <div key={recipe.linkToInstructions}>
            <Image
              src={recipe.recipeImage}
              alt={recipe.recipeName}
              height={100}
              width={100}
            />
            <h3 key={recipe}>{recipe.recipeName}</h3>
            <Link href={recipe.linkToInstructions} passHref>
              <button>method</button>
            </Link>
            <button
              onClick={() => {
                handleDelete(recipe.linkToInstructions, thursday);
              }}
            >Delete</button>
          </div>
        );
      })}
      <h1>friday</h1>
      {friday.map((recipe) => {
        return (
          <div key={recipe.linkToInstructions}>
            <Image
              src={recipe.recipeImage}
              alt={recipe.recipeName}
              height={100}
              width={100}
            />
            <h3 key={recipe}>{recipe.recipeName}</h3>
            <Link href={recipe.linkToInstructions} passHref>
              <button>method</button>
            </Link>
            <button
              onClick={() => {
                handleDelete(recipe.linkToInstructions, friday);
              }}
            >Delete</button>
          </div>
        );
      })}
      <h1>saturday</h1>
      {saturday.map((recipe) => {
        return (
          <div key={recipe.linkToInstructions}>
            <Image
              src={recipe.recipeImage}
              alt={recipe.recipeName}
              height={100}
              width={100}
            />
            <h3 key={recipe}>{recipe.recipeName}</h3>
            <Link href={recipe.linkToInstructions} passHref>
              <button>method</button>
            </Link>
            <button
              onClick={() => {
                handleDelete(recipe.linkToInstructions, saturday);
              }}
            >Delete</button>
          </div>
        );
      })}
      <h1>sunday</h1>
      {sunday.map((recipe) => {
        return (
          <div key={recipe.linkToInstructions}>
            <Image
              src={recipe.recipeImage}
              alt={recipe.recipeName}
              height={100}
              width={100}
            />
            <h3 key={recipe}>{recipe.recipeName}</h3>
            <Link href={recipe.linkToInstructions} passHref>
              <button>method</button>
            </Link>
            <button
              onClick={() => {
                handleDelete(recipe.linkToInstructions, sunday);
              }}
            >Delete</button>
          </div>
        );
      })}
    </>
  );
}

export default RecipePlannerCard;
