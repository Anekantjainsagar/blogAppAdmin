import axios from "axios";
import React, { useState } from "react";
import BASE_URL from "../../Utils";
import styles from "./style.module.css";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import ModelView from "../ModelView/index";

const Post = ({
  date,
  title,
  description,
  image,
  id,
  getBlogs,
  category,
  categories,
}) => {
  const [displayControls, setDisplayControls] = useState(false);
  const deleteOne = (id) => {
    axios
      .delete(`${BASE_URL}/deleteBlog`, {
        headers: {
          Authorization: "***",
        },
        data: {
          id: id,
        },
      })
      .then((response) => {
        console.log(response);
        getBlogs();
      })
      .catch((err) => {
        console.log(err);
      });
    setDisplayControls(false);
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  const updatePostData = { date, title, description, image, id, category };

  return (
    <>
      <ModelView
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        setIsOpen={setIsOpen}
        getBlogs={getBlogs}
        categories={categories}
        updatePostData={updatePostData}
      />
      <div
        className={styles.post}
        onClick={() => setDisplayControls(!displayControls)}
      >
        <img
          src={
            image?.includes(undefined) === false
              ? `${image}`
              : "https://i.pinimg.com/originals/bc/b3/c5/bcb3c55a0fe768b22696132ea1185bde.jpg"
          }
          alt=""
          className={styles.img}
        />
        <div className={styles.content}>
          <p className={styles.title}>
            {title} {category?.length > 0 ? ": " + category : " "}
          </p>
          <p className={styles.description}>{description.slice(0, 200)}</p>
        </div>
        <div className={styles.date}>
          {new Date(date).toString().slice(4, 21)}
        </div>
      </div>
      <div
        style={
          displayControls
            ? {
                display: "flex",
                justifyContent: "end",
                margin: "0.75rem 0",
              }
            : { display: "none" }
        }
      >
        <AiOutlineEdit
          size={25}
          color="white"
          style={{ cursor: "pointer", marginRight: "1rem" }}
          onClick={() => {
            openModal();
          }}
        />
        <AiFillDelete
          size={25}
          color="white"
          style={{ cursor: "pointer", marginRight: "2rem" }}
          onClick={() => deleteOne(id)}
        />
      </div>
    </>
  );
};

export default Post;
