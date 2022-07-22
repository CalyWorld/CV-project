import React from "react";
import index from "./styles/index.css";

const Preview = (props) => {
    const { PersonalInfo, handleEditing, editing, setUpdate, handleUpdate } = props;

    let viewMode = {};
    let editMode = {};

    if(editing){
        viewMode.display = "none";
    }else{
        editMode.display = "none";
    }

    const personalName = PersonalInfo.map((personalInfo) =>
        <div key={personalInfo.id}>{personalInfo.name}{personalInfo.email}{personalInfo.phone}
        <button type="button" onClick={handleEditing} style={viewMode}>Edit Name</button>
        <input type="text" className={index.textInput} style={editMode} value={personalInfo.name} onChange={(e)=> setUpdate(e.target.value, personalInfo.id)} onKeyDown={handleUpdate}></input>
        </div>
    );


    return (
        <div>{personalName}</div>
    );
}


export default Preview;