import { useParams } from "react-router-dom";
import { useGetPostsQuery, useAddCommentMutation } from "../redux/getPosts";
import { useState } from "react";

const Discussion = () => {
  const { id } = useParams();
  const { data: posts } = useGetPostsQuery();
  const post = posts?.find((p) => p._id === id);
  const [addComment] = useAddCommentMutation();
  const [comment, setComment] = useState("");

  if (!post) return <h2 className="text-center text-red-500">Post not found</h2>;

  const handleComment = () => {
    if (comment.trim()) {
      addComment({ postId: id, text: comment });
      setComment("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold text-gray-800">{post.name}</h2>
      <p className="mt-2 text-gray-800">{post.text}</p>
      <h3 className="text-xl font-semibold mt-4">Comments</h3>
      {post.comments.length > 0 ? (
        post.comments.map((c) => <p key={c._id} className="text-gray-700">{c.text}</p>)
      ) : (
        <p className="text-gray-500">No comments yet</p>
      )}
      <div className="mt-4">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
          className="border rounded px-3 py-1 w-full"
        />
        <button
          onClick={handleComment}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg mt-2"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default Discussion;
