import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Edit() {
  const [offert, setOffert] = useState({
    tittle: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setOffert((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(offert);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://moduloiv-backend.onrender.com/offert", offert);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h1>Nueva Oferta</h1>
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
      <button onClick={handleClick}>Agregar</button>
    </div>
  );
}

export default Edit;
