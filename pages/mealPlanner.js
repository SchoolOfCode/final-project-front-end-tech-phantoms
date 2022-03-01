import NavBar from "../Components/NavBar";
import MealPlannerCard from "../Components/MealPlannerCard";


function mealPlanner() {
  return (
    <>
      <NavBar />
      <h1>Monday</h1>
     <MealPlannerCard/>
      <h1>Tuesday</h1>
     <MealPlannerCard/>
      <h1>Wednesday</h1>
     <MealPlannerCard/>
      <h1>Thursday</h1>
     <MealPlannerCard/>
      <h1>Friday</h1>
     <MealPlannerCard/>
      <h1>Saturday</h1>
     <MealPlannerCard/>
      <h1>Sunday</h1>
     <MealPlannerCard/>
    </>
  );
}

export default mealPlanner;
