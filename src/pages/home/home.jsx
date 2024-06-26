import React from "react";
import "../../styles/blog.css";
import Header from "../docs/header";
import BlogList from "./blogList/blogList";

function Home() {
  return (
    <div className="container">
      <Header />
      <BlogList />
    </div>
  );
}

export default Home;
