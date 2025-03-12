// import React from "react";
// import Header from "../components/Header";
// // import Brands from "../components/Brands";
// // import getData from "../hooks/getData";
// // import Card from "../components/Card";

// export const Home = () => {
//   // const { data, loading, error } = getData("/products");
//   // console.log(data?.items);

//   return (
//     <div>
//       <Header />
//       {/* <Brands /> */}

//       {/* <div>
//         {data?.items?.map((product) => (
//           <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
//             <h3>{product.name}</h3>
//             <p>ID: {product.id}</p>
//             <p>Narx: {product.price} so‘m</p>
//             <p>Batafsil: {product.description}</p>
//             {product.image && <img src={product.image} alt={product.name} width="150" />}
//           </div>
//         ))}
//       </div> */}

// {/* 
//       <div className="grid grid-cols-4">
//         {data?.items?.map((product, index) => {
//           return <Card {...product} key={index} />;
//         })}
//       </div> */}
//     </div>


//   );
// };


import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [posts, setPosts] = useState([]); 
  const [loading, setLoading] = useState(true); // Loading holati

  useEffect(() => {
    axios
      .get("https://nt-devconnector.onrender.com/posts")
      .then((res) => {
        console.log("API RESPONSE:", res.data);
        setPosts(Array.isArray(res.data) ? res.data : res.data.posts || []);
      })
      .catch((err) => {
        console.error("API ERROR:", err);
        setPosts([
          { _id: "1", title: "Test Post 1", text: "This is a test post." },
          { _id: "2", title: "Test Post 2", text: "Another test post." },
        ]);
      })
      .finally(() => setLoading(false));
  }, []);
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="container">
      <h2>Posts</h2>

      {loading ? (
        <p>Loading...</p>
      ) : posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        <Slider {...settings}>
          {posts.map((post) => (
            <div key={post._id} className="card">
              <h3>{post.title}</h3>
              <p>{post.text}</p>
              <Link to={`/post/${post._id}`}>Read More</Link>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Home;

