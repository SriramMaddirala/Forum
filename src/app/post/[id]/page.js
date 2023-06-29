async function getPost(id) {
  console.log(`http://localhost:1025/getpost?postid=${encodeURIComponent(id)}`);
  const res = await fetch(
    `http://localhost:1025/getpost?postid=${encodeURIComponent(id)}`,
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
export default async function page({ params, id, textContent, posterid }) {
  if (params) {
    id = params.id;
  }
  if (!textContent) {
    const response = await getPost(id);
    textContent = response.TextContent;
    posterid = response.PosterId;
  }
  return (
    <div className="flex p-4 hover:bg-blue-200">
      <div className="flex-shrink-0">
        <img
          className="h-12 w-12 rounded-full"
          src="https://d2x51gyc4ptf2q.cloudfront.net/content/uploads/2021/05/08150953/eric-dier.jpg"
          alt="Profile Picture"
        />
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold text-gray-600">{posterid}</h3>
        <p className="text-gray-600">{textContent}</p>
        <div className="flex items-center mt-2"></div>
      </div>
    </div>
  );
}
