import axios from "axios";
import React, { useState } from "react";
import styles from "./style.module.css";
import BASE_URL from "../../Utils/index";

const AddPost = ({ getBlogs, category }) => {
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    category: "",
  });
  const [image, setImage] = useState({});

  const addBlog = () => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", blog.title);
    formData.append("description", blog.description);
    formData.append("cat", blog.category);
    console.log(formData);
    axios
      .post(`${BASE_URL}/addBlog`, formData)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    getBlogs();
    setBlog({ title: "", description: "" });
    setImage({});
  };

  return (
    <form encType="multipart/form-data">
      <div className={styles.box}>
        <h1>Add new post</h1>
        <input
          type="file"
          placeholder="Add file"
          className={styles.file}
          onChange={(e) => {
            const obj = e.target?.files[0];
            setImage(obj);
          }}
        />
        <div
          className={styles.input}
          style={{
            border: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <input
            type="text"
            style={{ width: "75%" }}
            placeholder="Title"
            className={styles.input}
            value={blog.title}
            onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          />
          <select
            style={{
              width: "24%",
              outline: "none",
              fontSize: "1.6rem",
              border: "1px solid grey",
              padding: "0.5rem 0.75rem",
              borderRadius: "0.5rem",
              backgroundColor: "transparent",
              color: "white",
            }}
            value={blog.category}
            onChange={(e) => setBlog({ ...blog, category: e.target.value })}
          >
            {category?.map((e) => {
              return (
                <option
                  key={e._id}
                  value={e.name}
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    fontSize: "1.6rem",
                    textTransform: "capitalize",
                  }}
                >
                  {e.name}
                </option>
              );
            })}
          </select>
        </div>
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
        <button
          className={styles.btn}
          onClick={(e) => {
            e.preventDefault();
            addBlog();
          }}
        >
          Save Post
        </button>
      </div>
    </form>
  );
};

export default AddPost;
