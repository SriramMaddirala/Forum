import Link from 'next/link'

export default function page({ children }) {
  return (
    <div className="flex h-screen">
      <div className="bg-gray-200 w-16">
        <div className="flex items-center justify-center h-16">
          <img
            src="https://d2x51gyc4ptf2q.cloudfront.net/content/uploads/2021/05/08150953/eric-dier.jpg"
            alt="Logo"
            className="h-8 w-8"
          />
        </div>
        <nav className="flex flex-col items-center justify-center h-full">
          <Link
            href="/profile"
            className="text-gray-600 hover:bg-blue-200 rounded-full p-3 mb-4"
          >
            <img
              src="https://d2x51gyc4ptf2q.cloudfront.net/content/uploads/2021/05/08150953/eric-dier.jpg"
              alt="Logo"
              className="h-6 w-6"
            />
          </Link>
          <Link
            href="/feed"
            class="text-gray-600 hover:bg-blue-200 rounded-full p-3 mb-4"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </Link>
          <Link
            href="/events"
            className="text-gray-600 hover:bg-blue-200 rounded-full p-3 mb-4"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </Link>
          <Link
            href="/communities"
            className="text-gray-600 hover:bg-blue-200 rounded-full p-3 mb-4"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Link>
          <Link
            href="/messages"
            className="text-gray-600 hover:bg-blue-200 rounded-full p-3 mb-4"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </Link>
        </nav>
      </div>
      <div className="flex-grow bg-white">{children}</div>
    </div>
  );
}
