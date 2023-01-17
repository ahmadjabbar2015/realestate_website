import React, { Fragment, useEffect } from "react";
import HeroArea from "../components/heroArea/HeroArea";
import SearchBar from "../components/searchBar/SearchBar";
function Home() {
  return [<HeroArea />, <SearchBar />];
}
export default Home;
