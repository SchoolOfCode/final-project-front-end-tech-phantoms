import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AddMealModal } from "../../AddMealModal";
import css from "../styles.module.css";
import {
  Grid,
  Text,
  Button,
  Divider,
  Container,
  Row,
  Card,
} from "@nextui-org/react";

function SaturdayCard({ Saturday, email, show }) {
  const [data, setData] = useState(Saturday);

  const handleDelete = async (id, day) => {
    const fetchURL = `${process.env.NEXT_PUBLIC_API_URL}day/${day}/${id}`;
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
      <Grid.Container gap={2} justify="flex-start">
        {data.map((recipe) => {
          return (
            <Grid xs={5} key={recipe.id}>
              <Card css={{ background: "$ourGrey" }} hoverable>
                <Card.Image
                  height={150}
                  objectFit="cover"
                  width={160}
                  alt="Recipe Image"
                  src={recipe.recipeImage}
                />
                <Card.Body>
                  <Text h4>{recipe.recipeName}</Text>
                </Card.Body>
                <Card.Footer>
                  <Row justify="center">
                    {show && (
                      <Button
                        auto
                        size="sm"
                        color="error"
                        ghost
                        onClick={() => {
                          handleDelete(recipe.id, "Monday");
                        }}
                      >
                        X
                      </Button>
                    )}
                    <Link href={recipe.linkToInstructions} passHref>
                      <Button auto size="sm">
                        Method
                      </Button>
                    </Link>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          );
        })}
        {show && (
          <AddMealModal email={email} setData={updateData} day={"Saturday"} />
        )}
      </Grid.Container>
    </div>
  );
}

export default SaturdayCard;
