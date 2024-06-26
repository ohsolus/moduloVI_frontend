import React from "react";
import { Link } from "react-router-dom";
import "../../styles/blog.css";

export default function Header() {
  return (
    <header className="home-header">
      <br />
      <h2>Información curricular de los participantes</h2>
      <br />
      <span>
        <button className="btn">
          {" "}
          <Link to="/grades">Ver información</Link>
        </button>
      </span>
    </header>
  );
}
