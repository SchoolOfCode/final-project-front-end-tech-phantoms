import NavBar from "../Components/NavBar"
import mealPlannerDb from "../mealPlannerDb"


 function mealPlanner(){
    return <><NavBar />
   {mealPlannerDb.map((meal)=> {return <h2 key={meal.meal}>{meal.meal}</h2>})}
    </>
}

export default mealPlanner