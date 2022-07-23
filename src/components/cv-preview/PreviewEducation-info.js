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
        <div key={educationInfo.id}>
            <div className="preview-info">
                <p className="text-info">{educationInfo.name}</p>
                <div className="text-button-container">
                    <button className="button-edit" type="button" onClick={handleEditing} style={viewMode}>Edit Text</button>
                </div>
                <input type="text" className={index.textInput} style={editMode} value={educationInfo.name} onChange={(e) => setUpdate(e.target.value, educationInfo.id)} onKeyDown={handleUpdate}></input>
            </div>
        </div>
    );

    return (
        <div>{educationInfo}</div>
    )
}

export default PreviewEducation