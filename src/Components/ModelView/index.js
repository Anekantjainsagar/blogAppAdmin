import axios from "axios";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-modal";
import BASE_URL from "../../Utils";
import styles from "./style.module.css";

const ModalView = ({ setIsOpen, modalIsOpen, updatePostData, getBlogs }) => {
  const { date, title, description, image, id } = updatePostData;
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      width: "40%",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "1rem 2rem",
      borderRadius: "1rem",
      backgroundColor: "#000",
      zIndex: 10,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  };
  function closeModal() {
    setIsOpen(false);
  }
  const [postData, setPostData] = useState({
    title: title,
    description: description,
    image: image,
  });

  const updateOne = (id) => {
    axios
      .put(`${BASE_URL}/updateBlog`, {
        id,
        title: postData.title,
        description: postData.description,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    setTimeout(() => {
      getBlogs();
      setIsOpen(false);
    }, 300);
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      id="modal"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <input
          type="text"
          className={styles.title}
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <AiOutlineClose
          size={25}
          color={"white"}
          style={{ cursor: "pointer" }}
          onClick={() => {
            closeModal();
          }}
        />
      </div>
      <textarea
        type="text"
        className={styles.desc}
        value={postData.description}
        rows={15}
        onChange={(e) =>
          setPostData({ ...postData, description: e.target.value })
        }
      ></textarea>
      <p
        style={{
          fontSize: "1.6rem",
          justifyContent: "flex-end",
          alignSelf: "flex-end",
          color: "white",
        }}
      >
        {new Date(date).toString().slice(4, 21)}
      </p>
      <button className={styles.btn} onClick={() => updateOne(id)}>
        Update Post
      </button>
    </Modal>
  );
};

export default ModalView;
