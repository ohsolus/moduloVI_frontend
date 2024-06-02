import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function Update() {
  const [offert, setOffert] = useState({
    tittle: "",
    description: "",
  });

  const navigate = useNavigate();
  const location = useLocation();

  const offertid = location.pathname.split("/")[2];

  const handleChange = (e) => {
    setOffert((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(offert);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/offert/" + offertid, offert);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h1>Editar Oferta</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="tittle"
      />
      <input
        type="text"
        placeholder="description"
        onChange={handleChange}
        name="description"
      />
      <button className="formButton" onClick={handleClick}>
        Actualizar
      </button>
    </div>
  );
}

export default Update;
