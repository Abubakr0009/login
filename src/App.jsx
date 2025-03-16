// import React, { useState } from "react";
// import { Navigate, Route, Routes } from "react-router-dom";
// import NotFoundPage from "./components/NotFoundPage";
// import Register from "./pages/Register";
// import Profile from "./pages/Profile";
// import Login from "./pages/Login";
// // import { Home } from "./pages/Home";
// // import CardDetails from "./components/CardDetails";

// import useSelection from "antd/es/table/hooks/useSelection";
// import Header_main from "./PhoneSait/Header_main";
// import Header from "./PhoneSait/Header_nav";

// const App = () => {
//   const isAuthenticated = () => {
//     return localStorage.getItem("accessToken") !== null;
//   };

//   const ProtectedRoute = ({ children }) => {
//     return isAuthenticated() ? children : <Navigate to="/" />;
//   };

//   return (
//     <div>
//       <Routes>
//         {/* <Route path="/" element={<Home />} /> */}
//         {/* <Route path="/card-datails/:id " element={<CardDetails/>}/> */}
//         <Route path="/" element={<Register />} />
//         <Route path="*" element={<NotFoundPage />} />
//         {/* <Route path="/register" element={<Register />} /> */}
//         <Route path="/login" element={<Login />} />

//         <Route
//           path="/profile"
//           element={
//             <ProtectedRoute>
//               <Profile />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </div>
//   );
// };

// export default App;

// // import {  Routes, Route, Navigate } from "react-router-dom";
// // import Login from "./pages/Login";
// // import Register from "./pages/Register";
// // import Profile from "./pages/Profile";

// function App() {
//   // return (

//   //     // <Routes>
//   //     //   {/* Asosiy sahifa Login bo'ladi */}
//   //     //   <Route path="/" element={<Navigate to="/login" />} />

//   //     //   {/* Login sahifasi */}
//   //     //   <Route path="/login" element={<Login />} />

//   //     //   {/* Ro'yxatdan o'tish sahifasi */}
//   //     //   <Route path="/register" element={<Register />} />

//   //     //   {/* Profil sahifasi */}
//   //     //   <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

//   //     //   {/* 404 sahifa */}
//   //     //   <Route path="*" element={<h2>404 - Sahifa topilmadi</h2>} />
//   //     // </Routes>

//   // );
// return(

// )

// }

// // Foydalanuvchi tizimga kirganini tekshiruvchi komponent
// // function ProtectedRoute({ children }) {
// //   const token = localStorage.getItem("accessToken");
// //   return token ? children : <Navigate to="/login" />;
// // }

// export default App;

// 111111111111




// import React from "react";
// import { useSelector } from "react-redux";
// import {
//   decrement,
//   increment,
//   incrementByAmount,
// } from "./redux/counterSlice";
// import { useDispatch } from "react-redux";


// const App = () => {
//   const count = useSelector((state) => state.count.value);
//   const dispatch = useDispatch();
//   // console.log(.dispatch(incrementAction));

//   console.log(getState());

//   return (
//     <div>
//       <button className="border" onClick={() => dispatch(increment())}>
//         QO`SHISH
//       </button>
//       <span style={{ margin: "0 10px", fontSize: "20px" }}>{count}</span>
//       <button className="border" onClick={() => dispatch(decrement())}>
//         AYIRISH
//       </button>
//       <button
//         className="border"
//         onClick={() => dispatch(incrementByAmount(10))}
//       >
//         10 ta qo`shish
//       </button>
//     </div>
//   );
// };

// export default App;



// 1-dars Api

// import { Routes, Route } from "react-router-dom";
// import Home from "../src/pages/Home";
// import PostDetails from "../src/pages/PostDetails";

// const App = () => {
//   return (

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/post/:id" element={<PostDetails />} />
//       </Routes>

//   );
// };

// export default App;

// import { Routes, Route } from "react-router-dom";
// import Header_sleder from "./PhoneSait/Header_sleder";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

{
  /* <Header_main/>
     
      <Routes>
        
        <Route path="/" element={<Header_sleder />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes> */
}



import React, { useEffect, useState } from "react";
import {  Route, Routes, Link, useParams } from "react-router-dom";
import axios from "axios";
import Profile from "./pages/Profile";
import { Home } from "./pages/Home";
import AddPost from "./pages/AddPosts";


const API_URL = "https://nt-devconnector.onrender.com/api/profile";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios.get(API_URL, { timeout: 10000 }) 
      .then(res => setProfiles(res.data))
      .catch(err => console.error("API xatosi:", err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Dasturchilar Ro'yxati</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {profiles.map(profile => (
          <div key={profile._id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
            <img src={profile.user.avatar} alt={profile.user.name} className="w-24 h-24 rounded-full mb-2" />
            <h3 className="text-lg font-semibold">{profile.user.name}</h3>
            <p className="text-gray-600 text-sm">{profile.bio?.slice(0, 50)}...</p>
            <Link to={`/profile/${profile._id}`} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md">Batafsil</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// const ProfileDetail = () => {
//   const { id } = useParams();
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     axios.get(`${API_URL}/${id}`, { timeout: 10000 }) 
//       .then(res => setProfile(res.data))
//       .catch(err => console.error("API xatosi:", err));
//   }, [id]);

//   if (!profile) return <p className="text-center text-gray-500">Yuklanmoqda...</p>;

//   return (
//     <div className="container mx-auto p-4">
//       <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
//         <img src={profile.user.avatar} alt={profile.user.name} className="w-32 h-32 rounded-full mb-4" />
//         <h2 className="text-2xl font-bold">{profile.user.name}</h2>
//         <p className="text-gray-600 mb-2">{profile.bio}</p>
//         <p className="text-gray-800"><strong>Joylashuvi:</strong> {profile.location}</p>
//         <h3 className="text-lg font-semibold mt-4">Ko'nikmalar:</h3>
//         <ul className="list-disc list-inside text-gray-700">
//           {profile.skills.map((skill, index) => (
//             <li key={index}>{skill}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };














const App = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/addPost" element={<AddPost/>}/> */}
        {/* <Route path="/" element={<Profiles />} /> */}
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
  
  );
};

export default App;
