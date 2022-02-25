import React from "react";
import NavBar from "../../Components/NavBar";
import SearchBar from "../../Components/SearchBar";

function searchResults({ query }) {
  return (
    <>
      <NavBar />
      <SearchBar></SearchBar>
      <p>{"Search:" + JSON.stringify(query)}</p>
    </>
  );
}

//https://nextjs.org/docs/basic-features/pages#scenario-1-your-page-content-depends-on-external-data
export async function getServerSideProps(context) {
  return {
    props: {
      query: JSON.parse(JSON.stringify(context.params.query)),
    },
  };
}

export default searchResults;
