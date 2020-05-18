import React from "react";

const UserInfo = (user) => {
  return (
    <div className="user__container">
      <div className="user__card">
        <img src={user.img} />
        <div className="user__card--info">
          <h3>{user.name}</h3>
          <p>{user.location}</p>
          <p>{user.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
