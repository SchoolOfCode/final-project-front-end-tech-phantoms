import NavBar from "../Components/NavBar";
import MealPlannerCard from "../Components/MealPlannerCard";
import AddMealModal from "../Components/AddMealModal";
import { useState } from "react";

export async function getServerSideProps(context) {
  const savedRecipesRes = await //daysRes]
    fetch("http://localhost:3001/savedRecipes")
    // fetch("http://localhost:3002/days"),
  ;

  const savedRecipes = await savedRecipesRes.json();

  return { props: { savedRecipes } };
}

function MealPlanner({ savedRecipes }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <NavBar />  
      
      <MealPlannerCard />
      {show && <AddMealModal data={savedRecipes} />}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Add
      </button>
    </>
  );
}

export default MealPlanner;
