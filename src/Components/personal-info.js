import React, { Component } from "react";
import uniqid from "uniqid";
import Preview from "./preview";

class Personal extends Component {
    constructor() {
        super()
        this.state = {
            task: {
                name: "",
                email: "",
                phone: "",
                id: uniqid()
            },
            tasks: [],
        };
    }

    handleNameChange = (e) => {
        this.setState({
            task: {
                name: e.target.value,
                id: this.state.task.id
            },
        });
    }


    handleEmailChange = (e) => {
        this.setState({
            task: {
                email: e.target.value,
                id: this.state.task.id
            },
        });
    }


    handlePhoneChange = (e) => {
        this.setState({
            task: {
                phone: e.target.value,
                id: this.state.task.id
            },
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: {
                name: "",
                email: "",
                phone: "",
                id: uniqid()
            },
        });
    }

    render() {
        const { task, tasks } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="button-container">
                        <button>Preview</button>
                    </div>
                    <div className="personal-info">
                        <label>Name: </label>
                        <input type="text" value={task.name} onChange={this.handleNameChange}></input>
                    </div>
                    <div className="personal-info">
                        <label>Email: </label>
                        <input type="text" value={task.email} onChange={this.handleEmailChange}></input>
                    </div>
                    <div className="personal-info">
                        <label>Phone:</label>
                        <input type="tel" value={task.phone} onChange={this.handlePhoneChange}></input>
                    </div>
                </form>
                <Preview tasks={tasks} />
            </div>
        )
    }
}

export default Personal;