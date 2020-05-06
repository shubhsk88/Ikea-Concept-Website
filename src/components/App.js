import React from "react";
import { Navbar } from "./Navbar";
import "./styles.css";
import { Hero } from "./Hero";
const App = () => {
  return (
    <div className="container">
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
};

export default App;
