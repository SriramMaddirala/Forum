"use client";
import { Button, Modal } from "@mui/material";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
export default function deletePost({ id }) {
  const [deletePost, setDeletePost] = useState(false);
  const handleDelete = async (event) => {
    try {
      console.log(id);
      const res = fetch(
        `http://localhost:1025/deletepost?postid=${encodeURIComponent(id)}`,
        {
          method: "DELETE",
          headers: {},
          next: { revalidate: 2 },
        }
      );
    } catch (e) {
      alert(e);
    }
  };
  return (
    <div className="absolute top-0 right-0">
      <button
        className="flex items-center p-2 text-gray-400  transition-colors"
        onClick={() => {
          setDeletePost(true);
        }}
      >
        <FaTimes className=" hover:text-red-500 text-sm mr-1" />
      </button>
      <Modal open={deletePost} className="flex justify-center items-center">
        <div>
          <p>Are you sure you want to delete this post?</p>

          <Button
            onClick={() => {
              setDeletePost(false);
              handleDelete();
            }}
          >
            Yes
          </Button>
          <Button
            onClick={() => {
              setDeletePost(false);
            }}
          >
            No
          </Button>
        </div>
      </Modal>
    </div>
  );
}
