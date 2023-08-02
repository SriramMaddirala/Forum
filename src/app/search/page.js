export default function page() {
  return (
    <div className="container mx-auto p-4">
      <div className="w-full max-w-sm">
        <form className="flex">
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="w-full px-4 py-2 rounded-l-lg focus:outline-none focus:ring focus:border-blue-300 border-t border-b border-l text-gray-800 bg-white"
          />
          <button
            type="submit"
            className="px-4 rounded-r-lg bg-blue-500 hover:bg-blue-600 text-white focus:outline-none focus:ring focus:border-blue-300"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
