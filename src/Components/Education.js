import React, { Component } from "react";
import uniqid from "uniqid";
// import Preview from "./preview";

class Education extends Component {
    constructor() {
        super()
        this.state = {
            School: {
                name: "",
                id: uniqid()
            },
            Study: {
                title: "",
                id: uniqid()
            },
            StudyDate: {
                date: "",
                id: uniqid()
            },
            StudyEnd:{
                date: "",
                id: uniqid()
            },
            tasks: [],
        };
    }

    handleSchoolChange = (e) =>{
        this.setState = ({
            name: e.target.value,
            id: this.state.School.id
        });
    }
    handleStudyTitleChange = (e) =>{
        this.setState = ({
            title: e.target.value,
            id: this.state.Study.id
        });
    }
    handleStudyDateChange = (e) =>{
        this.setState = ({
            task:{
                date: e.target.value,
                id: this.state.StudyDate.id
            },
        });
    }
    handleStudyDateEndChange = (e) =>{
        this.setState = ({
            task:{
                date: e.target.value,
                id: this.state.StudyEnd.id
            },
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { School, Study, StudyDate, StudyEnd } = this.state;
        this.setState({
            tasks: this.state.tasks.concat(School, Study, StudyDate, StudyEnd),
            School: {
                name: "",
                id: uniqid()
            },
            Study: {
                title: "",
                id: uniqid()
            },
            StudyDate: {
                date: "",
                id: uniqid()
            },
            StudyEnd:{
                date: "",
                id: uniqid()
            },
        });
    };

    render() {
        const {School, Study, StudyDate, StudyEnd} = this.state;
        return (
            <div>
                <form>
                    <div className="educational-info">
                        <label>School Name: </label>
                        <input type="text" value={School.name} onChange={this.handleSchoolChange}></input>
                    </div>
                    <div className="educational-info">
                        <label>Title of Study: </label>
                        <input type="text" value={Study.title} onChange={this.handleStudyTitleChange}></input>
                    </div>
                    <div className="educational-info">
                        <label>Date of Study from: </label>
                        <input type="date" value={StudyDate.date} onChange={this.handleStudyDateChange}></input>
                    </div>
                    <div className="educational-info">
                        <label>Date of Study to: </label>
                        <input type="date" value={StudyEnd.date} onChange={this.handleStudyDateEndChange}></input>
                    </div>
                </form>
                {/* <Preview tasks = {tasks}/> */}
            </div>
        )
    }
}

export default Education;