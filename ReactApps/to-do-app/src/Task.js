import React from "react";

const Task = (props) => {
  return (
    <div>
      <li>{props.task.name}</li>
      <button
        onClick={() => props.removeTask(props.task.id)}
        style={{ backgroundColor: "red" }}
      >
        X
      </button>
    </div>
  );
};

export default Task;
