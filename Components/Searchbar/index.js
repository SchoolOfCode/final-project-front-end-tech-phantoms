import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function SearchBar({ handleFetch }) {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  //users clicks search button
  //Link to search results page with [query]

  return (
    <>
      <input
        type="text"
        placeholder="What are you looking for?"
        value={input}
        onChange={handleChange}
      />
      <Link href={"/search/" + input} passHref>
        <button>
          <Image
            height={50}
            width={50}
            alt={"Search Recipes"}
            src={
              "https://cdn.icon-icons.com/icons2/1339/PNG/512/rightarrow_87483.png"
            }
          />
        </button>
      </Link>
    </>
  );
}

export default SearchBar;
