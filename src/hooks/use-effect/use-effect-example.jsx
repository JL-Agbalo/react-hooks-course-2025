import React, { useState, useEffect } from "react";

export const UseEffectExample = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.posts)); 
  }, []);

  useEffect(() => {
    console.log("Lenard")
  },[]);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <div>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
