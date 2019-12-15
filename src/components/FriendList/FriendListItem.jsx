import React from "react";
import PropTypes from "prop-types";
import styles from "./Friendlist.module.css";

const FriendListItem = ({ name, avatar, isOnline }) => (
  <React.Fragment>
    <span className={isOnline ? styles.status_online : styles.status_offline}>
      {isOnline}
    </span>
    <img className={styles.avatar} src={avatar} alt="" />
    <p className={styles.name}>{name}</p>
  </React.Fragment>
);
FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
export default FriendListItem;
