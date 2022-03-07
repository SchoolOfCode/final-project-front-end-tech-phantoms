import { useState } from "react";
import MondayCard from "../Days/Monday";
import TuesdayCard from "../Days/Tuesday";
import WednesdayCard from "../Days/Wednesday";
import ThursdayCard from "../Days/Thursday";
import FridayCard from "../Days/Friday";
import SaturdayCard from "../Days/Saturday";
import SundayCard from "../Days/Sunday";

function MealPlannerCard({
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
  email,
}) {
  return (
    <>
      <MondayCard Monday={Monday} email={email} />
      <TuesdayCard Tuesday={Tuesday} email={email} />
      <WednesdayCard Wednesday={Wednesday} email={email} />
      <ThursdayCard Thursday={Thursday} email={email} />
      <FridayCard Friday={Friday} email={email} />
      <SaturdayCard Saturday={Saturday} email={email} />
      <SundayCard Sunday={Sunday} email={email} />
    </>
  );
}

export default MealPlannerCard;
