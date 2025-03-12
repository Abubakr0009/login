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
// import { store } from "./redux/store";
// import { useSelector } from "react-redux";
// import { decrementAction, incrementAction } from "./redux/action";


// const App = () => {
//   const count = useSelector((state) => state.count);
// // console.log(store.dispatch(incrementAction));

//   console.log(store.getState());

//   return (
//     <div>
//       <button
//         className="border"
//         onClick={() => store.dispatch({ type: "INCREMENT" })}
//       >
//         QO`SHISH
//       </button>
//       <span style={{ margin: "0 10px", fontSize: "20px" }}>{count}</span> 
//       <button
//         className="border"
//         onClick={() => store.dispatch(decrementAction)}
//       >
//         AYIRISH
//       </button>
//     </div>
//   );
// };

// export default App;


import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import PostDetails from "../src/pages/PostDetails";

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
   
  );
};

export default App;







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
