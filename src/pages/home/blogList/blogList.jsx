import React, { useEffect, useState } from "react";
import BlogItem from "./blogItem";

export default function BlogList() {
  const [profile, setProfile] = useState([]);
  const PROFILE = "https://sheetdb.io/api/v1/oe7v8boqg5ik1";
  const API = "https://avatars.githubusercontent.com/u/103466145";

  const showProfile = async () => {
    const response = await fetch(PROFILE);
    const data = await response.json();
    console.log(data);
    setProfile(data);
  };

  useEffect(() => {
    showProfile();
  }, []);

  return (
    <div className="blogList-wrap">
      {profile.map((user) => (
        <BlogItem blog={user} key={user.ID} />
      ))}
    </div>
  );
}
