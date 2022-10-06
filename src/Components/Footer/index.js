import React from "react";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <Link to="/" className={styles.heading}>
          Prerna Patil
        </Link>
        <p className={styles.para}>© Copyright ©2022 All rights reserved</p>
        <div>
          <AiOutlineInstagram
            style={{ marginRight: "1rem" }}
            size={25}
            onClick={() =>
              window.open(
                "https://instagram.com/prernapatil101?igshid=YmMyMTA2M2Y="
              )
            }
          />
          <AiFillFacebook
            style={{ marginRight: "1rem" }}
            size={25}
            onClick={() =>
              window.open(
                "https://www.facebook.com/profile.php?id=100007956285039"
              )
            }
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
