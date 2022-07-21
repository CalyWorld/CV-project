import React from "react";
const Preview = (props) =>{
    const {tasks} = props;

    const listItems = tasks.map((personalInfo)=>
        <div key={personalInfo.id}>{personalInfo.name}{personalInfo.email}{personalInfo.phone}</div>
        
    );

    return(
        <ul>{listItems}</ul>
    )
}

export default Preview;