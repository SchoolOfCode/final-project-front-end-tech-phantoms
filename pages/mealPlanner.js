import Image from "next/image";
import NavBar from "../Components/NavBar";
import { breakfast, lunch, dinner } from "../mealPlannerDb";
import css from "../Components/style.module.css";

function mealPlanner() {
  return (
    <>
      <NavBar />
      <h1>Monday</h1>
      <div className={css.container}>
        {breakfast.map((meal) => {
          return (
            <>
              <h3 key={meal.linkToInstructions}>{meal.recipeName}</h3>
              <Image
                src={meal.recipeImage}
                alt={meal.recipeName}
                height={100}
                width={100}
              />
              <button>
                <a href={meal.linkToInstructions}> Method</a>
              </button>
            </>
          );
        })}
        {lunch.map((meal) => {
          return (
            <>
              <h3 key={meal.linkToInstructions}>{meal.recipeName}</h3>
              <Image
                src={meal.recipeImage}
                alt={meal.recipeName}
                height={100}
                width={100}
              />
              <button>
                <a href={meal.linkToInstructions}> Method</a>
              </button>
            </>
          );
        })}
        {dinner.map((meal) => {
          return (
            <>
              <h3 key={meal.linkToInstructions}>{meal.recipeName}</h3>
              <Image
                src={meal.recipeImage}
                alt={meal.recipeName}
                height={100}
                width={100}
              />
              <button>
                <a href={meal.linkToInstructions}> Method</a>
              </button>
            </>
          );
        })}
      </div>
      <h1>Tuesday</h1>
      <div className={css.container}>
        {breakfast.map((meal) => {
          return (
            <>
              <h3 key={meal.linkToInstructions}>{meal.recipeName}</h3>
              <Image
                src={meal.recipeImage}
                alt={meal.recipeName}
                height={100}
                width={100}
              />
              <button>
                <a href={meal.linkToInstructions}> Method</a>
              </button>
            </>
          );
        })}
        {lunch.map((meal) => {
          return (
            <>
              <h3 key={meal.linkToInstructions}>{meal.recipeName}</h3>
              <Image
                src={meal.recipeImage}
                alt={meal.recipeName}
                height={100}
                width={100}
              />
              <button>
                <a href={meal.linkToInstructions}> Method</a>
              </button>
            </>
          );
        })}
        {dinner.map((meal) => {
          return (
            <>
              <h3 key={meal.linkToInstructions}>{meal.recipeName}</h3>
              <Image
                src={meal.recipeImage}
                alt={meal.recipeName}
                height={100}
                width={100}
              />
              <button>
                <a href={meal.linkToInstructions}> Method</a>
              </button>
            </>
          );
        })}
      </div>
      <h1>Wednesday</h1>
      <div className={css.container}>
        {breakfast.map((meal) => {
          return (
            <>
              <h3 key={meal.linkToInstructions}>{meal.recipeName}</h3>
              <Image
                src={meal.recipeImage}
                alt={meal.recipeName}
                height={100}
                width={100}
              />
              <button>
                <a href={meal.linkToInstructions}> Method</a>
              </button>
            </>
          );
        })}
        {lunch.map((meal) => {
          return (
            <>
              <h3 key={meal.linkToInstructions}>{meal.recipeName}</h3>
              <Image
                src={meal.recipeImage}
                alt={meal.recipeName}
                height={100}
                width={100}
              />
              <button>
                <a href={meal.linkToInstructions}> Method</a>
              </button>
            </>
          );
        })}
        {dinner.map((meal) => {
          return (
            <>
              <h3 key={meal.linkToInstructions}>{meal.recipeName}</h3>
              <Image
                src={meal.recipeImage}
                alt={meal.recipeName}
                height={100}
                width={100}
              />
              <button>
                <a href={meal.linkToInstructions}> Method</a>
              </button>
            </>
          );
        })}
      </div>
      <h1>Thursday</h1>
      <div className={css.container}>
        {breakfast.map((meal) => {
          return (
            <>
              <h3 key={meal.linkToInstructions}>{meal.recipeName}</h3>
              <Image
                src={meal.recipeImage}
                alt={meal.recipeName}
                height={100}
                width={100}
              />
              <button>
                <a href={meal.linkToInstructions}> Method</a>
              </button>
            </>
          );
        })}
        {lunch.map((meal) => {
          return (
            <>
              <h3 key={meal.linkToInstructions}>{meal.recipeName}</h3>
              <Image
                src={meal.recipeImage}
                alt={meal.recipeName}
                height={100}
                width={100}
              />
              <button>
                <a href={meal.linkToInstructions}> Method</a>
              </button>
            </>
          );
        })}
        {dinner.map((meal) => {
          return (
            <>
              <h3 key={meal.linkToInstructions}>{meal.recipeName}</h3>
              <Image
                src={meal.recipeImage}
                alt={meal.recipeName}
                height={100}
                width={100}
              />
              <button>
                <a href={meal.linkToInstructions}> Method</a>
              </button>
            </>
          );
        })}
      </div>
      <h1>Friday</h1>
      <div className={css.container}>
        {breakfast.map((meal) => {
          return (
            <>
              <h3 key={meal.linkToInstructions}>{meal.recipeName}</h3>
              <Image
                src={meal.recipeImage}
                alt={meal.recipeName}
                height={100}
                width={100}
              />
              <button>
                <a href={meal.linkToInstructions}> Method</a>
              </button>
            </>
          );
        })}
        {lunch.map((meal) => {
          return (
            <>
              <h3 key={meal.linkToInstructions}>{meal.recipeName}</h3>
              <Image
                src={meal.recipeImage}
                alt={meal.recipeName}
                height={100}
                width={100}
              />
              <button>
                <a href={meal.linkToInstructions}> Method</a>
              </button>
            </>
          );
        })}
        {dinner.map((meal) => {
          return (
            <>
              <h3 key={meal.linkToInstructions}>{meal.recipeName}</h3>
              <Image
                src={meal.recipeImage}
                alt={meal.recipeName}
                height={100}
                width={100}
              />
              <button>
                <a href={meal.linkToInstructions}> Method</a>
              </button>
            </>
          );
        })}
      </div>
      <h1>Saturday</h1>
      <div className={css.container}>
        {breakfast.map((meal) => {
          return (
            <>
              <h3 key={meal.linkToInstructions}>{meal.recipeName}</h3>
              <Image
                src={meal.recipeImage}
                alt={meal.recipeName}
                height={100}
                width={100}
              />
              <button>
                <a href={meal.linkToInstructions}> Method</a>
              </button>
            </>
          );
        })}
        {lunch.map((meal) => {
          return (
            <>
              <h3 key={meal.linkToInstructions}>{meal.recipeName}</h3>
              <Image
                src={meal.recipeImage}
                alt={meal.recipeName}
                height={100}
                width={100}
              />
              <button>
                <a href={meal.linkToInstructions}> Method</a>
              </button>
            </>
          );
        })}
        {dinner.map((meal) => {
          return (
            <>
              <h3 key={meal.linkToInstructions}>{meal.recipeName}</h3>
              <Image
                src={meal.recipeImage}
                alt={meal.recipeName}
                height={100}
                width={100}
              />
              <button>
                <a href={meal.linkToInstructions}> Method</a>
              </button>
            </>
          );
        })}
      </div>
      <h1>Sunday</h1>
      <div className={css.container}>
        {breakfast.map((meal) => {
          return (
            <>
              <h3 key={meal.linkToInstructions}>{meal.recipeName}</h3>
              <Image
                src={meal.recipeImage}
                alt={meal.recipeName}
                height={100}
                width={100}
              />
              <button>
                <a href={meal.linkToInstructions}> Method</a>
              </button>
            </>
          );
        })}
        {lunch.map((meal) => {
          return (
            <>
              <h3 key={meal.linkToInstructions}>{meal.recipeName}</h3>
              <Image
                src={meal.recipeImage}
                alt={meal.recipeName}
                height={100}
                width={100}
              />
              <button>
                <a href={meal.linkToInstructions}> Method</a>
              </button>
            </>
          );
        })}
        {dinner.map((meal) => {
          return (
            <>
              <h3 key={meal.linkToInstructions}>{meal.recipeName}</h3>
              <Image
                src={meal.recipeImage}
                alt={meal.recipeName}
                height={100}
                width={100}
              />
              <button>
                <a href={meal.linkToInstructions}> Method</a>
              </button>
            </>
          );
        })}
      </div>
    </>
  );
}

export default mealPlanner;
