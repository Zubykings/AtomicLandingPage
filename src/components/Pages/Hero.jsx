import React from "react";
// import Navbar from '../Navbar'
import Header from "../Header";
import Button from "../Button";
import play from "../../assets/play.png";
import Navbar from "../Navbar";
import CardSection from "../CardSection";

const Hero = () => {
  return (
    <div className=" md:w-[90%] w-full m-auto flex flex-col relative ">
      <Navbar />
      <div className="md:w-full w-[90%] m-auto h-[62vh] flex flex-col relative z-100">
        <div className="flex md:flex-row flex-col lg:h-[41vh] my-auto items-center md:justify-between justify-end w-full overflow-hidden z-10 ">
          <div className="flex flex-col items-start  gap-8">
            <div className="lg:w-[38rem] md:w-[65%] h-full flex flex-col gap-5">
              <h1 className="font-bold lg:text-6xl text-4xl md:tracking-wide ">
                Design a better Website template
              </h1>
              <p className="lg:tracking-wide  text-lg">
                Buiding your brand's Website and get detailes insigts on how
                template are created
              </p>
            </div>
            <Button
              text="FREE DOWNLOAD"
              bgColor="bg-[#188754]"
              textColor="text-[#fff]"
              radius="rounded"
            />
          </div>

          <a
            href=""
            className="rounded-full border shadow-lg w-10 h-10 flex items-center justify-center absolute lg:right-[200px] right-20 cursor-pointer bg-[#eae9e5]"
          >
            <img src={play} alt="" className="w-5" />
          </a>
        </div>
      </div>
      <div className="absolute lg:-bottom-[21rem] md:-bottom-[17rem] -bottom-64 z-20 ">
        <CardSection />
      </div>
    </div>
  );
};

export default Hero;
