"use client"
// components/CommentSection.js
import { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState([""]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment.trim()]);
      setNewComment("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-xl border border-black mb-5 shadow-inner shadow-black">
      <h2 className="text-xl font-semibold mb-4 text-center justify-center font-serif">Comments</h2>

      {/* Comment Input */}
      <div className="mb-4 ">
        <textarea
          className="w-full p-2 border rounded-md focus:outline-none border-black focus:ring-2 focus:ring-blue-400"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button
          className="mt-2 px-2 py-1 bg-blue-500 text-white rounded-xl border border-black font-serif hover:bg-blue-600"
          onClick={handleAddComment}
        >
          Add Comment
        </button>
      </div>

      {/* Comments List */}
      <div>
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        ) : (
          <ul className="space-y-4">
            {comments.map((comment, index) => (
              <li
                key={index}
                className="p-3 bg-gray-100 rounded-md border border-gray-200"
              >
                {comment}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
