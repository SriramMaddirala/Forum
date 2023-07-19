import Link from "next/link";

import DeletePost from "@/components/deletePost";
async function GetImage({ mediapath }) {
  const res = await fetch(
    `http://localhost:1025/getFile?mediapath=${encodeURIComponent(mediapath)}`,
    {
      method: "GET",
      headers: {},
      next: { revalidate: 2 },
    }
  );
  const file = await res.blob();
  const url = URL.createObjectURL(file);
  if (url === null) {
    return null;
  }
  return <img src={url} />;
}
async function getPost(id) {
  const res = await fetch(
    `http://localhost:1025/getpost?postid=${encodeURIComponent(id)}`,
    {
      method: "GET",
      headers: {},
      next: { revalidate: 2 },
    }
  );
  const jsonResponse = await res.json();
  return jsonResponse;
}
export default async function page({
  params,
  id,
  textContent,
  posterid,
  mediapath,
}) {
  if (params) {
    id = params.id;
  }
  if (!textContent) {
    const response = await getPost(id);
    textContent = response.TextContent;
    posterid = response.PosterId;
    mediapath = response.MediaLinks;
  }
  const handleDelete = async (event) => {
    const res = await fetch(
      `http://localhost:1025/deletepost?postid=${encodeURIComponent(id)}`,
      {
        method: "DELETE",
        headers: {},
        next: { revalidate: 2 },
      }
    );
  };
  return (
    <div className="relative flex p-4">
      <Link
        className="hover:bg-gray-200 rounded-full"
        href={`/profile/${posterid}`}
      >
        <div className="flex-shrink-0">
          <img
            className="h-12 w-12 rounded-full"
            src="https://d2x51gyc4ptf2q.cloudfront.net/content/uploads/2021/05/08150953/eric-dier.jpg"
            alt="Profile Picture"
          />
        </div>
      </Link>
      <Link
        className="hover:bg-gray-200 flex-grow rounded-full"
        href={`/post/${id}`}
      >
        <div className="ml-4">
          <h3 className="text-xl font-semibold text-gray-600">{posterid}</h3>
          <p className="text-gray-600">{textContent}</p>
        </div>
      </Link>
      <GetImage className="w-64 h-64" mediapath={mediapath} />
      <DeletePost id={id} />
    </div>
  );
}
