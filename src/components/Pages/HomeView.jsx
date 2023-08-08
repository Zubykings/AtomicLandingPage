import React from "react";
import plant from "../../assets/vera 2.png";
import Hero from "./Hero";
// import CardSection from "../CardSection";
// import '../../index.css'

const HomeView = () => {
  return (
    <div className="h-[100vh] bg-[#eae9e5] relative overflow-hidden w-full">
      <Hero />
      <img
        src={plant}
        alt=""
        className="absolute -bottom-8 right-0 w-[900px]"
      />

    </div>
    
  );
};

export default HomeView;
