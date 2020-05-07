import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTaskName: ""
        };
    }

    handleChanges = event => {
        event.preventDefault();
        this.setState({
            newTaskName: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.newTaskName) {
            this.props.addNewTask(this.state.newTaskName);
        }
        this.setState({
            newTaskName:""
        });
    };

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    onChange={this.handleChanges}
                    value={this.state.newTaskName}
                    type="text"
                    name=""
                />
                <button>Add Task</button>
            </form>
        );
    }
}

export default TodoForm