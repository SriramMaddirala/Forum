"use client";
import { useState } from "react";
import Link from "next/link";

export default function page() {
  const [search, setSearch] = useState("");
  const [autoResults, setAutoResults] = useState(null);
  const [searchResults, setSearchResults] = useState(null);
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
    //look at this again
    event.preventDefault();
    const res = await fetch(
      `http://localhost:1026/search?search=${encodeURIComponent(search)}`,
      {
        method: "GET",
        headers: {},
        next: { revalidate: 2 },
      }
    );
    if (res.ok) {
      const json = await res.json();
      if (json.PostRows != null || json.UserRows != null) {
        const postResults = [];
        for (const key in json.PostRows) {
          let posterid = json.PostRows[key].PosterId;
          let textContent = json.PostRows[key].TextContent;
          let mediapath = json.PostRows[key].MediaLinks;
          let image = <></>;
          if (mediapath !== "" && mediapath !== null) {
            const fileRes = await fetch(
              `http://localhost:1025/getFile?mediapath=${encodeURIComponent(
                mediapath
              )}`,
              {
                method: "GET",
                headers: {},
                next: { revalidate: 2 },
              }
            );
            const file = await fileRes.blob();
            const url = URL.createObjectURL(file);
            if (url !== null) {
              image = <img src={url} className="w-64 h-64" />;
            }
          }
          postResults.push(
            <li key={key} className="relative flex p-4">
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
                href={`/post/${json.PostRows[key].PostId}`}
              >
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-600">
                    {posterid}
                  </h3>
                  <p className="text-gray-600">{textContent}</p>
                </div>
              </Link>
              {image}
            </li>
          );
        }
        setSearchResults(postResults);
      } else {
        setSearchResults(null);
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
    searchRender = (
      <div
        id="searchResults"
        className="mt-2 p-2 bg-white border rounded-md shadow"
      >
        <ul>{searchResults}</ul>
      </div>
    );
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
