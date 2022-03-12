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

function MondayCard({ Monday, email, show }) {
  const [data, setData] = useState(Monday);

  const handleDelete = async (id) => {
    const newData = data.filter((i) => {
      return i.id !== id;
    });
    setData(newData);
  };

  function updateData(newData) {
    setData(newData);
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
                  <Row justify="space-around">
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
          <AddMealModal
            email={email}
            setData={updateData}
            currentData={data}
            day={"Monday"}
          />
        )}
      </Grid.Container>
    </div>
  );
}

export default MondayCard;
