import React from "react";

const UserInfo = (user) => {
  return (
    <div key={user.id}>
      <img src={user.img} />
      <h3>{user.name}</h3>
      <p>{user.location}</p>
      <p>{user.bio}</p>
    </div>
  );
};

export default UserInfo;
