import styles from './Post.module.css';

const Post = ({author, text}) => {
  return(
      <div className={styles.post}>
        <h2 className={styles.author}>{author}</h2>
        <p className={styles.text}>{text}</p>
      </div>
  );
}

export default Post;