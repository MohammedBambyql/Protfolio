import React from "react";
function Card(prob) {
  const divStyle =
    "md:w-1/3 flex flex-col items-center rounded-lg space-y-2 p-6 bg-slate-100 hover:bg-white";
  // const divStyle =
  //   "md:w-1/3 flex flex-col items-center p-6 space-y-2 rounded-lg border border-slate-200 bg-slate-100 hover:bg-white transition-all ease-in-out";
  const h5Style = "font-bold text-lg text-slate-900";
  const imgStyle = "rounded-full -mt-12";
  const pStyle = "leading-5 text-sm text-slate-700";
  return (
    <div className={`${divStyle}`}>
      <img
        src={prob.picture}
        alt="p1"
        className={`${imgStyle}`}
        width={70}
      ></img>
      <h5 className={`${h5Style}`}>{prob.name}</h5>
      <p className={`${pStyle}`}>{prob.description}</p>
    </div>
  );
}

export default Card;
