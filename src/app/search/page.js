"use client";
import { useState } from "react";
function RenderSearch(results) {
  if (results == null || results.results == null) {
    return <></>;
  }
  // gotta render users and then render posts
}
export default function page() {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [autoResults, setAutoResults] = useState(null);
  let auto = <></>;
  let searchRender = <></>;
  const handleAutocomplete = async (text) => {
    setSearch(text);
    const res = await fetch(
      `http://localhost:1026/auto?search=${encodeURIComponent(text)}`,
      {
        method: "GET",
        headers: {},
        next: { revalidate: 2 },
      }
    );
    if (res.ok) {
      const json = await res.json();
      if (json[0] != null && Object.keys(json[0]).length > 0) {
        setAutoResults(json);
      } else {
        setAutoResults(null);
      }
    } else {
      alert(res.status);
    }
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
    if (res.ok) {
      console.log("here");
      const json = await res.json();
      console.log(json);
      if (json[0] != null && Object.keys(json[0]).length > 0) {
        setSearchResults(json);
      }
    } else {
      alert(res.status);
    }
  };
  if (autoResults != null) {
    const suggestions = [];
    for (const resIndex in autoResults) {
      suggestions.push(
        <li
          key={resIndex}
          className="cursor-pointer hover:bg-gray-200 mt-2 p-2 text-gray-800"
          onClick={(event) => {
            handleAutocomplete(event.target.innerText);
          }}
        >
          {autoResults[resIndex]}
        </li>
      );
    }
    auto = (
      <div
        id="autocompleteResults"
        className="mt-2 p-2 bg-white border rounded-md shadow"
      >
        <ul>{suggestions}</ul>
      </div>
    );
  }
  if (searchResults != null) {
    const results = [];
    console.log(searchResults);
  }
  return (
    <div className="container mx-auto p-4">
      <div className="w-full max-w-sm">
        <form className="flex">
          <input
            type="text"
            name="search"
            value={search}
            placeholder="Search"
            onInput={(event) => {
              handleAutocomplete(event.target.value);
            }}
            className="w-full px-4 py-2 rounded-l-lg focus:outline-none focus:ring focus:border-blue-300 border-t border-b border-l text-gray-800 bg-white"
          />
          <button
            className="px-4 py-2 rounded-r-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 border-t border-b border-r"
            onClick={handleSearch}
          >
            Search
          </button>
        </form>
        {auto}
        {searchRender}
      </div>
    </div>
  );
}
