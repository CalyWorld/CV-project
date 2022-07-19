import React, { Component } from "react";
import Personal from "./Components/personal-info";
import Education from "./Components/educational-experience";
import Practical from "./Components/practical-experience";
class App extends Component {

    render() {
        return (
            <div  className="App">
                <Personal />
                <Education />
                <Practical />
            </div>
        )
    }
}

export default App;