import { render } from "@testing-library/react";
import React, { Component } from "react";
import List from "./List";
import InputBar from "./InputBar";
import Counter from "./Counter";

let taskList = [
  {
    id: 1,
    name: "task one",
  },
  {
    id: 2,
    name: "task two",
  },
  {
    id: 3,
    name: "task three",
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myTaskList: taskList,
    };
  }
  addTask = (name) => {
    console.log(name);
    this.setState({
      myTaskList: [
        ...this.state.myTaskList,
        {
          id: this.state.myTaskList[this.state.myTaskList.length - 1].id + 1,
          name,
        },
      ],
    });
  };
  shouldComponentUpdate(prevProps, nextState) {
    console.log(this.state, nextState);
    // if(this.state.myTaskList.filter(x=>x.name==))
    return true;
  }
  removeTask = (id) => {
    console.log(id);
    this.setState({
      myTaskList: this.state.myTaskList.filter((x) => x.id != id),
    });
  };
  // let [myTaskList, setTaskList] = useState(taskList);

  render() {
    return (
      <div>
        <InputBar submitTask={this.addTask} />
        <List removeTask={this.removeTask} taskList={this.state.myTaskList} />
        <Counter />
      </div>
    );
  }
}

export default App;
