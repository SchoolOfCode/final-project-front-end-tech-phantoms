import { useState } from "react";
import MondayCard from "../Days/Monday";
import TuesdayCard from "../Days/Tuesday";
import WednesdayCard from "../Days/Wednesday";
import ThursdayCard from "../Days/Thursday";
import FridayCard from "../Days/Friday";
import SaturdayCard from "../Days/Saturday";
import SundayCard from "../Days/Sunday";
import css from "./styles.module.css";
import { Button, Collapse } from "@nextui-org/react";

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
          <Button
            size="sm"
            css={{ background: "$ourGrey" }}
            onClick={() => {
              setShow(true);
            }}
          >
            Edit
          </Button>
        )}
        {show && (
          <>
            <Button
              size="sm"
              css={{ background: "$ourGrey" }}
              onClick={() => {
                setShow(false);
              }}
            >
              Save Changes
            </Button>

            <Button
              size="sm"
              css={{ background: "$ourGrey" }}
              onClick={() => {
                setShow(false);
              }}
            >
              Cancel
            </Button>
          </>
        )}
      </div>
      <Collapse.Group bordered>
        <Collapse title="Monday" expanded>
          <MondayCard Monday={Monday} email={email} show={show} />
        </Collapse>
        <Collapse title="Tuesday">
          <TuesdayCard Tuesday={Tuesday} email={email} show={show} />
        </Collapse>
        <Collapse title="Wednesday">
          <WednesdayCard Wednesday={Wednesday} email={email} show={show} />
        </Collapse>
        <Collapse title="Thursday">
          <ThursdayCard Thursday={Thursday} email={email} show={show} />
        </Collapse>
        <Collapse title="Friday">
          <FridayCard Friday={Friday} email={email} show={show} />
        </Collapse>
        <Collapse title="Saturday">
          <SaturdayCard Saturday={Saturday} email={email} show={show} />
        </Collapse>
        <Collapse title="Sunday">
          <SundayCard Sunday={Sunday} email={email} show={show} />
        </Collapse>
      </Collapse.Group>
    </>
  );
}

export default MealPlannerCard;
