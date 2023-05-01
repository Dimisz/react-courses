import styles from './Post.module.css';

const Post = ({post, handleEdit}) => {
  return(
      <li className={styles.post}>
        <h2 className={styles.author}>{post.author}</h2>
        <p className={styles.text}>{post.text}</p>
        <div className={styles.actions}>
          <button onClick={() => handleEdit(post)} >
            Edit
          </button>
        </div>
      </li>
  );
}

export default Post;