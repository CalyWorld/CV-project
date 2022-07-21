import React, { Component } from "react";
import uniqid from "uniqid";


class Experience extends Component {
    constructor() {
        super()
        this.state = {
            company: {
                name: "",
                id: uniqid()
            },
            position: {
                title: "",
                id: uniqid()
            },
            role: {
                text: "",
                id: uniqid()
            },
            period: {
                number: "",
                id: uniqid()
            },
        }
    }

    handleCompanyChange = (e) => {
        this.setState({
            company: {
                name: e.target.value,
                id: this.state.company.id
            }
        });
    };

    handlePositionChange = (e) => {
        this.setState({
            position: {
                title: e.target.value,
                id: this.state.position.id
            }
        });
    };

    handleRoleChange = (e) => {
        this.setState({
            role: {
                text: e.target.value,
                id: this.state.role.id
            }
        });
    };

    handlePeriodChange = (e) => {
        this.setState({
            period: {
                number: e.target.value,
                id: this.state.period.id
            }
        });
    };



    render() {
        const { company, position, role, period } = this.state;
        return (
            <div>
                <form>
                    <div className="experience-info">
                        <label>Company Name: </label>
                        <input type="text" value={company.text} onChange={this.handleCompanyChange}></input>
                    </div>
                    <div className="experience-info">
                        <label>Position Title: </label>
                        <input text="text" value={position.title} onChange={this.handlePositionChange}></input>
                    </div>
                    <div className="experience-info">
                        <label>Role: </label>
                        <input type="text" value={role.text} onChange={this.handleRoleChange}></input>
                    </div>
                    <div className="experience-info">
                        <label>Period of Stay: </label>
                        <input type="number" value={period.number} onChange={this.handlePeriodChange}></input>
                    </div>
                </form>
            </div>
        );
    };
}

export default Experience;