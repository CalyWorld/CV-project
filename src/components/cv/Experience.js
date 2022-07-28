import React, { useState } from "react";
import uniqid from "uniqid";
import PreviewExperience from "../cv-preview/PreviewExperience";

const Experience = (props) => {

    const { companyName, position, role, period } = props;

    const initialExperienceInfo = {
        companyName: companyName || "",
        position: position || "",
        role: role || "",
        period: period || "",
        id: uniqid()
    };

    const [experience, setExperience] = useState(initialExperienceInfo);
    const [experienceInfo, setExperienceInfo] = useState([]);
    const [modeExperience, setMode] = useState(true);

    const handleChange = (e) => {
        setExperience({
            ...experience,
            [e.target.name]: e.target.value
        });
    };

    const addExperienceInfo = () => {
        setExperienceInfo([...experienceInfo, experience]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setExperience(addExperienceInfo);
        setMode(!modeExperience);
        setExperience(initialExperienceInfo);
    }

    return modeExperience ? (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="button-container">
                    <button className="button-submit">Preview Experience Info</button>
                </div>
                <div className="experience-info">
                    <label>Company Name: </label>
                    <input type="text" name="companyName" value={experience.companyName} onChange={handleChange}></input>
                </div>
                <div className="experience-info">
                    <label>Position Title: </label>
                    <input text="text" name="position" value={experience.position} onChange={handleChange}></input>
                </div>
                <div className="experience-info">
                    <label>Role: </label>
                    <input type="text" name="role" value={experience.role} onChange={handleChange}></input>
                </div>
                <div className="experience-info">
                    <label>Period of Stay: </label>
                    <input type="number" name="period" value={experience.period} onChange={handleChange}></input>
                </div>
            </form>
        </div>) : (
        <PreviewExperience experienceInfo={experienceInfo} />
    )

}

export default Experience;