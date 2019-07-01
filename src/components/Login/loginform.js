import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import DBcalls from "../DBcalls"
import { blockStatement } from "@babel/types";
import "./login.css"

export default class Login extends Component {

    state = {
        email: "",
        password: ""
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleLogin = e => {
        e.preventDefault()
        DBcalls.checkUserLogin(this.state.email).then(res => {
            if (res.length === 0) {
                alert("Not a registered email")
            }
            else {
                if (res[0].password !== this.state.password) {
                    alert("password incorrect")
                }
                else {
                    sessionStorage.setItem("credentials", res[0].id)
                    this.props.loginUser(res[0].id)
                }
            }
        })
    }


    render() {
        return (
            <React.Fragment>
                <div align="center">
                    <Form onSubmit={this.handleLogin}>
                        <div className="login-div">
                            <img id="logo" src={process.env.PUBLIC_URL + "/img/greenhand-logo.jpg"} alt="greenhand-logo" />
                            <FormGroup>
                                <Label className="labels" for="email">Email</Label>
                                <Input style={{ width: "40%" }} type="email" onChange={this.handleFieldChange} id="email"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label className="labels" for="password">Password</Label>
                                <Input style={{ width: "40%" }} type="password" onChange={this.handleFieldChange} id="password"></Input>
                            </FormGroup>
                            <Button style={{ backgroundColor: "#2c5c4c", color: "#ffb2ab", marginRight: 30, display: "inline" }} type="submit" color="primary">Login</Button>
                            <Button align="center" color="secondary" onClick={() => this.props.history.push("/register")}>Register</Button>
                        </div>
                    </Form>
                </div>

            </React.Fragment>
        )
    }
}