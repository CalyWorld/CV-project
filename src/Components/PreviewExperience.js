import React from "react";
import index from "./styles/index.css";

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
        <div key={experience.id}>{experience.name}{experience.title}{experience.text}{experience.number}
            <button type="button" onClick={handleEditing} style={viewMode}>Edit Education Info</button>
            <input type="text" className={index.textInput} style={editMode} value={experience.name} onChange={(e) => setUpdate(e.target.value, experience.id)} onKeyDown={handleUpdate}></input>
        </div>);
    return (
        <div>{experienceInfo}</div>
    )
}

export default PreviewExperience;