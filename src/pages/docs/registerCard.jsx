import React from "react";
import iaImage from "../../assets/ia.jpg";

const RegisterCard = () => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={iaImage} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Registro Multi-Step</div>
        <p className="text-gray-700 text-base">
          <strong>Descripción</strong>{" "}
          <p>
            Utilizando un formulario multi-step, se logra tener varios elementos
            de manera concreta en forma detallada en la pantalla.
          </p>
        </p>
        <p className="text-gray-700 text-base">
          <strong>Referencia:</strong>
        </p>
      </div>
    </div>
  );
};

export default RegisterCard;
