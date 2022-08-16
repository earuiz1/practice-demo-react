import React from "react";
import "./UserItem.css";

function UserItem(props) {
  return (
      <div className="user-card">
        <div className="user-sections">
          <div className="user-id-section">
            <p>User ID#: {props.id}</p>
          </div>
          <hr></hr>
          <div className="user-username-age-section">
            <p>Username: {props.username}</p>
            <p>Age: {props.age}</p>
          </div>
        </div>
      </div>
  );
}

export default UserItem;
