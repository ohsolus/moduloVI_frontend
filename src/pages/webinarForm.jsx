import { useState } from "react";
import axios from "axios";
import Analysis from "../components/analysis";
import check from "../assets/image.png";

function WebinarForm() {
  const formArray = [1, 2, 3, 4];
  const [formNo, setFormNo] = useState(formArray[0]);
  const [state, setState] = useState({
    nombre: "",
    empresa: "",
    cargo: "",
    email: "",
    sector: "",
    comoSeEntero: "",
  });

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(state);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/test", state);
    } catch (err) {
      console.log(err);
    }
    setFormNo(formNo + 1);
  };

  const next = () => {
    setFormNo(formNo + 1);
  };

  const pre = () => {
    setFormNo(formNo - 1);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-slate-300">
      <div className="card w-[370px] rounded-md shadow-md bg-white p-5">
        <div className="flex justify-center items-center">
          {formArray.map((v, i) => (
            <>
              <div className="w-[35px] my-3 text-white rounded-full h-[35px] bg-blue-500 flex justify-center items-center">
                {" "}
                {v}
              </div>

              {i !== formArray.length - 1 && (
                <div className="w-[85px] h-[2px] bg-blue-500"></div>
              )}
            </>
          ))}
        </div>

        {formNo === 1 && (
          <div>
            <div className="flex flex-col mb-2 ">
              <label className="block text-left" htmlFor="nombre">
                Indique su nombre
              </label>
              <input
                className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                type="text"
                name="nombre"
                placeholder="Nombre completo"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="block text-left" htmlFor="email">
                Correo Electrónico
              </label>
              <input
                className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                type="text"
                name="email"
                placeholder="E-mail"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="block text-left" htmlFor="comoSeEntero">
                ¿Cómo encontraste esta página?
              </label>
              <input
                className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                type="text"
                name="comoSeEntero"
                placeholder=""
                onChange={handleChange}
              />
            </div>
            <button
              onClick={next}
              className="px-3 py-2 rounded-md text-lg w-full bg-blue-500 text-white"
            >
              Next
            </button>
          </div>
        )}
        {formNo === 2 && (
          <div>
            <div className="flex flex-col mb-2">
              <label className="block text-left" htmlFor="varsity">
                Sector al que se dedica
              </label>
              <input
                className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                type="text"
                name="sector"
                placeholder="Sector"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="block text-left" htmlFor="empresa">
                Organización a la que pertence
              </label>
              <input
                className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                type="text"
                name="empresa"
                placeholder="Nombre Empresa/Institución"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mb-2">
              <label className="block text-left" htmlFor="cargo">
                Rol que desempeña
              </label>
              <input
                className=" p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
                name="cargo"
                type="text"
                placeholder="Cargo o rol"
                onChange={handleChange}
              />
            </div>
            <div className="flex mt-4 gap-3 justify-center items-center">
              <button
                onClick={pre}
                className="px-3 py-2 rounded-md text-lg w-full bg-blue-500 text-white"
              >
                Back
              </button>
              <button
                onClick={next}
                className="px-3 py-2 rounded-md text-lg w-full bg-blue-500 text-white"
              >
                Next
              </button>
            </div>
          </div>
        )}
        {formNo === 3 && (
          <div>
            <h1>¿Te está gustando esta página?</h1>
            <div className="flex flex-col mb-2">
              <h2>Danos tu opinion para mejorar</h2>
              <br />
              <Analysis />
            </div>

            <div className="flex mt-4 gap-3 justify-center items-center">
              <button
                onClick={pre}
                className="px-3 py-2 rounded-md text-lg w-full bg-blue-500 text-white"
              >
                Back
              </button>

              <button
                onClick={handleClick}
                className="px-3 py-2 rounded-md text-lg w-full bg-blue-500 text-white"
              >
                Submit
              </button>
            </div>
          </div>
        )}
        {formNo === 4 && (
          <div>
            <br></br>
            <h1>¡Enhorabuena! </h1>
            <h1>Se ha enviado tu registro </h1>
            <br></br>
            <div className="flex items-center justify-center">
              <img src={check} alt="" className="check w-[100px] h-[100px] " />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WebinarForm;
