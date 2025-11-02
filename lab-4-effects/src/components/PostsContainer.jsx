import PostCard from "./PostCard";

export default function PostsContainer({ data, handleDeletePost }) {
  return (
    <div className="post-container">
      {data.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          handleDeletePost={handleDeletePost}
        />
      ))}
    </div>
  );
}
