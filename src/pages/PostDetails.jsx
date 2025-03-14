import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`https://nt-devconnector.onrender.com/posts/${id}`)
      .then((res) => setPost(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!post) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <h2>{post.title}</h2>
      <p>{post.text}</p>
      <h1>dxz</h1>
    </div>
  );
};

export default PostDetails;
