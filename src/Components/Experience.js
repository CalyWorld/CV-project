import React, { Component } from "react";
import uniqid from "uniqid";
import Preview from "./preview";

class Experience extends Component {
    constructor() {
        super()
        this.state = {
            Company: {
                name: "",
                id: uniqid()
            },
            Position: {
                title: "",
                id: uniqid()
            },
            Role: {
                text: "",
                id: uniqid()
            },
            Period: {
                Number: "",
                id: uniqid()
            },
            task: []
        }
    }

    handleCompanyChange = (e) => {
        this.setState({
            Company: {
                name: e.target.value,
                id: this.state.Company.id
            }
        });
    };

    handlePositionChange = (e) => {
        this.setState({
            Position: {
                title: e.target.value,
                id: this.state.Position.id
            }
        });
    };

    handleRoleChange = (e) => {
        this.setState({
            Role: {
                text: e.target.value,
                id: this.state.Role.id
            }
        });
    };

    handlePeriodChange = (e) => {
        this.setState({
            Period: {
                number: e.target.value,
                id: this.state.Period.id
            }
        });
    };



    render() {
        const { Company, Position, Role, Period, tasks } = this.state;
        return (
            <div>
                <form>
                    <div className="experience-info">
                        <label>Company Name: </label>
                        <input type="text" value={Company.text} onChange={this.handleCompanyChange}></input>
                    </div>
                    <div className="experience-info">
                        <label>Position Title: </label>
                        <input text="text" value={Position.title} onChange={this.handlePositionChange}></input>
                    </div>
                    <div className="experience-info">
                        <label>Role: </label>
                        <input type="text" value={Role.text} onChange={this.handleRoleChange}></input>
                    </div>
                    <div className="experience-info">
                        <label>Period of Stay: </label>
                        <input type="number" value={Period.Number} onChange={this.handlePeriodChange}></input>
                    </div>
                </form>
                <Preview tasks={tasks} />
            </div>
        );
    };
}

export default Experience;