import React from "react";
import AddPost from "../../Components/AddPost/index";
import Post from "../../Components/Post/index";
import styles from "./style.module.css";

const MainScreen = ({ posts, page, setPage, getBlogs, searchVal }) => {
  console.log(searchVal);
  return (
    <div className={styles.mainBox}>
      <AddPost getBlogs={getBlogs} />
      <div className={styles.postsDisplay}>
        <h1>
          Posts (
          {searchVal
            ? posts?.posts?.filter((post) => {
                if (searchVal) {
                  return post.title.includes(searchVal);
                } else {
                  return post;
                }
              }).length
            : posts.totalNoPosts}
          )
        </h1>
        <div className={styles.container}>
          {posts?.posts
            ?.filter((post) => {
              if (searchVal) {
                return post.title.includes(searchVal);
              } else {
                return post;
              }
            })
            .map((post, i) => {
              return (
                <Post
                  date={post.date}
                  key={i}
                  title={post.title}
                  description={post.description}
                />
              );
            })}
          {posts.totalNoPosts <= page * 10 ? null : (
            <div
              className={styles.readMore}
              onClick={() => {
                setPage(page + 1);
              }}
            >
              show more
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
