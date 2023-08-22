"use client";
import { useState } from "react";
export default function page() {
  const [search, setSearch] = useState("");
  const handleAutocomplete = async (event) => {
    setSearch(event.target.value);
    const res = await fetch(
      `http://localhost:1026/auto?search=${encodeURIComponent(
        event.target.value
      )}`,
      {
        method: "GET",
        headers: {},
        next: { revalidate: 2 },
      }
    );
  };
  const handleSearch = async (event) => {
    const res = await fetch(
      `http://localhost:1026/search?search=${encodeURIComponent(search)}`,
      {
        method: "GET",
        headers: {},
        next: { revalidate: 2 },
      }
    );
    console.log(res);
    window.location.reload();
  };
  return (
    <div className="container mx-auto p-4">
      <div className="w-full max-w-sm">
        <form className="flex">
          <input
            type="text"
            name="search"
            placeholder="Search"
            onInput={handleAutocomplete}
            className="w-full px-4 py-2 rounded-l-lg focus:outline-none focus:ring focus:border-blue-300 border-t border-b border-l text-gray-800 bg-white"
          />
          <button
            className="px-4 py-2 rounded-r-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 border-t border-b border-r"
            onClick={handleSearch}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
