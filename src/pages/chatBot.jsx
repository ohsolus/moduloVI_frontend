import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    const response = await fetch("http://localhost:3001/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: input }),
    });

    const data = await response.json();
    const botMessage = { sender: "bot", text: data.response };
    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        backgroundColor: "revert",
      }}
    >
      <br />
      <h1 className="text-blue-600 font-bold text-2xl">
        Hola, soy Weelog ¿En qué puedo ayudarte?
      </h1>
      <br />
      <div
        style={{
          height: "300px",
          overflowY: "scroll",
          border: "1px solid #ccc",
          padding: "10px",
          backgroundColor: "lavender",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{ textAlign: msg.sender === "bot" ? "left" : "right" }}
          >
            <p>
              <strong>{msg.sender}:</strong>
              {msg.sender === "bot" ? (
                <div
                  style={{ textAlign: "left" }}
                  className="rounded-md shadow-md bg-slate-300 p-5"
                >
                  {" "}
                  {msg.text}
                </div>
              ) : (
                <div
                  style={{ alignItems: "right" }}
                  className="rounded-md shadow-md bg-blue-400 p-5"
                >
                  {" "}
                  {msg.text}
                </div>
              )}
            </p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "80%",
          height: "30px",
          marginRight: "10px",
          backgroundColor: "lavenderblush",
        }}
      />
      <button
        style={{
          width: "10%",
          height: "30px",
          marginTop: "10px",
          backgroundColor: "lightskyblue",
        }}
        onClick={sendMessage}
      >
        Enviar
      </button>
    </div>
  );
};

export default Chatbot;
