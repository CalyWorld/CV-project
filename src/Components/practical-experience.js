import React, { Component } from "react";
import uniqid from "uniqid";
import Preview from "./preview";

class Practical extends Component {
    constructor() {
        super()
        this.state = {
            task: {
                text: "",
                id: uniqid()
            },
            tasks: []
        };
    }

    handleChange = (e) => {
        this.setState({
            task: {
                text: e.target.value,
                id: this.state.task.id
            }
        })
    }



    render() {
        const { task, tasks } = this.state;
        return (
            <div>
                <form>
                    <div className="experience-info">
                        <label>Company Name: </label>
                        <input type="text" value={task.text} onChange={this.handleChange}></input>
                    </div>
                    <div className="experience-info">
                        <label>Position Title: </label>
                        <input text="text" value={task.text} onChange={this.handleChange}></input>
                    </div>
                    <div className="experience-info">
                        <label>Role: </label>
                        <input type="text" value={task.text} onChange={this.handleChange}></input>
                    </div>
                    <div className="experience-info">
                        <label>Period of Stay: </label>
                        <input type="number" value={task.text} onChange={this.handleChange}></input>
                    </div>
                </form>
                <Preview tasks={tasks} />
            </div>
        )
    }
}

export default Practical;