import Post from "@/app/post/[id]/page";
import Link from "next/link";
import WritePost from "@/components/writePost";
export default function page() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <WritePost />
        </div>
        <Link href="/post/1">
          <Post id={1} />
        </Link>
      </div>
    </div>
  );
}
