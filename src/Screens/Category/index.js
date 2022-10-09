import React, { useState } from "react";
import styles from "./style.module.css";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose, AiFillDelete } from "react-icons/ai";
import AddCategory from "../../Components/AddCategory";
import axios from "axios";
import BASE_URL from "../../Utils/index";

const Category = ({
  category,
  categoriesSearch,
  setCategoriesSearch,
  getCategories,
}) => {
  const [click, setClick] = useState(false);

  const deleteCategory = (id) => {
    axios
      .delete(`${BASE_URL}/deleteCategory`, {
        headers: {
          Authorization: "***",
        },
        data: {
          id: id,
        },
      })
      .then((response) => {
        if (response.data.data.deletedCount > 0) {
          getCategories();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div style={{ marginTop: "5.5rem" }}></div>
      <div className={styles.main}>
        <div className={styles.navi}>
          <h1 style={{ opacity: 0 }}>Kuch Bhi likha h </h1>
          <h1>Categories</h1>
          <div className={styles.searchBar}>
            <input
              value={categoriesSearch}
              onChange={(e) => {
                setCategoriesSearch(e.target.value);
              }}
              className={styles.search}
              style={click ? { opacity: 1 } : { opacity: 0 }}
              placeholder="Search here"
              type={"text"}
            />
            {categoriesSearch ? (
              <AiOutlineClose
                className={styles.icon}
                onClick={() => {
                  setCategoriesSearch("");
                }}
                size={25}
                color={"white"}
              />
            ) : (
              <FiSearch
                className={styles.icon}
                onClick={() => setClick(!click)}
                size={25}
                color={"white"}
              />
            )}
          </div>
        </div>
        <AddCategory getCategories={getCategories} />
        <div className={styles.categoryDisplay}>
          {category
            ?.filter((e) => {
              if (categoriesSearch?.length > 0) {
                return e.name
                  .toLowerCase()
                  .includes(categoriesSearch.toLowerCase());
              }
              return e;
            })
            .map((e, i) => {
              return (
                <div className={styles.name} key={i}>
                  <p>{e.name}</p>
                  <AiFillDelete
                    color="white"
                    onClick={() => deleteCategory(e._id)}
                    size={20}
                    className={styles.icon}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Category;
