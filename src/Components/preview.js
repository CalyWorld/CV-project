
const Preview = (props) =>{
    const {tasks} = props;

    const listItems = tasks.map((task)=>
        <li key={task.id}>{task.name}</li>
        
    );

    return(
        <ul>{listItems}</ul>
    )
}

export default Preview;