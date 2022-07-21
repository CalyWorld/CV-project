import React from "react";

const Preview = (props) =>{
    const {PersonalInfo} = props;

    const listItems = PersonalInfo.map((personalInfo)=>
        <div key={personalInfo.id}>{personalInfo.name}{personalInfo.email}{personalInfo.phone}</div>
    );

    // const listItems2 = Education.map((education)=>
    //     <div key={education.id}>{education.name}{education.title}{education.studyDate}{education.dateEnd}</div>
    // );

    // const listItems3 = Experience.map((experience)=>
    //     <div key={experience.id}>{experience.name}{experience.text}{experience.period}</div>
    // );

    return(
        <ul>{listItems}</ul>
    )
}


export  default Preview;