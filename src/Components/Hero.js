import React from "react";
import imgHero from "../img/undraw_learning_sketching_nd4f.svg";
function Hero() {
  return (
    <div className="container px-6 space-x-4 flex flex-col-reverse md:flex-row">
      <div className="md:w-1/2 flex flex-col space-y-5 py-8 justify-center text-center md:text-left text-slate-900">
        <h1 className="font-bold text-3xl md:text-5xl">
          Rapidly build modern websites without ever leaving your HTML.
        </h1>
        <p>
          A utility-first CSS framework packed with classes like flex, pt-4,
          text-center and rotate-90 that can be composed to build any design,
          directly in your markup.
        </p>
        <button className="py-2 px-5 bg-orange-500 rounded-full text-white hover:bg-slate-900 self-center md:self-start">
          Get Started
        </button>
      </div>
      <div className="md:pl-5">
        <img src={imgHero} alt="hero" width={550} />
      </div>
    </div>
  );
}

export default Hero;
