import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

const tasks = []

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks
    };
  }

  toggleTaskCompleted = taskID => {
    this.setState({
      tasks: this.state.tasks.map(task =>{
        if (taskID===task.id) {
          return {
            ...task,
            completed: !task.completed
          };
        } 
        return task;
      })
    });
  };

  addNewTask = taskName => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {name: taskName, completed: false, id: Date.now() }
      ]
    });
  };

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => {
        return !task.completed;
      })
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="header">
          <TodoForm addNewTask={this.addNewTask} />
          <h2>Tasks to Complete</h2>
        </div>
          <TodoList 
            toggleTaskCompleted={this.toggleTaskCompleted}
            tasks={this.state.tasks}
            clearCompleted={this.clearCompleted}
          />
        </div>
    );
  }
}

export default App;
