import axios from "axios";
import React, { useState } from "react";
import styles from "./style.module.css";
import BASE_URL from "../../Utils/index";

const AddPost = ({ getBlogs }) => {
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    image: "",
  });

  const addBlog = () => {
    axios
      .post(`${BASE_URL}/addBlog`, blog)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    getBlogs();
    setBlog({ title: "", description: "", image: "" });
  };

  return (
    <div className={styles.box}>
      <h1>Add new post</h1>
      <input
        type="file"
        placeholder="Add file"
        className={styles.file}
        value={blog.image}
        onChange={(e) => setBlog({ ...blog, image: e.target.value })}
      />
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        value={blog.title}
        onChange={(e) => setBlog({ ...blog, title: e.target.value })}
      />
      <textarea
        name=""
        id=""
        cols="10"
        placeholder="Description"
        className={styles.textarea}
        rows="10"
        value={blog.description}
        onChange={(e) => setBlog({ ...blog, description: e.target.value })}
      ></textarea>
      <button className={styles.btn} onClick={() => addBlog()}>
        Save Post
      </button>
    </div>
  );
};

export default AddPost;
