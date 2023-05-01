import { useState } from 'react';

import PostsList from "./components/PostsList";
const posts = [
];

const App = () => {
  const [allPosts, setAllPosts] = useState(posts);

  const addPost = (post) => {
    setAllPosts((prev) => {
      return [...prev, post];
    });
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      headers:{
        'Content-Type': 'application/json'
      }
    });
  }

  const editPost = (editedPost) => {
    const filteredPosts = allPosts.filter((post) => post.id !== editedPost.id);
    setAllPosts([...filteredPosts, editedPost]);
  }

  return(
    <main>
      <h1>Hello World</h1>
      <PostsList posts={allPosts} addPost={addPost} editPost={editPost}/>
    </main>
  );
}

export default App;