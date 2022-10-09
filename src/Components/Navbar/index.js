import React, { useState } from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = ({ setSearchVal, searchVal }) => {
  const [click, setclick] = useState(false);

  return (
    <>
      <nav className={styles.navbar}>
        <Link className={styles.logo} to="/">
          Prerna Patil
        </Link>
        <ul className={styles.navLinks}>
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className={styles.hamburger}>
            &#9776;
          </label>
          <div className={styles.menu}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category">Categories</Link>
            </li>
            <li>
              <Link to="/messages">Messages</Link>
            </li>
          </div>
        </ul>
        <div className={styles.searchBar}>
          <input
            value={searchVal}
            onChange={(e) => {
              setSearchVal(e.target.value);
            }}
            className={styles.search}
            style={click ? { opacity: 1 } : { opacity: 0 }}
            placeholder="Search here"
            type={"text"}
          />
          {searchVal ? (
            <AiOutlineClose
              className={styles.icon}
              onClick={() => {
                setSearchVal("");
              }}
              size={25}
            />
          ) : (
            <FiSearch
              className={styles.icon}
              onClick={() => setclick(!click)}
              size={25}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
