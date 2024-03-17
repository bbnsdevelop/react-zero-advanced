import React from "react";
import If, { Else } from "./If";

const UserInfo = (props) => {
  const user = props.user || {};
  return (
    <div>
      {
        /*
      <If test={user && user.name}>
        Welcome <strong> {user.name} </strong>
      </If>

      <If test={!user || !user.name}>
        Welcome <strong> anonymous </strong>
      </If>
      */
        <If test={user && user.name}>
          Welcome <strong> {user.name} </strong>
          <Else test={!user && !user.name}>
            Welcome <strong> anonymous </strong>
          </Else>
        </If>
      }
    </div>
  );
};

export default UserInfo;
