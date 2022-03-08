import React, { useEffect, useState } from "react";
import RecipeDayCard from "../RecipeDayCard";
import { Modal, Button } from "@nextui-org/react";
import AddToMealPlannerBtn from "../AddToMealPlannerBtn";

export function AddMealModal({ email, setData, day }) {
  const [ids, setIds] = useState(null);
  // const [email, setEmail] = useState(null);
  // if (user) {
  //   setEmail(user.email);
  // }
  // const email = user.email;
  useEffect(() => {
    async function getSavedRecipesIDs() {
      const res = await fetch(
        `https://dev-backend-phantom-kitchen.herokuapp.com/users/${email}/favourites/`
      );
      const data = await res.json();
      setIds(data.payload[0].saved_recipes);
    }
    getSavedRecipesIDs();
  }, []);
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>
      <Button auto shadow onClick={handler}>
        Add
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Body>
          <div>
            {ids?.map((id) => {
              return (
                <>
                  <RecipeDayCard id={id} key={id} setData={setData} day={day} />
                  <br />
                </>
              );
            })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onClick={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
// export default AddMealModal;
