import React, { Component } from "react";
import uniqid from "uniqid";
import Preview from "./preview";

class Education extends Component {
    constructor() {
        super()
        this.state = {
            task: {
                text: "",
                id: uniqid()
            },
            tasks: [],
        };
    }

    handleChange = (e) =>{
        this.setState = ({
            task:{
                text: e.target.value,
                id: this.state.task.id
            },
        });
    }

    render() {
        const {task, tasks} = this.state;
        return (
            <div>
                <form>
                    <div className="educational-info">
                        <label>School Name: </label>
                        <input type="text" value={task.text} onChange={this.handleChange}></input>
                    </div>
                    <div className="educational-info">
                        <label>Title of Study: </label>
                        <input type="text" value={task.text} onChange={this.handleChange}></input>
                    </div>
                    <div className="educational-info">
                        <label>Date of Study from: </label>
                        <input type="date" value={task.text} onChange={this.handleChange}></input>
                    </div>
                    <div className="educational-info">
                        <label>Date of Study to: </label>
                        <input type="date" value={task.text} onChange={this.handleChange}></input>
                    </div>
                </form>
                <Preview tasks = {tasks}/>
            </div>
        )
    }
}

export default Education;