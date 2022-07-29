import React, { useState } from "react";
import Experience from "../cv/Experience";
import "../css/index.css"
const PreviewExperience = (props) => {

    const { experienceInfo } = props;
    const [isEditing, setEditForm] = useState(true);

    const editForm = () => {
        setEditForm(!isEditing);
    };
    return isEditing ? (
        experienceInfo.map((experienceType) =>
            <div key={experienceType.id}>
                <div className="preview-info">
                    <div className="text-info">
                        <label>Company Name: </label>
                        {experienceType.companyName}
                    </div>
                    <div className="button-container">
                        <button className="button-edit" type="button" onClick={editForm}>Edit Company Name</button>
                    </div>
                </div>
                <div className="preview-info">
                    <div className="text-info">
                        <label>Position: </label>
                        {experienceType.position}
                    </div>
                    <div className="button-container">
                        <button className="button-edit" type="button" onClick={editForm}>Edit Position</button>
                    </div>
                </div>
                <div className="preview-info">
                    <div className="text-info">
                        <label>Role: </label>
                        {experienceType.role}
                    </div>
                    <div className="button-container">
                        <button className="button-edit" type="button" onClick={editForm}>Edit Role</button>
                    </div>
                </div>
                <div className="preview-info">
                    <div className="text-info">
                        <label>Period: </label>
                        {experienceType.period} years
                    </div>
                    <div className="button-container">
                        <button className="button-edit" type="button" onClick={editForm}>Edit Period of Stay</button>
                    </div>
                </div>
            </div>
        )) : (
        experienceInfo.map((experienceType) =>
            <div key={experienceType.id}>
                <Experience companyName={experienceType.companyName} position={experienceType.position} role={experienceType.role} period={experienceType.period} />
            </div>
        )
    )
}

export default PreviewExperience;