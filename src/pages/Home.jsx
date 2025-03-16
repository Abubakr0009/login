// import React from "react";
// import Header from "../components/Header";
// import Brands from "../components/Brands";
// import getData from "../hooks/getData";
// import Card from "../components/Card";

// export const Home = () => {
//   const { data, loading, error } = getData("/products");

//   return (
//     <div>
//       <Header />
//       <Brands />

//       <div className="grid grid-cols-4">
//         {data?.items?.map((product, index) => {
//           return <Card {...product} key={index} />;
//         })}
//       </div>
//     </div>
//   );
// };




import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddPosts from "./AddPosts";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [userMe, setuserME] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  async function getPosts() {
    const posts = await axios.get(
      `https://nt-devconnector.onrender.com/api/posts`,
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    setPosts(posts.data);
  }

  useEffect(() => {
    getPosts(); 
  }, []);

  function handleDelete(id) {
    axios
      .delete(`https://nt-devconnector.onrender.com/api/posts/${id}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then(() => {
        getPosts();
      });
  }
  async function getMe() {
    const posts = await axios.get(
      `https://nt-devconnector.onrender.com/api/posts`,
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    setuserME(posts?.data?._id);
  }

  console.log(userMe);

  useEffect(() => {
    getPosts()
    getMe();
  }, []);

  return (
    <div className="w-[300px] mx-auto ">
      <AddPosts getPosts={getPosts} />
      <button onClick={() => navigate("/addPosts")}>addPosts</button>
      {posts.map((post) => {
        return (
          <div className="border my-2 p-2" key={post._id}>
            <h2>{post.name}</h2>
            <h3>{post.text}</h3>

            {post?.user === userMe && (
              <button onClick={() => handleDelete(post._id)}>Delete</button>
            )}
          </div>
        );
      })}
    </div>
  );
};
