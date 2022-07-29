import React, { useState } from "react";
import "../css/index.css";
import Personal from "../cv/Personal";

const Preview = (props) => {
    const { personal } = props;
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
                    </div>
                    <div className="button-container">
                        <button className="button-edit" type="button" onClick={editForm}>Edit Name</button>
                    </div>
                </div>
                <div className="preview-info">
                    <div className="text-info">
                        <label>Email: </label>
                        {personalType.email}
                    </div>
                    <div className="button-container">
                        <button className="button-edit" type="button" onClick={editForm}>Edit Email</button>
                    </div>
                </div>
                <div className="preview-info">
                    <div className="text-info">
                        <label>Phone: </label>
                        {personalType.phone}
                    </div>
                    <div className="button-container">
                        <button className="button-edit" type="button" onClick={editForm}>Edit Phone</button>
                    </div>
                </div>
            </div >
        )) : (
        personal.map((personalType) =>
            <div key={personalType.id}>
                <Personal name={personalType.name} email={personalType.email} phone={personalType.phone} />
            </div>
        )
    )
}
export default Preview;
