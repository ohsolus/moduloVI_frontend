import React, { useEffect, useState } from "react";
import Card from "../../components/card";
import Header from "./header";

const CardFileBlog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/oe7v8boqg5ik1")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <Header />
      <br />
      <div className="flex flex-wrap justify-center">
        {posts.map((post) => (
          <Card
            cv={post.CV}
            name={post.PARTICIPANTE}
            description={post.ROL}
            id={post.ID}
          />
        ))}
      </div>
    </>
  );
};

export default CardFileBlog;
