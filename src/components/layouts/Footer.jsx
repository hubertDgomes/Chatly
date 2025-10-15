import React from "react";
import Container from "../Container";
import Images from "../Images";
import logo from "/src/assets/logo1.ico";
const Footer = () => {
  return (
    <>
      <div className="bg-base-200 font-Libre">
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              Chatly
            </p>
          </aside>
        </footer>
      </div>
    </>
  );
};

export default Footer;
