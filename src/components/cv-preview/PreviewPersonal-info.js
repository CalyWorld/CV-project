import React, { useState } from "react";
import "../css/index.css";
import Personal from "../cv/Personal";

const Preview = ({ personal }) => {
    const [isEditing, setEditForm] = useState(true);

    const editForm = () => {
        setEditForm(!isEditing);
    };
    return isEditing ? (
        personal.map((personalType) =>
            <div key={personalType.id}>
                <div className="preview-info">
                    <div className="text-info">
                        <label>Name: </label>
                        {personalType.name}
                        <button className="button-edit" type="button" onClick={editForm}>Edit Task</button>

                    </div>
                    <div className="text-info">
                        <label>Email: </label>
                        {personalType.email}
                        <button className="button-edit" type="button" onClick={editForm}>Edit Task</button>
                    </div>
                    <div className="text-info">
                        <label>Phone: </label>
                        {personalType.phone}
                        <button className="button-edit" type="button" onClick={editForm}>Edit Task</button>
                    </div>
                </div>
            </div>
        )) : (
        personal.map((personalType) =>
            <div key={personalType.id}>
                <Personal name={personalType.name} email={personalType.email} phone={personalType.phone} />
            </div>
        )
    )
}
export default Preview;
