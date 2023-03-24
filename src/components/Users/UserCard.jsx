import React from "react";
import userPhoto from "../../assets/userphoto.png";
import UserInfo from "./UserInfo";
import "../../css/Users.css";
const UserCard = ({ user }) => {
  const addr = user.address;
  return (
    <div className="card-box shadow">
      <div className="card-img-container">
        <img src={userPhoto} alt="user" className="card-img" />
      </div>
      <div className="card-info">
        <p className="user-name">{user.name}</p>
        <UserInfo field={"Email"} value={user.email} />
        <UserInfo field={"Mobile"} value={user.phone} />
        <UserInfo field={"Company"} value={user.company} />
        <UserInfo
          field={"Address"}
          value={`${addr.street}, ${addr.suite} ${addr.city}, ${addr.zipcode}`}
        />
        <UserInfo field={"Website"} value={user.website} />
        <UserInfo field={"Age"} value={user.age} />
      </div>
    </div>
  );
};

export default UserCard;
