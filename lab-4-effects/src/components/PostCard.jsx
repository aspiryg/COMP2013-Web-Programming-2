export default function PostCard({ post, handleDeletePost }) {
  return (
    <div className="post-card">
      <div className="post-card-body">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <div className="post-card-buttons">
        <button
          className="delete-button"
          onClick={() => handleDeletePost(post.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
