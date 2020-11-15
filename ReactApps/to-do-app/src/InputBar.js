import React, { useState } from "react";

const InputBar = (props) => {
  let [name, setName] = useState("");
  console.log(name);
  return (
    <React.Fragment>
      <input
        type="text"
        value={name} //                controlled component as the value is being set by state
        onChange={(e) => setName(e.currentTarget.value)}
      ></input>
      <button
        onClick={() => {
          props.submitTask(name);
          setName("");
        }}
      >
        Submit
      </button>
    </React.Fragment>
  );
};

export default InputBar;
