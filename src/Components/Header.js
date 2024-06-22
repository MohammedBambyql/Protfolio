import React from "react";
import logoLight from "../img/logo-light.png";
import { Route, Routes, Link } from "react-router-dom";
import Hero from "./Hero";
import Author from "./Author";
function Header() {
  const style = "text-slate-900 hover:text-slate-500";
  // const navigate = useNavigate();
  return (
    <>
      <div className="container p-6 flex items-center justify-between">
        <div>
          <img src={logoLight} width={200} alt="Tailwind"></img>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" class={`${style}`}>
            Home
          </Link>
          <Link to="/about" class={`${style}`}>
            About
            {/* <button
            onClick={() => {
              navigate("/about");
            }}
            class={`${style}`}
          >
            About
          </button> */}
          </Link>
          <Link to="/contact" class={`${style}`}>
            Contact
          </Link>
          <Link to="/social" class={`${style}`}>
            Social
          </Link>
          <Link
            to="/call"
            className="py-2 px-5 bg-orange-500 rounded-full text-white hover:bg-slate-900"
          >
            Call Me
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<Author />} />
        <Route path="/contact" element={""} />
        <Route path="/social" element={""} />
        <Route path="/call" element={""} />
      </Routes>
    </>
  );
}

export default Header;
