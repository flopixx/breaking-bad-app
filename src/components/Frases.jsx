import React, { useState, useEffect } from "react";
import Logo from "../img/badd.png";
import Boton from "./Boton";
import Frase from "./Frase";
import Nav from "./Nav";

const Frases = () => {
  const [frase, guardarFrase] = useState({});
  const consultarAPI = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const frase = await api.json();
    guardarFrase(frase[0]);
  };
  useEffect(() => {
    consultarAPI();
  }, []);
  return (
    <div className="content">
      <Nav />

      <div className="center">
        <img src={Logo} alt="" />
      </div>
      <Frase frase={frase} />
      <div className="btnn">
        <Boton consultarAPI={consultarAPI} />
      </div>
    </div>
  );
};

export default Frases;
