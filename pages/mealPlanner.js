import NavBar from "../Components/NavBar";
import MealPlannerCard from "../Components/MealPlannerCard";

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3001/savedRecipes");
  const data = await res.json();

  return { props: { data } };
}
function mealPlanner({ data }) {
  return (
    <>
      <NavBar />
      <h1>Monday</h1>
      <MealPlannerCard data={data} />
      <button>Add</button>
    </>
  );
}

export default mealPlanner;
