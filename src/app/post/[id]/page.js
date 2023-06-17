export default function page({ params, id }) {
  if (params) {
    id = params.id;
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
        <h3 className="text-xl font-semibold text-gray-600">John Doe</h3>
        <p className="text-gray-600">Commencing the forum with post {id}</p>
        <div className="flex items-center mt-2"></div>
      </div>
    </div>
  );
}
