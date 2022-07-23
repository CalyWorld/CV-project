import React, { Component } from "react";
import uniqid from "uniqid";
import Preview from "../cv-preview/PreviewPersonal-info";
class Personal extends Component {
    constructor() {
        super()
        this.state = {
            personalName: {
                name: "",
                id: uniqid(),
                editing: false
            },
            personalEmail: {
                name: "",
                id: uniqid(),
                editing: false
            },
            personalPhone: {
                name: "",
                id: uniqid(),
                editing: false
            },
            PersonalInfo: [],
            mode: true
        };
    }


    handleNameChange = (e) => {
        this.setState({
            personalName: {
                name: e.target.value,
                id: this.state.personalName.id
            }
        });
    }

    handleEmailChange = (e) => {
        this.setState({
            personalEmail: {
                name: e.target.value,
                id: this.state.personalEmail.id
            }
        });
    }
    handlePhoneChange = (e) => {
        this.setState({
            personalPhone: {
                name: e.target.value,
                id: this.state.personalPhone.id
            }
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { personalName, personalEmail, personalPhone, PersonalInfo } = this.state;
        this.setState({
            PersonalInfo: PersonalInfo.concat(personalName, personalEmail, personalPhone),
            personalName: {
                name: "",
                id: uniqid(),
                editing: false
            },
            personalEmail: {
                name: "",
                id: uniqid(),
                editing: false
            },
            personalPhone: {
                name: "",
                id: uniqid(),
                editing: false
            },
            mode: false
        });
    };

    handleEditing = () => {
        this.setState({
            editing: true,
        });
    }

    setUpdate = (updatedText, id) => {
        const { PersonalInfo } = this.state
        this.setState({
            personalInfo: PersonalInfo.map((person) => {
                if (person.id === id) {
                    person.name = updatedText;
                }
                return person;
            })
        });
    }

    handleUpdate = (e) => {
        if (e.key === "Enter") {
            this.setState({
                editing: false
            })
        }
    }


    render() {
        const { personalName, personalEmail, personalPhone, PersonalInfo, mode, editing } = this.state;
        return mode ? (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="button-container">
                        <button>Preview Personal Info</button>
                    </div>
                    <div className="personal-info">
                        <label>Name: </label>
                        <input type="text" value={personalName.name} onChange={this.handleNameChange}></input>
                    </div>
                    <div className="personal-info">
                        <label>Email: </label>
                        <input type="email" value={personalEmail.name} onChange={this.handleEmailChange}></input>
                    </div>
                    <div className="personal-info">
                        <label>Phone:</label>
                        <input type="tel" value={personalPhone.name} onChange={this.handlePhoneChange}></input>
                    </div>
                </form>
            </div>) : (<Preview PersonalInfo={PersonalInfo} handleEditing={this.handleEditing} editing={editing} setUpdate={this.setUpdate} handleUpdate={this.handleUpdate} />);
    };
}
export default Personal;