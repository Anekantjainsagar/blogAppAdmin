import React from "react";
import styles from "./style.module.css";

const Message = ({message,name,email}) => {
  return (
    <div className={styles.head}>
      <p className={styles.name}>{name}</p>
      <p className={styles.mail}>{email}</p>
      <p className={styles.msg}>{message}</p>
    </div>
  );
};

export default Message;
