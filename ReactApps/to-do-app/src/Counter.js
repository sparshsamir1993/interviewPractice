import React, { Fragment, useState } from "react";

const Counter = () => {
  let [count, updateCount] = useState(0);
  let updateStateCount = () => {
    updateCount(count + 1);
  };
  return (
    <React.Fragment>
      <h1>{count}</h1>
      <button onClick={updateStateCount}>Click to Add</button>
    </React.Fragment>
  );
};

export default Counter;
