import React, { useEffect, useState } from "react";
import IaCard from "./iaCard";
import Header from "./header";
import RegisterCard from "./registerCard";
import ChatBotCard from "./chatbotCard";

const Documentation = () => {
  return (
    <>
      <Header />
      <br />
      <div className="flex flex-wrap justify-center">
        <IaCard />
        <RegisterCard />
        <ChatBotCard />
      </div>
    </>
  );
};

export default Documentation;
