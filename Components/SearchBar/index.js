import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input, Button, Grid } from "@nextui-org/react";

function SearchBar({ handleFetch }) {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <Grid.Container gap={1} justify="center">
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Grid md>
          <Input
            type="text"
            placeholder="What are you looking for?"
            size="lg"
            width="50vw"
            bordered="true"
            borderWeight="normal"
            required="true"
            value={input}
            onChange={handleChange}
          />
        </Grid>
        <Grid sm>
          <Link href={"/search/" + input} passHref>
            <a>
              <Button height="10em" shadow auto>
                <Image
                  padding="1em"
                  height={35}
                  width={35}
                  alt={"Search Recipes"}
                  src="/arrow_right.svg"
                />
              </Button>
            </a>
          </Link>
        </Grid>
      </div>
    </Grid.Container>
  );
}

export default SearchBar;
