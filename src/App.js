import React from "react";
import "./App.css";

import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frases from "./components/Frases";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frases" element={<Frases />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
