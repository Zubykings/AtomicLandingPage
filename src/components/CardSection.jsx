import React from "react";
import Card from "./Card";
import { cardData } from "../assets/cardData";

const CardSection = () => {
  return (
    <div className="w-full absolute -bottom-28 ">
      <div className="w-[90%] flex flex-row flex-wrap m-auto items-center justify-around shadow-2xl bg-white">
        {cardData.map((card) => (
          <Card
            key={card.id}
            img={card.img}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};
// console.log(Card)

export default CardSection;
