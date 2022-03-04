import {
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
} from "../../days";
import Image from "next/image";
import Link from "next/link";

function recipePlannerCard() {
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
          </div>
        );
      })}
    </>
  );
}

export default recipePlannerCard;
