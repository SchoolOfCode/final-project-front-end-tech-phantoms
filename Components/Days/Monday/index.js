import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AddMealModal } from "../../AddMealModal";
import css from "../styles.module.css";
import { Container, Row, Col } from "@nextui-org/react";

function MondayCard({ Monday, email, show }) {
  const [data, setData] = useState(Monday);

  const handleDelete = async (id, day) => {
    const fetchURL = `http://localhost:3002/${day}/${id}`;
    const response = await fetch(fetchURL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
    });

    const newData = data.filter((i) => {
      return i.id !== id;
    });
    setData(newData);
  };

  function updateData(daata) {
    setData(daata);
  }
  return (
    <div>
      <h2>Monday</h2>
      <div className={css.container}>
        {data.map((recipe) => {
          return (
            <Container key={recipe.id} className={css.pic}>
              <Row justify="center" align="center">
                <Image
                  height={150}
                  width={150}
                  alt="Recipe Image"
                  src={recipe.recipeImage}
                ></Image>
              </Row>
              <Row justify="center" align="center">
                <h3>{recipe.recipeName}</h3>
              </Row>
              <Row justify="center" align="center">
                <Link href={recipe.linkToInstructions} passHref>
                  <button>Method</button>
                </Link>
              </Row>
              {show && (
                <button
                  onClick={() => {
                    handleDelete(recipe.id, "Monday");
                  }}
                >
                  Delete
                </button>
              )}
            </Container>
          );
        })}
        {show && (
          <AddMealModal email={email} setData={updateData} day={"Monday"} />
        )}
      </div>
    </div>
  );
}

export default MondayCard;
