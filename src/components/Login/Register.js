import React, { Component } from "react"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import DBcalls from "../DBcalls"
import "./login.css"

export default class Register extends Component {

    state = {

    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleRegister = (evt) => {
        evt.preventDefault()
        let newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        DBcalls.checkUserLogin(this.state.email).then(res => {
            if (res.length !== 0) {
                alert("Email already registered")
            }
            else {
                DBcalls.postNewUser(newUser).then(res => {
                    sessionStorage.setItem("credentials", res.id)
                    this.props.loginUser(res.id)
                    this.props.history.push("/")
                })
            }
        })
    }


    render() {
        return (
            <React.Fragment>
                <div align="center">
                    <img id="logo" src={process.env.PUBLIC_URL + "/img/greenhand-logo.jpg"} alt="greenhand-logo" />
                    <h2 className="display-3 bottom-line" align="center">Register Account</h2>
                    <Form onSubmit={this.handleRegister}>
                        <div className="login-div">
                            <FormGroup>
                                <Label className="labels" for="username">Your Name</Label>
                                <Input className="inputs" style={{ width: "40%" }} type="username" onChange={this.handleFieldChange} id="username"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label className="labels" for="email">Email</Label>
                                <Input style={{ width: "40%" }} type="email" onChange={this.handleFieldChange} id="email"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label className="labels" for="password">Password</Label>
                                <Input style={{ width: "40%" }} type="password" onChange={this.handleFieldChange} id="password"></Input>
                            </FormGroup>
                            <Button style={{ backgroundColor: "#2c5c4c", color: "#ffb2ab" }}>Register</Button>
                        </div>
                    </Form>
                </div>
            </React.Fragment>
        )
    }
}