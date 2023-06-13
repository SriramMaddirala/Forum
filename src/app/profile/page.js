import Post from '@/app/post/[id]/page'
import Link from 'next/link'

export default function page() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="text-lg text-gray-600 font-semibold">Feed</h2>
        </div>  
        <Link
            href="/post/1"
            className="text-gray-600 hover:bg-blue-200 rounded-full p-3 mb-4">
              <Post id={1}/>
            </Link>        
      </div>
    </div>
  );
}
