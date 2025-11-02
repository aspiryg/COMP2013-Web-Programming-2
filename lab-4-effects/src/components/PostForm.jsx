export default function PostForm({ post, handleOnChange, handleAddPost }) {
  return (
    <div className="form-container">
      <form className="post-form" onSubmit={handleAddPost}>
        <div className="form-group">
          <label htmlFor="title">Post Title: </label>
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="body"> Post Body: </label>
          <textarea
            name="body"
            value={post.body}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="form-buttons">
          <button type="submit" className="submit-button">
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
}
