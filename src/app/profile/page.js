import Post from '@/app/post/[id]/page'
export default function page() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Feed</h2>
        </div>          
          <Post/>
      </div>
    </div>
  );
}
