import React from "react";
import PropTypes from "prop-types";
import styles from "./Friendlist.module.css";
import FriendListItem from "./FriendListItem.jsx";

const FriendList = ({ friends }) => (
  <ul className={styles.friend_list}>
    {friends.map(item => (
      <li className={styles.friendlist_item} key={item.id}>
        <FriendListItem {...item} />
      </li>
    ))}
  </ul>
);
FriendList.propTypes = {
  friends: PropTypes.array
};
export default FriendList;
