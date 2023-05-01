import { useState } from 'react';

import PostsList from "./components/PostsList";
const posts = [
  {
    id: 'p1',
    author: 'Vladimir Solovyov',
    text: 'React is awesome!'
  },
  {
    id: 'p2',
    author: 'John Doe',
    text: 'It\'s really worth learning React!'
  },
  {
    id: 'p3',
    author: 'Peter Johnsson',
    text: 'Coding is tough. But worth it.'
  }
];

const App = () => {
  const [allPosts, setAllPosts] = useState(posts);

  const addPost = (post) => {
    setAllPosts((prev) => {
      return [...prev, post];
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