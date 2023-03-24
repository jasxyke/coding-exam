import React from "react";
import UserCard from "./UserCard";
import "../../css/Users.css";

const UsersTable = ({ users }) => {
  const userCards = users.map((user) => <UserCard key={user.id} user={user} />);
  return <div className="user-table">{userCards}</div>;
};

export default UsersTable;
