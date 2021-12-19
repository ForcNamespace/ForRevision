import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="bg-black text-white sticky top-0 flex">
      <p className="mr-4">ForRevision</p>
      <Link className="mr-4" to={"/"}>
        Home
      </Link>
      <Link className="mr-4" to={"/cour"}>
        Cours
      </Link>
      <Link className="mr-4" to={"/matter"}>
        Matter
      </Link>
      <Link className="mr-4" to={"/fiche"}>
        Fiche
      </Link>
      <Link className="mr-4" to={"/examen"}>
        Examen
      </Link>
    </div>
  );
};

export default Nav;
