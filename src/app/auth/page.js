"use client";

import { setCookie } from "@/utilities/cookies";
import { useState } from "react";
export default function page() {
  const [wantsLogin, setWantsLogin] = useState(true);
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [DupPassword, setDupPassword] = useState("");
  const [Email, setEmail] = useState("");
  const handleLogin = async (event) => {
    event.preventDefault();
    const res = await fetch(`http://localhost:1025/login`, {
      method: "POST",
      headers: {},
      next: { revalidate: 2 },
      body: JSON.stringify({
        Username: Username,
        Password: Password,
      }),
    });
    if (res.ok) {
      const json = await res.json();
      setCookie("posterId", json.PosterId);
      setUsername("");
      setPassword("");
    } else {
      alert(res.status);
    }
  };
  const handleSignup = async (event) => {
    event.preventDefault();
    if (DupPassword !== Password) {
      setPassword("");
      setDupPassword("");
      alert("Passwords don't match");
      return;
    }
    const res = await fetch(`http://localhost:1025/signup`, {
      method: "POST",
      headers: {},
      next: { revalidate: 2 },
      body: JSON.stringify({
        Username: Username,
        Password: Password,
        Email: Email,
      }),
    });
    if (res.ok) {
      const json = await res.json();
      setCookie("posterId", json.PosterId);
      setUsername("");
      setPassword("");
      setDupPassword("");
      setEmail("");
    } else {
      alert(res.status);
    }
  };
  if (wantsLogin) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="username"
                value={Username}
                placeholder="Enter your username"
                onInput={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password:
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                value={Password}
                placeholder="Enter your password"
                onInput={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <button
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                onClick={() => setWantsLogin(false)}
              >
                Need to sign up for an account?
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={Username}
              placeholder="Enter your name"
              onInput={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={Email}
              onInput={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={Password}
              onInput={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password:
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm-password"
              type="password"
              placeholder="Confirm your password"
              value={DupPassword}
              onInput={(event) => setDupPassword(event.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
            <button
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              onClick={() => setWantsLogin(true)}
            >
              Already have an account? Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
