import React from "react";
import plant from "../../assets/vera 2.png";
import Hero from "./Hero";
import CardSection from "../CardSection";

const HomeView = () => {
  return (
    <div className="md:h-[100vh] bg-[#eae9e5] relative w-full">
      <Hero />
      <img
        src={plant}
        alt=""
        className="absolute md:-bottom-8 bottom-0 right-0 w-[900px]"
      />
    </div>
  );
};

export default HomeView;
