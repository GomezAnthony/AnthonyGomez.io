import React from "react";
import { MdWavingHand } from "react-icons/md";

function Hero() {
  return (
    <div>
      <div className="container w-[80%] py-20 mx-auto max-w-2xl lg:mx-auto">
        <div className="flex py-4">
          <h2 className="text-[#FFD45E] text-1xl md:text-4xl">Hi,</h2>
          <MdWavingHand className=" text-[#FFD45E] text-2xl  lg:text-4xl animate-waving-hand" />
        </div>
        <div>
          <h1 className="mb-5 font-bold text-3xl text-tertiary-color tracking-wider leading-[2rem] md:text-5xl lg:text-6xl">
            I'm Anthony Gomez
          </h1>
          <p className="tracking-normal md:text-lg">A full-stack software engineer from 📍<span className="text-blue-600">Texas</span> who builds and breaks stuff with code. 👨🏻‍💻</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
