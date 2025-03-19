import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Auth = ({ isLogin }) => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isLogin
        ? "https://nt-devconnector.onrender.com/api/auth"
        : "https://nt-devconnector.onrender.com/api/users";
      const { data } = await axios.post(url, formData);
      localStorage.setItem("token", data.token);
      navigate("/profile");
    } catch (error) {
      console.error("Xato:", error.response?.data?.msg || "Xatolik yuz berdi");
    }
  };

  return (
    <div>
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        )}
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>
    </div>
  );
};

export default Auth;
