import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Input, Button, Grid } from "@nextui-org/react";

function SearchBar({ handleFetch }) {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  //users clicks search button
  //Link to search results page with [query]

  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={6}>
        <Input
          type="text"
          placeholder="What are you looking for?"
          value={input}
          onChange={handleChange}
        />
      </Grid>
      <Grid xs={3}>
        <Link href={"/search/" + input} passHref>
          <><Button auto>
            <Image
              height={50}
              width={50}
              alt={"Search Recipes"}
              src={
                "https://cdn.icon-icons.com/icons2/1339/PNG/512/rightarrow_87483.png"
              }
            />
          </Button></>
        </Link>
      </Grid>
    </Grid.Container>
  );
}

export default SearchBar;
