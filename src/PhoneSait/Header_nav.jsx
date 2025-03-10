import React from 'react'


const Header = () => {
  
  return (
        <nav className="flex items-center justify-between px-8 py-2 bg-gray-100 border-b border-gray-300">
          <div className="flex items-center space-x-2">
            <div className="p-1 border rounded-md border-purple-500 text-purple-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 0l6 6m-6-6L6 8"
                />
              </svg>
            </div>
            <span className="text-gray-700 font-medium">Tashkent</span>
          </div>
    
          <ul className="flex space-x-6 text-gray-600">
            <li className="hover:text-purple-600 cursor-pointer">About Us</li>
            <li className="hover:text-purple-600 cursor-pointer">Products</li>
            <li className="hover:text-purple-600 cursor-pointer">Contacts</li>
          </ul>
    
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 font-medium">+998 (71) 123-45-67</span>
            <div className="relative">
              <button className="text-gray-700 font-medium flex items-center space-x-1">
                <span>Uz</span>
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
            </div>
          </div>
          
        </nav>
      );
    }
    
 

export default Header