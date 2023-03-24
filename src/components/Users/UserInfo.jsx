import React from "react";

const UserInfo = ({ field, value }) => {
  return (
    <div style={{ overflowWrap: "break-word", margin: 0 }}>
      {field}: <strong>{value}</strong>
    </div>
  );
};

export default UserInfo;
