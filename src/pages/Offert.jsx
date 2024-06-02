import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";

function Offert() {
  const [Offerts, setOffert] = useState([]);

  useEffect(() => {
    const fetchAllOfferts = async () => {
      try {
        const res = await axios.get("http://localhost:8800/offert");
        setOffert(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllOfferts();
  }, []);

  const handleDelete = async (idOfferts) => {
    try {
      await axios.delete("http://localhost:8800/offert/" + idOfferts);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="space-y-4 w-[400px]">
      <h1 className="semi-bold">Tech Talent Hub Ofertas de Empleo</h1>

      <div className="App">
        {Offerts.map((offert) => (
          <div className="offert" key={offert.idOfferts}>
            <h2>{offert.tittle}</h2>
            <p>{offert.description}</p>

            <button
              className="delete"
              onClick={() => handleDelete(offert.idOfferts)}
            >
              Eliminar
            </button>
            <button className="update">
              <Link to={"/update/" + offert.idOfferts}>Editar</Link>
            </button>
          </div>
        ))}
      </div>
      <button className="add">
        <Link to="/add">Nueva Oferta</Link>
      </button>
    </div>
  );
}

export default Offert;
