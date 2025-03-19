import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const token = localStorage.getItem("token");

  console.log("Token:", token); 

  useEffect(() => {
    if (!token) {
      console.log("Token yo‘q, iltimos login qiling!");
      return;
    }

    axios
      .get(`https://nt-devconnector.onrender.com/api/posts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setPost(res.data))
      .catch((err) => {
        console.error("Xato:", err.response ? err.response.data : err.message);
      });
  }, [id, token]); // 

  if (!post) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <h2>{post.title}</h2>
      <p>{post.text}</p>
    </div>
  );
};

export default PostDetails;
