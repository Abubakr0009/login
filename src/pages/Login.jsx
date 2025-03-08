// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   let [email, setemail] = useState("");
//   let [password, setpassword] = useState("");
//   let navigate = useNavigate();

//   async function handleSubmit(e) {
//     try {
//       e.preventDefault();

//       let response =  axios.post(
//         `https://api.ashyo.fullstackdev.uz/auth/login`,
//         { email, password }
//       );

//       localStorage.setItem("accessToken", response.data.accessToken);
//       localStorage.setItem("user", JSON.stringify(response.data.user));
//       navigate("/profile");

//       console.log(response.data.accessToken);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit}>
//         <label>
//           <span>Email</span>
//           <input type="text" onChange={(e) => setemail(e.target.value)} />
//         </label>
//         <label>
//           <span>Password</span>
//           <input type="text" onChange={(e) => setpassword(e.target.value)} />
//         </label>

//         <button>submit</button>
//       </form>
//     </div>
//   );
// };

// export default Login;



import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notification } from "antd";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      let response =  axios.post(
        `https://api.ashyo.fullstackdev.uz/auth/login`,
        { email, password }
      );

      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/profile");

      notification.success({
        message: "Muvaffaqiyatli kirish",
        description: "Siz tizimga muvaffaqiyatli kirdingiz!",
      });
    } catch (error) {
      notification.error({
        message: "Login xatosi",
        description:
          error.response?.data?.message || "Email yoki parol noto‘g‘ri",
      });
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email</span>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          <span>Password</span>
          <input type="password" onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Kirish</button>
      </form>
    </div>
  );
};

export default Login;
