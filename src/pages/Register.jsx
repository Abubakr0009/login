    // import axios from "axios";
    // import React, { useEffect, useState } from "react";
    // import { useNavigate } from "react-router-dom";

    // const Register = () => {
    //   let [fullname, setFullname] = useState("");
    //   let [email, setemail] = useState("");
    //   let [password, setpassword] = useState("");
    //   let navigate = useNavigate();

    //   async function handleSubmit(e) {
    //     try {
    //       e.preventDefault();
    //       console.log(fullname, email, password);

    //       let response =  axios.post(
    //         `https://api.ashyo.fullstackdev.uz/auth/register`,
    //         { fullname, email, password }
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
    //           <span>Full name</span>
    //           <input type="text" onChange={(e) => setFullname(e.target.value)} />
    //         </label>
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

    // export default Register;


    import axios from "axios";
    import React, { useState } from "react";
    import { useNavigate } from "react-router-dom";
    import { notification } from "antd";
    
    const Register = () => {
      let [fullname, setFullname] = useState("");
      let [email, setEmail] = useState("");
      let [password, setPassword] = useState("");
      let navigate = useNavigate();
    
      async function handleSubmit(e) {
        e.preventDefault();
    
        try {
          let response =  axios.post(
            `https://api.ashyo.fullstackdev.uz/auth/register`,
            { fullname, email, password }
          );
    
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          navigate("/profile");
    
          notification.success({
            message: "Ro‘yxatdan o‘tish muvaffaqiyatli",
            description: "Siz tizimga muvaffaqiyatli kirdingiz!",
          });
        } catch (error) {
          notification.error({
            message: "Ro‘yxatdan o‘tishda xatolik",
            description: error.response?.data?.message || "Noto‘g‘ri ma’lumot",
          });
        }
      }
    
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Full name</span>
              <input type="text" onChange={(e) => setFullname(e.target.value)} />
            </label>
            <label>
              <span>Email</span>
              <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
              <span>Password</span>
              <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
    };
    
    export default Register;