import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Test() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8800/test");
        setUsers(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUsers();
  }, []);

  return (
    <div className="space-y-4 w-[400px]">
      <h1 className="semi-bold">Tech Talent Hub Ofertas de Empleo</h1>

      <div className="App">
        {users.map((user) => (
          <div className="offert" key={user.idUser}>
            <h2>{user.nombre}</h2>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
      <button className="add">
        <Link to="/add">Nueva Oferta</Link>
      </button>
    </div>
  );
}

export default Test;
