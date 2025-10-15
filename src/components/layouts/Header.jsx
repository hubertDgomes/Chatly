import React from "react";
import Container from "../Container";
import Images from "../Images";
import logo from "/src/assets/logo1.ico";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm flex justify-between font-Libre font-bold">
        <div className="">
          <Images className={"w-[120px] h-[120px]"} src={logo} />
        </div>
        <div className="flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"}><a>Home</a></Link>
            </li>
            <li>
              <Link to={"/login"}><a>Log In</a></Link>
            </li>
            <li>
             <Link to={"/signup"}><a>Sign Up</a></Link>
            </li>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
