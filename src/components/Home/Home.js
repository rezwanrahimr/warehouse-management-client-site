import React from "react";
import App from "../APP/App";
import Banner from "../Banner/Banner";
import Items from "../Items/Items";
import SectionTwo from "../SectionTwo/SectionTwo";
import './Home.css'

// Home Section.
const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Items></Items>
      <SectionTwo></SectionTwo>
      <App></App>
      
    </>
  );
};

export default Home;
