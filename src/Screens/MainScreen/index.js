import React from "react";
import AddPost from "../../Components/AddPost/index";
import Post from "../../Components/Post/index";
import styles from "./style.module.css";
import { Dots } from "loading-animations-react";

const MainScreen = ({ posts, page, setPage, getBlogs, searchVal, loading,category }) => {
  return (
    <div className={styles.mainBox}>
      <AddPost getBlogs={getBlogs} category={category} />
      <div className={styles.postsDisplay}>
        <h1>
          Posts (
          {searchVal
            ? posts?.posts?.filter((post) => {
                if (searchVal) {
                  return post.title
                    .toLowerCase()
                    .includes(searchVal.toLowerCase());
                } else {
                  return post;
                }
              }).length
            : posts.totalNoPosts}
          )
        </h1>
        {loading === false ? (
          <>
            <div className={styles.container}>
              {posts?.posts
                ?.filter((post) => {
                  if (searchVal) {
                    return post.title
                      .toLowerCase()
                      .includes(searchVal.toLowerCase());
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
                      getBlogs={getBlogs}
                      id={post._id}
                      image={post.image}
                      category={post.category}
                      categories = {category}
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
          </>
        ) : (
          <div style={{ width: "50%", margin: "2rem auto" }}>
            <Dots
              dotColors={["white", "white", "white", "white", "white", "white"]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainScreen;
