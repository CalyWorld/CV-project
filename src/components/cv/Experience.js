import React, { Component } from "react";
import uniqid from "uniqid";
import PreviewExperience from "../cv-preview/PreviewExperience";
class Experience extends Component {
    constructor() {
        super()
        this.state = {
            company: {
                name: "",
                id: uniqid(),
                editing: false
            },
            position: {
                name: "",
                id: uniqid(),
                editing: false
            },
            role: {
                name: "",
                id: uniqid(),
                editing: false
            },
            period: {
                name: "",
                id: uniqid(),
                editing: false
            },
            ExperienceInfo: [],
            mode: true
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
                name: e.target.value,
                id: this.state.position.id
            }
        });
    };

    handleRoleChange = (e) => {
        this.setState({
            role: {
                name: e.target.value,
                id: this.state.role.id
            }
        });
    };

    handlePeriodChange = (e) => {
        this.setState({
            period: {
                name: e.target.value,
                id: this.state.period.id
            }
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { company, position, role, period, ExperienceInfo } = this.state;
        this.setState({
            ExperienceInfo: ExperienceInfo.concat(company, position, role, period),
            company: {
                name: "",
                id: uniqid(),
                editing: false
            },
            position: {
                name: "",
                id: uniqid(),
                editing: false
            },
            role: {
                name: "",
                id: uniqid(),
                editing: false
            },
            period: {
                name: "",
                id: uniqid(),
                editing: false
            },
            mode: false
        })
    }

    handleEditing = () => {
        this.setState({
            editing: true,
        });
    }

    setUpdate = (updatedText, id) => {
        const { ExperienceInfo } = this.state
        this.setState({
            ExperienceInfo: ExperienceInfo.map((experience) => {
                if (experience.id === id) {
                    experience.name = updatedText;
                }
                return experience;
            })
        });
    }

    handleUpdate = (e) => {
        if (e.key === "Enter") {
            this.setState({
                editing: false
            })
        }
    }

    render() {
        const { company, position, role, period, ExperienceInfo, mode, editing } = this.state;
        return mode ? (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="button-container">
                        <button>Preview Experience Info</button>
                    </div>
                    <div className="experience-info">
                        <label>Company Name: </label>
                        <input type="text" value={company.name} onChange={this.handleCompanyChange}></input>
                    </div>
                    <div className="experience-info">
                        <label>Position Title: </label>
                        <input text="text" value={position.name} onChange={this.handlePositionChange}></input>
                    </div>
                    <div className="experience-info">
                        <label>Role: </label>
                        <input type="text" value={role.name} onChange={this.handleRoleChange}></input>
                    </div>
                    <div className="experience-info">
                        <label>Period of Stay: </label>
                        <input type="number" value={period.name} onChange={this.handlePeriodChange}></input>
                    </div>
                </form>
            </div>) : (<PreviewExperience ExperienceInfo={ExperienceInfo} handleEditing={this.handleEditing} editing={editing} setUpdate={this.setUpdate} handleUpdate={this.handleUpdate} />)
    }
}

export default Experience;