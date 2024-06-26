import React, { useState, useEffect } from "react";

const ContentSearch = () => {
  const [users, setUsers] = useState([]);
  const [profile, setProfile] = useState([]);
  const [search, setSearch] = useState("");

  const URL = "https://sheetdb.io/api/v1/h0t9n6iouagce";
  const PROFILE = "https://sheetdb.io/api/v1/oe7v8boqg5ik1";
  const API = "https://avatars.githubusercontent.com/u/103466145";

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    showData();
  }, []);

  const showProfile = async () => {
    const response = await fetch(PROFILE);
    const data = await response.json();
    console.log(data);
    setProfile(data);
  };

  useEffect(() => {
    showProfile();
  }, []);

  return (
    <div className="p-5">
      <table className="table table-striped table hover mt-5 shadow-lg flex-col">
        <thead>
          <tr className="bg-content text-white text-s">
            <th></th>
            <th>Nombre</th>
            <th>Tarea1</th>
            <th>Tarea2</th>
            <th>Tarea3</th>
            <th>Tarea4</th>
            <th>Tarea5</th>
            <th>Tarea6</th>
            <th>Tarea7</th>
            <th>Tarea8</th>
            <th>Tarea9</th>
            <th>Tarea10</th>
            <th>Testing</th>
            <th>Entrevista</th>
            <th>Prueba</th>
            <th>Proyecto</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>
                <img
                  className="rounded-full w-[80px]"
                  src={"https://avatars.githubusercontent.com/u/" + user.ID}
                />
              </td>
              <td>{user.NOMBRE}</td>
              <td>{user.TAREA1}</td>
              <td>{user.TAREA2}</td>
              <td>{user.TAREA3}</td>
              <td>{user.TAREA4}</td>
              <td>{user.TAREA5}</td>
              <td>{user.TAREA6}</td>
              <td>{user.TAREA7}</td>
              <td>{user.TAREA8}</td>
              <td>{user.TAREA9}</td>
              <td>{user.TAREA10}</td>
              <td>{user.TESTING11}</td>
              <td>{user.ENTREVISTA12}</td>
              <td>{user.PRUEBATEC13}</td>
              <td>{user.PROYECTO14}</td>
              <td>{user.TOTAL}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContentSearch;
