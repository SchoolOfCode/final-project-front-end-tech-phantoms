import NavBar from "../Components/NavBar";
import MealPlannerCard from "../Components/MealPlannerCard";
import AddMealModal from "../pages/AddMealModal";
import { useState } from "react";

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3001/savedRecipes");
  const data = await res.json();

  return { props: { data } };
}
function MealPlanner({ data }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <NavBar />
      <h1>Monday</h1>
      <MealPlannerCard data={data} />
      {show && <AddMealModal data={data} />}
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
