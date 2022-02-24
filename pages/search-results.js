import React from "react";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";

function searchResults() {
  //user input from searchbar will be sent here
  //fetch data using user input

  return (
    <>
      <NavBar />
      <SearchBar></SearchBar>
    </>
  );
}

//https://nextjs.org/docs/basic-features/pages#scenario-1-your-page-content-depends-on-external-data
export async function getStaticProps() {
  const res = await fetch(
    "https://api.edamam.com/api/recipes/v2?type=public&q=cheese&app_id=9c05887d&app_key=0bb927a239eeaacb5919ba8f44ce11e9"
  );
  const data = await res.json();
  //probably some more data manipulation here
  console.log(data.hits);

  //feed our component props at pre-render time
  return {
    props: {
      recipes: data.hits,
    },
  };
}

export default searchResults;
