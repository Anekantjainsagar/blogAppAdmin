import React from "react";
import styles from "./style.module.css";
import Message from "../../Components/Message/index";

const Messages = ({messages}) => {

  return (
    <div className={styles.msgBox}>
      <h1>Messages</h1>
      <div className={styles.head}>
        <p className={styles.name}>Name</p>
        <p className={styles.mail}>Email</p>
        <p className={styles.msg}>Message</p>
      </div>
      <div className={styles.msgsDisplay}>
        {messages?.map(({ name, email, message }, i) => {
          return (
            <Message key={i} name={name} email={email} message={message} />
          );
        })}
      </div>
    </div>
  );
};

export default Messages;
