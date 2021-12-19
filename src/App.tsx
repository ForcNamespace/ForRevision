import React from "react";
import { Routes, Route } from "react-router-dom";
import Cours from "./component/PageCour";
import Home from "./component/Home";
import Nav from "./component/nav/Nav";
import Fiche from "./component/PageFiche";
import Matter from "./component/PageMatter";
import Examen from "./component/PageExamen";

function App() {
  return (
    <div className="App h-screen">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cour" element={<Cours />} />
        <Route path="/fiche" element={<Fiche />} />
        <Route path="/matter" element={<Matter />} />
        <Route path="/Examen" element={<Examen />} />
      </Routes>
    </div>
  );
}

export default App;
