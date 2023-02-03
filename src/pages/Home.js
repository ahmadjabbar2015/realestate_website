import React, { Fragment, useEffect } from "react";
import HeroArea from "../components/heroArea/HeroArea";
import SearchBar from "../components/searchBar/SearchBar";
import FeaturedProperties from "../components/FeaturedProperties";
import { useState } from "react";
import PropertySearch from "../actions/propertySearch.js";
import Footer from "../components/Footer";

function Home() {
  const url = PropertySearch();

  const [listings, setListings] = useState(null);

  const fetchSearchResults = (data) => {
    setListings(data);
  };

  const [formData, setFormData] = useState({
    keyword: "",
    propertytype: "",
  });
  // const [propertytype , setPropertyType] = useState(null);
  const { keyword } = formData;
  const { propertytype } = formData;

  const onFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [properties, setProperties] = useState([]);

  const fetchProperties = () => {
    url.get("/properties").then((res) => {
      const props = res;
      setProperties(props);
    });
  };
  useEffect(() => {
    fetchProperties();
  }, []);
  return (
    <>
      <HeroArea />
      <SearchBar
        fetchSearchResults={fetchSearchResults}
        onFormChange={onFormChange}
        keyword={keyword}
        propertytype={propertytype}
      />
      {listings && (
        <FeaturedProperties propertyList={listings} heading={keyword} />
      )}
      <FeaturedProperties
        propertyList={properties}
        heading="Feature Properties"
        subHeading="Our"
      />
      <Footer />
    </>
  );
}
export default Home;
