import React, { Component } from "react";
import uniqid from "uniqid";
import Preview from "./PreviewPersonal-info";
class Personal extends Component {
    constructor() {
        super()
        this.state = {
            personalName: {
                name: "",
                id: uniqid()
            },
            personalEmail: {
                email: "",
                id: uniqid()
            },
            personalPhone: {
                phone: "",
                id: uniqid()
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
                email: e.target.value,
                id: this.state.personalEmail.id
            }
        });
    }
    handlePhoneChange = (e) => {
        this.setState({
            personalPhone: {
                phone: e.target.value,
                id: this.state.personalPhone.id
            }
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { personalName, personalEmail, personalPhone, PersonalInfo} = this.state;
        this.setState({
            PersonalInfo: PersonalInfo.concat(personalName, personalEmail, personalPhone),
            personalName: {
                name: "",
                id: uniqid()
            },
            personalEmail: {
                email: "",
                id: uniqid()
            },
            personalPhone: {
                phone: "",
                id: uniqid()
            },
            mode: false
        });
    };

    render() {
        const { personalName, personalEmail, personalPhone, PersonalInfo, mode } = this.state;
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
                        <input type="email" value={personalEmail.email} onChange={this.handleEmailChange}></input>
                    </div>
                    <div className="personal-info">
                        <label>Phone:</label>
                        <input type="tel" value={personalPhone.phone} onChange={this.handlePhoneChange}></input>
                    </div>
                </form>
            </div>) : (<Preview PersonalInfo={PersonalInfo} />);
    };
}
export default Personal;