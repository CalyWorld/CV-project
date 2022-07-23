import React, { Component } from "react";
import Personal from "./components/cv/Personal";
import Education from "./components/cv/Education";
import Experience from "./components/cv/Experience"


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