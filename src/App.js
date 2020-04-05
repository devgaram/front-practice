import React from "react";
import HomePage from "./pages/home";
import "./styles/default.scss";

export default function App() {
  return (
    <>
      <div id="bg"></div>
      <div id="container">
        <HomePage />  
      </div>               
    </>
  );
}
