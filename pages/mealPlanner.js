import NavBar from "../Components/NavBar";
import MealPlannerCard from "../Components/MealPlannerCard";
import { useState, useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { AddMealModal } from "../Components/AddMealModal";

export async function getServerSideProps(context) {
  const [
    savedRecipesRes,
    MondayRes,
    TuesdayRes,
    WednesdayRes,
    ThursdayRes,
    FridayRes,
    SaturdayRes,
    SundayRes,
  ] = await Promise.all([
    fetch("http://localhost:3001/savedRecipes"),
    fetch("http://localhost:3002/Monday"),
    fetch("http://localhost:3002/Tuesday"),
    fetch("http://localhost:3002/Wednesday"),
    fetch("http://localhost:3002/Thursday"),
    fetch("http://localhost:3002/Friday"),
    fetch("http://localhost:3002/Saturday"),
    fetch("http://localhost:3002/Sunday"),
  ]);
  const [
    savedRecipes,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  ] = await Promise.all([
    savedRecipesRes.json(),
    MondayRes.json(),
    TuesdayRes.json(),
    WednesdayRes.json(),
    ThursdayRes.json(),
    FridayRes.json(),
    SaturdayRes.json(),
    SundayRes.json(),
  ]);

  return {
    props: {
      savedRecipes,
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
      Sunday,
    },
  };
}

function MealPlanner({
  savedRecipes,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}) {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  const email = user.email;
  return (
    <>
      <NavBar />
      <MealPlannerCard
        Monday={Monday}
        Tuesday={Tuesday}
        Wednesday={Wednesday}
        Thursday={Thursday}
        Friday={Friday}
        Saturday={Saturday}
        Sunday={Sunday}
        email={email}
      />
    </>
  );
}

export default MealPlanner;
