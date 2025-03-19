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



// ======================================================================================================================


// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import AddPosts from "./AddPosts";
// import { Navigate } from "react-router-dom";





// import { useGetPostsQuery } from "../redux/getPosts";

// export const Home = () => {
  // const [posts, setPosts] = useState([]);
  // const [userMe, setuserME] = useState(null);
  // const navigate = useNavigate();
  // const token = localStorage.getItem("token");

// const {data,error,isLoading} = useGetPostsQuery()
// console.log(data);


  // async function getPosts() {
  //   const posts = await axios.get(
  //     `https://nt-devconnector.onrender.com/api/posts`,
  //     {
  //       headers: {
  //         "x-auth-token": token,
  //       },
  //     }
  //   );
  //   setPosts(posts.data);
  // }

  // useEffect(() => {
  //   getPosts(); 
  // }, []);

  // function handleDelete(id) {
  //   axios
  //     .delete(`https://nt-devconnector.onrender.com/api/posts/${id}`, {
  //       headers: {
  //         "x-auth-token": token,
  //       },
  //     })
  //     .then(() => {
  //       getPosts();
  //     });
  // }
  // async function getMe() {
  //   const posts = await axios.get(
  //     `https://nt-devconnector.onrender.com/api/posts`,
  //     {
  //       headers: {
  //         "x-auth-token": token,
  //       },
  //     }
  //   );
  //   setuserME(posts?.data?._id);
  // }

  // console.log(userMe);

  // useEffect(() => {
  //   getPosts()
  //   getMe();
  // }, []);

// if (error) return <h2>error</h2>
// if (isLoading) return <h2>loading..</h2> 
  


  // return (
  //   <div className="w-[300px] mx-auto ">
  //     <AddPosts getPosts={getPosts} />
  //     <button onClick={() => Navigate("/addPosts")}>addPosts</button>
  //     {posts.map((post) => {
  //       return (
  //         <div className="border my-2 p-2" key={post._id}>
  //           <h2>{post.name}</h2>
  //           <h3>{post.text}</h3>

  //           {post?.user === userMe && (
  //             <button onClick={() => handleDelete(post._id)}>Delete</button>
  //           )}
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
// };


// ==============================================================================================




import { 
  useGetPostsQuery, 
  useDeletePostMutation, 
  useLikePostMutation, 
  useUnlikePostMutation 
} from "../redux/getPosts";
import { useNavigate,Link } from "react-router-dom";

export const Home = () => {
  const { data: posts, error, isLoading } = useGetPostsQuery();
  const [deletePost] = useDeletePostMutation();
  const [likePost] = useLikePostMutation();
  const [unlikePost] = useUnlikePostMutation();
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId"); 


  if (error) return <h2 className="text-center text-red-500">Error loading posts</h2>;
  if (isLoading) return <h2 className="text-center">Loading...</h2>;

  return (
    
  
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
        <h1 className="text-3xl font-bold mb-6">Welcome to DevConnector</h1>
   
      <Link to="/login">
        <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition">
          Login
        </button>
      </Link>
      <Link to="/register">
        <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition">
          Register
        </button>
      </Link>

      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Posts</h2>
        <button 
          onClick={() => navigate("/addPosts")} 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition"
        >
          Add Post
        </button>
      </div>
      {posts?.map((post) => (
        <div key={post._id} className="border border-gray-300 rounded-lg p-4 mb-4 shadow-sm">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">{post.name}</h3>
              <p className="text-gray-500 text-sm">Posted on {new Date(post.date).toLocaleDateString()}</p>
            </div>
          </div>
          <p className="mt-2 text-gray-800">{post.text}</p>
          <div className="mt-4 flex space-x-2">
            <button 
              onClick={async () => {
                try {
                  const res = await likePost(post._id).unwrap();
                  console.log("Like response:", res);
                } catch (error) {
                  console.error("Like error:", error);
                }
              }}
              className="flex items-center space-x-1 bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-lg"
            >
              👍 <span>Like</span>
            </button>

            <button 
              onClick={async () => {
                try {
                  const res = await unlikePost(post._id).unwrap();
                  console.log("Unlike response:", res);
                } catch (error) {
                  console.error("Unlike error:", error);
                }
              }}
              className="flex items-center space-x-1 bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-lg"
            >
              👎 <span>Dislike</span>
            </button>

            {/* Discussion tugmasi qo'shildi */}
            <button 
              onClick={() => navigate(`/posts/${post._id}`)}
              className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-1 rounded-lg"
            >
              Discussion {post.comments?.length > 0 && <span>({post.comments.length})</span>}
            </button>

            {post.user === userId && (
              <button
                onClick={() => deletePost(post._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
              >
                ✖
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
