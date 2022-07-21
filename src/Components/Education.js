import React, { Component } from "react";
import uniqid from "uniqid";
class Education extends Component {
    constructor() {
        super()
        this.state = {
            school: {
                name: "",
                id: uniqid()
            },
            study: {
                title: "",
                id: uniqid()
            },
            studyDate: {
                date: "",
                id: uniqid()
            },
            studyEnd: {
                dateEnd: "",
                id: uniqid()
            },
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
                title: e.target.value,
                id: this.state.study.id
            },
        });
    }
    handleStudyDateChange = (e) => {
        this.setState({
            studyDate: {
                date: e.target.value,
                id: this.state.studyDate.id
            },
        });
    }
    handleStudyDateEndChange = (e) => {
        this.setState({
            studyEnd: {
                dateEnd: e.target.value,
                id: this.state.studyEnd.id
            },
        });
    }

    render() {
        const { school, study, studyDate, studyEnd } = this.state;
        return (
            <div>
                <form>
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
            </div>
        )
    }
}

export default Education;