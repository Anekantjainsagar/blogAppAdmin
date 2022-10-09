import axios from "axios";
import React, { useState } from "react";
import styles from "./style.module.css";
import BASE_URL from "../../Utils/index";

const AddCategory = ({ getCategories }) => {
  const [categoryName, setCategoryName] = useState("");

  const addCategory = () => {
    axios
      .post(`${BASE_URL}/addCategory`, { cat: categoryName })
      .then((res) => {
        if (res.data.Success === true) {
          getCategories();
          setCategoryName("");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className={styles.inputBlock}>
      <input
        type="text"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        className={styles.inputBox}
        placeholder="Enter Category"
      />
      <button
        className={styles.addCategory}
        disabled={categoryName?.length <= 0 ? true : false}
        style={
          categoryName?.length <= 0
            ? { backgroundColor: "grey" }
            : { backgroundColor: "#ff8d55" }
        }
        onClick={() => addCategory()}
      >
        Add Category
      </button>
    </div>
  );
};

export default AddCategory;
