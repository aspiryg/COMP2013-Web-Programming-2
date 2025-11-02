import { useEffect, useState } from "react";
import PostForm from "./PostForm";
import PostsContainer from "./PostsContainer";
import Loader from "./Loader";

export default function FakeApiApp() {
  const initialPostState = { title: "", body: "" };
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newPost, setNewPost] = useState(initialPostState);
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const fetchPosts = async () => {
    setLoading(true);
    const result = await fetch(URL);
    const data = await result.json();
    data.sort((a, b) => b.id - a.id);
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleOnChange = (e) => {
    setNewPost((post) => {
      return { ...post, [e.target.name]: e.target.value };
    });
  };

  const handleAddPost = (e) => {
    e.preventDefault();

    newPost.title !== "" && newPost.body !== ""
      ? (setData((preData) => [
          { ...newPost, id: data.length + 1, userId: 1 },
          ...preData,
        ]),
        setNewPost(initialPostState))
      : alert("Please add tile and body before submitting!😊");
  };

  const handleDeletePost = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post? 😥"
    );
    if (confirmDelete) {
      const filteredPosts = data.filter((post) => post.id !== id);
      setData(filteredPosts);
    }
  };

  //   console.log(newPost);
  // console.log(data);

  return (
    <div>
      <PostForm
        post={newPost}
        handleOnChange={handleOnChange}
        handleAddPost={handleAddPost}
      />
      {loading ? (
        <Loader />
      ) : (
        <PostsContainer data={data} handleDeletePost={handleDeletePost} />
      )}
    </div>
  );
}
