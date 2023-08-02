export default function page() {
  let image = "https://placekitten.com/50/50";
  let name = "john Doe";
  let text = "example post";
  let time = "3h ago";
  return (
    <div className="container mx-auto p-4">
      <div className="space-y-4">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <div className="flex space-x-4 items-center">
            <img src={image} className="w-12 h-12 rounded-full" />
            <div>
              <h4 className="text-lg font-bold text-gray-600">{name}</h4>
              <p className="text-gray-600">@johndoe</p>
            </div>
          </div>
          <p className="text-gray-800 mt-2">{text}</p>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center space-x-4">
              <button className="text-blue-500 hover:underline">Like</button>
              <button className="text-blue-500 hover:underline">Repost</button>
              <button className="text-blue-500 hover:underline">Comment</button>
            </div>
            <p className="text-gray-500">{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
