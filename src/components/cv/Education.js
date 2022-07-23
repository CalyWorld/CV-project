import React, { Component } from "react";
import uniqid from "uniqid";
import PreviewEducation from "../cv-preview/PreviewEducation-info";
class Education extends Component {
    constructor() {
        super()
        this.state = {
            school: {
                name: "",
                id: uniqid(),
                editing: false
            },
            study: {
                name: "",
                id: uniqid(),
                editing: false
            },
            studyDate: {
                name: "",
                id: uniqid(),
                editing: false
            },
            studyEnd: {
                name: "",
                id: uniqid(),
                editing: false
            },
            EducationInfo: [],
            mode: true
        };
    }

    handleSchoolChange = (e) => {
        this.setState({
            school: {
                name: e.target.value,
                id: this.state.school.id
            },
        });
    }
    handleStudyTitleChange = (e) => {
        this.setState({
            study: {
                name: e.target.value,
                id: this.state.study.id
            },
        });
    }
    handleStudyDateChange = (e) => {
        this.setState({
            studyDate: {
                name: e.target.value,
                id: this.state.studyDate.id
            },
        });
    }
    handleStudyDateEndChange = (e) => {
        this.setState({
            studyEnd: {
                name: e.target.value,
                id: this.state.studyEnd.id
            },
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { school, study, studyDate, studyEnd, EducationInfo } = this.state
        this.setState({
            EducationInfo: EducationInfo.concat(school, study, studyDate, studyEnd),
            school: {
                name: "",
                id: uniqid(),
                editing: false
            },
            study: {
                name: "",
                id: uniqid(),
                editing: false
            },
            studyDate: {
                name: "",
                id: uniqid(),
                editing: false
            },
            studyEnd: {
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
        const { EducationInfo } = this.state
        this.setState({
            EducationInfo: EducationInfo.map((education) => {
                if (education.id === id) {
                    education.name = updatedText;
                }
                return education;
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
        const { school, study, studyDate, studyEnd, EducationInfo, mode, editing } = this.state;
        return mode ? (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="button-container">
                        <button>Preview Education Info</button>
                    </div>
                    <div className="educational-info">
                        <label>School Name: </label>
                        <input type="text" value={school.name} onChange={this.handleSchoolChange}></input>
                    </div>
                    <div className="educational-info">
                        <label>Title of Study: </label>
                        <input type="text" value={study.title} onChange={this.handleStudyTitleChange}></input>
                    </div>
                    <div className="educational-info">
                        <label>Date of Study from: </label>
                        <input type="date" value={studyDate.date} onChange={this.handleStudyDateChange}></input>
                    </div>
                    <div className="educational-info">
                        <label>Date of Study to: </label>
                        <input type="date" value={studyEnd.dateEnd} onChange={this.handleStudyDateEndChange}></input>
                    </div>
                </form>
            </div>) : (<PreviewEducation EducationInfo={EducationInfo} handleEditing={this.handleEditing} editing={editing} setUpdate={this.setUpdate} handleUpdate={this.handleUpdate} />)
    }
}

export default Education;