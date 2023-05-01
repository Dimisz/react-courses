import { useState } from 'react';

import styles from './PostsList.module.css';
import Post from './Post';
import NewPost from './NewPost';
import EditPost from './EditPost';
import Modal from './Modal';
import MainHeader from './MainHeader';

const PostsList = ({posts, addPost, editPost}) => {
  // const [modalIsVisible, setModalIsVisile] = useState(true);
  const [isEditing, setIsEditing] = useState(false)
  const [editedPost, setEditedPost] = useState({});
  const [isAddingNewPost, setIsAddingNewPost] = useState(false);

  const hideModal = () => {
    setIsEditing(false);
    setIsAddingNewPost(false);
  };

  const onEdit = (post) => {
    setIsEditing(true);
    setEditedPost(post);
  }

  const handleAddNew = () => {
    setIsAddingNewPost(true);
  }

  const renderedPosts = posts.map((post) => {
    return(
      <Post 
        key={post.id} 
        post={post}
        handleEdit={onEdit}
      />
    )
  })
  return(
    <>
    <MainHeader onCreatePost={handleAddNew}/>
      {isEditing &&
        <Modal hideModal={hideModal}>
          <EditPost 
            editPost={editPost} 
            editedPost={editedPost} 
            hideModal={hideModal}
          />
       </Modal>
      }
      {isAddingNewPost &&
        <Modal hideModal={hideModal}>
          <NewPost addPost={addPost} hideModal={hideModal}/>
       </Modal>
      }
      {posts.length === 0 ?
        <div style={{ textAlign: 'center', color: 'white'}}>
          <h2>There are no posts yet</h2>
          <p>Start adding posts</p>
        </div>
      :
      <ul className={styles.posts}>
        {renderedPosts}
      </ul>
    }
      
    </>
  );
}

export default PostsList;