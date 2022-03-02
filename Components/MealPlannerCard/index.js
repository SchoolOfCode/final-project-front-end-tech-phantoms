import React, { useEffect } from "react";
import Image from "next/image";
import css from "../style.module.css";
import { useState } from "react";
import AddMealModal from "../AddMealModal";
import RecipeDayCard from "../RecipeDayCard";

export async function getServerSideProps(context) {
    const res = await fetch("http://localhost:3001/savedRecipes")
    const data = await res.json
    return { props: {data: data} }
}

function MealPlannerCard({ data }) {

  const [show, setShow] = useState(false);


  function handleAdd() {
      setShow(true);
  }

  
 
  return <>{data.map(() =>{<RecipeDayCard recipe={data}/>})}</> //we need to map through the recipe day card
}

export default MealPlannerCard;
