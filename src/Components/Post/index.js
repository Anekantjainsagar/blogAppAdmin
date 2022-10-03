import React from "react";
import styles from "./style.module.css";

const Post = ({ date, title, description, image }) => {
  const d = new Date(date).toString();
  return (
    <div className={styles.post}>
      <img
        src={
          image?.length > 0
            ? image
            : "https://i.pinimg.com/originals/bc/b3/c5/bcb3c55a0fe768b22696132ea1185bde.jpg"
        }
        alt=""
        className={styles.img}
      />
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description.slice(0, 200)}</p>
      </div>
      <div className={styles.date}>{d.slice(4, 21)}</div>
    </div>
  );
};

export default Post;
