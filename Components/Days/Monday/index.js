import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AddMealModal } from "../../AddMealModal";
import css from "../styles.module.css";
import { Grid, Text, Button, Divider, Container, Row, Card } from "@nextui-org/react";

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
            <Container key={recipe.id} className={css.pic} gap={2}>
            <Grid sm={12} md={5}>
            <Card css={{ mw: "330px", background:'$ourGrey' }} hoverable>
            <Card.Header>
                <Image
                  height={150}
                  width={150}
                  alt="Recipe Image"
                  src={recipe.recipeImage}
                ></Image>
              </Card.Header>
              <Card.Body css={{ py: '$10' }}>
          <Text h3>
          {recipe.recipeName}  
          </Text>
        </Card.Body>
        <Divider/>
        <Card.Footer>
        <Row justify="space-evenly">
        {show && (
                <Button size="sm" color="error"
                  onClick={() => {
                    handleDelete(recipe.id, "Monday");
                  }}
                >
                  Delete
                </Button>
              )}
            <Link href={recipe.linkToInstructions} passHref>
                  <Button size="sm">Method</Button>
                </Link>
          </Row>
        </Card.Footer>
      
          
              </Card>
            </Grid>
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
