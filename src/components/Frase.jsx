import React from "react";

const Frase = ({ frase }) => {
  return (
    <div className="frase">
      <h1 className="frase-title">{frase.quote}</h1>
      <p className="frase-paraf">{frase.author}</p>
    </div>
  );
};

export default Frase;
