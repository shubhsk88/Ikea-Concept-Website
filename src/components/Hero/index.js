import React from "react";
import { Search } from "./Search";
import "./style.css";
export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="header">
          Make yourself <br /> at home
        </div>
        <Search />
        <div className="hero__text">
          You can ask about <a href="/">products,</a> <a href="/">open hours</a>{" "}
          whatever you want!
        </div>
      </div>
    </div>
  );
};
