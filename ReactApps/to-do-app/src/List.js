import React from "react";
import Task from "./Task";
const List = (props) => {
  return (
    <ul>
      {props.taskList.map((x) => (
        <Task removeTask={props.removeTask} key={x.id} task={x}></Task>
      ))}
    </ul>
  );
};

export default List;
