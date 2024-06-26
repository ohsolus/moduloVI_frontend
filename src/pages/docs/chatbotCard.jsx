import React from "react";
import chatImage from "../../assets/chat.jpg";

const ChatBotCard = () => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={chatImage} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Chatbot</div>
        <p className="text-gray-700 text-base">
          <strong>Descripción</strong>{" "}
          <p>
            Tenemos a Weelog, un chatbot que ayuda a resolver consultas rápidas,
            basadas en consultas de la forma: Clave-valor.
          </p>
        </p>
        <p className="text-gray-700 text-base">
          <strong>Referencia:</strong>
        </p>
      </div>
    </div>
  );
};

export default ChatBotCard;
