import React from "react";
import { Link } from "react-router-dom"; 
import logo from "../assets/logo.png";

const Header_main = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-3">
       
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Ashyo" className="h-8" />
          <span className="text-xl font-bold text-blue-600">Ashyo</span>
        </div>

        
        <div className="flex items-center space-x-2 w-1/2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center space-x-1">
            <span>Kategoriya</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Nima izlayapsiz?"
            className="w-full px-4 py-2 border rounded-md outline-none"
          />
          <button className="bg-blue-600 p-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 21h4M4 4l16 16" />
            </svg>
          </button>
        </div>

       
        <div className="flex items-center space-x-4">
        
          <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded-md">
            Login
          </Link>

       
          <Link to="/register" className="px-4 py-2 bg-green-500 text-white rounded-md">
            Register
          </Link>
        </div>
      </div>

    
      <nav className="flex justify-center space-x-6 text-gray-700 py-2 border-t">
        <a href="#" className="hover:text-blue-600">
          Aksiyalar
        </a>
        <a href="#" className="hover:text-blue-600">
          Smartfonlar
        </a>
        <a href="#" className="hover:text-blue-600">
          Noutbuklar
        </a>
        <a href="#" className="hover:text-blue-600">
          Konditsionerlar
        </a>
        <a href="#" className="hover:text-blue-600">
          Televizorlar
        </a>
        <a href="#" className="hover:text-blue-600">
          Muzlatgichlar
        </a>
        <a href="#" className="hover:text-blue-600">
          Kir yuvish mashinalari
        </a>
      </nav>
    </header>
  );
};

export default Header_main;
