import React from "react";
import { MdWavingHand} from "react-icons/md";

function Hero() {
  return (
    <div>
      <div className="container w-[80%] py-20 mx-auto max-w-2xl lg:mx-32">
        <div className="flex py-4">
          <h2 className="text-[#FFD45E] text-2xl md:text-4xl">Hi,</h2>
          <MdWavingHand className=" text-[#FFD45E] text-3xl  lg:text-4xl animate-waving-hand" />
        </div>
        <div>
          <h1 className="mb-5 font-bold text-4xl text-tertiary-color tracking-wider leading-[3rem] md:text-5xl lg:text-6xl">
            I'm Anthony Gomez, building and breaking stuff with code!
          </h1> 
          <div className="flex justify-center">
            <p className="pr-2">Frontend Dev.</p>
            <p className="border-r-2 border-l-2 border-black px-2">Backend Dev.</p>
            <p>📍 Texas</p>
          </div>         
        </div>
      </div>
    </div>
  );
}

export default Hero;
