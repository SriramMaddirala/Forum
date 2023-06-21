"use client";
import { useState } from "react";

export default function writePost({ PosterId, CommId, ParentPostId, EventId }) {
  const [post, setPost] = useState("");
  const handleInputChange = (event) => {
    setPost(event.target.value);
  };

  const handlePost = async (event) => {
    try {
      const response = await fetch("http://localhost:1025/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          PosterId: PosterId,
          CommId: CommId,
          ParentPostId: ParentPostId,
          TextContent: post,
          MediaLinks: "",
          EventId: EventId,
        }),
      });
    } catch (e) {
      alert(e);
    }
    setPost("");
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Post a Message</h2>
      <form onSubmit={handlePost}>
        <textarea
          className="w-full p-2 border border-gray-300 text-black rounded mb-2"
          placeholder="What's happening?"
          onInput={handleInputChange}
          defaultValue={""}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          disabled={post.length === 0}
        >
          Post
        </button>
      </form>
    </div>
  );
}
