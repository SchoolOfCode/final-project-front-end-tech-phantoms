import Image from "next/image";
import Link from "next/link";
import { AddMealModal } from "../../AddMealModal";
import { useState } from "react";

function TuesdayCard({ Tuesday, email }) {
  const [data, setData] = useState(Tuesday);

  const handleDelete = async (id, day) => {
    const fetchURL = `http://localhost:3002/${day}/${id}`;
    const response = await fetch(fetchURL, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
    });

    const datas = await response.json();
    const x = data.filter((i) => {
      return i.id !== id;
    });
    setData(x);
  };

  return (
    <div>
      <h2>Tuesday</h2>
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
            <button
              onClick={() => {
                handleDelete(recipe.id, "Tuesday");
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
      <AddMealModal email={email} />
    </div>
  );
}

export default TuesdayCard;
