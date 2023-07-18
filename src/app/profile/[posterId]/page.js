import Post from "@/app/post/[id]/page";
import WritePost from "@/components/writePost";
async function getPostsForPoster({ id }) {
  const res = await fetch(
    `http://localhost:1025/getposter?posterid=${encodeURIComponent(id)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 2 },
    }
  );
  const jsonResponse = await res.json();
  return jsonResponse;
}
export default async function page({ params }) {
  const response = await getPostsForPoster({ id: params.posterId });
  const posts = [];
  for (const key in response) {
    posts.push(
      <li key={response[key].PostId}>
        <Post
          id={response[key].PostId}
          textContent={response[key].TextContent}
          posterid={response[key].PosterId}
          mediapath={response[key].MediaLinks}
        />
      </li>
    );
  }
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <WritePost
            PosterId={params.posterId}
            CommId={""}
            ParentPostId={""}
            EventId={""}
          />
        </div>
        <ul>{posts}</ul>
      </div>
    </div>
  );
}
