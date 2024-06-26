import React from "react";

const Card = ({ cv, name, description, id }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img
        className="w-full"
        src={"https://avatars.githubusercontent.com/u/" + id}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          <strong>Rol:</strong> {description}
        </p>
        <p className="text-gray-700 text-base">
          <strong>CV:</strong> {cv}
        </p>
      </div>
    </div>
  );
};

export default Card;
