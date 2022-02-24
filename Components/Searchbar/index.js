import React, { useState } from "react";
import Image from "next/image";

function SearchBar() {
  const [input, setInput] = useState("");

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <>
      <input
        type="text"
        placeholder="What are you looking for?"
        value={input}
        onChange={handleChange}
      />
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
    </>
  );
}

export default SearchBar;
