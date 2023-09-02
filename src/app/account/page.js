"use client";
export default function page() {
  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h1 className="text-2xl font-semibold mb-4">Account Settings</h1>
      <form>
        <div className="mb-4">
          <label
            htmlFor="profilePicture"
            className="block text-gray-600 font-medium"
          >
            Profile Picture
          </label>
          <input
            type="file"
            id="profilePicture"
            name="profilePicture"
            accept="image/*"
            className="mt-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-2 w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="mt-2 w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-2 w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="newPassword"
            className="block text-gray-600 font-medium"
          >
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            className="mt-2 w-full p-2 border rounded"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirmNewPassword"
            className="block text-gray-600 font-medium"
          >
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmNewPassword"
            name="confirmNewPassword"
            className="mt-2 w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}
