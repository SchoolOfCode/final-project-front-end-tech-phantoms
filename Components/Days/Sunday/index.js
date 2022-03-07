import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AddMealModal } from "../../AddMealModal";
import css from "../styles.module.css";

function SundayCard({ Sunday, email, show }) {
  const [data, setData] = useState(Sunday);

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
      <h2>Sunday</h2>
      <div className={css.container}>
        {data.map((recipe) => {
          return (
            <div key={recipe.id}>
              <Image
                height={150}
                width={150}
                alt="Recipe Image"
                src={recipe.recipeImage}
              ></Image>
              <h3>{recipe.recipeName}</h3>
              <Link href={recipe.linkToInstructions} passHref>
                <button>Method</button>
              </Link>
              {show && (
                <button
                  onClick={() => {
                    handleDelete(recipe.id, "Sunday");
                  }}
                >
                  Delete
                </button>
              )}
            </div>
          );
        })}
        {show && (
          <AddMealModal email={email} setData={updateData} day={"Sunday"} />
        )}
      </div>
    </div>
  );
}

export default SundayCard;