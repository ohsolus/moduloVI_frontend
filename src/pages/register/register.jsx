import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [users, setUsers] = useState({
    nombre: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUsers((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(users);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800");
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
        placeholder="nombre"
        onChange={handleChange}
        name="nombre"
      />
      <input
        type="text"
        placeholder="email"
        onChange={handleChange}
        name="email"
      />
      <button onClick={handleClick}>Agregar</button>
    </div>
  );
}

export default Register;
