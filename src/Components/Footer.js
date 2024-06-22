import React from "react";
import pic from "../img/logo-dark.png";
import facebook from "../img/facebook-box-fill.png";
import instagram from "../img/instagram-fill.png";
import youtube from "../img/youtube-fill.png";
import twitter from "../img/twitter-x-fill.png";
import linkedIn from "../img/linkedin-box-fill.png";
function Footer() {
  return (
    <div className=" mt-20">
      <div className="bg-orange-500 py-10 flex flex-col space-y-24 md:space-y-0  md:flex-row md:items-center md:justify-between px-6">
        <h1 className=" pl-5 font-bold text-5xl md:text-4xl  text-white">
          Move even faster with Tailwind UI.
        </h1>
        <button className="py-2 px-5 self-center bg-white rounded-full text-orange-500 hover:bg-slate-900 hover:text-white">
          Start Here
        </button>
      </div>
      <div className="bg-slate-900 px-6 py-10  flex flex-col-reverse md:flex-row">
        <div className="w-1/4 flex flex-col space-y-10">
          <p className="text-white">Copyright © 2023, All Rights Reserved</p>
          <img src={pic} alt="tailwind" width={250}></img>
          <div className="flex space-x-4">
            <img src={facebook} alt="1" width={30}></img>
            <img src={instagram} alt="1" width={30}></img>
            <img src={youtube} alt="1" width={30}></img>
            <img src={twitter} alt="1" width={30}></img>
            <img src={linkedIn} alt="1" width={30}></img>
          </div>
        </div>

        <div className="w-1/4 flex flex-col items-center text-white space-y-6">
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className="w-1/4 flex flex-col items-center text-white space-y-6">
          <p>Imprint</p>
          <p>Privacy</p>
          <p>Credits</p>
        </div>
        <div className="w-1/4 flex flex-col justify-between text-white">
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Subscribe to Newsletter"
              className=" rounded-full py-2 px-5"
            ></input>
            <button className="py-2 px-5 bg-orange-500 rounded-full text-white hover:bg-slate-900">
              Go
            </button>
          </div>
          <p className="hidden md:block">
            Copyright © 2023, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
