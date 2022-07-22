import React, { Component } from "react";
import Personal from "./Components/Personal";
import Education from "./Components/Education";
import Experience from "./Components/Experience"


class App extends Component {

    render() {
        return (
            <div  className="App">
                <Personal />
                <Education />
                <Experience />
            </div>
        )
    }
}

export default App;