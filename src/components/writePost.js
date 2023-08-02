"use client";
import { useState } from "react";
function PreviewImage(image) {
  if (image.image != null && image.image != "") {
    return <img src={image.image} className="w-64 h-64"></img>;
  }
  return <></>;
}
function mapContentType(fileType) {
  switch (fileType) {
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "webp":
      return "image/webp";
    case "png":
      return "image/png";
  }
}
export default function writePost({ PosterId, CommId, ParentPostId, EventId }) {
  const [post, setPost] = useState("");
  const [photo, setPhoto] = useState();
  let url = "";
  if (photo != null) {
    url = URL.createObjectURL(photo);
  }
  const handlePost = async (event) => {
    try {
      event.preventDefault();
      let medianame = "";
      if (url.length > 0) {
        medianame = url.split("/")[3];
        const split = photo.name.split(".");
        const uploadResponse = await fetch(
          `http://localhost:1025/upload?medianame=${encodeURIComponent(
            medianame
          )}`,
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/" + mapContentType(split[split.length - 1]),
            },
            body: photo,
          }
        );
        if (!uploadResponse.ok) {
          console.log("Request failed with status:", uploadResponse.status);
          throw new Error("Network response was not ok.");
        }
      }
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
          MediaLinks: medianame,
          EventId: EventId,
        }),
      });
      if (!response.ok) {
        console.log("Request failed with status:", response.status);
        throw new Error("Network response was not ok.");
      }
      window.location.reload();
    } catch (e) {
      console.log(e);
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
          onInput={(event) => setPost(event.target.value)}
          defaultValue={""}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          disabled={post.length === 0}
        >
          Post
        </button>
        <div className="flex items-center justify-end">
          <label
            htmlFor="photo-upload"
            className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Attach Photo
          </label>
          <input
            type="file"
            id="photo-upload"
            accept="image/*"
            className="hidden"
            onChange={(event) => setPhoto(event.target.files[0])}
            onDragEnter={(event) => setPhoto(event.target.files[0])}
            onDragOver={(event) => setPhoto(event.target.files[0])}
            onDrop={(event) => setPhoto(event.target.files[0])}
          />
          <PreviewImage image={url} />
        </div>
      </form>
    </div>
  );
}
