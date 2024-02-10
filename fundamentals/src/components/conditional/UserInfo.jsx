import React from "react";
import ComponentReturnChild from "./ComponentReturnChild";

const UserInfo = (props) => {
  const user = props.user || {};
  return (
    <div>
      <ComponentReturnChild test={user && user.name}>
        Welcome <strong> {user.name} </strong>
      </ComponentReturnChild>
      <ComponentReturnChild test={!user || !user.name}>
        Welcome <strong> anonymous </strong>
      </ComponentReturnChild>
    </div>
  );
};

export default UserInfo;
