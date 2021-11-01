import React, { useState, useEffect } from "react";
import Charactergridd from "./Charactergridd";
import Header from "./Header";
import Nav from "./Nav";
import Search from "./Search";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isloading, setLoading] = useState(true);
  const [query, setBus] = useState("");

  useEffect(() => {
    const request = async () => {
      const url = `https://www.breakingbadapi.com/api/characters?name=${query} `;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      setItems(resultado);
      setLoading(false);
    };
    request();
  }, [query]);
  return (
    <>
      <Nav />
      <Header />
      <Search getQuery={(q) => setBus(q)} />
      <Charactergridd isloading={isloading} items={items} />
    </>
  );
};

export default Home;
