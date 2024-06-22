import React from "react";
import Card from "./Card";
import person1 from "../img/WHduXgEC_400x400.jpg";
import person2 from "../img/adam.jpg";
import person3 from "../img/marcel.jpg";
function Author() {
  return (
    <>
      <div className="container px-5 mt-16 text-center">
        <h1 className="font-bold text-4xl">
          “Best practices” don’t actually work.
        </h1>
        <p className="mt-8 max-w-5xl mx-auto">
          I’ve written a few thousand words on why traditional “semantic class
          names” are the reason CSS is hard to maintain, but the truth is you’re
          never going to believe me until you actually try it. If you can
          suppress the urge to retch long enough to give it a chance, I really
          think you’ll wonder how you ever worked with CSS any other way.
        </p>
        <div className="mt-10 flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-5 md:space-y-0">
          <Card
            picture={person1}
            name={"Adam Sander"}
            description={
              "The way I wrote it changed frequently. It’s not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you’ll realize semantic CSS was a 20 year mistake."
            }
          />
          <Card
            picture={person2}
            name={"Mark Bauer"}
            description={
              "I have no design skills and with Tailwind I can actually make good looking websites with ease and it's everything I ever wanted in a CSS framework."
            }
          />
          <Card
            picture={person3}
            name={"Marcel Khalifa"}
            description={
              "The way I wrote it changed frequently. It’s not a coincidence Tailwind was released the same year. It might look wrong, but spend time with it and you’ll realize semantic CSS was a 20 year mistake."
            }
          />
        </div>
      </div>
    </>
  );
}

export default Author;
