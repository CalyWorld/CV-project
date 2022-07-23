import React from "react";
import index from "../css/index.css";

const PreviewExperience = (props) => {
    const { ExperienceInfo, handleEditing, editing, setUpdate, handleUpdate } = props;

    let viewMode = {};
    let editMode = {};

    if (editing) {
        viewMode.display = "none";
    } else {
        editMode.display = "none";
    }

    const experienceInfo = ExperienceInfo.map((experience) =>
        <div key={experience.id}>
            <div className="preview-info">
                <p className="text-info">{experience.name}</p>
                <div className="text-button-container">
                    <button className="button-edit" type="button" onClick={handleEditing} style={viewMode}>Edit Text</button>
                </div>
                <input type="text" className={index.textInput} style={editMode} value={experience.name} onChange={(e) => setUpdate(e.target.value, experience.id)} onKeyDown={handleUpdate}></input>
            </div>
        </div>
    );
    return (
        <div>{experienceInfo}</div>
    )
}

export default PreviewExperience;