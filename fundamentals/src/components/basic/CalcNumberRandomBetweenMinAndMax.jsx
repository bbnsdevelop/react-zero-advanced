import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  const {min, max} = props;
  let result = parseInt(Math.random() * (max - min)) + min;
  
  return (
    <div>
      <span>Number: {result}</span>
    </div>
  );
};
