import React, { useState } from "react";
import "../css/index.css";
import Education from "../cv/Education";

const PreviewEducation = ({ education }) => {

    const [isEditing, setEditForm] = useState(true);

    const editForm = () => {
        setEditForm(!isEditing);
    };
    return isEditing ? (
        education.map((educationType) =>
            <div key={educationType.id}>
                <div className="preview-info">
                    <div className="text-info">
                        <label>School Name: </label>
                        {educationType.schoolName}
                    </div>
                    <div className="button-container">
                        <button className="button-edit" type="button" onClick={editForm}>Edit School Name</button>
                    </div>
                </div>
                <div className="preview-info">
                    <div className="text-info">
                        <label>Course: </label>
                        {educationType.studyTitle}
                    </div>
                    <div className="button-container">
                        <button className="button-edit" type="button" onClick={editForm}>Edit Course</button>
                    </div>
                </div>
                <div className="preview-info">
                    <div className="text-info">
                        <label>Date of Study from: </label>
                        {educationType.studyDate} --- {educationType.studyEndDate}
                    </div>
                    <div className="button-container">
                        <button className="button-edit" type="button" onClick={editForm}>Edit Date</button>
                    </div>
                </div>
            </div>
        )) : (
        education.map((educationType) =>
            <div key={educationType.id}>
                <Education schoolName={educationType.schoolName} studyTitle={educationType.studyTitle} studyDate={educationType.studyDate} studyEndDate={educationType.studyEndDate} />
            </div>
        )
    )
}

export default PreviewEducation