import React, { useState } from "react";
import uniqid from "uniqid";
import PreviewEducation from "../cv-preview/PreviewEducation-info";

const Education = (props) => {
    const { schoolName, studyTitle, studyDate, studyEndDate } = props;


    const initialEducationInfo = {
        schoolName: schoolName || "",
        studyTitle: studyTitle || "",
        studyDate: studyDate || "",
        studyEndDate: studyEndDate || "",
        id: uniqid()
    };

    const [education, setEducation] = useState(initialEducationInfo);
    const [Education, setEducationInfo] = useState([]);
    const [modeEducation, setMode] = useState(true)

    const handleChange = (e) => {
        setEducation({
            ...education,
            [e.target.name]: e.target.value
        });
    };

    const addEducationInfo = () => {
        setEducationInfo([...Education, education]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (["schoolName", "studyTitle", "studyDate", "studyEndDate"].filter((input) => education[input] === "").length === 0) {
            setEducation(addEducationInfo);
            setMode(!modeEducation);
            setEducation(initialEducationInfo);
        }else{
            console.log("form empty");
        }
    };

    return modeEducation ? (

        <div>
            <form onSubmit={handleSubmit}>
                <div className="button-container">
                    <button className="button-submit">Preview Education Info</button>
                </div>
                <div className="educational-info">
                    <label>School Name: </label>
                    <input type="text" name="schoolName" value={education.schoolName} onChange={handleChange}></input>
                </div>
                <div className="educational-info">
                    <label>Title of Study: </label>
                    <input type="text" name="studyTitle" value={education.studyTitle} onChange={handleChange}></input>
                </div>
                <div className="educational-info">
                    <label>Date of Study from: </label>
                    <input type="date" name="studyDate" value={education.studyDate} onChange={handleChange}></input>
                </div>
                <div className="educational-info">
                    <label>Date of Study to: </label>
                    <input type="date" name="studyEndDate" value={education.studyEndDate} onChange={handleChange}></input>
                </div>
            </form>
        </div>) : (
        <PreviewEducation education={Education} />
    )

}

export default Education;