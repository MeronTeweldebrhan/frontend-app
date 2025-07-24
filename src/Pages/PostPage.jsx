import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

function PostPage() {
  return (
    <div className="pt-20 px-4 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Post Page</h1>
      <PostForm />
      <div className="mt-8">
        <PostList />
      </div>
    </div>
  );
}

export default PostPage;