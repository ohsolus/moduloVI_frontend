import React from "react";
import iaImage from "../../assets/ia.jpg";

const IaCard = () => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={iaImage} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Uso de IA</div>
        <p className="text-gray-700 text-base">
          <strong>Descripción</strong>{" "}
          <p>
            Para determinar la experiencia de usuario se implementa un análisis
            de sentimientos basado en IA
          </p>
        </p>
        <p className="text-gray-700 text-base">
          <strong>Referencia:</strong>
        </p>
      </div>
    </div>
  );
};

export default IaCard;
