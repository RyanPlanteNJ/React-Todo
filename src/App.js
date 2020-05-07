import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const tasks = []

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>Tasks to Complete</h2>
          <TodoForm addNewTask={this.addNewTask} />
        </div>
          <TodoList />
        
      </div>
    );
  }
}

export default App;
