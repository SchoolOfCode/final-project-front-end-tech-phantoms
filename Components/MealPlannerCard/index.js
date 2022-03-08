import { useState } from "react";
import MondayCard from "../Days/Monday";
import TuesdayCard from "../Days/Tuesday";
import WednesdayCard from "../Days/Wednesday";
import ThursdayCard from "../Days/Thursday";
import FridayCard from "../Days/Friday";
import SaturdayCard from "../Days/Saturday";
import SundayCard from "../Days/Sunday";
import css from "./styles.module.css";

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
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={css.edit}>
        {!show && (
          <button
            onClick={() => {
              setShow(true);
            }}
          >
            Edit
          </button>
        )}
        {show && (
          <button
            onClick={() => {
              setShow(false);
            }}
          >
            Save Changes
          </button>
        )}
      </div>
      <MondayCard Monday={Monday} email={email} show={show} />
      <TuesdayCard Tuesday={Tuesday} email={email} show={show} />
      <WednesdayCard Wednesday={Wednesday} email={email} show={show} />
      <ThursdayCard Thursday={Thursday} email={email} show={show} />
      <FridayCard Friday={Friday} email={email} show={show} />
      <SaturdayCard Saturday={Saturday} email={email} show={show} />
      <SundayCard Sunday={Sunday} email={email} show={show} />
    </>
  );
}

export default MealPlannerCard;
