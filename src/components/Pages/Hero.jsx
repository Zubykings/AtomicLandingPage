import React from "react";
// import Navbar from '../Navbar'
import Header from "../Header";
import Button from "../Button";
import play from "../../assets/play.png";
import Navbar from "../Navbar";

const Hero = () => {
  return (
    <div className=" md:w-[90%] w-full m-auto h-[80vh] flex flex-col relative">
      <Navbar />
      <div className="md:w-full w-[90%] m-auto h-[80vh] flex flex-col relative z-100">

      <div className="flex flex-row h-[41vh] my-auto items-center justify-between w-full">
        <div className="flex flex-col items-start justify-between gap-8">
          <div className="w-[38rem] h-full flex flex-col gap-5">
            <h1 className="font-bold text-6xl tracking-wide ">
              Design a better Website template
            </h1>
            <p className="tracking-wide text-lg">
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
          className="rounded-full border shadow w-10 h-10 flex items-center justify-center absolute right-[200px] cursor-pointer"
        >
          <img src={play} alt="" className="w-5 " />
        </a>
      </div>
    </div>
    </div>
  );
};

export default Hero;
