import React from "react";
import NavBar from "../../Components/NavBar";
import SearchBar from "../../Components/SearchBar";

function searchResults({ data }) {
  return (
    <>
      <NavBar />
      <SearchBar></SearchBar>
      <p>{"Fetch Results:" + JSON.stringify(data)}</p>
    </>
  );
}

//https://nextjs.org/docs/basic-features/pages#scenario-1-your-page-content-depends-on-external-data
export async function getServerSideProps(context) {
  //create fetch URL
  //URL encode
  const fetchURL =
    `https://api.edamam.com/api/recipes/v2?type=public&q=` +
    encodeURI(context.params.query) +
    `&app_id=` +
    process.env.EDAMAM_APP_ID +
    `&app_key=` +
    process.env.EDAMAM_APP_KEY;

  const res = await fetch(fetchURL);
  const data = await res.json();

  //feed our component props at pre-render time
  return {
    props: { data },
  };
}

export default searchResults;
