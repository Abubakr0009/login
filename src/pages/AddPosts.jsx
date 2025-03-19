import { useState } from "react";
import { useAddPostMutation } from "../redux/getPosts";
import { useNavigate } from "react-router-dom";

const AddPosts = () => {
  const [text, setText] = useState("");
  const [addPost, { isLoading, error }] = useAddPostMutation();
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    
    try {
      await addPost({ text }).unwrap();
      setText("");
    } catch (err) {
      console.error("Failed to add post", err);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Posts</h2>
        <button 
          onClick={() => navigate("/addPosts")} 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition"
        >
          Add Post
        </button>
      </div>
      <p className="text-gray-600 mb-4">Welcome to the community</p>
      <div className="bg-teal-500 text-white font-semibold p-2 rounded-t-lg">Say Something...</div>
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-4 rounded-b-lg">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-gray-300 p-2 w-full rounded-lg focus:ring-2 focus:ring-teal-500"
          placeholder="Create a post"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium transition disabled:bg-gray-400"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default AddPosts;