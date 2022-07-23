import React from "react";
import index from "../css/index.css";
const PreviewEducation = (props) => {
    const { EducationInfo, handleEditing, editing, setUpdate, handleUpdate } = props;

    let viewMode = {};
    let editMode = {};

    if (editing) {
        viewMode.display = "none";
    } else {
        editMode.display = "none";
    }

    const educationInfo = EducationInfo.map((educationInfo) =>
        <div key={educationInfo.id}>{educationInfo.name}{educationInfo.title}{educationInfo.date}{educationInfo.dateEnd}
            <button type="button" onClick={handleEditing} style={viewMode}>Edit Education Info</button>
            <input type="text" className={index.textInput} style={editMode} value={educationInfo.name} onChange={(e) => setUpdate(e.target.value, educationInfo.id)} onKeyDown={handleUpdate}></input>
        </div>
    );

    return (
        <div>{educationInfo}</div>
    )
}

export default PreviewEducation