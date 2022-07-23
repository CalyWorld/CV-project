import React from "react";
import index from "../css/index.css";

const Preview = (props) => {
    const { PersonalInfo, handleEditing, editing, setUpdate, handleUpdate } = props;

    let viewMode = {};
    let editMode = {};

    if (editing) {
        viewMode.display = "none";
    } else {
        editMode.display = "none";
    }

    const personalName = PersonalInfo.map((personalInfo) =>
        <div key={personalInfo.id}>
            <div className="preview-info">
                <p className="text-info">{personalInfo.name}</p>
                <div className="text-button-container">
                <button className="button-edit" type="button" onClick={handleEditing} style={viewMode}>Edit Text</button>
                </div>
                <input type="text" className={index.textInput} style={editMode} value={personalInfo.name} onChange={(e) => setUpdate(e.target.value, personalInfo.id)} onKeyDown={handleUpdate}></input>
            </div>
        </div>
    );


    return (
        <div>{personalName}</div>
    );
}


export default Preview;