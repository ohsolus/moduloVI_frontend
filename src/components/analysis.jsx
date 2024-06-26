import React, { useState, useEffect } from "react";

import Sentiment from "sentiment";
const sentiment = new Sentiment();

function Analysis() {
  const [phrase, setPhrase] = useState("");
  const [sentimentScore, setSentimentScore] = useState(null);

  useEffect(() => {
    setSentimentScore(sentiment.analyze(phrase));
  }, [phrase]);

  return (
    <div>
      <header>
        <h1>Análisis de sentimientos</h1>

        <div className="flex mt-4 gap-3 justify-center items-center">
          <button
            value={"I like it"}
            onClick={(e) => setPhrase(e.target.value)}
            className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md h-[40px] w-[100px] mr-4"
          >
            Buena
          </button>
          <button
            text="I don't know"
            value={"I don't know"}
            onClick={(e) => setPhrase(e.target.value)}
            className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md h-[40px] w-[100px] mr-4"
          >
            Regular
          </button>
          <button
            value={"I hate it"}
            onClick={(e) => setPhrase(e.target.value)}
            className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md h-[40px] w-[100px] mr-4"
          >
            Mala
          </button>
        </div>

        <br />

        {sentimentScore !== null ? (
          <p>Puntaje de sentimiento: {sentimentScore.score}</p>
        ) : (
          ""
        )}

        {sentimentScore ? (
          sentimentScore.score === 0 ? (
            <p alt="neutral">neutral</p>
          ) : sentimentScore.score > 0 ? (
            <p alt="postive">positive</p>
          ) : (
            <p alt="negative">negative</p>
          )
        ) : (
          ""
        )}
      </header>
    </div>
  );
}

export default Analysis;
